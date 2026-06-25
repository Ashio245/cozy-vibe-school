"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Start Here", path: "/start" },
    { name: "Learning Path", path: "/path" },
    { name: "Lessons", path: "/lessons" },
    { name: "Prompt Library", path: "/prompts" },
    { name: "Journal", path: "/journal" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="header-wrapper">
      <div className="container header-container">
        <Link href="/" className="logo-link" onClick={closeMenu}>
          🌱 <span>Cozy Vibe School</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="nav-links">
          {navItems.map((item) => {
            const isActive = pathname === item.path || pathname.startsWith(item.path + "/");
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(item.path + "/");
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
              style={{ fontSize: "1.1rem", padding: "8px 0" }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
