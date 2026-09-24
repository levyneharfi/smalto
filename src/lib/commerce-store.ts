"use client";

import { useSyncExternalStore } from "react";
import type {
  AddCartItemInput,
  CartItem,
  CommerceState,
} from "@/types/commerce";

const STORAGE_KEY = "smalto-commerce-v1";
const MAX_QUANTITY = 10;
const MAX_FAVORITES = 100;

const emptyState: CommerceState = Object.freeze({
  cart: [],
  favorites: [],
});

let state: CommerceState = emptyState;
let initialized = false;
let storageListenerInstalled = false;

const listeners = new Set<() => void>();

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isSafeText(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length > 0 &&
    value.length <= 120
  );
}

function sanitizeCartItem(value: unknown): CartItem | null {
  if (!isRecord(value)) {
    return null;
  }

  const productSlug = value.productSlug;
  const color = value.color;
  const size = value.size;
  const quantity = value.quantity;

  if (
    !isSafeText(productSlug) ||
    !isSafeText(color) ||
    !isSafeText(size) ||
    typeof quantity !== "number" ||
    !Number.isInteger(quantity)
  ) {
    return null;
  }

  return {
    productSlug,
    color,
    size,
    quantity: Math.min(MAX_QUANTITY, Math.max(1, quantity)),
  };
}

function sanitizeState(value: unknown): CommerceState {
  if (!isRecord(value)) {
    return emptyState;
  }

  const rawCart = Array.isArray(value.cart) ? value.cart : [];
  const rawFavorites = Array.isArray(value.favorites)
    ? value.favorites
    : [];

  const cart = rawCart
    .map(sanitizeCartItem)
    .filter((item): item is CartItem => item !== null)
    .slice(0, 100);

  const favorites = Array.from(
    new Set(rawFavorites.filter(isSafeText)),
  ).slice(0, MAX_FAVORITES);

  return {
    cart,
    favorites,
  };
}

function readStorage(): CommerceState {
  if (typeof window === "undefined") {
    return emptyState;
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return emptyState;
    }

    return sanitizeState(JSON.parse(storedValue));
  } catch {
    return emptyState;
  }
}

function notify(): void {
  listeners.forEach((listener) => listener());
}

function writeState(nextState: CommerceState): void {
  state = nextState;

  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // L'interface continue de fonctionner si le stockage est indisponible.
    }
  }

  notify();
}

function initialize(): void {
  if (initialized || typeof window === "undefined") {
    return;
  }

  state = readStorage();
  initialized = true;

  if (!storageListenerInstalled) {
    window.addEventListener("storage", (event) => {
      if (event.key !== STORAGE_KEY) {
        return;
      }

      state = event.newValue
        ? sanitizeState(safeParse(event.newValue))
        : emptyState;

      notify();
    });

    storageListenerInstalled = true;
  }
}

function safeParse(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function subscribe(listener: () => void): () => void {
  const requiresInitialNotification = !initialized;

  listeners.add(listener);
  initialize();

  if (requiresInitialNotification) {
    listener();
  }

  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): CommerceState {
  return state;
}

function getServerSnapshot(): CommerceState {
  return emptyState;
}

export function useCommerceStore(): CommerceState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function addCartItem(input: AddCartItemInput): void {
  initialize();

  const matchingIndex = state.cart.findIndex(
    (item) =>
      item.productSlug === input.productSlug &&
      item.color === input.color &&
      item.size === input.size,
  );

  if (matchingIndex >= 0) {
    const cart = state.cart.map((item, index) =>
      index === matchingIndex
        ? {
            ...item,
            quantity: Math.min(MAX_QUANTITY, item.quantity + 1),
          }
        : item,
    );

    writeState({
      ...state,
      cart,
    });

    return;
  }

  writeState({
    ...state,
    cart: [
      ...state.cart,
      {
        ...input,
        quantity: 1,
      },
    ],
  });
}

export function updateCartQuantity(
  productSlug: string,
  color: string,
  size: string,
  quantity: number,
): void {
  initialize();

  if (!Number.isInteger(quantity)) {
    return;
  }

  if (quantity <= 0) {
    removeCartItem(productSlug, color, size);
    return;
  }

  const safeQuantity = Math.min(MAX_QUANTITY, quantity);

  writeState({
    ...state,
    cart: state.cart.map((item) =>
      item.productSlug === productSlug &&
      item.color === color &&
      item.size === size
        ? { ...item, quantity: safeQuantity }
        : item,
    ),
  });
}

export function removeCartItem(
  productSlug: string,
  color: string,
  size: string,
): void {
  initialize();

  writeState({
    ...state,
    cart: state.cart.filter(
      (item) =>
        !(
          item.productSlug === productSlug &&
          item.color === color &&
          item.size === size
        ),
    ),
  });
}

export function toggleFavorite(productSlug: string): void {
  initialize();

  const isFavorite = state.favorites.includes(productSlug);

  writeState({
    ...state,
    favorites: isFavorite
      ? state.favorites.filter((slug) => slug !== productSlug)
      : [...state.favorites, productSlug].slice(0, MAX_FAVORITES),
  });
}

export function getCartQuantity(stateValue: CommerceState): number {
  return stateValue.cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );
}
