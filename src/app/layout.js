import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ivan Petrov",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
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

        <title>Ivan Petrov Portfolio</title>
        <meta name="description" content="Personal portfolio of Ivan Petrov." />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
