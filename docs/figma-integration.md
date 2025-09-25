# Figma Integration

This document explains how to work with the [HireKarma Landing Page Figma design](https://www.figma.com/design/H8AeCG3tepMnOCSQd8k4Xg/HireKarma-Landing-Page?node-id=1-2&p=f&t=tYoUTejVgiZBVmF7-0) and integrate it into the Disha Client project.

## 🎨 Design File Overview

The Figma design contains the complete visual specifications for the HireKarma landing page, including:

- **Layout Structure**: Page sections and component hierarchy
- **Color Palette**: Brand colors and semantic color usage
- **Typography**: Font families, sizes, and weights
- **Components**: Reusable UI components and their states
- **Responsive Design**: Mobile, tablet, and desktop layouts
- **Interactive States**: Hover, focus, and active states

## 🔗 Accessing the Design

### Direct Link
[Open Figma Design](https://www.figma.com/design/H8AeCG3tepMnOCSQd8k4Xg/HireKarma-Landing-Page?node-id=1-2&p=f&t=tYoUTejVgiZBVmF7-0)

### Figma Account Requirements
- Free Figma account (no paid plan required)
- Access to view the design file
- Figma desktop app or web browser

## 📐 Extracting Design Specifications

### 1. Colors
1. Select any colored element in Figma
2. Check the **Fill** section in the right panel
3. Copy the hex color value
4. Add to your CSS custom properties or Tailwind config

### 2. Typography
1. Select text elements
2. Check the **Text** section for:
   - Font family
   - Font size
   - Font weight
   - Line height
   - Letter spacing

### 3. Spacing and Layout
1. Use Figma's **Inspect** panel
2. Select elements to see:
   - Padding and margins
   - Width and height
   - Border radius
   - Box shadows

### 4. Components
1. Right-click on components
2. Select **Copy as CSS** or **Copy as SVG**
3. Use the generated code as a starting point

## 🛠️ Development Workflow

### Step 1: Design Analysis
1. Review the complete design file
2. Identify all unique components
3. Note responsive breakpoints
4. Document color and typography usage

### Step 2: Component Extraction
1. Create a component inventory
2. Extract design specifications for each component
3. Note interactive states and animations
4. Document accessibility requirements

### Step 3: Implementation Planning
1. Map Figma components to React components
2. Plan component hierarchy and props
3. Identify shared design tokens
4. Plan responsive implementation

### Step 4: Code Implementation
1. Start with design tokens (colors, typography, spacing)
2. Implement base components first
3. Build complex components using base components
4. Test responsive behavior

## 📱 Responsive Design Implementation

### Breakpoints from Figma
The design typically includes these breakpoints:
- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### Implementation Strategy
```css
/* Mobile First Approach */
.component {
  /* Mobile styles (default) */
}

@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}
```

## 🎯 Component Mapping

### Common Figma Components → React Components

| Figma Component | React Component | Location |
|----------------|-----------------|----------|
| Button | `Button` | `components/ui/Button.tsx` |
| Card | `Card` | `components/ui/Card.tsx` |
| Input | `Input` | `components/ui/Input.tsx` |
| Header | `Header` | `components/layout/Header.tsx` |
| Footer | `Footer` | `components/layout/Footer.tsx` |
| Hero Section | `HeroSection` | `components/sections/HeroSection.tsx` |

## 🔧 Tools and Plugins

### Recommended Figma Plugins
1. **Figma to Code**: Generate CSS/HTML from designs
2. **Design Tokens**: Export design tokens as JSON
3. **Figma to React**: Convert components to React code
4. **Color Palettes**: Extract and organize color schemes

### Browser Extensions
1. **Figma to Code**: Chrome extension for code generation
2. **Design Tokens**: Extract design system tokens
3. **ColorZilla**: Color picker and palette generator

## 📋 Design Review Checklist

### Before Development
- [ ] All design variations are documented
- [ ] Color palette is extracted and documented
- [ ] Typography scale is defined
- [ ] Component states are identified
- [ ] Responsive breakpoints are clear
- [ ] Accessibility requirements are noted

### During Development
- [ ] Components match Figma specifications
- [ ] Colors are consistent with design
- [ ] Typography matches design system
- [ ] Spacing follows design grid
- [ ] Interactive states work correctly
- [ ] Responsive behavior is accurate

### After Implementation
- [ ] Visual regression testing completed
- [ ] Cross-browser compatibility verified
- [ ] Accessibility standards met
- [ ] Performance optimized
- [ ] Design approval obtained

## 🎨 Design System Integration

### CSS Custom Properties
Extract design tokens from Figma and implement as CSS custom properties:

```css
:root {
  /* Colors from Figma */
  --primary-500: #0ea5e9;
  --secondary-500: #64748b;
  
  /* Typography from Figma */
  --font-family-primary: 'Geist Sans', sans-serif;
  --font-size-heading: 2.25rem;
  
  /* Spacing from Figma */
  --space-section: 5rem;
  --space-component: 1.5rem;
}
```

### Tailwind CSS Configuration
Update `tailwind.config.js` with Figma specifications:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0ea5e9',
          // ... other primary colors from Figma
        }
      },
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif'],
      },
      spacing: {
        'section': '5rem',
        'component': '1.5rem',
      }
    }
  }
}
```

## 🚀 Best Practices

### 1. Design Fidelity
- Match pixel-perfect implementation when possible
- Use exact colors, fonts, and spacing from Figma
- Implement all interactive states and animations

### 2. Responsive Implementation
- Test on actual devices, not just browser dev tools
- Ensure touch targets are appropriate for mobile
- Verify text readability across all breakpoints

### 3. Performance
- Optimize images exported from Figma
- Use appropriate image formats (WebP, AVIF)
- Implement lazy loading for below-the-fold content

### 4. Accessibility
- Ensure sufficient color contrast ratios
- Implement proper focus states
- Use semantic HTML elements
- Test with screen readers

## 🔄 Iteration Process

### Design Updates
1. **Notification**: Designer updates Figma file
2. **Review**: Development team reviews changes
3. **Impact Assessment**: Identify affected components
4. **Implementation**: Update code to match new design
5. **Testing**: Verify changes across all breakpoints
6. **Deployment**: Deploy updated implementation

### Feedback Loop
1. **Development Issues**: Report design implementation challenges
2. **Technical Constraints**: Communicate technical limitations
3. **Enhancement Suggestions**: Propose improvements
4. **Collaboration**: Regular sync between design and development

## 📞 Support and Resources

### Figma Resources
- [Figma Learning Hub](https://help.figma.com/hc/en-us)
- [Figma Community](https://www.figma.com/community)
- [Figma Plugins](https://www.figma.com/community/plugins)

### Design System Resources
- [Design System Best Practices](https://designsystemsrepo.com/)
- [Component Library Guidelines](https://bradfrost.com/blog/post/atomic-web-design/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Development Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Component Patterns](https://reactpatterns.com/)
