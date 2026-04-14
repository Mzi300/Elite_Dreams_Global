'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Landmark, ArrowLeft, ShieldCheck, FileText } from 'lucide-react';

export default function RegulatoryPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <header style={{ marginBottom: '5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Landmark size={24} color="var(--primary)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 900, letterSpacing: '4px' }}>LEGAL GOVERNANCE</span>
                </div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '2rem' }}>REGULATORY <span className="text-gradient">DISCLOSURE</span></h1>
                <p style={{ opacity: 0.6, lineHeight: 1.7, fontSize: '1.125rem' }}>
                    Elite Dreams Global Technologies operates at the intersection of private innovation and public regulatory standards. We maintain absolute transparency regarding our legal and operational standing.
                </p>
            </header>

            <div className="glass-panel" style={{ padding: '4rem', marginBottom: '4rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1.5rem' }}>1.0 Sovereign Node Licensing</h2>
                    <p>
                        Our global cloud infrastructure utilizes proprietary node licensing that complies with all regional sovereign data legislation. We maintain independent operational certificates for every active tactical zone.
                    </p>
                </section>
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1.5rem' }}>2.0 Offensive Security Mandates</h2>
                    <p>
                        Elite Dreams offensive security teams operate under strict ethical hacking mandates. All active threat suppression activities are logged and audited in accordance with the International Cyber Defense Framework.
                    </p>
                </section>
                <section>
                    <h2 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1.5rem' }}>3.0 Corporate Entity Information</h2>
                    <p>
                        Elite Dreams Global Technologies Inc. is a registered enterprise entity. For detailed registrar information or legal service of process, please contact our legal command center via the priority uplink.
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
