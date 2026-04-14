'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Activity, Clock, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';

export default function SLAPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <header style={{ marginBottom: '6rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Activity size={24} color="var(--primary)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 900, letterSpacing: '4px' }}>OPERATIONAL ASSURANCE</span>
                </div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-3px', marginBottom: '2rem' }}>SLA <span className="text-gradient">STANDARDS</span></h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.6, maxWidth: '700px', margin: '0 auto' }}>
                    Elite Dreams Global sets the benchmark for enterprise reliability. Our Service Level Agreements are the tactical guarantee of your operational success.
                </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                {[
                    { title: 'Global Uptime', value: '99.9997%', icon: Zap },
                    { title: 'Response Time', value: '< 15 MIN', icon: Clock },
                    { title: 'Data Integrity', value: '100.00%', icon: ShieldCheck }
                ].map((stat, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><stat.icon size={32} /></div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>{stat.value}</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px' }}>{stat.title}</div>
                    </div>
                ))}
            </div>

            <div className="glass-panel" style={{ padding: '4rem', marginBottom: '4rem', lineHeight: 1.8 }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '2rem' }}>Tactical Performance Tiers</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Tier 1: Strategic Response</h4>
                        <p style={{ opacity: 0.5 }}>Dedicated offensive security teams respond to critical perimeter threats within 15 minutes of initial detection.</p>
                    </div>
                    <div style={{ paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Tier 2: Infrastructure Restoration</h4>
                        <p style={{ opacity: 0.5 }}>Full node restoration protocols initiated immediately upon service degradation detection.</p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Tier 3: Continuous Intelligence</h4>
                        <p style={{ opacity: 0.5 }}>Real-time telemetry reports provided on a 24-hour cycle for all elite enterprise accounts.</p>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <Link href="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', fontWeight: 800 }}>
                    <ArrowLeft size={18} /> BACK TO BASE COMMAND
                </Link>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
