import "./globals.css";
import { ReactNode } from "react";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Abdullahi Akinyoola | Portfolio",
  description: "A modern portfolio showcasing frontend development, UI/UX, and web application projects by Abdullahi Akinyool.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "UI/UX",
    "Web Developer Nigeria"
  ],
  openGraph: {
    title: "Abdullahi Akinyoola – Frontend Developer",
    description:
      "A modern portfolio showcasing frontend development and UI/UX projects.",
    url: "https://wdev-porfolio.vercel.app",
    siteName: "Akinyoola Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
