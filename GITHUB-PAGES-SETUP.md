# GitHub Pages PWA Deployment Guide

## Quick Setup Steps

### 1. Update Repository Configuration
1. Replace `/your-repo-name/` in `vite.config.ts` line 7 with your actual repository name
2. If your repo is `https://github.com/username/my-pwa-app`, use `/my-pwa-app/`

### 2. Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Deploy
1. Push your code to the `main` branch:
```bash
git add .
git commit -m "Setup PWA for GitHub Pages"
git push origin main
```

2. GitHub Actions will automatically build and deploy
3. Check the **Actions** tab to monitor deployment progress

### 4. Access Your PWA
- Your PWA will be available at: `https://username.github.io/repository-name/`
- Wait 5-10 minutes for first deployment

### 5. Test PWA on iOS
1. Open Safari on iPhone/iPad
2. Navigate to your GitHub Pages URL
3. Tap the Share button
4. Select "Add to Home Screen"
5. Your PWA is now installed!

## Troubleshooting
- If assets don't load, double-check the base path in `vite.config.ts`
- Deployment typically takes 2-5 minutes
- Check Actions tab for build errors