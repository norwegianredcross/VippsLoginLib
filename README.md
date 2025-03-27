# Vipps Login Page - Digdir Design System Implementation

## Overview
This project implements a login page for the Norwegian Red Cross using the Digdir design system. The page allows users to log in with Vipps or alternative methods.

## Design System Implementation

### Components Used from Digdir
- `Card`: Used for login cards and form containers
- `Heading`: Used for page and section titles
- `Paragraph`: Used for text content
- `Link`: Used for links and navigation
- `Box`: Used for layout containers
- `Divider`: Used for horizontal dividers

### Custom Components Created
- `PageContainer`: A layout component that provides consistent page structure
- `TopBar`: A header component with logo and navigation
- `ContactInfo`: A component for displaying contact information
- `Badge`: A component for displaying badges (e.g., "New")

### Design Tokens Used
- Colors: Using Digdir color tokens instead of hardcoded hex values
- Spacing: Using Digdir spacing tokens for margins, paddings, and gaps
- Typography: Using Digdir typography tokens for font sizes, weights, and line heights
- Borders: Using Digdir border tokens for border radius and border styles

### What Needed to Be Hardcoded
- Logo: The Red Cross logo needs to be maintained as is
- Some specific layout adjustments: Some specific spacing and alignment needed to be maintained to match the exact design
- Media query breakpoints: Maintained the same breakpoints for responsive design

### Future Improvements
- Implement a custom theme that extends the Digdir theme with Red Cross specific colors and styles
- Create more reusable components for common patterns
- Further refine responsive behavior using Digdir responsive utilities

## Running the Project
```
npm install
npm start
```

The application will be available at http://localhost:3000.
