# Personal Portfolio Website

## Overview

This is a modern, full-stack personal portfolio website built for Aljhone Agnas, a Materials Engineering student. The application showcases professional experience, academic achievements, projects, and provides a contact form for potential collaborators or employers. The site features a sleek, dark-themed design with smooth animations and responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for consistent theming
- **UI Components**: Comprehensive component library built on Radix UI primitives with shadcn/ui styling
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API endpoints with proper HTTP status codes and error handling
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Development Server**: Custom Vite integration for seamless full-stack development experience

### Design System
- **Component Library**: Custom UI components built on Radix UI with consistent styling patterns
- **Theme**: Dark color scheme with navy, slate, and blue accent colors
- **Typography**: Inter font family for clean, professional appearance
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts

### Data Architecture
- **Schema Validation**: Drizzle-Zod for type-safe database schemas and validation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **API Layer**: Centralized API request handling with error management and authentication support

### Development Tools
- **Code Quality**: TypeScript with strict configuration for type safety
- **Build Process**: Vite for frontend, ESBuild for backend compilation
- **Path Aliases**: Organized imports with @ prefixes for clean code structure

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for modern React development
- **Routing**: Wouter for lightweight single-page application routing
- **State Management**: TanStack React Query for server state and caching

### UI and Styling
- **CSS Framework**: Tailwind CSS with PostCSS and Autoprefixer for styling
- **UI Components**: Extensive Radix UI component collection for accessible, customizable components
- **Icons**: Lucide React for consistent icon library
- **Utilities**: clsx and class-variance-authority for conditional styling

### Backend Infrastructure
- **Server Framework**: Express.js for HTTP server and middleware
- **Development Tools**: tsx for TypeScript execution, ESBuild for production compilation
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not actively used)

### Database and Validation
- **ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- **Validation**: Zod for runtime type validation and schema definition
- **Database Migrations**: Drizzle Kit for database schema management

### Development Experience
- **Build Tools**: Vite with React plugin and Replit-specific development enhancements
- **Type Checking**: TypeScript with comprehensive configuration for strict type safety
- **Development Utilities**: Replit-specific plugins for enhanced development experience

### Production Considerations
- **Database**: Configured for PostgreSQL with Neon serverless database provider
- **Environment**: Environment variable configuration for database URLs and deployment settings
- **Scalability**: Architecture supports easy migration from in-memory to database storage