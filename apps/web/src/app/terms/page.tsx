'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Gavel } from 'lucide-react';

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Gavel size={24} color="var(--primary)" />
                    </div>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px' }}>Terms of <span className="text-gradient">Sovereignty</span></h1>
                        <p style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.3, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.5rem' }}>LEGAL DISCLOSURE: T-2026-BETA</p>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '4rem', marginBottom: '4rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>1.0 Operational Agreement</h2>
                        <p>
                            By accessing the Elite Dreams Global intelligence network, you agree to abide by these Terms of Sovereignty. Our platform is provided to sophisticated enterprise entities for the purpose of technical engineering and strategic consulting.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>2.0 Intellectual Property</h2>
                        <p>
                            All proprietary codebases, tactical designs, and energy-route models are the exclusive intellectual property of Elite Dreams Global Technologies Inc. Unauthorized terminal access or reverse-engineering of our sovereign nodes is strictly prohibited.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>3.0 Service Availability</h2>
                        <p>
                            We maintain a 99.9997% system uptime target. However, during critical offensive security maneuvers or infrastructure upgrades, certain non-essential sectors may be temporarily restricted for tactical preservation.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.25rem' }}>4.0 Termination of Access</h2>
                        <p>
                            Elite Dreams reserves the right to terminate command access to any entity found to be in violation of our governance framework or attempting to compromise the integrity of our global digital perimeter.
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
