# GitHub Pages Deployment Setup

## Overview

This project uses GitHub Actions to automatically deploy to GitHub Pages whenever changes are pushed to the main branch.

## Initial GitHub Repository Setup

1. **Create GitHub repository** named `gerbus`
2. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically by the workflow)
   - Folder: `/ (root)`

## Workflow Configuration

The deployment is handled by `.github/workflows/deploy.yml`:

- **Trigger**: Pushes to `main` branch
- **Build process**: 
  - Checks out code
  - Sets up Node.js 20 with yarn caching
  - Installs dependencies with `yarn install --frozen-lockfile`
  - Builds production assets with `yarn build`
- **Deployment**: Uses `peaceiris/actions-gh-pages@v4` to deploy `dist/` folder to `gh-pages` branch
- **Custom domain**: Configured via `cname: wolff.sh` in workflow

## Vite Configuration

The `vite.config.js` sets the base path for GitHub Pages:

```javascript
base: '/gerbus/'
```

This ensures all asset paths are correct when deployed to `https://wolff.sh/gerbus/`

## Custom Domain

The `public/CNAME` file contains `wolff.sh` which tells GitHub Pages to serve the site from this custom domain.

**DNS Configuration Required**: Ensure your DNS provider has:
- A record pointing to GitHub Pages IPs, or
- CNAME record pointing to `<username>.github.io`

## Deployment Process

1. Make changes locally
2. Commit and push to `main` branch
3. GitHub Actions automatically builds and deploys
4. Site available at `https://wolff.sh/gerbus/` within 1-2 minutes

## Local Testing

Before deploying, test locally:
- Development: `yarn dev` (runs on localhost:5173)
- Production preview: `yarn build && yarn preview`

## Troubleshooting

- **404 errors**: Check that `base` in `vite.config.js` matches repository name
- **Workflow fails**: Check Actions tab in GitHub for error logs
- **Custom domain not working**: Verify DNS settings and CNAME file
