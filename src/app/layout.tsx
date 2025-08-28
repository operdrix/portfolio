import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olivier PERDRIX - Développeur Web Full-Stack",
  description: "Développeur web passionné avec 5 ans d'expérience, spécialisé dans React, Next.js, TypeScript et Node.js. Actuellement chez EDF, je combine expertise technique et rigueur industrielle.",
  keywords: [
    "développeur web",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "EDF",
    "Lyon",
    "portfolio"
  ],
  authors: [{ name: "Olivier PERDRIX" }],
  creator: "Olivier PERDRIX",
  publisher: "Olivier PERDRIX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://labodolivier.com'),
  openGraph: {
    title: "Olivier PERDRIX - Développeur Web Full-Stack",
    description: "Développeur web passionné avec 5 ans d'expérience, spécialisé dans React, Next.js, TypeScript et Node.js.",
    url: 'https://labodolivier.com',
    siteName: 'Olivier PERDRIX Portfolio',
    images: [
      {
        url: '/og.png',
        width: 801,
        height: 564,
        alt: 'Olivier PERDRIX - Développeur Web Full-Stack',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olivier PERDRIX - Développeur Web Full-Stack',
    description: 'Développeur web passionné avec 5 ans d\'expérience, spécialisé dans React, Next.js, TypeScript et Node.js.',
    images: ['/og.png'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
