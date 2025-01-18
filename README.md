# Ivan Petrov -- Portfolio

This repository hosts **Ivan Petrov** portfolio, a **Next.js 13** application showcasing projects, skills, and contact information. It leverages **Framer Motion**, **GSAP**, and **SCSS modules** to provide a visually engaging and animated user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Ivan Petrov Portfolio** is a **Freelance Full-Stack Developer** site highlighting:

- Professional background and pivot from automotive sales to web development
- Selected projects using MERN, Drupal, GSAP, Locomotive Scroll, and more
- Parallax sections, custom cursor interactions, list/grid toggles
- Contact form for collaboration and freelance inquiries

---

## Features

1.  **Next.js 13 + App Router**: Modern approach to routing and data fetching.
2.  **SCSS Modules**: Component-level styling with variable or partial SCSS files.
3.  **GSAP + Framer Motion**: Advanced animations (e.g., parallax, fade-in/out, scaling).
4.  **Locomotive Scroll**: Potentially used for smooth scrolling and advanced scroll effects.
5.  **Nodemailer**: Integration for contact form (if configured) to send emails.
6.  **Responsive & Interactive**: Grid/list view toggles, custom cursor, animated sections.

---

## Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Language**: [React/JavaScript](https://reactjs.org/) (ES2020+ features)
- **Styling**: [SASS/SCSS Modules](https://sass-lang.com/)
- **Animation**: Framer Motion & GSAP
- **Scrolling**: [Locomotive Scroll](https://github.com/locomotivaproductions/locomotive-scroll)
- **Contact**: [Nodemailer](https://nodemailer.com/) (for sending emails)
- **Linting**: [ESLint](https://eslint.org/)

---

## Project Structure

Below is a simplified structure reflecting key directories:

```bash
├── app
│   ├── about
│   │   ├── page.jsx                # About page entry point
│   │   ├── AboutHeader.jsx         # About header section
│   │   ├── AboutImageSection.jsx   # About image section
│   │   ├── AboutServices.jsx       # About services section
│   │   ├── globe.module.scss       # Globe section styles
│   │   ├── AboutHeader.module.scss # Header styles for About
│   │   ├── AboutServices.module.scss # Services styles for About
│   │   └── ...                     # Additional sections & SCSS
│   ├── works
│   │   ├── page.jsx                # Works page entry point
│   │   ├── WorksSection.jsx        # Main works section
│   │   ├── AboutWorks.jsx          # About Works section
│   │   ├── WorkHeader.module.scss  # Header styles for works
│   │   ├── WorksSection.module.scss # Main works section styles
│   │   └── animations.js           # Animations for works
│   ├── contact
│   │   ├── page.jsx                # Contact page entry point
│   │   ├── ContactHeader.module.scss # Header styles for contact
│   │   ├── ContactSection.jsx      # Main contact section
│   │   └── ContactSection.module.scss # Contact section styles
│   ├── layout.js                   # Global layout for all pages
│   └── page.js                     # Root entry point
├── common
│   ├── Magnetic
│   │   ├── Magnetic.jsx            # Magnetic button/interaction
│   │   └── style.module.scss       # Styles for Magnetic
│   ├── RoundedButton
│   │   ├── RoundedButton.jsx       # Reusable rounded button
│   │   └── style.module.scss       # Styles for RoundedButton
├── components
│   ├── About
│   │   ├── AboutHeader.jsx
│   │   ├── AboutImageSection.jsx
│   │   ├── AboutServices.jsx
│   │   ├── style.module.scss       # Shared About styles
│   │   └── ...
│   ├── Footer
│   │   ├── Footer.jsx              # Footer component
│   │   ├── Subfooter.jsx           # Subfooter component
│   │   └── style.module.scss       # Footer styles
│   ├── Header
│   │   ├── Header.jsx              # Header component
│   │   ├── Link.jsx                # Link for navigation
│   │   ├── Navigation.jsx          # Main navigation logic
│   │   ├── animation.js            # Animations for header
│   │   └── style.module.scss       # Header styles
│   ├── Preloader
│   │   ├── Preloader.jsx           # Page preloader
│   │   └── style.module.scss       # Preloader styles
│   ├── Works
│   │   ├── AboutWorks.jsx          # About Works component
│   │   ├── WorksSection.jsx        # Works section component
│   │   ├── SlidingImages.jsx       # Sliding images component
│   │   ├── ProjectSection.jsx      # Project section
│   │   ├── animations.js           # Animation logic
│   │   └── style.module.scss       # Works shared styles
├── public
│   ├── images                      # Image assets
│   │   ├── ListBlack.png           # Icon for list view (black)
│   │   ├── ListWhite.png           # Icon for list view (white)
│   │   ├── GridBlack.png           # Icon for grid view (black)
│   │   ├── GridWhite.png           # Icon for grid view (white)
│   │   ├── BlueCube.gif            # Decorative cube GIF
│   │   ├── ...                     # Additional images (PNG, JPG, GIF)
│   ├── favicon.ico                 # Favicon for the site
│   ├── android-chrome-192x192.png  # Android-specific favicon
│   ├── apple-touch-icon.png        # Apple-specific favicon
│   └── ...
├── node_modules                    # Node.js dependencies
├── .env.local                      # Environment variables
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignored files
├── next.config.js                  # Next.js configuration
├── package.json                    # Node.js package manifest
├── package-lock.json               # Dependency lock file
├── README.md                       # Project documentation
└── ...
```

**Notable Directories & Files**

- **`app/`**: Main Next.js 13 "App Router" directory. Each folder (e.g., `about`, `works`, `contact`) has its own entry point.
- **`components/`**: Reusable sections (Header, Footer, etc.) + specialized subfolders for each domain (Works, About, Preloader).
- **`public/images`**: Static assets used throughout the portfolio (PNGs, JPGs, GIFs).
- **SCSS Modules** (`*.module.scss`): Provide localized component-level styles.

---

## Getting Started

1.  **Clone the repository**

    `git clone https://github.com/FreezyXV/Ivan-Petrov-Portfolio.git`

2.  **Install dependencies**

        `cd Ivan-Petrov-Portfolio

    npm install`

        or

        `yarn`

3.  **Run the development server**

    `npm run dev`

    Navigate to http://localhost:3000 to view the portfolio.

4.  **Optional**: If you use **nodemailer** or other environment-based configurations, rename `.env.example` to `.env.local` and add your credentials.

---

## Available Scripts

Within the **root** directory, you can run:

- **`npm run dev`**\
  Runs the Next.js development server on `http://localhost:3000`. Auto-reloads on code changes.

- **`npm run build`**\
  Builds the application for production. Optimizes your code and prepares output in the `.next` folder.

- **`npm run start`**\
  Launches the production build locally on `http://localhost:3000`.

- **`npm run lint`**\
  Runs ESLint checks to maintain consistent code style and catch common errors.

---

## Environment Variables

If you plan to use **Nodemailer** or any external APIs, you'll need to configure environment variables:

`# .env.local (example)
MAIL_HOST=smtp.gmail.com
MAIL_USER=you@example.com
MAIL_PASS=topsecret


Then ensure that you do **not** commit your `.env.local` file to version control.

---

## Deployment

You can deploy this Next.js 13 project to platforms like **Vercel**, **Netlify**, or your own server. For example, to deploy on **Vercel**:

- That Next.js portfolio is deployed on **Vercel**

---

## Contributing is not Allowed for this project for tierce persons.

As a Portfolio owner Ivan want be the only person that can contribute.

## License

This project is primarily for personal demonstration. Please reach out if you'd like to reuse major components or expand upon it significantly. No explicit open-source license is attached.
