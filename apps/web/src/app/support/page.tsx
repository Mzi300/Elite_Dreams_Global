'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, LifeBuoy, FileQuestion, Book, ChevronRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <LifeBuoy size={24} color="var(--primary)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 900, letterSpacing: '4px' }}>OPERATIONAL SUPPORT</span>
                </div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-2px' }}>SUPPORT <span className="text-gradient">HUB</span></h1>
                <p style={{ opacity: 0.5, fontSize: '1.25rem', marginTop: '1.5rem' }}>Need tactical assistance? Our global response nodes are ready.</p>
            </motion.div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '6rem' }}>
            <div className="glass-panel" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MessageSquare size={20} color="var(--primary)" /> LATEST UPDATES
                </h3>
                <p style={{ opacity: 0.5, fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Direct communication for real-time tactical troubleshooting and integration support.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', padding: '0.75rem' }}>OPEN UPLINK</Link>
            </div>
            <div className="glass-panel" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Book size={20} color="var(--primary)" /> KNOWLEDGE BASE
                </h3>
                <p style={{ opacity: 0.5, fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Comprehensive documentation and architecture guides for sovereign node operators.
                </p>
                <Link href="/docs" className="btn btn-glass" style={{ width: '100%', marginTop: '2rem', padding: '0.75rem' }}>VISIT DOCS</Link>
            </div>
        </div>

        <div className="glass-panel" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', textAlign: 'center' }}>
                <div>
                    <div style={{ fontWeight: 900, fontSize: '0.75rem', opacity: 0.3, marginBottom: '0.5rem' }}>PRIORITY LINE</div>
                    <div style={{ fontWeight: 800 }}>+1.800.ELITE.OPS</div>
                </div>
                <div>
                    <div style={{ fontWeight: 900, fontSize: '0.75rem', opacity: 0.3, marginBottom: '0.5rem' }}>EMAIL RELAY</div>
                    <div style={{ fontWeight: 800 }}>support@elite.dreams</div>
                </div>
                <div>
                    <div style={{ fontWeight: 900, fontSize: '0.75rem', opacity: 0.3, marginBottom: '0.5rem' }}>LIVE CHAT</div>
                    <div style={{ fontWeight: 800, color: '#10b981' }}>ONLINE NOW</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
