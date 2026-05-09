"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const navLinks = [
  { name: "HOME", href: "#home", active: true },
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT US", href: "#about" },
  { name: "HOW WE WORK", href: "#why-choose-us" },
  { name: "CONTACT", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Vertical Separator */}
          <div className="hidden lg:block w-px h-20 bg-gray-300 mx-6"></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors ${
                    link.active 
                      ? "text-[#e31837]" 
                      : "text-[#0a1628] hover:text-[#e31837]"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Red underline for active link */}
                {link.active && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e31837] rounded-t"></div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <Link
              href="#contact"
              className="bg-[#e31837] hover:bg-[#c41430] text-white px-6 py-2.5 font-bold text-sm uppercase transition-colors"
            >
              GET A DISPATCHER
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0a1628]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0a1628]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase ${
                    link.active ? "text-[#e31837]" : "text-[#0a1628]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-[#e31837] text-white px-5 py-2.5 rounded text-sm font-bold uppercase text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                GET A DISPATCHER
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
