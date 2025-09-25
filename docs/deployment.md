# Deployment Guide

This guide covers how to deploy the Disha Client application to various platforms and environments.

## 🚀 Quick Deploy

### Vercel (Recommended)
The easiest way to deploy your Next.js app is using Vercel:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy with zero configuration

3. **Environment Variables**
   - Add environment variables in Vercel dashboard
   - Redeploy to apply changes

## 🌐 Deployment Platforms

### Vercel
**Best for**: Next.js applications, automatic deployments

#### Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

#### Configuration
Create `vercel.json`:
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

### Netlify
**Best for**: Static sites, JAMstack applications

#### Setup
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

#### Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### AWS Amplify
**Best for**: Full-stack applications, AWS ecosystem

#### Setup
1. Connect GitHub repository to AWS Amplify
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Railway
**Best for**: Full-stack applications, databases

#### Setup
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Deploy
railway up
```

### DigitalOcean App Platform
**Best for**: Scalable applications, managed databases

#### Setup
1. Connect GitHub repository
2. Configure app spec:
   ```yaml
   name: disha-client
   services:
   - name: web
     source_dir: /
     github:
       repo: your-username/disha-client
       branch: main
     run_command: npm start
     environment_slug: node-js
     instance_count: 1
     instance_size_slug: basic-xxs
     http_port: 3000
   ```

## 🔧 Environment Configuration

### Environment Variables

#### Development (.env.local)
```env
# Application
NEXT_PUBLIC_APP_NAME="Disha Client"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"

# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
NEXT_PUBLIC_API_VERSION="v1"

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS="false"
NEXT_PUBLIC_ENABLE_DEBUG="true"
```

#### Production (.env.production)
```env
# Application
NEXT_PUBLIC_APP_NAME="Disha Client"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
NODE_ENV="production"

# API Configuration
NEXT_PUBLIC_API_URL="https://api.your-domain.com"
NEXT_PUBLIC_API_VERSION="v1"

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS="true"
NEXT_PUBLIC_ENABLE_DEBUG="false"

# External Services
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"
NEXT_PUBLIC_SENTRY_DSN="SENTRY_DSN"
```

### Platform-Specific Configuration

#### Vercel
Set environment variables in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add each variable for appropriate environments
- Redeploy to apply changes

#### Netlify
Set environment variables in Netlify dashboard:
- Go to Site Settings → Environment Variables
- Add variables for production and preview
- Redeploy to apply changes

## 🏗️ Build Configuration

### Next.js Configuration
Update `next.config.ts` for production:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static exports if needed
  output: 'export',
  
  // Image optimization
  images: {
    unoptimized: true, // For static exports
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  
  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "deploy": "npm run build && npm run export"
  }
}
```

## 🔒 Security Configuration

### Security Headers
Add security headers in `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
        },
      ],
    },
  ];
}
```

### Environment Security
- Never commit `.env` files
- Use platform-specific secret management
- Rotate API keys regularly
- Use HTTPS in production

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build
npm run analyze

# Check for performance issues
npm run lighthouse
```

### Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Code Splitting
```typescript
// Dynamic imports for code splitting
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

## 🔍 Monitoring and Analytics

### Google Analytics
```typescript
// pages/_app.tsx or app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  );
}
```

### Error Monitoring (Sentry)
```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  debug: false,
});
```

### Performance Monitoring
```typescript
// lib/analytics.ts
export const reportWebVitals = (metric: any) => {
  // Send to analytics service
  console.log(metric);
};
```

## 🚀 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🔄 Deployment Strategies

### Blue-Green Deployment
1. Deploy to staging environment
2. Run tests and validation
3. Switch traffic to new version
4. Monitor for issues
5. Rollback if necessary

### Canary Deployment
1. Deploy to small percentage of users
2. Monitor metrics and errors
3. Gradually increase traffic
4. Full rollout or rollback

### Rolling Deployment
1. Deploy to subset of instances
2. Gradually replace all instances
3. Monitor each step
4. Rollback if issues detected

## 🐛 Troubleshooting

### Common Deployment Issues

#### Build Failures
```bash
# Check build logs
npm run build

# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

#### Environment Variables
- Verify all required variables are set
- Check variable names and values
- Ensure proper environment scope

#### Performance Issues
- Check bundle size
- Optimize images
- Enable compression
- Use CDN for static assets

#### Memory Issues
- Increase memory allocation
- Optimize code
- Use streaming for large data

### Debugging Production Issues
```bash
# Enable debug mode
NODE_ENV=production DEBUG=* npm start

# Check logs
pm2 logs
# or
docker logs container-name
```

## 📈 Scaling

### Horizontal Scaling
- Use load balancers
- Deploy multiple instances
- Use container orchestration (Kubernetes)

### Vertical Scaling
- Increase server resources
- Optimize application code
- Use caching strategies

### Database Scaling
- Read replicas
- Database sharding
- Caching layers (Redis)

## 📚 Additional Resources

### Platform Documentation
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Railway Documentation](https://docs.railway.app/)

### Next.js Deployment
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Static Exports](https://nextjs.org/docs/advanced-features/static-html-export)
- [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
