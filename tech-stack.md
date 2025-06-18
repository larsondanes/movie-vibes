# Movie Vibes - Technology Stack

## Architecture Overview

Movie Vibes is built as a modern full-stack web application using a monorepo architecture for efficient development and deployment.

## Monorepo Structure

- **Package Manager**: Yarn Workspaces
- **Build System**: TypeScript compilation with workspace dependencies
- **Project Structure**:
  ```
  movie-vibes/
  ├── apps/
  │   ├── frontend/          # React application
  │   └── backend/           # NestJS API server
  ├── packages/
  │   ├── shared/            # Shared types and utilities
  │   └── database/          # Prisma schema and migrations
  └── package.json           # Root workspace configuration
  ```

## Frontend Technology Stack

### Core Framework
- **React 18+**: Modern React with hooks and concurrent features
- **TypeScript**: Latest version for type safety and developer experience
- **Vite**: Fast build tool and development server

### UI & Styling
- **CSS-in-JS** or **Tailwind CSS**: For component styling
- **React Router**: Client-side routing
- **Component Library**: Modern UI components (Material-UI, Chakra UI, or custom)

### State Management
- **React Query/TanStack Query**: Server state management and caching
- **Zustand** or **React Context**: Client state management

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Storybook**: Component development and documentation

## Backend Technology Stack

### Core Framework
- **NestJS**: Enterprise-grade Node.js framework
- **TypeScript**: Latest version for full-stack type safety
- **Express**: Underlying HTTP server

### Database & ORM
- **PostgreSQL**: Primary database
- **Prisma**: Modern database toolkit and ORM
- **Prisma Migrate**: Database schema migrations
- **Prisma Client**: Type-safe database client

### API & Communication
- **REST API**: RESTful endpoints with OpenAPI documentation
- **GraphQL** (optional): For complex data fetching
- **WebSocket**: Real-time features (activity feeds, notifications)

### Authentication & Security
- **JWT**: JSON Web Tokens for authentication
- **Passport.js**: Authentication middleware
- **bcrypt**: Password hashing
- **CORS**: Cross-origin resource sharing

### External Integrations
- **TMDb API**: Movie database integration
- **File Upload**: Image storage for profiles and movie posters

## Shared Resources

### Common Packages
- **@movie-vibes/types**: Shared TypeScript types and interfaces
- **@movie-vibes/utils**: Common utility functions
- **@movie-vibes/constants**: Application constants and enums

### Development Tools
- **TypeScript**: Latest version across all packages
- **ESLint**: Consistent linting rules
- **Prettier**: Code formatting standards
- **Husky**: Git hooks for quality checks
- **lint-staged**: Pre-commit linting

## Infrastructure & Deployment

### Development
- **Docker**: Containerized development environment
- **Docker Compose**: Local services orchestration
- **Environment Variables**: Configuration management

### Database
- **PostgreSQL 15+**: Primary database
- **Redis** (optional): Caching and session storage

### Build & CI/CD
- **GitHub Actions**: Continuous integration
- **Yarn Workspaces**: Dependency management
- **TypeScript Project References**: Incremental builds

## Performance Considerations

- **Code Splitting**: Lazy loading of React components
- **Bundle Optimization**: Tree shaking and minification
- **Database Indexing**: Optimized queries with Prisma
- **Caching**: API response caching and client-side caching
- **Image Optimization**: Compressed movie posters and avatars

## Development Workflow

1. **Workspace Setup**: Single `yarn install` for all packages
2. **Type Safety**: Shared types between frontend and backend
3. **Hot Reloading**: Development servers with instant feedback
4. **Database Management**: Prisma Studio for database inspection
5. **Testing**: Unit and integration tests across packages