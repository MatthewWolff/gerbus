# Build and Deployment Guidelines

## Package Manager Standards
- **Use Yarn** as the primary package manager
- Always include `yarn.lock` in version control
- Remove `package-lock.json` when switching from npm to yarn
- Update all documentation to reflect yarn usage

## Build Tool Configuration
- **Use Vite** for modern React applications instead of Create React App
- Configure `vite.config.js` with proper base path for deployment
- Set `base: '/project-name/'` for GitHub Pages deployment
- Use `dist/` directory as build output (Vite default)

## GitHub Pages Deployment Setup

### Required Files
1. **vite.config.js**: Configure base path
2. **package.json**: Set homepage URL and deploy scripts
3. **public/CNAME**: Custom domain configuration
4. **.github/workflows/deploy.yml**: GitHub Actions workflow

### Package.json Configuration
```json
{
  "homepage": "https://wolff.sh/project-name",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d dist"
  }
}
```

### GitHub Actions Workflow
- Use `yarn install --frozen-lockfile` for dependency installation
- Set `cache: 'yarn'` in setup-node action
- Use `yarn build` for building
- Deploy to `./dist` directory
- Include `cname: wolff.sh` for custom domain

### Manual Deployment
- Use `yarn deploy` for manual deployments
- Automatic deployment triggers on push to `main` branch
- Both manual and automatic deployment should work simultaneously

## Metadata and SEO
- Include comprehensive meta tags in index.html
- Add Open Graph and Twitter card metadata
- Use project-relevant images as thumbnails and favicons
- Convert images to appropriate formats (JPG for photos, PNG for graphics)
- Remove build timestamps and unnecessary comments from production builds

## Dependency Management
- Remove unused dependencies regularly (especially ESLint if not configured)
- Clean up unused files (IDE directories, temporary files, unused images)
- Verify all imports are necessary and used
- Keep dependencies minimal and focused on project needs
