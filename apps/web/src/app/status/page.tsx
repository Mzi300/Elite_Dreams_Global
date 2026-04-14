'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Globe, ShieldCheck, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const StatusRow = ({ name, status, uptime }: any) => (
    <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: status === 'OPERATIONAL' ? '#10b981' : '#f59e0b' }}></div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{name}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ fontSize: '0.75rem', opacity: 0.4 }}>{uptime} UPTIME</div>
            <div style={{ fontSize: '0.7rem', fontWeight: 900, color: status === 'OPERATIONAL' ? '#10b981' : '#f59e0b', letterSpacing: '1px' }}>{status}</div>
        </div>
    </div>
);

export default function StatusPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
            
            <div className="glass-panel" style={{ padding: '4rem', marginBottom: '3rem', textAlign: 'center', background: 'linear-gradient(rgba(16,185,129,0.05), transparent)', border: '1px solid rgba(16,185,129,0.1)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <CheckCircle2 size={32} />
                </div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>SYSTEMS OPERATIONAL</h1>
                <p style={{ opacity: 0.5 }}>Current operational status across all global tactical nodes.</p>
            </div>

            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', marginBottom: '4rem' }}>
                <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '2px', color: 'var(--primary)' }}>GLOBAL INFRASTRUCTURE</div>
                <StatusRow name="Strategic Cloud Node (US-EAST)" status="OPERATIONAL" uptime="100%" />
                <StatusRow name="Sovereign Data Buffer (EU-CENTRAL)" status="OPERATIONAL" uptime="99.9997%" />
                <StatusRow name="Offensive Security Relay (ASIA-NORTH)" status="OPERATIONAL" uptime="100%" />
                <StatusRow name="Global API Mesh" status="OPERATIONAL" uptime="99.998%" />
                <StatusRow name="Enterprise Authentication Loop" status="OPERATIONAL" uptime="100%" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '3rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Activity size={20} color="var(--primary)" /> INCIDENT LOG
                    </h3>
                    <div style={{ opacity: 0.4, fontSize: '0.875rem' }}>
                        No tactical incidents reported in the last 7,200 hours. System integrity remains absolute.
                    </div>
                </div>
                <div className="glass-panel" style={{ padding: '3rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Zap size={20} color="var(--primary)" /> SCHEDULED OPS
                    </h3>
                    <div style={{ opacity: 0.4, fontSize: '0.875rem' }}>
                        Next scheduled peripheral maintenance: 2026-05-12. No downtime anticipated for core services.
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', fontWeight: 800 }}>
                    RETURN TO COMMAND CENTER <ChevronRight size={16} />
                </Link>
            </div>

        </motion.div>
      </div>
    </div>
  );
}
