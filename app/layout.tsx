import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Meta Pixel ID
const pixelId = "GTM-PDD55V22";

export const metadata: Metadata = {
  metadataBase: new URL('https://nardiniadvogados.web.app/'),
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
    url: "https://nardiniadvogados.web.app/",
    siteName: "Nardini Advogados",
    title: "Nardini Advogados | Direito Civil, Empresarial e Condominial",
    description: "Há mais de 10 anos oferecendo soluções jurídicas em São José do Rio Preto. Especialistas em direito civil, empresarial e condominial.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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
    canonical: "https://nardiniadvogados.web.app/",
  },
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://nardiniadvogados.web.app/" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São José do Rio Preto" />
        <meta name="geo.position" content="-20.8167252;-49.4015975" />
        <meta name="ICBM" content="-20.8167252, -49.4015975" />
      </head>
      <body className={inter.className}>
        {/* Meta Pixel Code */}
        {pixelId && (
          <>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${pixelId}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}