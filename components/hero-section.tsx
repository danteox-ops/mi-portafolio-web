"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, ShieldCheck, MapPin, Sparkles, Code, Compass, Hammer } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden architectural-grid">
      {/* Glow / Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-architectural-wood/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-architectural-cyan/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Verification & Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/80 text-foreground border border-border/70 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-architectural-wood" />
                <span>CPNAA A37512025-1067957304</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Disponible para proyectos</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-muted-foreground border border-border/50">
                <MapPin className="w-3 h-3 text-architectural-wood" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

            {/* Main Title & Headline */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-[0.25em] font-mono text-architectural-wood font-semibold">
                Portafolio Multidisciplinar
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-foreground leading-[1.1]">
                Arquitectura, Diseño &amp; <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-architectural-wood via-amber-500 to-amber-700 dark:from-architectural-wood dark:to-amber-200">
                  Tecnología Digital
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-light text-muted-foreground max-w-2xl leading-relaxed pt-2">
                Concebida por <strong className="font-semibold text-foreground">{PERSONAL_INFO.name}</strong>. 
                Fusión de sensibilidad espacial, maestría en carpintería e interiorismo de autor con arquitectura de software full stack y testing riguroso.
              </p>
            </div>

            {/* Disciplines Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-1">
              <div className="p-2.5 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm text-xs">
                <div className="flex items-center gap-1.5 text-architectural-wood font-semibold mb-0.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Arquitectura</span>
                </div>
                <span className="text-muted-foreground text-[11px]">Residencial &amp; Comercial</span>
              </div>
              <div className="p-2.5 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm text-xs">
                <div className="flex items-center gap-1.5 text-architectural-wood font-semibold mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interiorismo</span>
                </div>
                <span className="text-muted-foreground text-[11px]">Iluminación &amp; Atmósferas</span>
              </div>
              <div className="p-2.5 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm text-xs">
                <div className="flex items-center gap-1.5 text-architectural-wood font-semibold mb-0.5">
                  <Hammer className="w-3.5 h-3.5" />
                  <span>Carpintería</span>
                </div>
                <span className="text-muted-foreground text-[11px]">Mobiliario a Medida</span>
              </div>
              <div className="p-2.5 rounded-lg border border-border/60 bg-card/50 backdrop-blur-sm text-xs">
                <div className="flex items-center gap-1.5 text-architectural-wood font-semibold mb-0.5">
                  <Code className="w-3.5 h-3.5" />
                  <span>Full Stack &amp; QA</span>
                </div>
                <span className="text-muted-foreground text-[11px]">Web, BD &amp; Testing</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#proyectos"
                className="px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-architectural-wood hover:text-black transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group"
              >
                <span>Explorar Proyectos</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-border/80 bg-secondary/60 hover:bg-secondary text-foreground font-semibold text-sm transition-all inline-flex items-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Profile Image & Architectural Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative architectural frames */}
              <div className="absolute -inset-2.5 rounded-2xl border border-architectural-wood/30 -rotate-2 pointer-events-none" />
              <div className="absolute -inset-2.5 rounded-2xl border border-border/80 rotate-1 pointer-events-none" />

              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border/80 shadow-2xl p-3">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-secondary">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Gradient Overlay for subtle depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Floating info inside image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase font-mono tracking-widest text-architectural-wood font-medium">
                      Cartagena, CO
                    </p>
                    <h3 className="text-xl font-bold font-display leading-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">
                      Arquitecto CPNAA · Especialista en Espacios &amp; Código
                    </p>
                  </div>
                </div>

                {/* Bottom Metric Strip */}
                <div className="grid grid-cols-3 gap-2 pt-3 text-center border-t border-border/40 mt-3">
                  <div className="p-1.5">
                    <span className="block text-base font-bold font-mono text-architectural-wood">USB</span>
                    <span className="block text-[10px] text-muted-foreground uppercase">Arquitectura</span>
                  </div>
                  <div className="p-1.5 border-x border-border/40">
                    <span className="block text-base font-bold font-mono text-architectural-wood">CPNAA</span>
                    <span className="block text-[10px] text-muted-foreground uppercase">Matrícula</span>
                  </div>
                  <div className="p-1.5">
                    <span className="block text-base font-bold font-mono text-architectural-wood">100%</span>
                    <span className="block text-[10px] text-muted-foreground uppercase">Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
