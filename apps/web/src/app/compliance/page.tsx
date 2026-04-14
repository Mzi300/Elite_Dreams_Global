'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, FileCheck, Landmark, Scale } from 'lucide-react';

const GovernanceCard = ({ title, code, summary }: any) => (
    <div className="glass-panel" style={{ padding: '3rem', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '3px', marginBottom: '1rem' }}>{code}</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>{title}</h3>
        <p style={{ opacity: 0.5, lineHeight: 1.7, fontSize: '0.95rem' }}>{summary}</p>
    </div>
);

export default function CompliancePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <header style={{ marginBottom: '6rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <ShieldCheck size={24} color="var(--primary)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 900, letterSpacing: '4px' }}>GOVERNANCE FRAMEWORK</span>
                </div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-3px', marginBottom: '2rem' }}>GLOBAL <span className="text-gradient">COMPLIANCE</span></h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.6, maxWidth: '800px' }}>
                    Our operations adhere to the highest international standards of technical sovereignty and regulatory intelligence.
                </p>
            </motion.div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '6rem' }}>
            <GovernanceCard 
                code="ISO-SOV-2026"
                title="Sovereign Data Standards"
                summary="Full compliance with elite data handling protocols, ensuring that all client intelligence remains within hardened encrypted nodes."
            />
            <GovernanceCard 
                code="GDPR-ELITE-X"
                title="Extended Privacy Controls"
                summary="Our privacy framework exceeds global mandates, providing advanced telemetry suppression and data-right management."
            />
            <GovernanceCard 
                code="SOC-3-ADVANCED"
                title="Continuous Security Auditing"
                summary="Zero-trust continuous auditing of our physical and digital engineering environments by third-party tactical auditors."
            />
            <GovernanceCard 
                code="SEC-FIN-99"
                title="Financial Integrity Protocol"
                summary="Ensuring absolute transparency and encryption in all enterprise acquisition and financing transactions."
            />
        </div>

        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Request Documentation</h3>
            <p style={{ opacity: 0.5, marginBottom: '2rem' }}>Enterprise clients may request detailed compliance audits via their secure portal.</p>
            <Link href="/contact" className="btn btn-primary">CONTACT COMPLIANCE NODE</Link>
        </div>
      </div>
    </div>
  );
}
