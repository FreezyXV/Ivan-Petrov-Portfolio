import "./globals.scss";
import { Inter, DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-dm-sans'
});

export const metadata = {
  title: "Ivan Petrov — Business Analyst | Functional Scoping & Digital Transformation",
  description: "Business Analyst. Functional scoping, user stories, UAT and change management. Led the web ecosystem migration for TotalEnergies Lubricants: 98 user stories, 95% UAT acceptance, +26% leads. Paris & Luxembourg.",
  keywords: "Business Analyst, AMOA, MOA, functional scoping, user stories, functional specifications, UAT, BPMN, Agile Scrum, Jira, Confluence, Paris, Luxembourg",
  openGraph: {
    title: "Ivan Petrov — Business Analyst",
    description: "Functional scoping, user stories, UAT and change management. Ex-TotalEnergies. Paris & Luxembourg.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
