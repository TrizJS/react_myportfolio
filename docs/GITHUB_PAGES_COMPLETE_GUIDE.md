# Ultimate GitHub Pages Deployment Guide for React Projects

## Problem: GitHub Pages Only Shows README

This is a very common issue when deploying React applications to GitHub Pages. Here's a comprehensive solution to fix it:

## Solution: Follow These Steps Exactly

### Step 1: Clone your repository locally 

```bash
git clone https://github.com/TrizJS/react_myportfolio.git
cd react_myportfolio
```

### Step 2: Install necessary packages

```bash
npm install
npm install --save-dev gh-pages
```

### Step 3: Update package.json

Add these lines to your package.json:

```json
"homepage": "https://trizjs.github.io/react_myportfolio",
"scripts": {
  // Keep your existing scripts
  "predeploy": "npm run build && touch dist/.nojekyll",
  "deploy": "gh-pages -d dist"
}
```

### Step 4: Update vite.config.ts

Add the base path to vite.config.ts:

```typescript
// Inside defineConfig
base: '/react_myportfolio/',
```

### Step 5: Update your router in App.tsx

Since you're using wouter for routing, update your App.tsx to use the correct base:

```typescript
import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
// other imports...

// Create a base for GitHub Pages
const base = '/react_myportfolio';

// Custom hook to use with Wouter for GitHub Pages deployments
const useHashLocation = () => {
  const [location, setLocation] = useLocation();
  const basename = base;
  
  return [
    // For the location, remove the basename from the start if it's there
    location.startsWith(basename) ? location.slice(basename.length) : location,
    // For the setter, add the basename before setting
    (to: string) => setLocation(basename + to)
  ] as const;
};

// Router function...

function App() {
  const [location] = useLocation();
  
  return (
    <WouterRouter hook={useHashLocation}>
      {/* Rest of your app */}
    </WouterRouter>
  );
}
```

### Step 6: Build and Deploy

Run the deployment command:

```bash
npm run deploy
```

This will:
1. Build your project
2. Create a `.nojekyll` file in the dist folder
3. Push the build to the gh-pages branch

### Step 7: Configure GitHub Pages Settings

1. Go to your GitHub repository: https://github.com/TrizJS/react_myportfolio
2. Click on "Settings"
3. In the left sidebar, click on "Pages"
4. Under "Source", select "Deploy from a branch"
5. Select the "gh-pages" branch and the "/ (root)" folder
6. Click "Save"

## Alternative Method: Direct Upload

If you're having trouble with git commands, try this alternative:

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Create a `.nojekyll` file in the dist folder:
   ```bash
   touch dist/.nojekyll
   ```

3. Go to your GitHub repo in your browser
4. Create a new branch called "gh-pages"
5. Upload all the files from your dist folder
6. Configure GitHub Pages settings to use this branch

## THE MOST IMPORTANT STEP: Add .nojekyll

Make absolutely sure that you have a `.nojekyll` file at the root of your gh-pages branch. This is the #1 reason GitHub Pages shows only the README instead of your site.

## Common Issues and Solutions

### Blank Page or Only README Shows

1. **Missing .nojekyll file**: Create an empty file named `.nojekyll` in the root of your gh-pages branch
2. **Incorrect base path**: Make sure the base path in vite.config.ts matches your repository name exactly
3. **Router issues**: Ensure your router is configured to handle the base path

### 404 Errors for JavaScript/CSS Files

1. Check that your assets use relative paths
2. Verify that the build process completed successfully
3. Make sure all necessary files were uploaded to the gh-pages branch

### Routing Issues (Page Not Found on Refresh)

1. For wouter/React Router, consider using a hash router approach
2. Add a 404.html file that redirects to index.html

## Final Check

After deploying, your site should be available at:
https://trizjs.github.io/react_myportfolio/

Remember to wait a few minutes after configuring GitHub Pages settings, as changes can take time to propagate.