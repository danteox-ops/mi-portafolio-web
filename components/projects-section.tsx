"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Compass, Hammer, Code, Layers, Eye } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio-data";
import { ProjectModal } from "./project-modal";

const CATEGORIES = [
  { label: "Todos", value: "all" },
  { label: "Interiorismo", value: "Interiorismo" },
  { label: "Arquitectura", value: "Arquitectura" },
  { label: "Carpintería", value: "Carpintería" },
  { label: "Desarrollo Web & QA", value: "Desarrollo Web" },
  { label: "Efímero", value: "Efímero" }
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const featuredProject = PROJECTS.find((p) => p.id === "romeros-pizza") || PROJECTS[0];

  return (
    <section id="proyectos" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-architectural-wood font-semibold">
              Portafolio de Proyectos
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">
              Obras &amp; Desarrollos Destacados
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mt-2">
              Explora una selección de espacios comerciales, viviendas bioclimáticas, mobiliario a medida y aplicaciones web desarrolladas con los más altos estándares.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-1.5 mt-6 md:mt-0 p-1 bg-secondary/60 rounded-full border border-border/60">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat.value
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero (Romero's Pizza) */}
        {activeCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 rounded-2xl overflow-hidden border border-border/80 bg-card shadow-xl group cursor-pointer"
            onClick={() => setSelectedProject(featuredProject)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Image Column */}
              <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-secondary">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-architectural-wood text-black shadow-md">
                    Caso de Estudio Destacado
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md border border-white/20">
                    {featuredProject.location}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/80 text-foreground px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-architectural-wood" />
                  <span>Click para ver planos &amp; galería</span>
                </div>
              </div>

              {/* Text Info Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-architectural-wood font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{featuredProject.category} · {featuredProject.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground group-hover:text-architectural-wood transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    {featuredProject.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      Detalles de Intervención:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-architectural-wood" />
                        <span>Mobiliario integrado a medida en carpintería de madera</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-architectural-wood" />
                        <span>Iluminación estratégica por capas (neutras y cálidas)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-architectural-wood" />
                        <span>Revestimientos de madera y celosías decorativas</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tools & CTA */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.tools.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/60">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground group-hover:text-architectural-wood">
                    <span>Ver Proyecto</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="rounded-xl overflow-hidden border border-border/70 bg-card hover:border-architectural-wood/60 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col group cursor-pointer"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-sm border border-white/20">
                    {project.category}
                  </span>

                  <span className="absolute bottom-3 left-3 text-xs text-white/90 font-mono">
                    {project.location} · {project.year}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-architectural-wood transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 2).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-secondary/80 text-[10px] font-mono text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <span className="font-semibold text-foreground group-hover:text-architectural-wood inline-flex items-center gap-1">
                      <span>Detalles</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
