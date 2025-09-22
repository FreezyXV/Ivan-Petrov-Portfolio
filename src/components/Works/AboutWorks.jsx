"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Rounded from "@/common/RoundedButton/RoundedButton";
import styles from "./AboutWorks.module.scss";
import Modal from "./Modal";
import useIsDesktop from "@/hooks/useIsDesktop";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const allTechnologies = [
  {
    name: "Agile",
    icon: "/images/Agile.png",
    description:
      "A methodology for iterative development that promotes flexibility and collaboration in software projects.",
  },
  {
    name: "CSS",
    icon: "/images/CSS.png",
    description:
      "Stylesheet language used to describe the presentation of a document written in HTML or other markup languages.",
  },
  {
    name: "Drupal",
    icon: "/images/Drupal.png",
    description:
      "A powerful open-source content management framework used to build complex, data-rich websites.",
  },
  {
    name: "Express",
    icon: "/images/Express.png",
    description:
      "A minimal and flexible Node.js web application framework providing robust features for web and mobile applications.",
  },
  {
    name: "HTML",
    icon: "/images/HTML.png",
    description:
      "Standard markup language forming the structure of your application’s front end.",
  },
  {
    name: "JavaScript",
    icon: "/images/JavaScript.png",
    description:
      "A high-level, dynamic programming language enabling interactive web pages and server-side scripting.",
  },
  {
    name: "Jest",
    icon: "/images/Jest.png",
    description:
      "A JavaScript testing framework designed to ensure correctness of any JS codebase.",
  },
  {
    name: "Jira",
    icon: "/images/Jira.png",
    description:
      "A project management tool used for tracking issues, managing agile teams, and supporting project delivery.",
  },
  {
    name: "jQuery",
    icon: "/images/jQuery.png",
    description:
      "A fast, small, and feature-rich JavaScript library that simplifies HTML DOM manipulation, event handling, and Ajax.",
  },
  {
    name: "JWT",
    icon: "/images/JWT.png",
    description:
      "JSON Web Tokens are used for securely transmitting information between parties as a JSON object.",
  },
  {
    name: "MongoDB",
    icon: "/images/MongoDB.png",
    description:
      "A NoSQL database offering high performance, high availability, and easy scalability.",
  },
  {
    name: "Mongoose",
    icon: "/images/Mongoose.png",
    description:
      "An ODM library for MongoDB in Node.js, simplifying data modeling and validation.",
  },
  {
    name: "MySQL",
    icon: "/images/MySQL.png",
    description:
      "A widely used open-source relational database management system for structured data.",
  },
  {
    name: "Next.js",
    icon: "/images/Next.png",
    description:
      "A React framework for production that simplifies building full-stack apps (SSR & SSG).",
  },
  {
    name: "Node.js",
    icon: "/images/Node.png",
    description:
      "A JavaScript runtime built on Chrome's V8 engine, ideal for building scalable network applications.",
  },
  {
    name: "Nodemailer",
    icon: "/images/NodeMailer.png",
    description:
      "A Node.js module allowing easy email sending with HTML support, attachments, and more.",
  },
  {
    name: "React.js",
    icon: "/images/React.png",
    description:
      "A JavaScript library for building user interfaces, widely used for interactive web applications.",
  },
  {
    name: "Redux",
    icon: "/images/Redux.png",
    description:
      "A predictable state container for JavaScript apps, commonly used with React for state management.",
  },
  {
    name: "REST API",
    icon: "/images/API.png",
    description:
      "A style of web architecture that uses stateless, client-server communications for structured endpoints.",
  },
  {
    name: "Stripe",
    icon: "/images/Stripe.png",
    description:
      "A payment processing platform for online businesses, enabling secure transactions and subscriptions.",
  },
  {
    name: "SwiftUi",
    icon: "/images/SwiftUI.png",
    description:
      "Apple’s modern declarative UI framework for building apps across iOS, macOS, tvOS, and watchOS.",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/Tailwind.png",
    description:
      "A utility-first CSS framework for rapidly building custom designs directly in your markup.",
  },
  {
    name: "TDD",
    icon: "/images/TDD.png",
    description:
      "Test-Driven Development involves writing tests before code to encourage cleaner architecture and robust software.",
  },
  {
    name: "TypeScript",
    icon: "/images/TypeScript.png",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript, adding static typing for more robust code.",
  },
  {
    name: "Vite",
    icon: "/images/Vite.png",
    description:
      "A fast build tool that offers an extremely quick development environment for modern front-end projects.",
  },
  {
    name: "Vue.js",
    icon: "/images/Vue.png",
    description:
      "A progressive JavaScript framework for building user interfaces, emphasizing approachability and versatility.",
  },

  {
    name: "Angular",
    icon: "/images/Angular.png",
    description:
      "A TypeScript-based open-source web application framework developed by Google, ideal for building dynamic single-page applications.",
  },
  {
    name: "PHP",
    icon: "/images/PHP.png",
    description:
      "A widely-used open-source scripting language especially suited for web development and server-side programming.",
  },
  {
    name: "Laravel",
    icon: "/images/Laravel.png",
    description:
      "A PHP web framework that simplifies development with expressive syntax, built-in tools, and strong support for MVC architecture.",
  },
  {
    name: "PostgreSQL",
    icon: "/images/PostgreSQL.png",
    description:
      "An advanced open-source relational database system known for reliability, extensibility, and standards compliance.",
  },
  {
    name: "Vercel",
    icon: "/images/Vercel.png",
    description:
      "A cloud platform optimized for frontend frameworks like Next.js, enabling fast deployments and global edge hosting.",
  },
  {
    name: "Fly.Io",
    icon: "/images/FlyIO.png",
    description:
      "A global application platform that lets you deploy apps and databases close to your users, running on edge servers worldwide.",
  },
  {
    name: "ClaudeAI",
    icon: "/images/ClaudeAI.png",
    description:
      "An AI assistant developed by Anthropic, designed for natural conversations, reasoning, and helping with complex tasks safely.",
  },

];

const featuredProjects = [
  {
    title: "TotalEnergies Lubricants & ELF Lubricants",
    image: "/images/TotalEnergiesELF.png",
    description:
      "Spearheaded the migration of three Drupal sites encompassing over 98 pages in just three months. Focus was on brand consistency, responsive design, and enhanced SEO.",
    techUsed: ["HTML", "CSS", "JavaScript", "Drupal", "Agile", "Jira"],
  },
  {
    title: "Burger Town E-Commerce",
    image: "/images/BurgerTownLogo.png",
    description:
      "Developed a custom MERN stack e-commerce platform with an intuitive checkout, dynamic listings, mobile optimization, and real-time inventory updates.",
    techUsed: [
      "React.js",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Nodemailer",
    ],
  },
  {
    title: "Hi Tech Store E-Commerce",
    image: "/images/HiTechStoreLogo.png",
    description:
      "Built a secure storefront using React & Node.js, with Stripe payment integration, robust database architecture, and adaptive layouts.",
    techUsed: [
      "React.js",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Stripe",
      "Redux",
      "Jest",
    ],
  },
  {
    title: "Fitness Pro",
    image: "/images/FitnessProSimple.png",
    description:
      "Built a secure storefront Fitness App using PHP Laravel & Angular, with Sanctum authentication, PostgreSQL database architecture, and adaptive layouts.",
    techUsed: [
      "PHP",
      "Laravel",
      "Angular",
      "PostgreSQL",
      "Vercel",
      "Fly.io",
      "ClaudeAI",
    ],
  },
];

export default function AboutWorks() {
  const isDesktop = useIsDesktop(1024);
  const router = useRouter();

  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectModal, setProjectModal] = useState(null);

  const handleProjectClick = (project) => setProjectModal(project);
  const closeProjectModal = () => setProjectModal(null);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  const closeTechModal = () => {
    setSelectedTech(null);
    setIsModalOpen(false);
  };

  return (
    <section className={styles.aboutWorks}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={isDesktop ? fadeInUpVariants : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
        >
          <h2 className={styles.sectionTitle}>
            About My Work{" "}
            <Image
              src="/images/BlackFlack.png"
              alt="BlackFlack Logo"
              width={150}
              height={150}
              className={styles.image}
              style={{ objectFit: "contain", verticalAlign: "middle" }}
            />
          </h2>
          <p className={styles.sectionDescription}>
            Over the years, I’ve tackled diverse projects—from redesigning
            enterprise-level Drupal sites to building custom e-commerce
            platforms. Whether it’s a slick restaurant ordering system or a
            large-scale corporate migration, my aim is the same: deliver modern,
            scalable solutions that outperform expectations.
          </p>

          {/* FEATURED PROJECTS */}
          <div className={styles.worksDescription}>
            <h2>
              Featured Projects{" "}
              <Image
                src="/images/BlackStars.png"
                alt="BlackStars Logo"
                width={100}
                height={100}
                className={styles.image}
                style={{ objectFit: "contain", verticalAlign: "middle" }}
              />
            </h2>
            <div className={styles.cardsContainer}>
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  className={`${styles.card} ${styles.clickableCard}`}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Card Image */}
                  <div className={styles.cardImage}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      className={styles.image}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  {/* Card Content */}
                  <div className={styles.cardContent}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  {/* Action Button */}
                  <button
                    className={styles.cardButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    <i className="fas fa-arrow-right">
                      <p className={styles.cardBtnText}>Click</p>
                    </i>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.techStack}
          variants={isDesktop ? fadeInUpVariants : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
        >
          <h3 className={styles.techTitle}>
            Technologies I Work With{" "}
            <Image
              src="/images/AbstractLines.png"
              alt="Abstract Lines"
              width={150}
              height={150}
              className={styles.image}
              style={{ objectFit: "contain", verticalAlign: "middle" }}
            />
          </h3>
          <div className={styles.techList}>
            {allTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className={styles.techItem}
                variants={isDesktop ? fadeInUpVariants : {}}
                initial={isDesktop ? "hidden" : false}
                whileInView={isDesktop ? "visible" : false}
                viewport={isDesktop ? { once: false, amount: 0.5 } : {}}
                whileHover={
                  isDesktop ? { marginBottom: 10, rotate: 5, scale: 1.2 } : {}
                }
                onClick={() => handleTechClick(tech)}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={50}
                  height={50}
                  className={styles.btnImage}
                />
                <p>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.skills}
          variants={isDesktop ? fadeInUpVariants : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
        >
          <h3 className={styles.skillsTitle}>Skills & Expertise</h3>
          <ul className={styles.skillsList}>
            <li>Full-Stack Development with the MERN Stack</li>
            <li>Drupal Integrations & Customization</li>
            <li>Automated Testing & Quality Assurance</li>
            <li>Agile Project Management & Jira</li>
            <li>Building Scalable and Secure APIs</li>
            <li>Advanced JavaScript and React Development</li>
            <li>Payment Integration using Stripe</li>
            <li>Database Design and Optimization with MongoDB</li>
            <li>Performance Optimization</li>
            <li>Responsive Web Design & UX Best Practices</li>
          </ul>
          <Image
            src="/images/WhiteCubeTransparent.gif"
            alt=""
            width={250}
            height={250}
            className={styles.whiteCube}
            style={{ objectFit: "contain", verticalAlign: "middle" }}
          />
        </motion.div>

        <motion.div
          className={styles.projectsInsight}
          variants={isDesktop ? fadeInUpVariants : {}}
          initial={isDesktop ? "hidden" : false}
          whileInView={isDesktop ? "visible" : false}
          viewport={isDesktop ? { once: false, amount: 0.3 } : {}}
        >
          <h3 className={styles.insightTitle}>
            What Drives My Work{" "}
            <Image
              src="/images/Pyramid.gif"
              alt="Abstract Lines"
              width={150}
              height={150}
              className={styles.image}
              style={{ objectFit: "contain", verticalAlign: "middle" }}
            />
          </h3>
          <p className={styles.insightText}>
            I’m driven by solving complex problems and creating seamless,
            intuitive digital experiences. My approach is to understand the
            client's needs first, then tailor every part of the project to meet
            those goals while ensuring the best user experience possible.
          </p>
          <div className={styles.buttonDiv}>
            <Rounded onClick={() => router.push("/contact")}>
              <p>Let’s Work Together</p>
            </Rounded>
          </div>
        </motion.div>

        {selectedTech && (
          <Modal
            tech={selectedTech}
            isOpen={isModalOpen}
            onClose={closeTechModal}
          />
        )}

        {projectModal && (
          <div
            className={styles.projectModalOverlay}
            onClick={closeProjectModal}
          >
            <motion.div
              className={styles.projectModal}
              onClick={(e) => e.stopPropagation()}
              initial={isDesktop ? { opacity: 0, y: 50 } : {}}
              animate={isDesktop ? { opacity: 1, y: 0 } : {}}
              exit={isDesktop ? { opacity: 0, y: 50 } : {}}
              transition={isDesktop ? { duration: 0.4, ease: "easeOut" } : {}}
            >
              <h2>Technologies Used</h2>
              <ul className={styles.techUsedList}>
                {projectModal.techUsed.map((techName) => {
                  const foundTech = allTechnologies.find(
                    (t) => t.name === techName
                  );
                  return (
                    <li key={techName} className={styles.techUsedItem}>
                      {foundTech ? (
                        <Image
                          src={foundTech.icon}
                          alt={foundTech.name}
                          width={150}
                          height={150}
                          style={{ objectFit: "contain" }}
                          className={styles.image}
                        />
                      ) : (
                        <span>{techName}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
              <Rounded onClick={closeProjectModal}>
                <p>Close</p>
              </Rounded>
            </motion.div>
          </div>
        )}

        <motion.div
          style={isDesktop ? { height } : {}}
          className={styles.circleContainer}
        >
          {isDesktop && <div className={styles.circle}></div>}
        </motion.div>
      </div>
    </section>
  );
}
