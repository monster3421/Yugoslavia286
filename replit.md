# YUG 286 SLAVIA - Luxury Real Estate Project

## Overview

This is a luxury real estate marketing website for YUG 286 SLAVIA, a premium condominium development in Puerto Vallarta. The application serves as a bilingual (English/Spanish) showcase website featuring property amenities, unit details, location information, and a contact form for potential buyers. The site is built as a modern single-page application with a React frontend and Express backend, designed to capture and manage leads from interested prospects.

## Recent Changes (August 2025)

### Latest Updates - Performance Optimization (August 21, 2025)
- **Complete Performance Overhaul**: Comprehensive optimization for PC and mobile
- **WebP Image Compression**: All 99 images converted to WebP (40-94% file size reduction)
- **Video Optimization**: Hero video with metadata preloading, poster image, GPU acceleration  
- **Image Optimization**: Lazy loading, content visibility API, intersection observer
- **CSS Performance**: Hardware acceleration, content containment, optimized animations
- **Bundle Optimization**: Code splitting, compressed assets, terser minification
- **Memory Management**: Efficient resource cleanup and garbage collection
- **Mobile-First**: Optimized image sizes and GPU-accelerated animations

### Previous Updates - Floor Plan Gallery Optimization 
- **Complete Multilingual Support**: All 9 floor plans with full English/Spanish translations
- **Streamlined Interface**: Removed individual request buttons, single main button only
- **Clean Layout**: Floor plan model names integrated into cards
- **Ready for HostGator**: Prepared for static hosting deployment

### Current Status
- **Deployed**: Live at https://yugoslaviacondos286.replit.app
- **Performance**: Fully optimized for fast loading on PC and mobile
- **Video**: Compressed 720p with GPU acceleration and metadata preloading
- **Images**: Lazy loading with intersection observer and content visibility API
- **Bundle**: Code-split with terser minification and efficient chunking
- **Multilingual**: Complete English/Spanish support for all content
- **HostGator Ready**: Optimized static build for fast hosting deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **Internationalization**: React i18next for bilingual support (English/Spanish)
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API
- **Language**: TypeScript throughout for full-stack type safety
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Express sessions configured for user tracking
- **API Design**: RESTful endpoints for contact form submission and data retrieval

### Data Storage Solutions
- **Current**: In-memory storage using Map data structures for development
- **Database Schema**: Defined using Drizzle ORM with PostgreSQL schema
- **Migration Ready**: Drizzle configuration set up for future database deployment
- **Data Models**: User and Contact entities with proper type definitions

### Component Architecture
- **UI Components**: Modular shadcn/ui components with consistent styling
- **Layout**: Section-based architecture (Hero, Amenities, Units, Location)
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities
- **Animations**: CSS-based animations for enhanced user experience

### Development Workflow
- **Hot Reload**: Vite development server with HMR for rapid iteration
- **Type Checking**: Full TypeScript coverage across frontend and backend
- **Code Organization**: Shared schema between client and server for consistency
- **Asset Management**: Static asset serving with proper routing

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database adapter for Neon cloud
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **drizzle-zod**: Schema validation integration between Drizzle and Zod

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Modern icon library

### Form and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Runtime type validation and schema parsing

### State Management and Networking
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Minimalist routing library

### Internationalization
- **react-i18next**: React integration for i18next internationalization
- **i18next**: Internationalization framework

### Development Tools
- **vite**: Next-generation frontend build tool
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **tsx**: TypeScript execution engine for Node.js

### Session and Storage
- **connect-pg-simple**: PostgreSQL session store for Express
- **express-session**: Session middleware for Express

### Utilities
- **date-fns**: Modern date utility library
- **clsx**: Utility for constructing className strings
- **nanoid**: URL-safe unique string ID generator