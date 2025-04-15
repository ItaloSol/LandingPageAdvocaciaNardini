import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nardiniadvogados.com.br'),
  title: {
    default: "Nardini Advogados | Direito Civil, Empresarial e Condominial em São José do Rio Preto",
    template: "%s | Nardini Advogados"
  },
  description: "Há mais de 10 anos oferecendo soluções jurídicas em São José do Rio Preto. Especialistas em direito civil, empresarial e condominial. Agende uma consulta!",
  keywords: [
    "advocacia São José do Rio Preto",
    "advogado direito civil",
    "advogado direito empresarial",
    "direito condominial",
    "escritório de advocacia",
    "Nardini Advogados",
    "advogado Rio Preto",
    "assessoria jurídica empresarial",
    "problemas condominiais",
    "contratos empresariais"
  ],
  authors: [{ name: "Nardini Advogados" }],
  creator: "Nardini Advogados",
  publisher: "Nardini Advogados",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nardiniadvogados.com.br",
    siteName: "Nardini Advogados",
    title: "Nardini Advogados | Direito Civil, Empresarial e Condominial",
    description: "Há mais de 10 anos oferecendo soluções jurídicas em São José do Rio Preto. Especialistas em direito civil, empresarial e condominial.",
    images: [
      {
        url: "https://nardiniadvogados.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nardini Advogados - Escritório de Advocacia em São José do Rio Preto"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nardini Advogados | Advocacia Especializada",
    description: "Soluções jurídicas personalizadas em São José do Rio Preto. Direito civil, empresarial e condominial.",
    images: ["https://nardiniadvogados.com.br/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://nardiniadvogados.com.br",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="canonical" href="https://nardiniadvogados.com.br" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São José do Rio Preto" />
        <meta name="geo.position" content="-20.8167252;-49.4015975" />
        <meta name="ICBM" content="-20.8167252, -49.4015975" />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}