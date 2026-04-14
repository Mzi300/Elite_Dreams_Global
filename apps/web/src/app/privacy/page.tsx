'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Lock } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Lock size={24} color="var(--primary)" />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px' }}>Privacy <span className="text-gradient">Protocols</span></h1>
                        <p style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.3, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.5rem' }}>Governance Doc: P-2026-ALPHA</p>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '4rem', marginBottom: '4rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>1.0 Data Sovereignty</h2>
                        <p>
                            At Elite Dreams Global Technologies, we treat information as a high-value asset. Our architecture is designed to prioritize data sovereignty, ensuring that your enterprise intelligence remains under your exclusive tactical control.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>2.0 Intelligence Collection</h2>
                        <p>
                            We collect only the telemetry required to optimize your strategic solutions. This includes operational data, technical configurations, and communication logs necessary for cross-node synchronization.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>3.0 Defensive Measures</h2>
                        <p>
                            All transmission data is encrypted using military-grade sovereign protocols. Our offensive security teams perform continuous active audits to ensure zero unauthorized access to your digital perimeter.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>4.0 Disclosure Protocols</h2>
                        <p>
                            Enterprise data is never shared with external nodes without explicit executive authorization, except where required by global regulatory intelligence mandates.
                        </p>
                    </section>
                </div>

                <Link href="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', fontWeight: 800 }}>
                    <ArrowLeft size={18} /> BACK TO BASE COMMAND
                </Link>
            </motion.div>
        </div>
    </div>
  );
}
