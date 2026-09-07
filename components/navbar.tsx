"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolio-data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/85 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-display font-bold tracking-wider text-base sm:text-lg text-foreground uppercase group-hover:text-architectural-wood transition-colors">
            Daniel Cantero
          </span>
          <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-mono">
            Arq · Interiorismo · Full Stack
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-secondary/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-border/50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-foreground/80 hover:text-architectural-wood px-3 py-1.5 rounded-full transition-colors hover:bg-background/60"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-foreground text-background hover:bg-architectural-wood hover:text-black transition-all shadow-sm group"
          >
            <MessageCircle className="w-3.5 h-3.5 text-architectural-wood group-hover:text-black transition-colors" />
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-foreground hover:bg-secondary border border-border/40 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/80 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-architectural-wood py-2 border-b border-border/30 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-foreground text-background font-medium text-sm flex items-center justify-center gap-2 hover:bg-architectural-wood hover:text-black transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-architectural-wood" />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
