# Portfolio Design System Style Guide

## Spacing System

We've implemented a consistent spacing system across the entire application to ensure design harmony and responsiveness. All spacing values (margins, paddings, gaps) should use these predefined CSS variables.

### Base Spacing Units

Our spacing system is built on a base of 4px (0.25rem) and follows a consistent scale:

| Variable | Value | Pixel Equivalent |
|----------|-------|-----------------|
| `--space-3xs` | 0.25rem | 4px |
| `--space-2xs` | 0.5rem | 8px |
| `--space-xs` | 0.75rem | 12px |
| `--space-sm` | 1rem | 16px |
| `--space-md` | 1.5rem | 24px |
| `--space-lg` | 2rem | 32px |
| `--space-xl` | 2.5rem | 40px |
| `--space-2xl` | 3rem | 48px |
| `--space-3xl` | 4rem | 64px |
| `--space-4xl` | 5rem | 80px |

### Component-Specific Spacing

For consistent spacing in specific components:

| Variable | Value | Usage |
|----------|-------|-------|
| `--header-padding` | var(--space-md) | Padding for the header component |
| `--section-padding` | var(--space-3xl) 0 | Vertical padding for section elements |
| `--container-padding` | 0 var(--space-lg) | Horizontal padding for containers |
| `--card-padding` | var(--space-md) | Padding inside card elements |
| `--button-padding` | var(--space-xs) var(--space-md) | Padding inside buttons |
| `--input-padding` | var(--space-xs) var(--space-sm) | Padding inside input fields |

### Layout Spacing (Gaps)

For gap spacing in flex and grid layouts:

| Variable | Value | Usage |
|----------|-------|-------|
| `--gap-xs` | var(--space-xs) | Extra small gap between items |
| `--gap-sm` | var(--space-sm) | Small gap between items |
| `--gap-md` | var(--space-md) | Medium gap between items |
| `--gap-lg` | var(--space-lg) | Large gap between items |
| `--gap-xl` | var(--space-xl) | Extra large gap between items |

### Margin Spacing

For margin spacing:

| Variable | Value | Usage |
|----------|-------|-------|
| `--margin-xs` | var(--space-xs) | Extra small margins |
| `--margin-sm` | var(--space-sm) | Small margins |
| `--margin-md` | var(--space-md) | Medium margins |
| `--margin-lg` | var(--space-lg) | Large margins |
| `--margin-xl` | var(--space-xl) | Extra large margins |
| `--margin-2xl` | var(--space-2xl) | 2x extra large margins |
| `--margin-3xl` | var(--space-3xl) | 3x extra large margins |

### Border Radius

For consistent corner rounding:

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | 4px | Small border radius |
| `--radius-md` | 8px | Medium border radius |
| `--radius-lg` | 16px | Large border radius |
| `--radius-full` | 9999px | Circular/pill shape |

## Responsive Design System

Our design system is fully responsive, automatically adjusting spacing variables based on the device's screen size.

### Breakpoints

The following breakpoints are used throughout the application:

| Name | Width Range | Description |
|------|-------------|-------------|
| XS | < 480px | Mobile phones |
| SM | 481px - 768px | Larger phones and small tablets |
| MD | 769px - 992px | Tablets and small laptops |
| LG | 993px - 1200px | Desktops and laptops |
| XL | > 1200px | Large desktops |

### Responsive Spacing

The spacing variables automatically adjust at different breakpoints to ensure optimal layout:

#### Mobile (XS - < 480px)
- Decreased section and component padding
- Smaller gaps between elements
- Reduced margins for compact layouts

```css
@media only screen and (max-width: 480px) {
  :root {
    --section-padding: var(--space-xl) 0;
    --container-padding: 0 var(--space-sm);
    --card-padding: var(--space-sm);
    --header-padding: var(--space-sm);
    
    --gap-md: var(--space-sm);
    --gap-lg: var(--space-md);
    --gap-xl: var(--space-lg);
    
    --margin-lg: var(--space-md);
    --margin-xl: var(--space-lg);
    --margin-2xl: var(--space-xl);
    --margin-3xl: var(--space-2xl);
  }
}
```

#### Tablet (SM - 481px to 768px)
- Moderate padding for better content spacing
- Balanced component spacing for tablet views

#### Desktop (LG & XL - 993px and up)
- Increased section padding for optimal desktop layouts
- Wider container padding for better readability

### Responsive Container

A responsive container class is available that automatically adjusts its max-width based on the viewport:

```css
.container {
  width: 100%;
  padding: var(--container-padding);
  margin: 0 auto;
}

/* Responsive container sizes */
@media only screen and (min-width: 576px) {
  .container { max-width: 540px; }
}

@media only screen and (min-width: 768px) {
  .container { max-width: 720px; }
}

@media only screen and (min-width: 992px) {
  .container { max-width: 960px; }
}

@media only screen and (min-width: 1200px) {
  .container { max-width: 1140px; }
}

@media only screen and (min-width: 1400px) {
  .container { max-width: 1320px; }
}
```

## Usage Guidelines

1. **Always use the variables**: Never use hard-coded pixel or rem values for spacing
2. **Responsive adjustments**: For responsive designs, rely on the automatic adjustments in media queries
3. **Consistency**: For similar components, use the same spacing variables to maintain visual harmony
4. **Hierarchy**: Use larger spacing values to separate distinct sections, and smaller values for related items
5. **Component-specific overrides**: If a component needs specific responsive behavior, add component-specific media queries

### Examples

```css
/* Using spacing variables in CSS */
.card {
  padding: var(--card-padding);
  margin-bottom: var(--margin-md);
  border-radius: var(--radius-md);
}

.button-group {
  display: flex;
  gap: var(--gap-sm);
}

/* Component-specific responsive override */
@media only screen and (max-width: 480px) {
  .hero-section {
    /* Custom spacing for this specific component at mobile size */
    padding: var(--space-lg) 0;
  }
}
```

### Working with Tailwind

When using Tailwind with the spacing system:

```jsx
/* Using spacing variables with Tailwind classes */
<div className="p-[var(--card-padding)] mb-[var(--margin-md)] flex gap-[var(--gap-sm)]">
  Content here
</div>
``` 