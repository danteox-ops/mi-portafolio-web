"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Box, FileCode, Boxes, Eye, Image as ImageIcon,
  Ruler, Wrench, TreePine, Settings,
  Code, Terminal, Palette, Sparkles, Globe,
  Server, Database, HardDrive, TerminalSquare, Table,
  CheckCircle2, ShieldCheck, Activity, Send, Bug
} from "lucide-react";
import { TECH_STACK } from "@/data/portfolio-data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Box: <Box className="w-4 h-4" />,
  FileCode: <FileCode className="w-4 h-4" />,
  Boxes: <Boxes className="w-4 h-4" />,
  Eye: <Eye className="w-4 h-4" />,
  Image: <ImageIcon className="w-4 h-4" />,
  Ruler: <Ruler className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
  TreePine: <TreePine className="w-4 h-4" />,
  Settings: <Settings className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Terminal: <Terminal className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  HardDrive: <HardDrive className="w-4 h-4" />,
  TerminalSquare: <TerminalSquare className="w-4 h-4" />,
  Table: <Table className="w-4 h-4" />,
  CheckCircle2: <CheckCircle2 className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Activity: <Activity className="w-4 h-4" />,
  Send: <Send className="w-4 h-4" />,
  Bug: <Bug className="w-4 h-4" />,
};

export function TechStackSection() {
  return (
    <section id="habilidades" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-architectural-wood font-semibold">
            Stack Tecnológico &amp; Destrezas
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">
            Herramientas de Diseño, Carpintería &amp; Desarrollo
          </h2>
          <p className="text-muted-foreground text-sm mt-3">
            Dominio técnico multidisciplinar que abarca software de modelado arquitectónico, técnicas de ebanistería, lenguajes de programación, bases de datos y control de calidad QA.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl border border-border/70 bg-card hover:border-architectural-wood/60 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-secondary text-architectural-wood border border-border/60">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-foreground">
                  {cat.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 mb-5">
                  {cat.description}
                </p>

                {/* Skills Badges List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-between text-xs hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-architectural-wood">
                          {skill.icon && ICON_MAP[skill.icon]}
                        </span>
                        <span className="font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
