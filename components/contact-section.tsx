"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, Check, Copy, ShieldCheck, Phone } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Arquitectura & Espacio",
    message: ""
  });

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Build WhatsApp message with form details
    const text = encodeURIComponent(
      `Hola Daniel! Mi nombre es ${formData.name} (${formData.email}). Te contacto por un proyecto de tipo ${formData.projectType}: ${formData.message}`
    );
    window.open(`https://wa.me/573001164695?text=${text}`, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-secondary/30 relative border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-architectural-wood font-semibold">
            Iniciemos una Conversación
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-2">
            ¿Listo para Construir o Desarrollar tu Próximo Proyecto?
          </h2>
          <p className="text-muted-foreground text-sm mt-3">
            Ya sea una propuesta arquitectónica, un diseño de interiores con mobiliario a medida, o una plataforma web de alto rendimiento, conversemos y démosle vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact & Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-border/70 bg-card shadow-sm space-y-5">
              <h3 className="text-lg font-display font-bold text-foreground">
                Información de Contacto Directo
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-card flex items-center justify-center text-architectural-wood">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-muted-foreground block">Correo Electrónico</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-semibold text-foreground hover:text-architectural-wood">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg hover:bg-card text-muted-foreground hover:text-foreground transition-colors"
                  title="Copiar correo"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-card flex items-center justify-center text-emerald-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-muted-foreground block">WhatsApp &amp; Teléfono</span>
                    <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-foreground hover:text-emerald-500">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-lg hover:bg-card text-muted-foreground hover:text-foreground transition-colors"
                  title="Copiar teléfono"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-secondary/50 border border-border/50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-card flex items-center justify-center text-architectural-wood">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-muted-foreground block">Ubicación Principal</span>
                  <span className="text-xs font-semibold text-foreground">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* CPNAA Verification */}
              <div className="p-4 rounded-xl bg-architectural-wood/10 border border-architectural-wood/30 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-architectural-wood shrink-0" />
                <div className="text-xs">
                  <span className="font-semibold text-foreground block">Matrícula Profesional CPNAA</span>
                  <span className="text-[11px] text-muted-foreground font-mono">{PERSONAL_INFO.license}</span>
                </div>
              </div>

              {/* Fast WhatsApp Action Button */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chatear Directamente en WhatsApp</span>
              </a>

            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl border border-border/70 bg-card shadow-sm">
              <h3 className="text-lg font-display font-bold text-foreground mb-1">
                Formulario de Proyecto
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Completa los datos y te responderé a la brevedad posible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Laura Gómez"
                      className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-architectural-wood transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="laura@ejemplo.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-architectural-wood transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Tipo de Proyecto o Requerimiento
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-architectural-wood transition-all"
                  >
                    <option value="Diseño Arquitectónico">Diseño Arquitectónico (Residencial / Comercial)</option>
                    <option value="Diseño de Interiores">Diseño de Interiores &amp; Iluminación</option>
                    <option value="Carpintería a Medida">Carpintería Arquitectónica &amp; Mobiliario</option>
                    <option value="Desarrollo Web Full Stack">Desarrollo Web Full Stack &amp; Aplicaciones</option>
                    <option value="QA Testing & Software Quality">QA Testing &amp; Aseguramiento de Calidad</option>
                    <option value="Modelado 3D & Renders">Modelado 3D &amp; Renders Fotorrealistas</option>
                    <option value="Consultoría Multidisciplinar">Consultoría Integral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                    Mensaje o Detalles del Proyecto *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Cuéntame sobre el espacio, alcance, ubicación o requerimientos técnicos..."
                    className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-architectural-wood transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-foreground text-background hover:bg-architectural-wood hover:text-black font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje &amp; Conectar por WhatsApp</span>
                </button>

                {formSubmitted && (
                  <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 pt-2 font-medium">
                    ✓ Abriendo canal directo de WhatsApp con los datos ingresados...
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
