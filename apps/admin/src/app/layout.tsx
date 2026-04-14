import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Dreams Admin | Business Command Center",
  description: "Enterprise management dashboard for Elite Dreams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ 
          flex: 1, 
          marginLeft: '280px', 
          minHeight: '100vh', 
          backgroundColor: 'var(--background)' 
        }}>
          <header style={{ 
            height: '70px', 
            borderBottom: '1px solid var(--border)', 
            backgroundColor: 'var(--card)', 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}>
            <div style={{ fontWeight: 600 }}>System Overview</div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button style={{ background: 'none', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: 'var(--radius)', fontSize: '0.875rem', cursor: 'pointer' }}>
                Notifications
              </button>
            </div>
          </header>
          <div style={{ padding: '2rem' }}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
