'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', padding: '2rem', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)', backgroundSize: '100% 4px' }} />
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel" 
            style={{ maxWidth: '600px', width: '100%', padding: '5rem 3rem', border: '1px solid rgba(255,255,255,0.05)' }}
        >
            <div style={{ 
                width: '80px', height: '80px', borderRadius: '20px', 
                background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 3rem'
            }}>
                <ShieldAlert size={48} />
            </div>

            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>404 <span style={{ opacity: 0.3 }}>|</span> AREA RESTRICTED</h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', marginBottom: '4rem', lineHeight: 1.6 }}>
                The strategic sector you are attempting to access does not exist in our current tactical repository or has been relocated to a secure classified zone.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link href="/" className="btn btn-primary" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <ArrowLeft size={18} /> RETURN TO COMMAND CENTER
                </Link>
                <Link href="/docs" className="btn btn-glass" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <Search size={18} /> BROWSE INTELLIGENCE
                </Link>
            </div>

            <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem' }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.3, letterSpacing: '2px' }}>ERROR LOG: PROTOCOL_SECTOR_NOT_FOUND</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.3, letterSpacing: '2px', marginTop: '0.5rem' }}>TIMESTAMP: {new Date().toISOString()}</div>
            </div>
        </motion.div>
    </div>
  );
}
