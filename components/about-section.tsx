"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, GraduationCap, Building2, Layers, Cpu, Wrench } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 bg-secondary/30 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-architectural-wood font-semibold">
            Perfil Profesional &amp; Credenciales
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">
            La Unión entre el Espacio Físico y la Arquitectura Digital
          </h2>
          <div className="w-16 h-1 bg-architectural-wood mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
              Arquitecto, Diseñador de Interiores, Ebanista &amp; Desarrollador Full Stack
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                Soy <strong className="text-foreground">Daniel Esteban Cantero Frías</strong>, arquitecto egresado de la 
                Universidad de San Buenaventura con matrícula profesional vigente expedida por el CPNAA. Mi trayectoria 
                combina la rigurosidad técnica de la arquitectura formal con una profunda sensibilidad por el interiorismo y 
                el oficio de la carpintería fina a medida.
              </p>
              <p>
                Paralelamente, he expandido mi horizonte hacia el <strong className="text-foreground">Desarrollo Web Full Stack y el QA Testing</strong>. 
                Entiendo la construcción de software con la misma filosofía que una edificación: estructura sólida, cimientos limpios (Backend y Bases de Datos), 
                estética funcional (Frontend moderno) y control de calidad exhaustivo para garantizar resistencia y durabilidad.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 text-foreground font-semibold mb-1">
                  <Building2 className="w-4 h-4 text-architectural-wood" />
                  <span>Espacialidad Sensorial</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Proyectos pensados para ser vividos, cuidando la luz natural, la acústica y el confort térmico.
                </p>
              </div>
              
              <div className="p-4 rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 text-foreground font-semibold mb-1">
                  <Wrench className="w-4 h-4 text-architectural-wood" />
                  <span>Carpintería de Precisión</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Detalles constructivos y ensamble de mobiliario a medida con maderas de alta gama.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 text-foreground font-semibold mb-1">
                  <Cpu className="w-4 h-4 text-architectural-wood" />
                  <span>Arquitectura de Software</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Frontend responsivo, APIs en Node.js, modelado de Bases de Datos y lógica escalable.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 text-foreground font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-architectural-wood" />
                  <span>Aseguramiento QA</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Testing riguroso y validación de casos de uso para software sin errores en producción.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials & Education Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Acreditaciones Oficiales
            </h4>

            {PERSONAL_INFO.education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-border/80 bg-card shadow-sm hover:border-architectural-wood/60 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-architectural-wood group-hover:scale-105 transition-transform">
                      {idx === 2 ? (
                        <Award className="w-5 h-5" />
                      ) : (
                        <GraduationCap className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground text-sm group-hover:text-architectural-wood transition-colors">
                        {item.degree}
                      </h5>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 whitespace-nowrap">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verificado</span>
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono">{item.status}</span>
                  <span className="text-[11px] font-medium text-architectural-wood">Oficial</span>
                </div>
              </motion.div>
            ))}

            {/* Quick Summary Callout */}
            <div className="p-4 rounded-xl border border-architectural-wood/30 bg-architectural-wood/5 text-xs text-foreground/90 flex items-center gap-3">
              <Layers className="w-5 h-5 text-architectural-wood shrink-0" />
              <span>
                Registro profesional ante el <strong>Consejo Profesional Nacional de Arquitectura (CPNAA)</strong> para ejercicio legal y firma de planos en toda Colombia.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
