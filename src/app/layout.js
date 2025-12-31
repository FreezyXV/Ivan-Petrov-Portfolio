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
  title: "Ivan Petrov - Product Owner",
  description: "Product Owner with 7+ years experience. AMOA expertise and full-stack development skills (Laravel, MERN, Angular, Next.js). Based in Paris.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${dmSans.variable}`}>
      <head>
        {/* Critical for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Your favicons, manifest, etc. */}
        <link rel="icon" href="/Ivan-Petrov-Portfolio/src/app/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <title>Ivan Petrov - Product Owner Portfolio</title>
        <meta name="description" content="Product Owner with 7+ years experience in Product Strategy. AMOA expertise and full-stack development skills (Laravel, MERN, Angular, Next.js). Based in Paris, available for freelance & contract missions." />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
