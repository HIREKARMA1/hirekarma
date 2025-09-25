# Disha Client

A modern Next.js application built with TypeScript and Tailwind CSS, designed based on the [HireKarma Landing Page Figma design](https://www.figma.com/design/H8AeCG3tepMnOCSQd8k4Xg/HireKarma-Landing-Page?node-id=1-2&p=f&t=tYoUTejVgiZBVmF7-0).

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Styling**: Tailwind CSS for responsive and modern UI design
- **Performance**: Optimized with Next.js App Router and automatic code splitting
- **Developer Experience**: ESLint configuration and TypeScript support
- **Design System**: Based on professional Figma design specifications

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint 9
- **Fonts**: Geist Sans & Geist Mono

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd disha-client
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
disha-client/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable React components
├── contexts/              # React context providers
├── docs/                  # Project documentation
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── services/              # API services and external integrations
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

This project follows the design specifications from the [HireKarma Landing Page Figma design](https://www.figma.com/design/H8AeCG3tepMnOCSQd8k4Xg/HireKarma-Landing-Page?node-id=1-2&p=f&t=tYoUTejVgiZBVmF7-0). The design system includes:

- Color palette and typography
- Component specifications
- Layout guidelines
- Responsive breakpoints
- Interactive states

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

You can also deploy to other platforms like:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📚 Documentation

- [API Documentation](./docs/api.md)
- [Component Library](./docs/components.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guidelines](./docs/contributing.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./docs/contributing.md) for details on how to:

- Set up the development environment
- Submit pull requests
- Report issues
- Follow coding standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Figma Design](https://www.figma.com/design/H8AeCG3tepMnOCSQd8k4Xg/HireKarma-Landing-Page?node-id=1-2&p=f&t=tYoUTejVgiZBVmF7-0)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation in the `docs/` folder
- Review the Figma design for UI/UX guidance
