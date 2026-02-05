import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sugeshan S - Full-Stack Developer (MERN)",
  description: "I’m a passionate Computer Science and Engineering undergraduate with a strong curiosity for solving real-world problems through technology. Currently exploring web development (React, Node.js, MongoDB) and building projects ranging from e-commerce platforms to social impact solutions like emergency volunteer alert systems.",
  keywords: [
    "Sugeshan S",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Backend Developer",
    "Web Designer",
    "Web Developer",
    "Portfolio",
    "Technology Enthusiast",
    "Computer Science Student",
    "E-commerce Developer",
  ],
  authors: [{ name: "Sugeshan S" }],
  creator: "Sugeshan S",
  publisher: "Sugeshan S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sugeshanportfolio.vercel.app/home",
    title: "Sugeshan S - Full-Stack Developer (MERN)",
    description: "I’m a passionate Computer Science and Engineering undergraduate with a strong curiosity for solving real-world problems through technology. Currently exploring web development (React, Node.js, MongoDB) and building projects ranging from e-commerce platforms to social impact solutions like emergency volunteer alert systems.",
    siteName: "Sugeshan S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sugeshan S - Full-Stack Developer (MERN)",
    description: "I’m a passionate Computer Science and Engineering undergraduate with a strong curiosity for solving real-world problems through technology. Currently exploring web development (React, Node.js, MongoDB) and building projects ranging from e-commerce platforms to social impact solutions like emergency volunteer alert systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sugeshanportfolio.vercel.app/home" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
