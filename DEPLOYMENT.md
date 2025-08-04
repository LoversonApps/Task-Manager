# Deployment Guide

## Quick Deploy Options

### 1. Netlify (Recommended for PWAs)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/your-repo)

**Manual Deploy:**
1. Build: `npm run build`
2. Drag `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Custom domain optional

### 2. Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo)

**Manual Deploy:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

### 3. GitHub Pages
1. Enable GitHub Pages in repo settings
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Install: `npm install --save-dev gh-pages`
4. Run: `npm run deploy`

## Testing PWA on iOS
1. Open Safari on iPhone/iPad
2. Navigate to your deployed URL
3. Tap Share button → "Add to Home Screen"
4. App installs as native-like PWA
5. Test offline functionality

## Live Demo URLs
- Netlify: `https://your-app-name.netlify.app`
- Vercel: `https://your-app-name.vercel.app`
- GitHub Pages: `https://username.github.io/repo-name`