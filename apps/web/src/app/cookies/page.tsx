'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Database, ArrowLeft, MousePointer2 } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <MousePointer2 size={24} color="var(--primary)" />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px' }}>Cookie <span className="text-gradient">Governance</span></h1>
                        <p style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.3, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.5rem' }}>TELEMETRY PROTOCOL: C-2026-GAMMA</p>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '4rem', marginBottom: '4rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>1.0 Data Beacons</h2>
                        <p>
                            Elite Dreams utilizes technical cookies (Data Beacons) to maintain session integrity and optimize the retrieval of enterprise assets. These beacons are essential for the high-fidelity operation of our tactical interface.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>2.0 Performance Telemetry</h2>
                        <p>
                            We utilize low-latency tracking to monitor system load and resource allocation. This telemetry allows us to dynamically scale our cloud-native infrastructure to meet your strategic demands.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>3.0 Preferences & Personalization</h2>
                        <p>
                            To provide a seamless command experience, we store tactical preference data such as language nodes, dark-mode configuration, and localized regional settings.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>4.0 Strategic Control</h2>
                        <p>
                            Clients may opt-out of non-essential telemetry via their browser's security protocols. However, please note that restricting certain beacons may lead to a degradation in terminal performance and operational utility.
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
