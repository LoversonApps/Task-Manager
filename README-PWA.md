# iPhone Process Manager PWA

## Live Testing & Deployment

### PWA Features Added:
- ✅ Service Worker for offline functionality
- ✅ Web App Manifest for installability
- ✅ iOS-specific meta tags for home screen
- ✅ Responsive design for mobile devices
- ✅ Optimized build configuration

### Deployment Options:

#### 1. Netlify (Recommended)
```bash
npm run build
# Upload dist/ folder to Netlify
```

#### 2. Vercel
```bash
npm run build
# Deploy dist/ folder to Vercel
```

#### 3. GitHub Pages
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

### Testing on iOS:
1. Open Safari on iPhone
2. Navigate to your deployed URL
3. Tap Share button → "Add to Home Screen"
4. App will install as PWA with native-like experience

### Features Available in PWA:
- ✅ Light/Dark mode toggle
- ✅ Premium theme system ($0.99 simulation)
- ✅ Custom background uploads
- ✅ Offline functionality
- ✅ Home screen installation
- ⚠️ Mock process data (real iOS processes require native app)

### Next Steps for Native:
- Convert to React Native or Capacitor
- Implement real iOS process monitoring APIs
- Add App Store payment integration
- Submit to Apple App Store