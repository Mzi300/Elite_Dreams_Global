'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, BarChart3, Database, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function IndustriesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px', marginBottom: '1.5rem' }}>GLOBAL SECTORS</div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-1px' }}>ENTERPRISE <span className="text-gradient">VERTICALS</span></h1>
                <p style={{ opacity: 0.5, maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem' }}>Tactical engineering solutions across the world's most critical industries.</p>
            </motion.div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
                { name: 'Technological Intelligence', icon: Database, desc: 'Architecture for the next generation of AI and hyper-scale cloud.' },
                { name: 'Global Finance', icon: BarChart3, desc: 'Sovereign asset management and secure transactional infrastructure.' },
                { name: 'Public Sector Defence', icon: Globe, desc: 'Infrastructure resilience for government nodes and military-grade security.' },
                { name: 'Industrial Autonomy', icon: Building2, desc: 'Advanced automation and IoT security for the global manufacturing base.' }
            ].map((industry, i) => (
                <div key={i} className="glass-panel" style={{ padding: '3rem' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><industry.icon size={32} /></div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem' }}>{industry.name}</h3>
                    <p style={{ opacity: 0.5, fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>{industry.desc}</p>
                    <Link href="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 800, fontSize: '0.75rem' }}>
                        LEARN MORE <ChevronRight size={14} />
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
