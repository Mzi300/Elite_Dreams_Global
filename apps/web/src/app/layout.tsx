import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import CommandPalette from "@/components/ui/CommandPalette";
import LiveChat from "@/components/ui/LiveChat";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const interTight = Inter_Tight({ 
  subsets: ["latin"],
  variable: '--font-inter-tight',
});

export const metadata: Metadata = {
  title: "Elite Dreams Global Technologies | Enterprise IT & Sovereign Innovation",
  description: "Elite Dreams Global Technologies defines the future of enterprise engineering. From cloud-native strategy to offensive security and software modernization, we deliver world-class IT excellence.",
  keywords: ["Elite Dreams", "Global Technologies", "Enterprise IT", "Cloud Strategy", "Cyber Defense", "Digital Transformation", "Sovereign Engineering"],
  authors: [{ name: "Elite Dreams Engineering" }],
  openGraph: {
    title: "Elite Dreams Global Technologies",
    description: "Engineering Enterprise Excellence at a Global Scale.",
    url: "https://elite-dreams.global",
    siteName: "Elite Dreams",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Dreams Global Technologies",
    description: "Sovereign IT Engineering & Cybersecurity.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className={inter.className}>
        <div className="noise-overlay" />
        <CustomCursor />
        <CommandPalette />
        <LiveChat />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
