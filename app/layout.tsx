import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

// === Fuentes ===
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// === SEO Metadata ===
export const metadata: Metadata = {
  title: "Abogado en Managua | LexManagua | Asesoría legal civil, penal y laboral",
  description:
    "Asesoría legal profesional en Managua. Casos civiles, laborales, penales y mercantiles. Atención inmediata por WhatsApp. Evaluación gratuita.",
  keywords:
    "abogado Managua, asesoría legal Nicaragua, abogado civil laboral penal, abogado WhatsApp Managua",
  generator: "v0.app",
  openGraph: {
    title: "LexManagua - Abogados en Managua",
    description: "Protegemos tus derechos con asesoría legal experta en Managua",
    type: "website",
  },
};

// === Root Layout (Server Component) ===
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
