import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Sentinel Quantum Vanguard – BC-ELITE",
    template: "%s | Sentinel Quantum Vanguard – BC-ELITE",
  },
  description: "Plateforme cyberdéfense BC-ELITE : supervision quantique, IA militaire et défense réseau autonome.",
  keywords: [
    "cyberdéfense",
    "BC-ELITE",
    "Sentinel",
    "Vanguard",
    "Pegasus",
    "sécurité militaire",
  ],
  authors: [{ name: "BC-ELITE Command" }],
  openGraph: {
    title: "Sentinel Quantum Vanguard – BC-ELITE",
    description: "Plateforme cyberdéfense niveau militaire avec moteur neuronal et surveillance temps réel.",
    url: "https://bc-elite.example",
    siteName: "Sentinel BC-ELITE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Quantum Vanguard – BC-ELITE",
    description: "Défense quantique, IA militaire et détection Pegasus zéro-click.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#00eaff",
  colorScheme: "dark",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" data-theme="bc-elite">
      <body
        className={`${inter.className} bg-black text-white antialiased selection:bg-cyan-500/25 selection:text-white`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,234,255,0.18),transparent_60%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-gradient-to-t from-cyan-500/15 via-cyan-500/5 to-transparent blur-[140px] will-change-transform"
          />

          <Navbar />

          <main
            className="relative z-10 flex-1 px-4 py-12 sm:px-8 lg:px-16"
            role="main"
            aria-label="Contenu principal BC-ELITE"
          >
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}