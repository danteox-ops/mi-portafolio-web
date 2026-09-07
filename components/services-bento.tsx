"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, Hammer, Code2, CheckCircle2, Layers, ArrowUpRight } from "lucide-react";
import { SERVICES, PERSONAL_INFO } from "@/data/portfolio-data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Hammer: <Hammer className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
};

export function ServicesBento() {
  return (
    <section id="servicios" className="py-24 bg-secondary/20 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-architectural-wood font-semibold">
            Servicios &amp; Soluciones Integrales
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">
            De la Concepción Espacial al Software de Producción
          </h2>
          <p className="text-muted-foreground text-sm mt-3">
            Un espectro de servicios que cubre el ciclo de vida completo del diseño arquitectónico, el mobiliario artesanal a medida y el desarrollo de sistemas digitales.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-7 rounded-2xl border border-border/70 bg-card hover:border-architectural-wood/60 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div>
                  {/* Top header within card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-architectural-wood group-hover:bg-architectural-wood group-hover:text-black transition-all">
                      {ICON_MAP[service.iconName] || <Compass className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground border border-border/60">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-foreground group-hover:text-architectural-wood transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-6 pt-5 border-t border-border/40">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-foreground/80 mb-3 font-semibold">
                      Entregables &amp; Alcance:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-architectural-wood mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 flex items-center justify-between border-t border-border/30">
                  <span className="text-xs text-muted-foreground font-mono">
                    Consultar cotización
                  </span>
                  <a
                    href={`${PERSONAL_INFO.whatsappUrl}%20acerca%20del%20servicio%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground group-hover:text-architectural-wood transition-colors"
                  >
                    <span>Solicitar Propuesta</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
