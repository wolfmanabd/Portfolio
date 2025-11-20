"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6  transition duration-300"
    >
      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-(--text) mb-12">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT SIDE: Contact Info */}
        <div
          className="p-8 rounded-2xl bg-(--background) transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-(--text) mb-6">
            Get In Touch
          </h3>

          <p className="text-(--text) leading-relaxed mb-8">
            Feel free to reach out for collaborations, projects, or inquiries. I
            usually respond within a few hours.
          </p>

          <div className="space-y-5">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <Mail className="text-neutral-700 dark:text-neutral-300" />
              </div>
              <p className="text-(--text) text-sm">
                wolfmanabd@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <Phone className="text-neutral-700 dark:text-neutral-300" />
              </div>
              <p className="text-(--text) text-sm">
                +234 70 4831 1989
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <MapPin className="text-neutral-700 dark:text-neutral-300" />
              </div>
              <p className="text-(--text) text-sm">
                Sokoto, Nigeria
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-5 flex-wrap">
            {/* Facebook */}
            <a
              href="https://web.facebook.com/profile.php?id=61565127755379"
              className="p-3 rounded-full bg-(--secondary)/10
     shadow-sm border border-(--secondary) hover:scale-110 transition"
            >
              <Facebook className="text-(--text)" />
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/eliteexceptiona"
              className="p-3 rounded-full bg-(--secondary)/10
     shadow-sm border border-(--secondary) hover:scale-110 transition"
            >
              <Twitter className="text-(--text)" />
            </a>

            {/* LinkedIn */}
            <a
              href="www.linkedin.com/in/abdullahi-akinyoola-8a9505230"
              className="p-3 rounded-full bg-(--secondary)/10
     shadow-sm border border-(--secondary) hover:scale-110 transition"
            >
              <Linkedin className="text-(--text)" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/wolfmanabd/"
              className="p-3 rounded-full bg-(--secondary)/10
     shadow-sm border border-(--secondary) hover:scale-110 transition"
            >
              <Instagram className="text-(--text)" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/wolfmanabd"
              className="p-3 rounded-full bg-(--secondary)/10
     shadow-sm border border-(--secondary) hover:scale-110 transition"
            >
              <Github className="text-(--text)" />
            </a>

            {/* WhatsApp (SVG icon) */}
            <a
              href="https://wa.me/2347048311989"
              className="p-3 rounded-full bg-(--secondary)/10
     shadow-sm border border-(--secondary) hover:scale-110 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-(--text)"
              >
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12.05 0C5.45 0 .16 5.29.16 11.88c0 2.09.55 4.13 1.6 5.94L0 24l6.36-1.63a11.85 11.85 0 0 0 5.69 1.45h.01c6.59 0 11.88-5.29 11.88-11.88a11.82 11.82 0 0 0-3.42-8.46Zm-8.47 17.71h-.01a9.88 9.88 0 0 1-5.03-1.37l-.36-.21-3.77.97 1.01-3.67-.24-.38a9.86 9.86 0 0 1-1.51-5.28c0-5.45 4.44-9.88 9.89-9.88a9.83 9.83 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.87 9.88Zm5.45-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.19.3-.76.97-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.51-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.51-.07-.15-.66-1.61-.91-2.21-.24-.57-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.08 3.17 5.04 4.45.7.3 1.24.47 1.66.6.7.22 1.33.19 1.83.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.32.17-1.45-.07-.13-.27-.21-.56-.36Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <form
          className="p-8 rounded-2xl bg-(--background) shadow-lg 
          dark:shadow-none border border-neutral-200 dark:border-neutral-800
        transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-(--text) mb-6">
            Send a Message
          </h3>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-(--secondary) 
              dark:border-neutral-700 bg-(--background)
              text-(--text) focus:ring-2 
              focus:ring-primary outline-none transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-(--secondary) 
              dark:border-neutral-700 bg-(--background)
              text-(--text) focus:ring-2 
              focus:ring-primary outline-none transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-(--secondary) 
              dark:border-neutral-700 bg-(--background)
              text-(--text) focus:ring-2 
              focus:ring-primary outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 
              bg-(--secondary)text-(--text)
              font-semibold py-3 rounded-xl hover:opacity-90 transition"
            >
              Send Message <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
