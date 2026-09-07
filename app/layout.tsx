import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Cantero | Arquitecto, Interiorismo, Carpintería & Full Stack Developer",
  description: "Portafolio profesional de Daniel Esteban Cantero Frías. Arquitecto con matrícula CPNAA vigente (A37512025-1067957304), diseñador de interiores, carpintería de autor y desarrollador web Full Stack & QA en Cartagena, Colombia.",
  keywords: [
    "Daniel Cantero",
    "Daniel Esteban Cantero Frias",
    "Arquitecto Cartagena",
    "Diseño de Interiores Cartagena",
    "CPNAA A37512025-1067957304",
    "Carpintería a Medida",
    "Desarrollador Web Full Stack",
    "QA Testing",
    "Romero's Pizza Cartagena",
    "Archicad",
    "Twinmotion",
    "Next.js"
  ],
  authors: [{ name: "Daniel Esteban Cantero Frías" }],
  creator: "Daniel Esteban Cantero Frías",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://danielcantero.vercel.app",
    title: "Daniel Cantero | Arquitectura, Interiorismo & Desarrollo Full Stack",
    description: "Portafolio oficial y servicios profesionales de arquitectura, diseño de interiores, mobiliario a medida y desarrollo web en Cartagena, Colombia.",
    siteName: "Daniel Cantero Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} font-sans min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
