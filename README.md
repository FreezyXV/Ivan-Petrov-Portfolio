# Ivan Petrov -- Portfolio

This repository hosts the **Ivan Petrov** portfolio, a **Next.js 13** application showcasing projects, skills, and contact information. It leverages **Framer Motion**, **GSAP**, and **SCSS modules** to provide a visually engaging and animated user experience.

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

`├── app
│   ├── about
│   │   ├── page.jsx
│   │   └── ... (About sections & SCSS)
│   ├── works
│   │   ├── page.jsx
│   │   └── ... (Works sections & SCSS)
│   ├── contact
│   ├── layout.js
│   └── page.js
├── components
│   ├── About
│   │   ├── AboutHeader.jsx
│   │   ├── AboutImageSection.jsx
│   │   ├── AboutServices.jsx
│   │   └── ...
│   ├── Footer
│   │   ├── Footer.jsx
│   │   └── style.module.scss
│   ├── Header
│   │   ├── Header.jsx
│   │   └── style.module.scss
│   ├── Works
│   │   ├── WorksSection.jsx
│   │   ├── AboutWorks.jsx
│   │   ├── animations.js
│   │   └── ...
│   └── Preloader
│       ├── Preloader.jsx
│       └── style.module.scss
├── public
│   ├── images
│   │   └── ... (PNG, JPG, GIF assets)
│   └── favicon.ico
├── node_modules
├── package.json
├── package-lock.json
├── .eslintrc.json
├── .gitignore
├── README.md
└── ...`

**Notable Directories & Files**

- **`app/`**: Main Next.js 13 "App Router" directory. Each folder (e.g., `about`, `works`, `contact`) has its own entry point.
- **`components/`**: Reusable sections (Header, Footer, etc.) + specialized subfolders for each domain (Works, About, Preloader).
- **`public/images`**: Static assets used throughout the portfolio (PNGs, JPGs, GIFs).
- **SCSS Modules** (`*.module.scss`): Provide localized component-level styles.

---

## Getting Started

1.  **Clone the repository**

    `git clone https://github.com/YourUsername/ivan-petrov-portfolio.git`

2.  **Install dependencies**

        `cd ivan-petrov-portfolio

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
EMAIL_HOST=smtp.example.com
EMAIL_PORT=465
EMAIL_USER=YourUsername
EMAIL_PASSWORD=SecretPassword`

Then ensure that you do **not** commit your `.env.local` file to version control.

---

## Deployment

You can deploy this Next.js 13 project to platforms like **Vercel**, **Netlify**, or your own server. For example, to deploy on **Vercel**:

1.  Install the Vercel CLI.
2.  Run `vercel` in your project directory.
3.  Follow the prompts to set up a new project or link an existing one.

---

## Contributing

1.  **Fork** the project.
2.  **Create** a new feature branch (`git checkout -b feature-awesome`).
3.  **Commit** your changes (`git commit -m 'Add awesome feature'`).
4.  **Push** to the branch (`git push origin feature-awesome`).
5.  **Open a Pull Request** describing your changes.

## License

This project is primarily for personal demonstration. Please reach out if you'd like to reuse major components or expand upon it significantly. No explicit open-source license is attached.
