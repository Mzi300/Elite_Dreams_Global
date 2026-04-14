'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cloud, Shield, Cpu, Code2, Globe, Database, Zap, Activity, ArrowRight, Server, Lock } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features, id }: any) => (
    <motion.div 
        id={id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel" 
        style={{ padding: '4rem', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '4rem' }}
    >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--primary)' }}>
                <Icon size={40} />
            </div>
            <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-1px' }}>{title}</h2>
                <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '800px' }}>
                    {description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    {features.map((f: string) => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                            {f}
                        </div>
                    ))}
                </div>
            </div>
            <Link href="/checkout" className="btn btn-primary" style={{ alignSelf: 'center', padding: '1.25rem 2.5rem' }}>
                COMMAND SERVICE
            </Link>
        </div>
    </motion.div>
);

export default function ServicesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px', marginBottom: '1.5rem' }}>STRATEGIC PILLARS</div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-3px', marginBottom: '2rem' }}>ARCHITECTING THE <span className="text-gradient">FUTURE</span></h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.5, maxWidth: '700px', margin: '0 auto' }}>
                    Elite Dreams provides the technical backbone for global enterprises. Our services represent the absolute frontier of engineering excellence.
                </p>
            </motion.div>
        </header>

        <section id="cloud">
            <ServiceCard 
                id="cloud"
                icon={Cloud}
                title="Cloud Sovereignty"
                description="Hyper-scale infrastructure designed for zero-latency global operations. We don't just host; we architect resilient digital continents."
                features={[
                    'Global Node Distribution',
                    'Auto-Scaling Intelligence',
                    'Zero-Trust Architecture',
                    'Quantum-Ready Encryption'
                ]}
            />
        </section>

        <section id="sec">
            <ServiceCard 
                id="sec"
                icon={Lock}
                title="Offensive Security"
                description="The ultimate defensive posture is a superior offensive baseline. Our security nodes proactively hunt threats before they reach your perimeter."
                features={[
                    'Active Threat Suppression',
                    'Real-time Entropy Analysis',
                    'Sovereign Perimeter Defense',
                    'Protocol Integrity Auditing'
                ]}
            />
        </section>

        <section id="saas">
            <ServiceCard 
                id="saas"
                icon={Code2}
                title="SaaS Modernization"
                description="Transforming legacy systems into high-performance tactical platforms. We refactor complexity into sovereign simplicity."
                features={[
                    'Next-Gen Architecture',
                    'Micro-Service Orchestration',
                    'Edge-First Delivery',
                    'AI-Driven Logic Optimization'
                ]}
            />
        </section>

        <div style={{ marginTop: '8rem' }}>
            <div className="glass-panel" style={{ padding: '5rem', textAlign: 'center', background: 'linear-gradient(rgba(14,165,233,0.05), transparent)' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Initiate Protocol?</h2>
                <p style={{ opacity: 0.5, marginBottom: '3rem' }}>Consult with our strategic advisors for a custom infrastructure audit.</p>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '1.5rem 4rem' }}>SEND PRIORITY UPLINK</Link>
            </div>
        </div>
      </div>
    </div>
  );
}
