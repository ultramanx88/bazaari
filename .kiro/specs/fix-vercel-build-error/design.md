# Design Document

## Overview

The build failure is caused by a conflict between Next.js App Router and Pages Router architectures. The application uses App Router (`app/` directory) for the main layout and pages, but has legacy error pages in the `pages/` directory. During static generation, these Pages Router error pages don't have access to the React context established in the App Router layout, causing the styled-jsx context error.

The solution involves migrating to a pure App Router architecture by removing Pages Router error pages and implementing App Router error handling conventions.

## Architecture

### Current Architecture Issues
- Mixed App Router (`app/`) and Pages Router (`pages/`) setup
- Error pages in `pages/404.js` and `pages/500.js` don't have access to App Router context
- Next.js config contains deprecated `appDir: true` option
- Styled-jsx externalization in webpack config may be interfering with SSR

### Target Architecture
- Pure App Router architecture using Next.js 14 conventions
- Error pages implemented as `app/not-found.tsx` and `app/error.tsx`
- Clean Next.js configuration without deprecated options
- Proper styled-jsx handling for SSR

## Components and Interfaces

### Error Page Components

#### Not Found Page (`app/not-found.tsx`)
- **Purpose**: Handle 404 errors in App Router
- **Location**: `app/not-found.tsx`
- **Features**: 
  - Inherits layout from `app/layout.tsx`
  - Consistent styling with the rest of the application
  - Navigation back to home page

#### Error Page (`app/error.tsx`)
- **Purpose**: Handle runtime errors in App Router
- **Location**: `app/error.tsx`
- **Features**:
  - Client component for error boundary functionality
  - Error reset capability
  - Consistent styling with the rest of the application
  - Navigation back to home page

#### Global Error Page (`app/global-error.tsx`)
- **Purpose**: Handle errors in the root layout
- **Location**: `app/global-error.tsx`
- **Features**:
  - Fallback for layout-level errors
  - Minimal HTML structure
  - Recovery options

### Configuration Updates

#### Next.js Configuration
- Remove deprecated `appDir: true` from experimental options
- Simplify webpack configuration
- Remove unnecessary styled-jsx externalization
- Keep essential configurations for standalone output

## Data Models

No new data models are required for this fix. The error pages will use simple React components with inline styling or Tailwind classes.

## Error Handling

### Error Page Hierarchy
1. **404 Errors**: Handled by `app/not-found.tsx`
2. **Runtime Errors**: Handled by `app/error.tsx`
3. **Layout Errors**: Handled by `app/global-error.tsx`

### Error Recovery
- All error pages provide navigation back to home page
- Error boundaries allow users to retry failed operations
- Consistent user experience across all error states

## Testing Strategy

### Build Testing
1. **Local Build Test**: Run `npm run build` locally to verify no context errors
2. **Static Generation Test**: Verify all pages generate successfully
3. **Error Page Access Test**: Test direct access to error pages

### Integration Testing
1. **404 Testing**: Access non-existent routes to trigger not-found page
2. **Error Boundary Testing**: Trigger runtime errors to test error page
3. **Navigation Testing**: Verify error page navigation works correctly

### Deployment Testing
1. **Vercel Build Test**: Verify build completes successfully on Vercel
2. **Production Error Testing**: Test error pages in production environment
3. **Performance Testing**: Ensure error pages load quickly

## Implementation Approach

### Phase 1: Remove Pages Router Error Pages
- Delete `apps/web/pages/404.js`
- Delete `apps/web/pages/500.js`
- This eliminates the source of the context error

### Phase 2: Implement App Router Error Pages
- Create `app/not-found.tsx` for 404 handling
- Create `app/error.tsx` for runtime error handling
- Create `app/global-error.tsx` for layout error handling

### Phase 3: Update Configuration
- Clean up `next.config.js` to remove deprecated options
- Simplify webpack configuration
- Ensure proper SSR handling

### Phase 4: Testing and Validation
- Test local build process
- Verify error page functionality
- Validate Vercel deployment