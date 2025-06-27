# Movie Vibes

A social media application for movie enthusiasts to discover, share, and discuss their favorite films.

## Development Setup

### Prerequisites

- Node.js 18+
- Yarn 4.0+
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up your environment variables in the backend app
4. Start the development servers:
   ```bash
   yarn dev
   ```

This will start both the frontend (http://localhost:3000) and backend (http://localhost:3001) applications.

### Browser Testing Requirements

For end-to-end testing with Playwright, you may need to install Chrome:

**Ubuntu/Debian:**

```bash
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee /etc/apt/sources.list.d/google-chrome.list
sudo apt update
sudo apt install google-chrome-stable
```

**Other platforms:**

- Download Chrome directly from https://www.google.com/chrome/
- Or use your system's package manager

## Project Structure

This is a monorepo containing:

- `apps/frontend` - React application with Vite
- `apps/backend` - NestJS GraphQL API
- `packages/database` - Prisma database configuration
- `packages/shared` - Shared types and utilities

## Current Status

✅ **Phase 1 Complete**: User authentication system

- User registration and login
- JWT-based authentication
- Protected routes and session management
- Frontend-backend integration tested

🚧 **Phase 2 In Progress**: Core movie features

- Movie search and discovery
- User ratings and reviews
- Movie lists and recommendations
