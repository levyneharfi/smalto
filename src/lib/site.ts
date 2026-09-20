const DEFAULT_SITE_URL = "http://localhost:3000";

function resolveSiteUrl(): URL {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

  try {
    return new URL(configuredUrl);
  } catch {
    return new URL(DEFAULT_SITE_URL);
  }
}

export const siteUrl = resolveSiteUrl();

export const siteConfig = {
  name: "Smalto",
  description:
    "Une vision parisienne de l’élégance masculine, entre précision du geste et liberté d’allure.",
  url: siteUrl,
};
