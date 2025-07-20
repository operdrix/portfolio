import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import ConditionalNavigation from "@/components/conditional-navigation";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Preahvihear font will be loaded via CSS import since it's not available in next/font
const preahvihearFont = `
@import url('https://fonts.googleapis.com/css2?family=Preahvihear:wght@400&display=swap');
`;

export const metadata: Metadata = {
  title: "Ibrahim Memon - Software Engineer Portfolio",
  description: "Portfolio of Ibrahim Memon, a self-taught UI/UX designer and Software Engineer with 3+ years of experience creating meaningful digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: preahvihearFont }} />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${poppins.variable} antialiased`}
      >
        <ConditionalNavigation />
        {children}
      </body>
    </html>
  );
}
