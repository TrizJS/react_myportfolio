# Deploying Your Portfolio on Netlify

Netlify provides an easy way to deploy React applications with continuous deployment from Git.

## Option 1: Deploy via Netlify Site (Easiest)

### Step 1: Sign up for Netlify
1. Go to [Netlify](https://app.netlify.com/signup) and sign up for a free account
2. You can sign up using your GitHub account for easier integration

### Step 2: Create a new site
1. Click on "New site from Git" button
2. Select GitHub as your Git provider
3. Authorize Netlify to access your GitHub repositories
4. Select your repository: `react_myportfolio`

### Step 3: Configure build settings
- Build command: `npm run build`
- Publish directory: `dist`
- Add any environment variables if needed

### Step 4: Deploy
1. Click "Deploy site"
2. Wait for the build process to complete
3. Your site will be available at a random URL (like https://your-site-name.netlify.app)
4. You can set up a custom domain later in the site settings

## Option 2: Deploy with Netlify CLI

If you prefer using the command line:

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Initialize your site
```bash
cd react_myportfolio
netlify init
```

Follow the prompts to:
- Create a new site
- Set up continuous deployment
- Configure build settings

### Step 4: Deploy manually (optional)
```bash
npm run build
netlify deploy --prod
```

## Important Netlify Configuration

### Create a netlify.toml file
Create a file named `netlify.toml` in the root of your project:

```toml
[build]
  command = "npm run build"
  publish = "dist"

# Handle routing for single-page application
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This configuration handles SPA routing issues, ensuring your routes work correctly.

## Advantages of Netlify

1. **Better SPA Support**: No need to use hash routing or configure base paths
2. **Continuous Deployment**: Automatic builds when you push to GitHub
3. **SSL/HTTPS**: Free SSL certificates automatically
4. **Form Handling**: Built-in form submission processing
5. **Preview Deployments**: Every pull request gets a preview URL