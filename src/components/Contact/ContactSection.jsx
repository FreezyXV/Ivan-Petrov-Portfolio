"use client";

import React, { useState } from "react";
import Image from "next/image";
import Magnetic from "../../common/Magnetic/Magnetic";
import IvanImage from "../../../public/images/IMG_7197.JPG";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userOrg: "",
    userServices: "",
    userMessage: "",
    honeypot: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: formData.userName,
          userEmail: formData.userEmail,
          userOrg: formData.userOrg,
          userServices: formData.userServices,
          userMessage: formData.userMessage,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        alert("Thank you! Your message was sent successfully.");

        setFormData({
          userName: "",
          userEmail: "",
          userOrg: "",
          userServices: "",
          userMessage: "",
          honeypot: "",
        });
      } else {
        alert(`Error: ${result.error || "Failed to send email"}`);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <div className={styles.contactShell}>
      {/* Row 1: Big Heading, Avatar & Arrow */}
      <div className={`${styles.layoutRow} ${styles.fadeUp}`}>
        <div className={styles.colLeft}>
          <h1 className={styles.mainHeading}>
            <span>Let’s collaborate to create something amazing!</span>
          </h1>
        </div>

        <div className={styles.colRight}>
          <div className={styles.circleAvatar}>
            <Image
              src={IvanImage}
              alt="Ivan Petrov"
              priority
              className={styles.photo}
            />
          </div>
          <div className={styles.pointerIcon}>
            {/* Example arrow icon */}
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="arrow-up-right"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-1019.000000, -279.000000)"
                  stroke="#fff"
                  strokeWidth="1.5"
                >
                  <g
                    transform="translate(1026.000000, 286.000000) rotate(90.000000)
                               translate(-1026.000000, -286.000000)
                               translate(1020.000000, 280.000000)"
                  >
                    <polyline points="2.76923077 0 12 0 12 9.23076923" />
                    <line x1="12" y1="0" x2="0" y2="12" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Row 2: Form (left) & Contact Info (right) */}
      <div className={`${styles.layoutRow} ${styles.fadeUp}`}>
        {/* Left side: the contact form */}
        <div className={styles.colLeft}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            {/* Honeypot field (hidden) */}
            <div className={styles.hiddenField}>
              <label htmlFor="honeypot" className={styles.fieldLabel}>
                Phone Number
              </label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                tabIndex={-1}
                value={formData.honeypot}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>

            {/* Form fields */}
            {[
              {
                idx: "01",
                label: "What's your name ?",
                name: "userName",
                type: "text",
                placeholder: "John Doe *",
              },
              {
                idx: "02",
                label: "What's your email ?",
                name: "userEmail",
                type: "email",
                placeholder: "john@doe.com *",
              },
              {
                idx: "03",
                label: "What's the name of your organization ?",
                name: "userOrg",
                type: "text",
                placeholder: "John & Doe ®",
              },
              {
                idx: "04",
                label: "What services are you looking for ?",
                name: "userServices",
                type: "text",
                placeholder: "Web Design, Website Development ...",
              },
              {
                idx: "05",
                label: "Write your message",
                name: "userMessage",
                type: "textarea",
                placeholder: "Hello Ivan, can you help me with ... *",
                rows: 8,
              },
            ].map((field) => (
              <div className={styles.formRow} key={field.idx}>
                <h5 className={styles.fieldNumber}>{field.idx}</h5>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor={field.name}>
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={field.rows || 5}
                      required
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={styles.inputField}
                    />
                  )}
                </div>
              </div>
            ))}

            {/* Submit */}
            <div className={styles.formAction}>
              <button type="submit" className={styles.submitButton}>
                Send it!
              </button>
            </div>
          </form>
        </div>

        <div className={styles.colRight}>
          <div className={styles.infoBlock}>
            <h5 className={styles.infoHeading}>Contact Details</h5>
            <ul className={styles.infoList}>
              <Magnetic>
                <li>
                  <a href="mailto:ivanxpetrov.dev@gmail.com">
                    ivanxpetrov.dev@gmail.com
                  </a>
                </li>
              </Magnetic>
              <Magnetic>
                <li>
                  <a href="tel:+330619054204">+33 06 19 05 42 04</a>
                </li>
              </Magnetic>
            </ul>
          </div>
          <div className={styles.infoBlock}>
            <h5 className={styles.infoHeading}>Business Details</h5>
            <ul className={styles.infoList}>
              <li>Freelance Full-Stack Developer</li>
              <li>Based in Paris, Open to Remote Work</li>
            </ul>
          </div>
          <div className={styles.infoBlock}>
            <h5 className={styles.infoHeading}>Hire me via platform</h5>
            <ul className={styles.infoList}>
              {[
                {
                  name: "Comet",
                  href: "https://app.comet.co/freelancer/profile",
                },
                {
                  name: "Malt",
                  href: "https://www.malt.fr/profile/ivanpetrov",
                },
                {
                  name: "Little Big Connection",
                  href: "https://www.littlebigconnection.com/v2/supplier/my-profile",
                },
                {
                  name: "Upwork",
                  href: "https://www.upwork.com/freelancers/ivanp146",
                },
              ].map((platform, index) => (
                <Magnetic key={index}>
                  <li>
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.name}
                    </a>
                  </li>
                </Magnetic>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
