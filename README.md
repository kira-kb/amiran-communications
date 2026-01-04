# 🚀 Welcome to Amiran communications website

## ✨ Technology Stack

This scaffold provides a robust foundation built with:

### 🎯 Core Framework

- **⚡ Next.js 15** - The React framework for production with App Router
- **📘 TypeScript 5** - Type-safe JavaScript for better developer experience
- **🎨 Tailwind CSS 4** - Utility-first CSS framework for rapid UI development

### 🧩 UI Components & Styling

- **🧩 shadcn/ui** - High-quality, accessible components built on Radix UI
- **🎯 Lucide React** - Beautiful & consistent icon library
- **🌈 Framer Motion** - Production-ready motion library for React
- **🎨 Next Themes** - Perfect dark mode in 2 lines of code

### 📋 Forms & Validation

- **🎣 React Hook Form** - Performant forms with easy validation
- **✅ Zod** - TypeScript-first schema validation

### 🔄 State Management & Data Fetching

- **🐻 Zustand** - Simple, scalable state management
- **🔄 TanStack Query** - Powerful data synchronization for React
- **🌐 Fetch** - Promise-based HTTP request

### 🗄️ Database & Backend

- **🗄️ Prisma** - Next-generation TypeScript ORM
- **🔐 NextAuth.js** - Complete open-source authentication solution

### 🎨 Advanced UI Features

- **📊 TanStack Table** - Headless UI for building tables and datagrids
- **🖱️ DND Kit** - Modern drag and drop toolkit for React
- **📊 Recharts** - Redefined chart library built with React and D3
- **🖼️ Sharp** - High performance image processing

### 🌍 Internationalization & Utilities

- **🌍 Next Intl** - Internationalization library for Next.js
- **📅 Date-fns** - Modern JavaScript date utility library
- **🪝 ReactUse** - Collection of essential React hooks for modern development

## 🎯 Why This Scaffold?

- **🏎️ Fast Development** - Pre-configured tooling and best practices
- **🎨 Beautiful UI** - Complete shadcn/ui component library with advanced interactions
- **🔒 Type Safety** - Full TypeScript configuration with Zod validation
- **📱 Responsive** - Mobile-first design principles with smooth animations
- **🗄️ Database Ready** - Prisma ORM configured for rapid backend development
- **🔐 Auth Included** - NextAuth.js for secure authentication flows
- **📊 Data Visualization** - Charts, tables, and drag-and-drop functionality
- **🌍 i18n Ready** - Multi-language support with Next Intl
- **🚀 Production Ready** - Optimized build and deployment settings
- **🤖 AI-Friendly** - Structured codebase perfect for AI assistance

## 🚀 Quick Start

````bash
# Install dependencies
bun install

# Start development server
bun run dev

```markdown
# Amiran Communications — Website

This repository contains the Amiran Communications website, built with Next.js, TypeScript and Tailwind CSS. It has been adjusted from an upstream scaffold to match the real site at https://baltoncp.com/amirancomm/.

## Quick Overview
- Framework: Next.js (patched to 15.5.9)
- Language: TypeScript
- Styling: Tailwind CSS
- Favicon / icons: `public/logo.png`

## Local development
Ensure you have Node.js 18+ and npm installed.

Install dependencies and start development server:

```bash
npm install
npm run dev
````

Build for production and run:

```bash
npm run build
npm run start
```

Open http://localhost:3000 to view the site.

## Notable changes in this fork

- `next` bumped to a patched 15.x release (15.5.9) to address security advisories.
- `react-syntax-highlighter` upgraded to remove PrismJS vulnerability.
- Metadata and favicon updated in `src/app/layout.tsx` to point at the real site and `public/logo.png`.
- Navbar now indicates the active page (desktop & mobile) and sets `aria-current`.

## Common scripts

- `dev` — Start development server
- `build` — Create a production build
- `start` — Run production server (after `build`)
- `lint` — Run project linters

## Where to look

- Metadata: `src/app/layout.tsx`
- Navbar: `src/components/navbar.tsx`
- Public assets: `public/`

## Security / audits

- A local `npm audit` was run after dependency updates — no high/critical vulnerabilities remain.

If you want me to run the dev server here or commit these changes, tell me and I'll proceed.

```

```
