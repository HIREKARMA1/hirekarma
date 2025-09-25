# Development Setup

This guide will help you set up your development environment for the Disha Client project.

## 📋 Prerequisites

### Required Software
- **Node.js**: Version 18.0 or higher
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **Package Manager**: Choose one of the following:
  - npm (comes with Node.js)
  - yarn: `npm install -g yarn`
  - pnpm: `npm install -g pnpm`
  - bun: `curl -fsSL https://bun.sh/install | bash`

### Recommended Software
- **Git**: Version control
- **VS Code**: Code editor with recommended extensions
- **Figma Desktop App**: For design reference
- **Browser DevTools**: Chrome, Firefox, or Safari

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd disha-client
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3. Start Development Server
```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

### 4. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Environment Setup

### VS Code Configuration

#### Recommended Extensions
Install these VS Code extensions for the best development experience:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-eslint"
  ]
}
```

#### VS Code Settings
Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### Environment Variables

#### 1. Create Environment Files
```bash
# Copy the example file
cp .env.example .env.local

# Or create manually
touch .env.local
```

#### 2. Environment Variables
Add the following to `.env.local`:

```env
# Application
NEXT_PUBLIC_APP_NAME="Disha Client"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
NEXT_PUBLIC_API_VERSION="v1"

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS="false"
NEXT_PUBLIC_ENABLE_DEBUG="true"

# External Services (if needed)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=""
NEXT_PUBLIC_SENTRY_DSN=""
```

#### 3. Environment Types
Create `types/env.d.ts`:

```typescript
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_NAME: string;
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_API_VERSION: string;
    NEXT_PUBLIC_ENABLE_ANALYTICS: string;
    NEXT_PUBLIC_ENABLE_DEBUG: string;
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?: string;
    NEXT_PUBLIC_SENTRY_DSN?: string;
  }
}
```

## 🔧 Development Tools

### Linting and Formatting

#### ESLint Configuration
The project uses ESLint for code quality. Run linting:

```bash
# Check for linting errors
npm run lint

# Fix auto-fixable errors
npm run lint -- --fix
```

#### Prettier Configuration
Create `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### TypeScript Configuration

#### Type Checking
```bash
# Run TypeScript compiler
npx tsc --noEmit

# Watch mode for development
npx tsc --noEmit --watch
```

#### Type Definitions
The project includes type definitions for:
- Next.js
- React
- Node.js
- Custom application types

### Tailwind CSS

#### Configuration
The project uses Tailwind CSS v4. Configuration is in `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
};

export default config;
```

#### CSS Processing
Global styles are in `app/globals.css`:

```css
@import "tailwindcss";

/* Custom CSS variables and global styles */
:root {
  --primary-color: #0ea5e9;
  --secondary-color: #64748b;
}
```

## 🧪 Testing Setup

### Testing Framework
The project is configured for testing with Jest and React Testing Library:

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Configuration
Create `jest.config.js`:

```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
```

## 📱 Browser Testing

### Supported Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Testing Tools
- **Browser DevTools**: Built-in browser developer tools
- **Lighthouse**: Performance and accessibility testing
- **Responsive Design Mode**: Test different screen sizes

### Cross-Browser Testing
```bash
# Install browser testing tools
npm install --save-dev @playwright/test

# Run cross-browser tests
npx playwright test
```

## 🔄 Development Workflow

### Git Workflow
1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write code following project conventions
   - Add tests for new functionality
   - Update documentation if needed

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Quality Checks
Before committing, ensure:
- [ ] Code passes ESLint checks
- [ ] TypeScript compiles without errors
- [ ] Tests pass
- [ ] Code is formatted with Prettier
- [ ] No console.log statements in production code

### Hot Reloading
The development server supports hot reloading:
- **Fast Refresh**: React components update without losing state
- **CSS Hot Reload**: Styles update instantly
- **TypeScript**: Type checking happens in the background

## 🐛 Debugging

### VS Code Debugging
Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

### Debugging Tools
- **React Developer Tools**: Browser extension
- **Next.js DevTools**: Built-in development tools
- **Console Logging**: Use `console.log` for debugging
- **Network Tab**: Monitor API calls and resources

## 📦 Package Management

### Adding Dependencies
```bash
# Production dependencies
npm install package-name

# Development dependencies
npm install --save-dev package-name

# Using other package managers
yarn add package-name
pnpm add package-name
bun add package-name
```

### Updating Dependencies
```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest
```

## 🚀 Performance Optimization

### Development Performance
- Use `npm run dev` for development
- Enable Fast Refresh
- Use browser caching
- Optimize images

### Build Optimization
```bash
# Analyze bundle size
npm run build
npm run analyze

# Check for performance issues
npm run lighthouse
```

## 📚 Additional Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Learning Resources
- [Next.js Learn Course](https://nextjs.org/learn)
- [React Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [React Community](https://react.dev/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/nextjs)

## 🆘 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

#### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Getting Help
- Check the [FAQ](./faq.md)
- Review the [Troubleshooting Guide](./troubleshooting.md)
- Open an issue on GitHub
- Ask in the project Discord/Slack
