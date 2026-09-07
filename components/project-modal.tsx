"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, CheckCircle, ChevronLeft, ChevronRight, MessageCircle, ExternalLink } from "lucide-react";
import { Project, PERSONAL_INFO } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Background Click to Close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar with Title & Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-secondary/50">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-architectural-wood/15 text-architectural-wood border border-architectural-wood/30">
                {project.category}
              </span>
              <h3 className="font-display font-bold text-lg text-foreground truncate">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 space-y-6">
            
            {/* Main Interactive Gallery Viewer */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/20 border border-border/60">
              <Image
                src={project.gallery[currentImageIndex] || project.image}
                alt={`${project.title} imagen ${currentImageIndex + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 900px"
              />

              {/* Gallery Controls */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center backdrop-blur-sm transition-all shadow-md"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center backdrop-blur-sm transition-all shadow-md"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/70 text-white text-xs font-mono backdrop-blur-sm">
                    {currentImageIndex + 1} / {project.gallery.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {project.gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      currentImageIndex === idx
                        ? "border-architectural-wood scale-105"
                        : "border-border/60 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border/50 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-architectural-wood shrink-0" />
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-mono">Ubicación</span>
                  <span className="font-medium text-foreground">{project.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-architectural-wood shrink-0" />
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-mono">Año</span>
                  <span className="font-medium text-foreground">{project.year}</span>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-mono">Estado</span>
                  <span className="font-medium text-foreground">Completado &amp; Documentado</span>
                </div>
              </div>
            </div>

            {/* Narrative & Case Study Details */}
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-foreground font-display text-base">Descripción General</h4>
                <p className="text-muted-foreground mt-1">{project.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-border/60 bg-card">
                  <h5 className="font-semibold text-foreground text-xs uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400">
                    El Desafío
                  </h5>
                  <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border/60 bg-card">
                  <h5 className="font-semibold text-foreground text-xs uppercase font-mono tracking-wider text-emerald-600 dark:text-emerald-400">
                    La Solución
                  </h5>
                  <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="pt-2">
                <h4 className="font-bold text-foreground font-display text-sm mb-2">Aspectos Destacados &amp; Ejecución</h4>
                <ul className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-architectural-wood mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Tags */}
              <div className="pt-2 border-t border-border/50">
                <span className="text-[11px] font-mono text-muted-foreground uppercase block mb-2">
                  Herramientas &amp; Tecnologías Aplicadas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-secondary text-foreground text-xs border border-border font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 border-t border-border/60 bg-secondary/40 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              ¿Deseas una propuesta similar para tu espacio o negocio?
            </span>
            <a
              href={`${PERSONAL_INFO.whatsappUrl}%20sobre%20el%20proyecto%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background hover:bg-architectural-wood hover:text-black text-xs font-semibold transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Consultar Proyecto</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
