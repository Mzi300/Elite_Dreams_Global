'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Target, Cpu, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <header style={{ marginBottom: '8rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px', marginBottom: '1.5rem' }}>MISSION MANIFESTO</div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-3px', marginBottom: '2rem' }}>DEFINING <span className="text-gradient">SOVEREIGNTY</span></h1>
                <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '800px', lineHeight: 1.6 }}>
                    Elite Dreams Global Technologies is not just a service provider. We are the architects of the digital perimeter, ensuring enterprise freedom through superior engineering.
                </p>
            </motion.div>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '10rem' }}>
            <div className="glass-panel" style={{ padding: '3rem' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><Target size={32} /></div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>The Objective</h3>
                <p style={{ opacity: 0.5, lineHeight: 1.7 }}>
                    To provide global enterprise entities with the technical infrastructure required to achieve absolute operational independence. We eliminate technical debt and replace it with strategic asset value.
                </p>
            </div>
            <div className="glass-panel" style={{ padding: '3rem' }}>
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><Globe size={32} /></div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1rem' }}>The Global Node</h3>
                <p style={{ opacity: 0.5, lineHeight: 1.7 }}>
                    Headquartered at the intersection of innovation and security, our distributed engineering nodes span the globe, providing 24/7/365 offensive security and infrastructure support.
                </p>
            </div>
        </section>

        <section style={{ marginBottom: '10rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Elite Core Principles</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {[
                    { icon: ShieldCheck, title: 'Defensive Posture', desc: 'Security is not a feature; it is the foundation of every line of code we deploy.' },
                    { icon: Zap, title: 'Zero Latency', desc: 'Speed is a strategic advantage. Our systems are optimized for absolute performance.' },
                    { icon: Cpu, title: 'Future Proof', desc: 'We build for the technologies of 2030, ensuring your assets remain relevant.' }
                ].map((item, i) => (
                    <div key={i} style={{ textAlign: 'center', padding: '2rem' }}>
                        <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}><item.icon size={32} /></div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.875rem', opacity: 0.4, lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        <div className="glass-panel" style={{ padding: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Join the Elite Engineering Journey</h3>
                <p style={{ opacity: 0.5 }}>Explore our open roles in offensive security and cloud architecture.</p>
            </div>
            <Link href="/careers" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem' }}>VIEW OPEN OPS</Link>
        </div>
      </div>
    </div>
  );
}
