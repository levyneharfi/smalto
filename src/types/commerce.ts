export type CartItem = {
  productSlug: string;
  color: string;
  size: string;
  quantity: number;
};

export type CommerceState = {
  cart: CartItem[];
  favorites: string[];
};

export type AddCartItemInput = {
  productSlug: string;
  color: string;
  size: string;
};
