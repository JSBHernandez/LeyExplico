"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight hover:text-[--accent] transition-colors">
            Ley Explico
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/leyes-coronadas" className="text-sm uppercase tracking-wider hover:text-[--accent] transition-colors">
              Leyes Coronadas
            </Link>
            <Link href="/proyectos-saltando" className="text-sm uppercase tracking-wider hover:text-[--accent] transition-colors">
              Proyectos Saltando
            </Link>
            <Link href="/entre-al-reinado" className="text-sm uppercase tracking-wider hover:text-[--accent] transition-colors">
              Entre al Reinado
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link 
                href="/leyes-coronadas" 
                className="text-sm uppercase tracking-wider hover:text-[--accent] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Leyes Coronadas
              </Link>
              <Link 
                href="/proyectos-saltando" 
                className="text-sm uppercase tracking-wider hover:text-[--accent] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Proyectos Saltando
              </Link>
              <Link 
                href="/entre-al-reinado" 
                className="text-sm uppercase tracking-wider hover:text-[--accent] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Entre al Reinado
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
