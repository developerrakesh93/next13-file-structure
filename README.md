# next13-file-structure

This is the first module of Next.js 13 with TypeScript, below are the topics covered in this 

1. Setting up the application from scratch.
2. Server Side Rendering (SSR) and Client Side Rendering (CSR) difference.
3. Calling API with Cache - Satitc site generation with { cache: 'no-store' } & { cache: 'no-cache' } .
4. Useage of 'next/link' instead of <a> .
5. Usage of Tailwind CSS instead of using FILENAME.module.css .
6. Installing daisy UI for the project.

1. Creation of project use "npx create-next-app@latest" 
    What is your project named?  my-app                              = PROVIDE PROJECT NAME
    Would you like to use TypeScript?  No / Yes                      = YES
    Would you like to use ESLint?  No / Yes                          = YES
    Would you like to use Tailwind CSS?  No / Yes                    = YES
    Would you like to use `src/` directory?  No / Yes                = NO
    Would you like to use App Router? (recommended)  No / Yes        = YES        
    Would you like to customize the default import alias?  No / Yes  = NO

   To run the Application = npm run dev
   To build the Application = npm run build
   To run the build files of the Application = npm start

After giving command run this URL in the browser : http://localhost:3000/  -- this is the default route

2. By default server-side-rendering will be happening for all the routes to make client side rendering we need to declare 'use client' in the begining of the component.

3. API calling through fetch - Fetch is a built-in browser API, available in most modern browsers. It eliminates the need for external dependencies, making it lightweight and easy      to use without any additional installations.

4. <Link> helps in avoiding the multiple complete page reloads.

5. TailWind advantages :
  a) Rapid development with pre-designed utility classes.
  b) Highly customizable and extensible.
  c) Built-in responsiveness for mobile-friendly designs.
  d) Minimal learning curve, accessible to various skill levels.
  e) Promotes component-based architecture.
  f) Optimizes performance with small CSS files.
  g) Large community and ecosystem of plugins.
  h) Flexible and scalable for projects of all sizes.
  i) Enforces consistency and simplifies maintenance.
  j) Dark mode support and active development.
  k) Accessibility-focused with ARIA attributes.
  l) Integration-friendly with other frontend technologies.
  m) Reduces CSS bloat and offers scalable typography.
  n) Supports internationalization (i18n) for multilingual projects.

6. Daisy UI advantages :
  a) Tailwind CSS Integration: Daisy UI is a set of plugins for Tailwind CSS, a utility-first CSS framework. If you're already using Tailwind CSS, integrating Daisy UI can be             seamless.
  b) Lightweight: Daisy UI is relatively lightweight and doesn't come with an extensive set of components. It focuses on essential components like buttons, forms, and modals.
  c) Customizability: Since Daisy UI builds on top of Tailwind CSS, it inherits Tailwind's high customizability. You can easily tweak the appearance of components to match your           project's design.
  d) Utility-First Approach: Like Tailwind CSS, Daisy UI follows a utility-first approach, which can lead to fast and efficient development.
  e) Community: While not as large as some other UI libraries, Daisy UI has an active and growing community.
