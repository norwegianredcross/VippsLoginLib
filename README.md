# Vipps Login Page - Red Cross Design System Implementation

## Overview
This project implements a login page for the Norwegian Red Cross using the Red Cross Design System, which extends the Digdir design system. The page allows users to log in with Vipps or alternative methods.

## Design System Implementation

### Components Used
- From Digdir Design System:
  - `Card`: Used for login cards and form containers
  - `Heading`: Used for page and section titles
  - `Paragraph`: Used for text content
  - `Link`: Used for links and navigation
  - `Box`: Used for layout containers
  - `Divider`: Used for horizontal dividers
- From Red Cross Design System:
  - `Theme`: Provides Red Cross specific colors and styling

### Custom Components Created
- `PageContainer`: A layout component that provides consistent page structure using Red Cross design tokens
- `Header`: A header component with logo and navigation
- `Footer`: A footer component with contact information
- `HelpCard`: A component displaying information about Vipps login options and help resources
- `OktaWidget`: A component for alternative login methods (Okta)
- `Badge`: A component for displaying badges (e.g., "New") using Red Cross colors
- `ContactInfo`: A component for displaying contact information

### Design Tokens Used
- Colors: Using Red Cross color tokens (e.g., --ds-color-primary-background-tinted)
- Spacing: Using Digdir spacing tokens for margins, paddings, and gaps
- Typography: Using Digdir typography tokens for font sizes, weights, and line heights
- Borders: Using Digdir border tokens for border radius and border styles

### Implementation Details
- Theme imported directly from Red Cross Design System package
- Custom components styled using Red Cross design tokens
- Minimal hardcoded values - most styling comes from design tokens

### Recent Updates
- **Component Renaming (March 2025)**:
  - Renamed `FormCard` component to `OktaWidget` to better reflect its purpose as an alternative login widget
  - Renamed `LoginCard` component to `HelpCard` to better represent its function as a help and information card
  - Updated all imports and references throughout the codebase

### Future Improvements
- Create more reusable components for common patterns
- Further refine responsive behavior using Digdir responsive utilities
- Add TypeScript interfaces for custom components
- Enhance the OktaWidget component with actual Okta integration

## Running the Project
```
npm install
npm start
```

The application is  available at https://norwegianredcross.github.io/VippsLoginLib/
