"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const sections = ["home", "about", "lab", "contact"];

export default function Header(): React.JSX.Element {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navClass = (id: string) =>
    `px-4 py-2 rounded-md text-sm transition-all duration-300 ${
      active === id
        ? "bg-black text-purple-400 border border-purple-500/60 shadow-[0_0_14px_rgba(168,85,247,0.6)]"
        : "text-white hover:text-purple-400"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo/image.png"
              alt="Logo"
              width={150}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          <ul className="flex items-center gap-4">
            <li>
              <Link href="#home" className={navClass("home")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={navClass("about")}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#lab" className={navClass("lab")}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className={navClass("contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
