# Project Changelog and Reference Log

## Overview
This file tracks all significant changes, configurations, and important information about the Vipps Login project. It serves as a reference to avoid repeating the same suggestions or troubleshooting steps.

## Project Structure
- **LoginVipps**: Original version without the Digdir design system
- **LoginVippsLib**: New version using the Digdir design system

## Environment Information
- **Local Development Server**: http://127.0.0.1:62287/
- **GitHub Repository**: https://github.com/norwegianredcross/VippsLoginLib
- **GitHub Pages URL**: https://norwegianredcross.github.io/VippsLoginLib/ (confirmed working)
- **GitHub Actions**: Configured for automated deployment

## Component Naming History
| Original Name | Current Name | Date Changed | Reason |
|--------------|--------------|--------------|--------|
| FormCard | OktaWidget | March 2025 | Better reflects purpose as alternative login widget |
| LoginCard | HelpCard | March 2025 | Better represents function as help and information card |

## Resolved Issues

### White Screen Issue (March 2025)
- **Problem**: Application displayed a white screen when accessing it
- **Cause**: Related to homepage configuration in package.json and routing issues
- **Solution**: Temporarily commented out the homepage setting in package.json
- **Current Status**: Application accessible at http://127.0.0.1:62287/

### Component Reference Errors (March 2025)
- **Problem**: Persistent error regarding LoginCard/index.ts
- **Solution**: Renamed components and updated all references throughout the codebase
- **Files Updated**:
  - Renamed FormCard.tsx to oktaWidget.tsx
  - Renamed LoginCard.tsx to helpCard.tsx
  - Updated imports in App.tsx
  - Updated component references in all files

## CSS Class Names
- `.login-card`: Used by HelpCard component
- `.okta-widget`: Used by OktaWidget component
- `.help-card`: Container for both components in App.tsx

## Documentation Updates
- **March 27, 2025**: Updated README.md to reflect component renaming
- **March 27, 2025**: Updated CSS comments to match new component names
- **March 27, 2025**: Updated CSS to fix alignment of heading, title container, and main content to match design

## Pending Tasks
- Enhance the OktaWidget component with actual Okta integration
- Further refine responsive behavior using Digdir responsive utilities
- Add TypeScript interfaces for custom components

## Notes for Future Reference
- When making changes to routing or base paths, check both package.json and any router configurations
- Always update both component files and their corresponding index.ts files when renaming
- Remember to restart the development server after making significant changes to see effects
