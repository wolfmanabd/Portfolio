"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./Themetoggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-(--bg) border-b border-white/10 shadow-md transition-all duration-300 ${
        shrink ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 transition-all duration-300">
        
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center font-extrabold transition-all duration-300 ${
            shrink ? "text-xl" : "text-2xl"
          }`}
        >
          <span className="text-(--primary)">W</span>
          <span
            className="ml-[-3px]"
            style={{ color: "var(--primary)" }}
          >
            .Dev
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex items-center gap-10 font-medium transition-all duration-300 ${
            shrink ? "text-base" : "text-lg"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition text-(--text) hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle />

          <a
            href="#contact"
            className="px-5 py-3 rounded-md text-white transition-all duration-300"
            style={{
              background: "var(--primary)",
              fontSize: shrink ? "0.9rem" : "1rem",
              padding: shrink ? "0.6rem 1rem" : "0.75rem 1.25rem",
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-(--text)"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-(--bg) border-b border-white/10 shadow-lg"
          >
            <div className="flex flex-col items-center p-6 space-y-6 text-lg font-medium">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-(--text) hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}

              <ThemeToggle />

              <a
                href="#contact"
                className="px-5 py-3 rounded-md text-white font-medium"
                style={{ background: "var(--primary)" }}
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
