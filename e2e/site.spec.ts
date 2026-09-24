import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.clear());
});

test("la page d'accueil est accessible et navigable", async ({ page }) => {
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("h1")).toBeVisible();

  await page.locator('main a[href="/collections"]').first().click();
  await expect(page).toHaveURL(/\/collections$/);
});

test("le catalogue et ses catégories sont accessibles", async ({ page }) => {
  await page.goto("/collections");

  const categoryLink = page
    .locator('main a[href^="/collections/"]:not([href="/collections"])')
    .first();

  await expect(categoryLink).toBeVisible();
  await categoryLink.click();

  await expect(page).toHaveURL(/\/collections\/[^/]+$/);
  await expect(page.locator("main")).toBeVisible();
});

test("un produit peut être ajouté au panier", async ({ page }) => {
  await page.goto("/produit/costume-solaro-anthracite");

  const size = page.getByRole("button", { name: "48", exact: true });
  if (await size.isVisible()) {
    await size.click();
  }

  await page.getByRole("button", { name: /ajouter au panier/i }).click();

  await expect
    .poll(async () =>
      page.evaluate(() => localStorage.getItem("smalto-commerce-v1")),
    )
    .not.toBeNull();

  await page.goto("/panier");

  await expect(
    page.locator("main").getByText(/costume solaro/i).first(),
  ).toBeVisible();
});

test("la recherche renvoie des résultats", async ({ page }) => {
  await page.goto("/recherche?q=costume");

  await expect(page.locator("main")).toBeVisible();
  await expect(
    page
      .locator("main")
      .getByRole("link", { name: /découvrir costume/i })
      .first(),
  ).toBeVisible();
});

test("les pages principales n'ont pas de violation axe critique", async ({
  page,
}) => {
  for (const route of ["/", "/collections", "/panier"]) {
    await page.goto(route);

    const results = await new AxeBuilder({ page })
      .disableRules(["color-contrast"])
      .analyze();

    const critical = results.violations.filter(
      ({ impact }) => impact === "critical" || impact === "serious",
    );

    expect(critical, `${route}: ${JSON.stringify(critical)}`).toEqual([]);
  }
});
