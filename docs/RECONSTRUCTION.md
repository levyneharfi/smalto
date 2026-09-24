# Reconstruction et déploiement

## Prérequis

- Node.js 24
- npm
- Git
- Chromium et ses dépendances pour les tests E2E

## Reconstruction locale

```bash
git clone https://github.com/levyneharfi/smalto.git
cd smalto
nvm use
npm ci
npx playwright install --with-deps chromium
npm run check
npm run test:e2e
npm run dev
```

## Déploiement Docker

```bash
docker build -t smalto .
docker run --rm -p 3000:3000 smalto
```

## Intégration continue

À chaque push ou pull request vers main, GitHub Actions vérifie ESLint, TypeScript, les tests unitaires, le build, la sécurité et les tests E2E.

## État persistant

Le panier et les favoris utilisent la clé localStorage `smalto-commerce-v1`. Pour réinitialiser la boutique, supprimer cette clé dans les outils du navigateur.
