import { useState } from "react";
import { Menu, X } from "lucide-react";

import SocialLinks from "./SocialLinks.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-800/50
        bg-slate-950/80
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-r
              from-sky-500
              to-cyan-400
              font-bold
              text-white
              shadow-lg
              shadow-sky-500/20
            "
          >
            AT
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Ankit Tripathi
            </h1>

            <p className="text-xs text-slate-400">
              Backend Engineer • AI Systems Builder
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-slate-300 transition hover:text-sky-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-slate-300 transition hover:text-sky-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-slate-300 transition hover:text-sky-400"
          >
            Projects
          </a>

          <a
            href="#architecture"
            className="text-slate-300 transition hover:text-sky-400"
          >
            Architecture
          </a>

          <a
            href="#contact"
            className="text-slate-300 transition hover:text-sky-400"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden md:block">
          <SocialLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-white
            transition
            hover:text-sky-400
          "
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            border-t
            border-slate-800
            bg-slate-950/95
            backdrop-blur-xl
            md:hidden
          "
        >
          <nav className="flex flex-col p-6">

            <a
              href="#about"
              onClick={closeMenu}
              className="
                py-3
                text-slate-300
                transition
                hover:text-sky-400
              "
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="
                py-3
                text-slate-300
                transition
                hover:text-sky-400
              "
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="
                py-3
                text-slate-300
                transition
                hover:text-sky-400
              "
            >
              Projects
            </a>

            <a
              href="#architecture"
              onClick={closeMenu}
              className="
                py-3
                text-slate-300
                transition
                hover:text-sky-400
              "
            >
              Architecture
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                py-3
                text-slate-300
                transition
                hover:text-sky-400
              "
            >
              Contact
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}