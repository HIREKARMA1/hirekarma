# Contributing Guidelines

Thank you for your interest in contributing to Disha Client! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions
- **Bug Fixes**: Fix existing issues and bugs
- **Features**: Add new functionality
- **Documentation**: Improve or add documentation
- **Design**: UI/UX improvements based on Figma design
- **Performance**: Optimize code and improve performance
- **Testing**: Add or improve tests

## 🚀 Getting Started

### 1. Fork and Clone
```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/disha-client.git
cd disha-client

# Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/disha-client.git
```

### 2. Create a Branch
```bash
# Create a new branch for your contribution
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 3. Set Up Development Environment
Follow the [Development Setup Guide](./development-setup.md) to set up your local environment.

### 4. Make Your Changes
- Write clean, readable code
- Follow the project's coding standards
- Add tests for new functionality
- Update documentation as needed

### 5. Test Your Changes
```bash
# Run linting
npm run lint

# Run type checking
npx tsc --noEmit

# Run tests
npm run test

# Build the project
npm run build
```

### 6. Commit Your Changes
```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add new feature description"
```

### 7. Push and Create Pull Request
```bash
# Push your branch
git push origin feature/your-feature-name

# Create a pull request on GitHub
```

## 📝 Coding Standards

### Code Style
- Use **TypeScript** for all new code
- Follow **ESLint** rules (configured in the project)
- Use **Prettier** for code formatting
- Write **self-documenting code** with clear variable and function names

### File Naming
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase starting with 'use' (e.g., `useUserData.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase (e.g., `UserTypes.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

### Component Structure
```typescript
// Component imports
import React from 'react';
import { ComponentProps } from './types';

// Type definitions
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

// Component implementation
export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Import Organization
```typescript
// 1. React and Next.js imports
import React from 'react';
import { NextPage } from 'next';

// 2. Third-party library imports
import { clsx } from 'clsx';

// 3. Internal imports (absolute paths)
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/hooks/useAuth';

// 4. Relative imports
import './Component.css';
```

## 🎨 Design Guidelines

### Figma Integration
- Follow the [HireKarma Landing Page Figma design](https://www.figma.com/design/H8AeCG3tepMnOCSQd8k4Xg/HireKarma-Landing-Page?node-id=1-2&p=f&t=tYoUTejVgiZBVmF7-0)
- Use design system tokens from `docs/design-system.md`
- Maintain pixel-perfect implementation when possible
- Test responsive behavior across all breakpoints

### Component Design
- Create reusable, composable components
- Use Tailwind CSS for styling
- Follow the established design system
- Ensure accessibility compliance (WCAG AA)

### Responsive Design
- Mobile-first approach
- Test on multiple screen sizes
- Use appropriate breakpoints
- Ensure touch-friendly interactions

## 🧪 Testing Guidelines

### Test Coverage
- Write tests for all new components
- Test user interactions and edge cases
- Maintain at least 80% code coverage
- Include both unit and integration tests

### Testing Patterns
```typescript
// Component testing example
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 📚 Documentation Standards

### Code Documentation
- Use JSDoc for functions and components
- Include parameter descriptions and return types
- Document complex business logic
- Add inline comments for non-obvious code

### README Updates
- Update README.md for significant changes
- Include setup instructions for new features
- Document new environment variables
- Update the project structure if needed

### Component Documentation
```typescript
/**
 * A reusable button component with multiple variants
 * 
 * @param variant - The visual style variant ('primary' | 'secondary')
 * @param children - The button content
 * @param onClick - Click handler function
 * @param disabled - Whether the button is disabled
 * @param className - Additional CSS classes
 */
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
```

## 🔄 Pull Request Process

### Before Submitting
- [ ] Code follows project coding standards
- [ ] All tests pass
- [ ] Code is properly formatted
- [ ] Documentation is updated
- [ ] No console.log statements in production code
- [ ] TypeScript compiles without errors

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots to help explain your changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

### Review Process
1. **Automated Checks**: CI/CD pipeline runs tests and linting
2. **Code Review**: At least one team member reviews the code
3. **Design Review**: UI changes are reviewed against Figma design
4. **Testing**: Manual testing on different devices/browsers
5. **Approval**: Maintainer approves and merges the PR

## 🐛 Bug Reports

### Before Reporting
- Check existing issues
- Verify the bug exists in the latest version
- Try to reproduce the issue

### Bug Report Template
```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Environment
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Version: [e.g., 1.0.0]

## Screenshots
If applicable, add screenshots

## Additional Context
Any other context about the problem
```

## ✨ Feature Requests

### Before Requesting
- Check if the feature already exists
- Consider if it aligns with project goals
- Think about implementation complexity

### Feature Request Template
```markdown
## Feature Description
Clear description of the feature

## Problem Statement
What problem does this feature solve?

## Proposed Solution
How should this feature work?

## Alternatives Considered
Other solutions you've considered

## Additional Context
Any other context or screenshots
```

## 🏷️ Commit Message Convention

### Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```
feat(auth): add user login functionality
fix(ui): resolve button hover state issue
docs(readme): update installation instructions
style(components): format code with prettier
refactor(api): simplify user data fetching
test(utils): add tests for date formatting
chore(deps): update dependencies
```

## 🚫 What Not to Contribute

### Excluded Contributions
- Code that doesn't follow project standards
- Features that don't align with project goals
- Changes that break existing functionality
- Code without proper tests
- Documentation that's unclear or incorrect

### Security Issues
- Report security vulnerabilities privately
- Don't create public issues for security problems
- Contact maintainers directly for sensitive issues

## 🎯 Contribution Ideas

### Good First Issues
- Fix typos in documentation
- Add missing TypeScript types
- Improve accessibility
- Add unit tests
- Update dependencies

### Advanced Contributions
- Implement new features from Figma design
- Optimize performance
- Add integration tests
- Improve error handling
- Add internationalization support

## 📞 Getting Help

### Resources
- [Development Setup Guide](./development-setup.md)
- [Design System Documentation](./design-system.md)
- [Figma Design File](https://www.figma.com/design/H8AeCG3tepMnOCSQd8k4Xg/HireKarma-Landing-Page?node-id=1-2&p=f&t=tYoUTejVgiZBVmF7-0)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)

### Community
- GitHub Discussions
- Discord/Slack (if available)
- Stack Overflow with project tags

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Disha Client! 🎉
