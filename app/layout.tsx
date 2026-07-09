import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://barcamp.org.do";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Barcamp 2026 — Desconferencia tech · PUCMM, Santiago",
    template: "%s · Barcamp 2026",
  },
  description:
    "La desconferencia tech más grande de Santiago. Organizada por la comunidad, en PUCMM. 14 de noviembre, 2026 — código, conexión e impacto.",
  keywords: [
    "Barcamp",
    "Barcamp RD",
    "desconferencia",
    "tecnología",
    "PUCMM",
    "Santiago",
    "República Dominicana",
    "comunidad tech",
    "conferencia",
    "2026",
  ],
  authors: [{ name: "CICC · PUCMM STI" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: siteUrl,
    siteName: "Barcamp 2026",
    title: "Barcamp 2026 — Desconferencia tech dominicana",
    description:
      "La desconferencia tech más grande de Santiago. 14 de noviembre, 2026 en PUCMM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barcamp 2026 — Desconferencia tech dominicana",
    description:
      "La desconferencia tech más grande de Santiago. 14 de noviembre, 2026 en PUCMM.",
    creator: "@barcamprd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
