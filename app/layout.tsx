import type { Metadata } from "next";
import {  Poppins, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import LoadingOverlay from "@/components/LoadingOverlay";

// Removed unknown `Geist` font (not available via next/font/google)

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Add specific weights as strings
  variable: '--font-poppins', // Useful for Tailwind or CSS variables
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Maimako2026 | NUASA Campaign",
  description: "Your Vote. Our Future. NUASA 2026.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-icon.png",
    other: [
      { rel: "manifest", url: "/favicon/manifest.json" },
      { rel: "msapplication-TileImage", url: "/favicon/ms-icon-144x144.png" }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans")}>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-[var(--font-poppins)]`}>
        <LoadingOverlay />
        {children}
      </body>
    </html>
  );
}