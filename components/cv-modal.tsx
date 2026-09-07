"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, X, Printer, ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO, TECH_STACK, PROJECTS } from "@/data/portfolio-data";

export function CvModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 rounded-full border border-border/70 bg-card hover:bg-secondary hover:border-architectural-wood/60 text-foreground font-semibold text-xs transition-all inline-flex items-center gap-2 shadow-sm group"
      >
        <FileText className="w-4 h-4 text-architectural-wood group-hover:scale-110 transition-transform" />
        <span>Ver Curriculum Vitae (CV)</span>
      </button>

      {/* Modal View */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            {/* Overlay */}
            <div className="fixed inset-0" onClick={() => setIsOpen(false)} />

            {/* Document Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-background border border-border rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col"
            >
              {/* Actions Header Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-border/60 bg-secondary/60">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-architectural-wood" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                    Curriculum Vitae Oficial · Daniel Cantero
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="p-1.5 rounded-lg border border-border bg-card hover:bg-secondary text-foreground text-xs flex items-center gap-1.5 px-3 font-medium transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Imprimir / PDF</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Printable CV Document Content */}
              <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-foreground text-xs sm:text-sm bg-card">
                
                {/* Header Profile Summary */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-border/60">
                  <div className="space-y-1.5">
                    <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-foreground">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-sm font-semibold text-architectural-wood">
                      {PERSONAL_INFO.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-architectural-wood" />
                        {PERSONAL_INFO.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-architectural-wood" />
                        {PERSONAL_INFO.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-architectural-wood" />
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 relative w-20 h-20 rounded-xl overflow-hidden border-2 border-architectural-wood/60 shadow-md">
                    <Image
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* CPNAA Verification Banner */}
                <div className="p-3.5 rounded-xl bg-architectural-wood/10 border border-architectural-wood/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-architectural-wood shrink-0" />
                    <div>
                      <span className="font-bold text-foreground block text-xs">Matrícula Profesional Vigente</span>
                      <span className="text-muted-foreground text-[11px] font-mono">{PERSONAL_INFO.license} · CPNAA</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase font-mono border border-emerald-500/20">
                    Acreditado
                  </span>
                </div>

                {/* Perfil & Resumen */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-architectural-wood border-b border-border/40 pb-1">
                    Perfil Profesional
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs">
                    {PERSONAL_INFO.bio}
                  </p>
                </div>

                {/* Formación Académica */}
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-architectural-wood border-b border-border/40 pb-1">
                    Formación Académica &amp; Acreditaciones
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PERSONAL_INFO.education.map((edu, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-secondary/40 border border-border/40">
                        <span className="font-bold text-foreground block">{edu.degree}</span>
                        <span className="text-muted-foreground text-[11px] block">{edu.institution}</span>
                        <span className="text-architectural-wood font-mono text-[10px] mt-1 block">
                          Estado: {edu.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experiencia & Proyectos Clave */}
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-architectural-wood border-b border-border/40 pb-1">
                    Proyectos Destacados
                  </h3>
                  <div className="space-y-3">
                    {PROJECTS.slice(0, 3).map((proj) => (
                      <div key={proj.id} className="p-3 rounded-lg border border-border/40 bg-secondary/30">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-foreground">{proj.title}</span>
                          <span className="text-[10px] font-mono text-muted-foreground">{proj.year} · {proj.location}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{proj.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {proj.tools.map((t, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-background border border-border/60 text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competencias & Stack */}
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-architectural-wood border-b border-border/40 pb-1">
                    Stack Técnico &amp; Destrezas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TECH_STACK.map((tech, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-secondary/30 border border-border/40 text-xs">
                        <span className="font-bold text-foreground block mb-1 text-[11px] font-mono text-architectural-wood uppercase">
                          {tech.title}
                        </span>
                        <p className="text-muted-foreground text-[11px]">
                          {tech.skills.map((s) => s.name).join(", ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Bottom Bar */}
              <div className="p-4 border-t border-border/60 bg-secondary/50 flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">
                  Documento generado desde el portafolio oficial
                </span>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-lg bg-foreground text-background hover:bg-architectural-wood hover:text-black font-semibold text-xs flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar / Imprimir CV</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
