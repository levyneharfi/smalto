"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTORS = [
  ".manifesto > *",
  ".section-heading > *",
  ".universe-card",
  ".atelier-story > *",
  ".signatures-introduction",
  ".signature-list > li",
  ".journal-content > *",
  ".services-strip li",
  ".footer-introduction > *",
  ".footer-navigation > section",
  ".catalog-page-intro > *",
  ".category-index-card",
  ".collection-hero-content > *",
  ".catalog-toolbar",
  ".product-card",
  ".product-information > *",
  ".product-suggestions",
  ".commerce-empty > *",
  ".cart-products > *",
  ".cart-summary",
  ".favorites-page > *",
  ".content-hero-inner > *",
  ".editorial-statement > *",
  ".editorial-split > *",
  ".editorial-values article",
  ".craft-introduction > *",
  ".craft-steps li",
  ".journal-header > *",
  ".journal-card",
  ".stores-introduction > *",
  ".stores-placeholder > *",
  ".information-header > *",
  ".information-notice",
  ".information-sections > section",
  ".newsletter-layout > *",
  ".search-header > *",
  ".search-form",
  ".search-state > *",
  ".search-results > *",
].join(",");

const IMAGE_SELECTORS = [
  ".universe-image-frame",
  ".category-index-image",
  ".product-card-image",
  ".editorial-split-image",
  ".journal-card-image",
  ".stores-placeholder-image",
].join(",");

function prepareElements(): HTMLElement[] {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS),
  );

  elements.forEach((element, index) => {
    element.dataset.reveal = "rise";
    element.style.setProperty(
      "--reveal-delay",
      `${Math.min(index % 4, 3) * 70}ms`,
    );
  });

  document
    .querySelectorAll<HTMLElement>(IMAGE_SELECTORS)
    .forEach((element) => {
      element.dataset.reveal = "image";
    });

  return Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );
}

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.dataset.motionReady = "true";

    const elements = prepareElements();

    if (
      reduceMotion ||
      typeof window.IntersectionObserver === "undefined"
    ) {
      elements.forEach((element) => {
        element.dataset.revealVisible = "true";
      });

      return () => {
        delete root.dataset.motionReady;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          element.dataset.revealVisible = "true";
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      delete root.dataset.motionReady;
    };
  }, [pathname]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");

    if (!header) {
      return;
    }

    let frame = 0;

    const updateHeader = () => {
      window.cancelAnimationFrame(frame);

      frame = window.requestAnimationFrame(() => {
        header.dataset.scrolled =
          window.scrollY > 24 ? "true" : "false";
      });
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  return null;
}
