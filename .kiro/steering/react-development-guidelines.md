# React Development Guidelines

## Project Structure Best Practices

### Component Organization
- Use atomic design principles: organize components by functionality and reusability
- Each component should have a single, clear responsibility
- Create index.ts files for clean imports: `export { default } from './ComponentName'`
- Separate components into their own directories under `src/components/`
- Use pages directory for page-level components under `src/pages/`

### File Structure
```
src/
├── components/           # Reusable UI components
│   ├── ComponentName/
│   │   ├── ComponentName.tsx
│   │   └── index.ts
├── pages/               # Page-level components
├── utils/               # Utility functions
├── constants/           # Application constants
├── types/               # TypeScript type definitions
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

### TypeScript Best Practices
- Use proper interfaces for all component props
- Maintain full type coverage throughout the application
- Use PascalCase for components, camelCase for functions and variables
- Define types in separate files when shared across components

### State Management
- Use modern functional components with React hooks
- Prefer useState and useCallback for local state management
- Implement proper cleanup and dependency management with useEffect
- Avoid infinite loops by carefully managing useEffect dependencies

### Performance Optimizations
- Use React.memo to prevent unnecessary re-renders when appropriate
- Implement useCallback for memoized functions to prevent recreation
- Consider lazy loading for efficient component loading strategies
- Optimize bundle size by removing unused dependencies and imports

## Code Quality Standards
- Follow consistent naming conventions (React community standards)
- Implement graceful error handling throughout the application
- Use clean imports with proper path resolution
- Remove unused files, imports, and dependencies regularly
- Maintain DRY (Don't Repeat Yourself) principles with modular design
