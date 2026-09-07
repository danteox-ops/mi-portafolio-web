"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ShieldCheck, Heart } from "lucide-react";
import { PERSONAL_INFO, NAV_LINKS } from "@/data/portfolio-data";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/50">
          
          {/* Brand & CPNAA Info */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display font-bold tracking-wider text-xl text-foreground uppercase">
                {PERSONAL_INFO.name}
              </span>
              <span className="block text-xs font-mono tracking-widest text-architectural-wood uppercase mt-0.5">
                Arquitectura · Interiorismo · Carpintería · Full Stack &amp; QA
              </span>
            </Link>
            <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
              Integración de diseño espacial, rigor constructivo en madera noble y arquitectura de software de alta calidad. Cartagena, Colombia.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/60 border border-border/60 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-architectural-wood shrink-0" />
              <span>Matrícula Profesional CPNAA: <strong className="text-foreground font-mono">{PERSONAL_INFO.license}</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-architectural-wood transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-border/80 bg-secondary/50 hover:bg-secondary text-foreground hover:text-architectural-wood transition-all flex items-center gap-2 text-xs group"
              aria-label="Volver arriba"
            >
              <span>Volver Arriba</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Daniel Esteban Cantero Frías. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Universidad de San Buenaventura · Cartagena, Colombia</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
