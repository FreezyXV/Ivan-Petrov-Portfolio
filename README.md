# Ivan Petrov - Portfolio

> A modern, interactive Next.js portfolio showcasing Technical Product Specialist expertise with cutting-edge animations and responsive design.

[![Next.js](https://img.shields.io/badge/Next.js-13.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?style=flat&logo=react)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=flat)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.13-purple?style=flat)](https://www.framer.com/motion/)

[Live Demo](https://ivan-petrov-portfolio.vercel.app) • [Contact](#contact)

---

## 📋 Table of Contents

- [Overview](#overview)
- [What Makes This Portfolio Special](#what-makes-this-portfolio-special)
- [Key Features](#key-features)
- [Tech Stack Explained](#tech-stack-explained)
- [Application Structure](#application-structure)
- [Pages & Functionality](#pages--functionality)
- [Interactive Features Deep Dive](#interactive-features-deep-dive)
- [Animation Systems](#animation-systems)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This portfolio application represents **Ivan Petrov's** transition from automotive sales to becoming a **Technical Product Specialist** and **Solutions Engineer**. Built with cutting-edge web technologies, it demonstrates both technical expertise and design sophistication.

### Purpose
- Showcase 5+ professional projects with business impact metrics
- Present services: Product Strategy, Technical Solutions Architecture, Digital Transformation
- Provide an interactive, engaging user experience
- Enable direct contact for freelance/CDI opportunities

### Target Sectors
- FinTech
- SaaS
- E-commerce
- B2B Solutions

---

## ✨ What Makes This Portfolio Special

### 1. **Premium Animation Experience**
- **Magnetic buttons** that attract to your cursor using GSAP
- **Custom project preview modal** that follows mouse movement
- **Parallax scrolling** effects on images and text
- **Smooth page transitions** with animated preloader
- **Scroll-triggered animations** that reveal content progressively

### 2. **Interactive Project Showcase**
- **Grid/List toggle view** for browsing projects
- **Hover-activated preview modal** (desktop) showing project thumbnails
- **Direct project links** (mobile) for instant access
- **Technology cards** with detailed descriptions in modal popups

### 3. **Business-Focused Content**
- Real metrics: **+72% lead generation** for TotalEnergies project
- **3 core services** clearly defined with animated sections
- **30+ technologies** showcased with icons and descriptions
- **Featured case studies** demonstrating ROI and business impact

### 4. **Fully Responsive Design**
- Desktop-first design with tablet and mobile adaptations
- Touch-friendly interactions on mobile devices
- Conditional rendering based on screen size
- Optimized image loading for all devices

---

## 🚀 Key Features

### Visual & Interactive
- ✅ **Animated Preloader** - Multi-language greeting with SVG morphing
- ✅ **Custom Cursor Effects** - Project preview follows mouse
- ✅ **Magnetic Buttons** - GSAP-powered cursor attraction
- ✅ **Parallax Scrolling** - Multiple layers moving at different speeds
- ✅ **Smooth Scrolling** - Locomotive Scroll integration
- ✅ **Grid/List Toggle** - Switch project display modes
- ✅ **Mobile Navigation** - Slide-in menu with curved animation

### Content Sections
- 🏠 **Landing Page** - Hero with animated name slider
- 📖 **About Page** - Biography, services, expertise, animated globe
- 💼 **Works Page** - Projects showcase with technology breakdown
- 📧 **Contact Page** - Functional form with email integration

### Technical
- ⚡ **Next.js 13 App Router** - Modern routing with Server/Client Components
- 🎨 **SCSS Modules** - Component-scoped styling
- 📧 **Nodemailer Integration** - Contact form emails
- 🔒 **Honeypot Spam Protection** - Form security
- 🖼️ **Image Optimization** - Next.js Image with Sharp processing
- 📱 **Responsive Breakpoints** - Mobile (<768px), Tablet (768-1023px), Desktop (≥1024px)

---

## 🛠️ Tech Stack Explained

### Core Framework
- **[Next.js 13.4.10](https://nextjs.org/)** - React framework with App Router for modern web apps
  - Server Components for optimal performance
  - Built-in image optimization
  - API routes for backend functionality

### Frontend Libraries
- **[React 18.2.0](https://reactjs.org/)** - Component-based UI library
- **[Sass 1.83.1](https://sass-lang.com/)** - CSS preprocessor with variables, nesting, and mixins
- **SCSS Modules** - Scoped styling to prevent class name conflicts

### Animation Powerhouses
- **[GSAP 3.12.2](https://greensock.com/gsap/)** - Professional-grade animation library
  - **ScrollTrigger** - Scroll-based animations
  - **quickTo()** - High-performance mouse-following effects
  - **Timeline** - Sequenced animation control

- **[Framer Motion 10.13.0](https://www.framer.com/motion/)** - React animation library
  - Declarative animations with variants
  - Page transitions
  - Scroll transforms with useScroll and useTransform

- **[Locomotive Scroll 5.0.0-beta.8](https://github.com/locomotivaproductions/locomotive-scroll)** - Smooth scrolling with advanced effects

### Backend & Tools
- **[Nodemailer 6.9.16](https://nodemailer.com/)** - Email sending for contact form
- **[Sharp 0.33.5](https://sharp.pixelplumbing.com/)** - High-performance image processing
- **[ESLint 8.45.0](https://eslint.org/)** - Code quality and consistency

---

## 📁 Application Structure

```
Ivan-Petrov-Portfolio/
├── app/                          # Next.js 13 App Router directory
│   ├── layout.js                 # Root layout with fonts and metadata
│   ├── page.js                   # Home page (Landing)
│   ├── globals.scss              # Global styles
│   ├── about/
│   │   └── page.js               # About page
│   ├── works/
│   │   └── page.js               # Works/Projects page
│   ├── contact/
│   │   └── page.js               # Contact page
│   └── api/
│       └── sendMail/
│           └── route.js          # Email API endpoint (POST)
│
├── src/
│   ├── components/               # Reusable UI components
│   │   ├── About/                # About page sections
│   │   │   ├── AboutHeader.jsx
│   │   │   ├── AboutImageSection.jsx
│   │   │   ├── AboutServices.jsx
│   │   │   ├── GlobeSection.jsx
│   │   │   └── *.module.scss
│   │   ├── Contact/              # Contact form component
│   │   │   ├── ContactSection.jsx
│   │   │   └── ContactSection.module.scss
│   │   ├── Description/          # About section for home
│   │   │   ├── Description.jsx
│   │   │   ├── animation.js
│   │   │   └── style.module.scss
│   │   ├── Footer/               # Footer with animated CTA
│   │   │   ├── Footer.jsx
│   │   │   └── style.module.scss
│   │   ├── Header/               # Navigation header
│   │   │   ├── Header.jsx
│   │   │   ├── animation.js
│   │   │   ├── style.module.scss
│   │   │   └── nav/
│   │   │       ├── Navigation.jsx
│   │   │       ├── Link.jsx
│   ���   │       └── Curve.jsx
│   │   ├── Landing/              # Hero section
│   │   │   ├── Landing.jsx
│   │   │   ├── animation.js
│   │   │   └── style.module.scss
│   │   ├── Preloader/            # Loading animation
│   │   │   ├── Preloader.jsx
│   │   │   ├── anim.js
│   │   │   └── style.module.scss
│   │   ├── Projects/             # Home projects section
│   │   │   ├── Projects.jsx
│   │   │   ├── components/
│   │   │   │   └── project/
│   │   │   │       └── Project.jsx
│   │   │   └── style.module.scss
│   │   ├── SlidingImages/        # Parallax image slider
│   │   │   ├── SlidingImages.jsx
│   │   │   └── style.module.scss
│   │   └── Works/                # Works page sections
│   │       ├── AboutWorks.jsx
│   │       ├── Modal.jsx
│   │       ├── WorksSection.jsx
│   │       └── *.module.scss
│   │
│   ├── common/                   # Shared utility components
│   │   ├── Magnetic/
│   │   │   ├── Magnetic.jsx      # GSAP magnetic effect
│   │   │   └── style.module.scss
│   │   └── RoundedButton/
│   │       ├── RoundedButton.jsx # Animated button
│   │       └── style.module.scss
│   │
│   └── hooks/                    # Custom React hooks
│       └── useIsDesktop.js       # Responsive breakpoint hook (1024px)
│
├── public/
│   ├── images/                   # Static image assets
│   │   ├── Projects (Burger, HiTech, Fitness, ELF, TotalEnergies)
│   │   ├── Icons (GridBlack.png, ListWhite.png, etc.)
│   │   ├── Profile images
│   │   └── Technology logos (30+ tech stack icons)
│   ├── favicon.ico
│   └── ...
│
├── node_modules/                 # Dependencies
├── .env.local                    # Environment variables (not in repo)
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

---

## 📄 Pages & Functionality

### 🏠 **Home Page** (`/`)

**Purpose:** First impression showcasing Ivan's profile and selected projects

**Sections:**
1. **Preloader** (2 seconds)
   - Cycles through greetings: "Hello" → "Bonjour" → "Ciao" → "Привет" → "やあ" → "Привiт" → "Guten tag"
   - SVG path morphing animation (bezier curves flatten)
   - Slides up and fades out to reveal content

2. **Landing Hero**
   - Animated repeating name slider: "Ivan Petrov - Ivan Petrov - Ivan Petrov..."
   - Scroll-triggered horizontal animation (GSAP ScrollTrigger)
   - Tagline: "Technical Product Specialist | Solutions Engineer"
   - Current availability status
   - Parallax scroll effects on text

3. **Description/About Section**
   - Word-by-word animated text reveal (Framer Motion)
   - Key achievement highlight: "+72% leads" for TotalEnergies
   - "About me" call-to-action button (magnetic effect)
   - Biography snippet with professional background

4. **Projects Showcase**
   - **5 Featured Projects:**
     - Burger Town (Orange) - MERN e-commerce
     - Hi Tech Store (Light gray) - MERN + Stripe + Redux
     - Fitness Pro (Green) - Laravel/Angular
     - ELF.com (Black) - Drupal CMS
     - TotalEnergies (Red) - Digital transformation
   - **Desktop:** Custom cursor + hover-activated modal preview
   - **Mobile:** Direct clickable project links
   - Grid/List view toggle
   - Modal shows project image with "View" label

5. **Sliding Images Gallery**
   - Dual horizontal sliders moving in opposite directions
   - Parallax effect tied to scroll progress
   - Project thumbnails in continuous loop

6. **Footer**
   - Call-to-action: "Let's work together"
   - Contact button with magnetic effect
   - Scroll-based animation (rises from bottom)
   - Social/contact links

**Key Interactions:**
- Smooth scrolling (Locomotive Scroll)
- Magnetic buttons on hover
- Project modal follows cursor
- Scroll-triggered animations throughout

---

### 📖 **About Page** (`/about`)

**Purpose:** Deep dive into Ivan's background, expertise, and service offerings

**Sections:**
1. **AboutHeader**
   - Title: "Technical Product Specialist with Business Impact"
   - Subtitle explaining dual profile (tech + business)

2. **GlobeSection**
   - Animated CSS globe visualization
   - Concentric circles with 3D perspective
   - Desktop-only feature

3. **AboutImageSection**
   - **Full Biography**
     - Career journey from automotive sales to web development
     - Transition to Technical Product Specialist
     - Core philosophy and approach
   - **Profile Image**
     - Parallax scroll effect
     - Professional photo
   - **Competencies**
     - Product roadmap planning
     - Stakeholder communication
     - Technical leadership
   - **Why I Stand Out** (3 key points with animated GIF icons)
     - Business-first mindset
     - Full-stack versatility
     - Measurable results
   - **What Drives Me**
     - Mission statement
     - Values and approach
   - **Technical Expertise**
     - Frontend: React, Next.js, Vue, Angular
     - Backend: Node.js, PHP/Laravel
     - Methodologies: Agile/Scrum, CI/CD

4. **AboutServices** - 3 Core Services
   - **01: Product Strategy & Roadmap Planning**
     - Agile/Scrum implementation
     - OKR framework
     - KPI definition & tracking
     - Icon: Animated GIF

   - **02: Technical Solutions Architecture**
     - Full-stack development
     - Performance optimization
     - API design & integration
     - CI/CD pipeline setup
     - Icon: Animated GIF

   - **03: Digital Transformation & Client Solutions**
     - Complex migrations (Drupal, WordPress)
     - Stakeholder management
     - ROI-driven delivery
     - Change management
     - Icon: Animated GIF

   - Animated dots and scroll-based circle shrinking effect (desktop)

5. **Footer**
   - Same as home page

**Key Interactions:**
- Fade-in animations on scroll (Framer Motion variants)
- Parallax image effects
- Animated service cards
- Responsive layout adjustments

---

### 💼 **Works Page** (`/works`)

**Purpose:** Comprehensive showcase of all projects and technologies

**Sections:**
1. **WorksSection** - Projects Grid/List
   - Same 5 projects as home page
   - Toggle between grid and list views
   - Desktop: Hover shows custom cursor + modal
   - Mobile: Direct links to projects
   - "Let's Work Together" CTA button at bottom

2. **AboutWorks** - Detailed Project Breakdown

   **A. Featured Projects (4 case studies)**
   - **TotalEnergies + ELF** - Click to view modal
     - Drupal 9/10 migration
     - +72% lead generation in 6 months
     - 40% improvement in site speed
     - Tech: Drupal, PHP, MySQL, Twig
     - Image: Project screenshot

   - **Burger Town** - Click to view modal
     - MERN stack e-commerce platform
     - Real-time order tracking
     - Admin dashboard
     - Tech: React, Node.js, Express, MongoDB, Redux

   - **Hi Tech Store** - Click to view modal
     - Full e-commerce with payment integration
     - Stripe checkout
     - Redux state management
     - Jest testing
     - Tech: React, Node.js, MongoDB, Stripe, Redux, Jest

   - **Fitness Pro** - Click to view modal
     - Product showcase platform
     - Laravel backend + Angular frontend
     - RESTful API
     - Tech: Laravel, Angular, PostgreSQL

   **B. Technologies Grid (30+ technologies)**
   - **Frontend:** React, Vue, Angular, Next.js, Sass, Tailwind, Bootstrap, Twig
   - **Backend:** Node.js, PHP/Laravel, Express.js
   - **Databases:** MongoDB, PostgreSQL, MySQL
   - **Tools:** Jira, Confluence, Figma, Git, GitHub, Docker
   - **Testing:** Jest, Cypress, Postman
   - **Deployment:** Vercel, Fly.io, AWS, Netlify
   - **Payment:** Stripe
   - **CMS:** Drupal, WordPress

   - Each tech card shows icon + name
   - **Click to open modal** with detailed description
   - Modal explains: what it is, why it's used, benefits

   **C. Skills & Expertise (10-point list)**
   - Product strategy & roadmap planning
   - Technical architecture design
   - Full-stack development (MERN, Drupal, Laravel)
   - API design & integration
   - Performance optimization
   - CI/CD & DevOps
   - Agile/Scrum leadership
   - Stakeholder communication
   - Data-driven decision making
   - Digital transformation projects

   **D. What Drives My Work**
   - Mission statement
   - Core values
   - Approach to projects

3. **Footer**
   - Same as other pages

**Key Interactions:**
- Grid/List toggle with icon swap
- Technology modal popups (click to open/close)
- Featured project modal (click card to view details)
- Hover states on all cards
- Conditional animations (desktop vs mobile)

---

### 📧 **Contact Page** (`/contact`)

**Purpose:** Enable direct communication for business opportunities

**Layout:**
Two-column responsive layout (stacks on mobile)

**Left Column - Contact Form:**
- **Name** (required, text input)
- **Email** (required, email input)
- **Organization** (optional, text input)
- **Services Looking For** (optional, text input)
- **Message** (required, textarea)
- **Honeypot Field** (hidden, spam protection)
- **Submit Button** (magnetic effect)

**Form Behavior:**
1. User fills out fields
2. On submit: validates required fields (Name, Email, Message)
3. Checks honeypot field (if filled = spam bot, abort)
4. Sends POST request to `/api/sendMail`
5. Email sent to `yohanpetrov@gmail.com` via Nodemailer
6. Success: Alert + form clears
7. Error: Alert with error message

**Right Column - Business Information:**
- **Profile Photo** (Ivan's image)
- **Contact Details**
  - Email: yohanpetrov@gmail.com
  - Phone: +33 6 18 02 64 70
- **Business Details**
  - Role: Technical Product Specialist / Solutions Engineer
  - Location: Paris, France
  - Focus: FinTech, SaaS, E-commerce, B2B
- **Hire Me Via** (with magnetic link buttons)
  - Comet
  - Malt
  - Little Big Connection
  - Upwork

**Footer:**
- Same as other pages

**Key Interactions:**
- Magnetic buttons on all links
- Form validation on submit
- Real-time email sending
- Responsive layout (stacks on mobile)

---

## 🎨 Interactive Features Deep Dive

### 1. **Magnetic Button Effect**

**Component:** [`Magnetic.jsx`](src/common/Magnetic/Magnetic.jsx)

**How It Works:**
```javascript
// 1. Get button reference and calculate its center position
const magnetic = useRef(null);

// 2. On mouse move over button:
const handleMouseMove = (e) => {
  const { clientX, clientY } = e;
  const { height, width, left, top } = magnetic.current.getBoundingClientRect();
  const x = clientX - (left + width / 2);
  const y = clientY - (top + height / 2);

  // 3. Use GSAP quickTo for smooth, high-performance animation
  // 35% attraction force, elastic easing for springy feel
  xTo(x * 0.35);
  yTo(y * 0.35);
}

// 4. On mouse leave: reset position
xTo(0);
yTo(0);
```

**Applied To:**
- Navigation links
- Footer contact button
- Form submit button
- All CTA buttons
- Hire me platform links

**Effect:** Button appears to be magnetically attracted to cursor, creating engaging micro-interaction

---

### 2. **Custom Cursor & Project Preview Modal**

**Component:** [`Projects.jsx`](src/components/Projects/Projects.jsx) & [`WorksSection.jsx`](src/components/Works/WorksSection.jsx)

**How It Works:**
```javascript
// 1. Track mouse position globally
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// 2. On mouse move anywhere on page:
const handleMouseMove = (e) => {
  setMousePosition({ x: e.clientX, y: e.clientY });
}

// 3. On project hover:
const manageModal = (active, index, x, y) => {
  setModal({ active, index });
  // Use GSAP quickTo for smooth cursor following (450ms)
  moveItems(x, y);
  moveCustomCursor(x, y);
}

// 4. Modal animated with Framer Motion
<motion.div
  variants={scaleAnimation}
  animate={modal.active ? "enter" : "closed"}
  style={{ left: modalPosition.x, top: modalPosition.y }}
>
  {/* Show project preview image */}
</motion.div>
```

**Desktop Behavior:**
- Custom cursor replaces default pointer on project hover
- Preview modal follows cursor smoothly
- Modal scales in/out with elastic animation
- Shows project thumbnail with color-coded background
- "View" label indicates clickability

**Mobile Behavior:**
- No custom cursor (uses default touch behavior)
- Projects are direct clickable links
- No hover modal (improves performance)

---

### 3. **Grid/List Toggle View**

**Location:** Projects (home) and Works page

**Implementation:**
```javascript
// State management
const [viewMode, setViewMode] = useState('grid');

// Toggle function
const toggleView = () => {
  setViewMode(viewMode === 'grid' ? 'list' : 'grid');
}

// Conditional rendering
<div className={viewMode === 'grid' ? styles.gridLayout : styles.listLayout}>
  {projects.map((project) => (
    <ProjectItem project={project} viewMode={viewMode} />
  ))}
</div>
```

**Visual Differences:**
- **Grid View:**
  - 2-3 columns (responsive)
  - Large project thumbnails
  - Title below image
  - Compact layout

- **List View:**
  - Single column
  - Project title + "Design & Development" label
  - Cleaner, minimal layout
  - Better for scanning project names

**Toggle Buttons:**
- Desktop: Visible in top-right corner
- Icons swap: Grid icon ↔ List icon
- Active state styling (black vs white icons)
- Mobile: Hidden via CSS, defaults to grid

---

### 4. **Rounded Button Animation**

**Component:** [`RoundedButton.jsx`](src/common/RoundedButton/RoundedButton.jsx)

**Animation Sequence:**
```javascript
// Create GSAP timeline
timeline.current = gsap.timeline({ paused: true });

// Hover Enter: Circle expands and rises
timeline.current
  .to('.circle', {
    top: "-25%",
    width: "150%",
    duration: 0.4,
    ease: "power3.in"
  }, "enter")
  .to('.circle', {
    top: "-150%",
    width: "125%",
    duration: 0.25
  }, "exit");

// On mouse enter: play timeline
button.addEventListener('mouseenter', () => {
  timeline.current.tweenFromTo('enter', 'exit');
});

// On mouse leave: reverse
button.addEventListener('mouseleave', () => {
  timeline.current.play();
});
```

**Visual Effect:**
- Background circle expands from 100% to 150% width
- Moves from bottom (0%) to top (-150%)
- Creates liquid "filling up then overflowing" effect
- Wrapped in `Magnetic` component for cursor attraction
- Smooth elastic easing

**Used For:**
- "About me" button
- "Let's work together" CTA
- Form submit button
- All primary action buttons

---

### 5. **Scroll-Based Animations**

#### **A. Landing Name Slider** (GSAP ScrollTrigger)

**Component:** [`Landing.jsx`](src/components/Landing/Landing.jsx)

```javascript
// Create repeating name text
const phrase = "Ivan Petrov -";
const repeatedText = Array(30).fill(phrase).join(" ");

// Animate on scroll
useEffect(() => {
  let xPercent = 0;
  let direction = -1;

  const animate = () => {
    // Slide left/right based on scroll direction
    xPercent += 0.1 * direction;
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(slider.current, { xPercent });
    requestAnimationFrame(animate);
  }

  // Detect scroll direction
  ScrollTrigger.create({
    onUpdate: (self) => {
      direction = self.direction === 1 ? -1 : 1;
    }
  });

  animate();
}, []);
```

**Effect:** Continuous horizontal sliding text that reverses direction based on scroll

---

#### **B. Footer Scroll Transform** (Framer Motion)

**Component:** [`Footer.jsx`](src/components/Footer/Footer.jsx)

```javascript
// Track scroll progress
const { scrollYProgress } = useScroll({
  target: container,
  offset: ["start end", "end end"]
});

// Transform values based on scroll
const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

// Apply to elements
<motion.div style={{ y }}>Footer content rises</motion.div>
<motion.div style={{ x }}>Button slides right</motion.div>
```

**Effect:**
- Footer rises from below viewport as user scrolls down
- CTA button slides to the right simultaneously
- Smooth, parallax-style reveal

---

#### **C. Sliding Images Parallax**

**Component:** [`SlidingImages.jsx`](src/components/SlidingImages/SlidingImages.jsx)

```javascript
// Two sliders moving in opposite directions
const slider1X = useTransform(scrollYProgress, [0, 1], [0, 150]);
const slider2X = useTransform(scrollYProgress, [0, 1], [0, -150]);

<motion.div style={{ x: slider1X }}>
  {/* Projects slide right */}
</motion.div>
<motion.div style={{ x: slider2X }}>
  {/* Projects slide left */}
</motion.div>
```

**Effect:** Two rows of project images scroll horizontally in opposite directions as user scrolls vertically

---

#### **D. About Services Circle Animation**

**Component:** [`AboutServices.jsx`](src/components/About/AboutServices.jsx)

```javascript
// Desktop only
const isDesktop = useIsDesktop(1024);

if (isDesktop) {
  const circleHeight = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return <motion.div style={{ height: circleHeight }} />;
}
```

**Effect:** Animated circle shrinks from 50px to 0px as user scrolls through services section

---

### 6. **Preloader / Page Transition**

**Component:** [`Preloader.jsx`](src/components/Preloader/Preloader.jsx)

**Animation Sequence:**
```javascript
// 1. Show greetings (7 languages, 150ms each, first for 1000ms)
const words = ["Hello", "Bonjour", "Ciao", "Привет", "やあ", "Привiт", "Guten tag"];

// 2. SVG path morphing (curves flatten)
const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width/2} ${height + 300} 0 ${height} L0 0`;
const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width/2} ${height} 0 ${height} L0 0`;

// Animate with GSAP
gsap.to(path, {
  attr: { d: targetPath },
  duration: 0.75,
  ease: "power3.in"
});

// 3. After 2 seconds: slide up and fade out
<motion.div
  variants={slideUp}
  initial="initial"
  exit="exit"
  animate={isLoading ? "initial" : "exit"}
/>
```

**Effect:**
- Engaging multi-language greeting
- Smooth SVG curve animation
- Clean transition to page content
- Runs on every page load

---

### 7. **Mobile Menu Navigation**

**Component:** [`Navigation.jsx`](src/components/Header/nav/Navigation.jsx)

**How It Works:**
```javascript
// Menu button (mobile only)
<div className={styles.button} onClick={() => setIsActive(!isActive)}>
  <div className={styles.burger}></div>
</div>

// Full-screen slide-in navigation
<motion.div
  variants={menuSlide}
  initial="initial"
  animate={isActive ? "enter" : "exit"}
  className={styles.menu}
>
  {/* Navigation links */}
</motion.div>

// Animation variants
const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};
```

**Features:**
- Burger menu icon (3 lines)
- Slides from right side
- Covers full screen
- 4 navigation links: Home, Works, About, Contact
- Active link highlighted
- Curved SVG exit animation (visual flair)
- Auto-closes on link click

**Desktop Behavior:**
- Menu button hidden
- Navigation links visible in header
- No slide-in animation

---

## 🎬 Animation Systems

### GSAP (GreenSock Animation Platform)

**Use Cases:**
1. **ScrollTrigger** - Scroll-linked animations
   - Header button scaling based on scroll position
   - Landing name slider direction change
   - Works section animations

2. **quickTo()** - High-performance value updates
   - Custom cursor following (450-800ms duration)
   - Modal position tracking
   - Magnetic button attraction (350ms with elastic easing)

3. **Timeline** - Sequenced animations
   - Rounded button hover effect (multi-step)
   - Preloader SVG morphing
   - Coordinated multi-element animations

**GSAP Configuration:**
```javascript
// Magnetic button
gsap.quickTo(element, 'x', {
  duration: 0.8,
  ease: 'elastic.out(1, 0.3)'
});

// ScrollTrigger
ScrollTrigger.create({
  trigger: element,
  start: "0px 0px",
  onUpdate: (self) => {
    // Animation logic based on scroll direction/progress
  }
});

// Timeline
const tl = gsap.timeline({ paused: true });
tl.to(element, { y: -50, duration: 0.4, ease: "power3.in" })
  .to(element, { y: -150, duration: 0.25 });
```

---

### Framer Motion

**Use Cases:**
1. **Variants** - Named animation states
   ```javascript
   const slideUp = {
     initial: { y: 0 },
     exit: { y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
   };

   const fadeInUpVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
   };

   const scaleAnimation = {
     initial: { scale: 0, x: "-50%", y: "-50%" },
     enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
     closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4 } }
   };
   ```

2. **useScroll & useTransform** - Scroll-linked value transforms
   ```javascript
   const { scrollYProgress } = useScroll({
     target: container,
     offset: ["start end", "end end"]
   });

   const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
   const x = useTransform(scrollYProgress, [0, 1], [0, 150]);
   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
   ```

3. **AnimatePresence** - Enter/exit animations
   ```javascript
   <AnimatePresence mode="wait">
     {isLoading && <Preloader />}
   </AnimatePresence>
   ```

4. **Hover Animations** - Interactive states
   ```javascript
   <motion.div
     whileHover={{ scale: 1.05 }}
     transition={{ duration: 0.3 }}
   >
     Image
   </motion.div>
   ```

---

### Locomotive Scroll

**Purpose:** Smooth scrolling with momentum and custom scroll effects

**Implementation:**
```javascript
// Wrap entire app or page
<div data-scroll-container>
  <div data-scroll-section>
    <div data-scroll data-scroll-speed="0.5">
      {/* Slow parallax element */}
    </div>
    <div data-scroll data-scroll-speed="1.5">
      {/* Fast parallax element */}
    </div>
  </div>
</div>
```

**Benefits:**
- Smooth inertia scrolling
- Cross-browser consistency
- Custom scroll speed per element
- Scroll-triggered class toggles
- Mobile-friendly

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 14.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FreezyXV/Ivan-Petrov-Portfolio.git
   cd Ivan-Petrov-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Rename .env.example to .env.local (if available)
   # Or create new .env.local file
   ```

   Add the following variables:
   ```env
   # Email configuration (Nodemailer)
   MAIL_HOST=smtp.gmail.com
   MAIL_USER=your-email@gmail.com
   MAIL_PASS=your-app-password
   ```

   **Gmail Setup:**
   - Enable 2-Factor Authentication
   - Generate App Password: [Google Account → Security → App Passwords](https://myaccount.google.com/apppasswords)
   - Use the generated 16-character password as `MAIL_PASS`

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Portfolio should load with preloader animation

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Configuration (Required for contact form)
MAIL_HOST=smtp.gmail.com          # SMTP server
MAIL_PORT=587                      # TLS port (optional, default 587)
MAIL_USER=your-email@gmail.com    # Sender email
MAIL_PASS=your-app-password        # App password (not regular password)

# Recipient Email (Optional, defaults to yohanpetrov@gmail.com in code)
CONTACT_EMAIL=recipient@example.com
```

**Security Notes:**
- ✅ `.env.local` is in `.gitignore` (not committed to repo)
- ✅ Use app passwords, not regular account passwords
- ✅ Never expose credentials in client-side code
- ✅ Email API route is server-side only

---

## 📜 Available Scripts

### Development
```bash
npm run dev
# Starts Next.js development server on http://localhost:3000
# Hot-reload enabled (auto-refresh on code changes)
# Shows detailed error messages and warnings
```

### Production Build
```bash
npm run build
# Creates optimized production build in .next folder
# Minifies JavaScript and CSS
# Optimizes images with Sharp
# Generates static HTML where possible
```

### Production Server
```bash
npm run start
# Serves production build on http://localhost:3000
# Run 'npm run build' first
# No hot-reload (production mode)
```

### Linting
```bash
npm run lint
# Runs ESLint on all JavaScript/JSX files
# Checks code quality and consistency
# Reports errors and warnings
```

### Fix Linting Issues
```bash
npm run lint -- --fix
# Auto-fixes fixable ESLint issues
# Manual fixes required for complex issues
```

---

## 🌐 Deployment

### Vercel (Recommended)

**This portfolio is deployed on Vercel** - the easiest way to deploy Next.js apps.

**Steps:**
1. Push code to GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
6. Add environment variables:
   - `MAIL_HOST`
   - `MAIL_USER`
   - `MAIL_PASS`
7. Click "Deploy"

**Automatic Deployments:**
- Every push to `main` branch triggers new deployment
- Preview deployments for pull requests
- Instant rollback available

**Custom Domain:**
- Add custom domain in Vercel project settings
- Update DNS records as instructed
- SSL certificate auto-generated

---

### Other Platforms

#### Netlify
```bash
# Build command
npm run build

# Publish directory
.next

# Add environment variables in Netlify dashboard
```

#### AWS Amplify
```bash
# Follow AWS Amplify deployment guide
# Connect GitHub repository
# Configure build settings
# Add environment variables
```

#### Self-Hosted
```bash
# Build production version
npm run build

# Start server
npm run start

# Use PM2 for process management
pm2 start npm --name "ivan-portfolio" -- start

# Nginx reverse proxy (port 3000 → 80/443)
```

---

## 🏗️ Project Architecture

### Component Philosophy

**Atomic Design Principles:**
- **Common** - Smallest reusable components (Magnetic, RoundedButton)
- **Components** - Larger sections composed of common components
- **Pages** - Full pages composed of multiple components
- **Layouts** - Page structure wrappers

**File Organization:**
```
ComponentName/
├── ComponentName.jsx       # React component
├── style.module.scss       # Scoped styles
└── animation.js            # Animation logic (if complex)
```

---

### Data Flow

**Project Data:**
- Stored as arrays/objects in component files
- No external CMS (static data)
- Easy to update directly in code

**Form Submission:**
```
ContactSection (Client)
  ↓ POST request
API Route /api/sendMail (Server)
  ↓ Nodemailer
Email sent to recipient
  ↓ Response
Success/Error message (Client)
```

---

### Styling Strategy

**SCSS Modules:**
```scss
// style.module.scss
.container {
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.button {
  background: var(--primary-color);

  &:hover {
    background: var(--primary-dark);
  }
}
```

**Usage:**
```jsx
import styles from './style.module.scss';

<div className={styles.container}>
  <button className={styles.button}>Click</button>
</div>
```

**Benefits:**
- Scoped class names (no conflicts)
- Variables for consistency
- Nesting for readability
- Media queries inline
- Auto-prefixing for browser compatibility

---

### Performance Optimizations

1. **Next.js Image Component**
   - Automatic image optimization
   - Lazy loading below fold
   - Responsive images (srcset)
   - WebP format when supported

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based splitting (automatic)
   - Reduced initial bundle size

3. **Server Components**
   - Zero JavaScript sent for static content
   - Faster initial page load
   - SEO benefits

4. **Animation Optimization**
   - GSAP quickTo() for 60fps cursor following
   - Transform/opacity for GPU acceleration
   - Conditional animations (desktop vs mobile)
   - requestAnimationFrame for smooth loops

5. **Asset Optimization**
   - Sharp for image processing
   - Minified CSS/JS in production
   - Tree-shaking unused code

---

## 🤝 Contributing

This is a **personal portfolio project** owned by Ivan Petrov.

**Contributions are not accepted from third parties.**

For inquiries or collaboration opportunities, please use the [contact form](https://ivan-petrov-portfolio.vercel.app/contact).

---

## 📄 License

This project is for **personal demonstration purposes only**.

**All rights reserved** - Ivan Petrov

Please reach out before reusing major components or expanding upon the codebase.

No explicit open-source license is attached.

---

## 📞 Contact

**Ivan Petrov**

- **Email:** yohanpetrov@gmail.com
- **Phone:** +33 6 18 02 64 70
- **Portfolio:** [https://ivan-petrov-portfolio.vercel.app](https://ivan-petrov-portfolio.vercel.app)

**Freelance Platforms:**
- [Comet](https://www.comet.co/)
- [Malt](https://www.malt.fr/)
- [Little Big Connection](https://www.littlebigconnection.com/)
- [Upwork](https://www.upwork.com/)

---

## 🙏 Acknowledgments

**Technologies:**
- [Next.js](https://nextjs.org/) - React framework
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Framer Motion](https://www.framer.com/motion/) - React animation library
- [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) - Smooth scrolling
- [Nodemailer](https://nodemailer.com/) - Email sending
- [Vercel](https://vercel.com/) - Deployment platform

**Design Inspiration:**
- Modern portfolio design trends
- Interactive web experiences
- Business-focused presentation

---

**Made with ❤️ by Ivan Petrov** • **© 2025**
