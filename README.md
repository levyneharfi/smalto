# Smalto — Boutique Next.js

Prototype e-commerce premium développé avec Next.js, React et TypeScript.

## Installation

```bash
nvm use
npm ci
npm run dev
```

Le site est ensuite disponible sur http://localhost:3000.

## Vérifications

```bash
npm run check
npm run test:e2e
npm audit
```

## Scripts

- `npm run dev` : développement
- `npm run build` : build de production
- `npm run start` : serveur de production
- `npm run lint` : ESLint
- `npm run typecheck` : TypeScript
- `npm run test` : tests unitaires
- `npm run test:e2e` : tests Playwright desktop et mobile
- `npm run check` : lint, types, tests unitaires et build

## Architecture

- `src/app` : routes et pages Next.js
- `src/components` : composants visuels
- `src/data` : catalogue local
- `src/lib` : logique du panier et des favoris
- `tests/unit` : tests Vitest
- `e2e` : tests Playwright et accessibilité
- `.github/workflows/ci.yml` : intégration continue

## Production

Le projet utilise le mode Next.js standalone et peut être déployé avec le Dockerfile fourni.

```bash
docker build -t smalto .
docker run --rm -p 3000:3000 smalto
```

## Données

Le catalogue est local et le panier ainsi que les favoris sont conservés dans localStorage. Aucun paiement réel ni back-office ne sont inclus.
