'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, ShieldCheck, Cpu, BarChart3, Globe, Database, ArrowRight, Zap, Target, Activity, Share2 } from 'lucide-react';

const SERVICES = [
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    icon: <Cloud size={32} strokeWidth={1.5} />,
    desc: 'Bespoke cloud strategy and large-scale migration services. We specialize in Azure, AWS, and hybrid-cloud orchestration for high-compliance environments.',
    tags: ['Next-Gen Scalability', 'Compliance Ready'],
    metrics: { efficiency: '94%', latency: '<10ms', availability: '99.99%' }
  },
  {
    id: 'cyber',
    title: 'Cyber Defense Systems',
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    desc: 'Offensive and defensive security services. 24/7 SOC monitoring, penetration testing, and zero-trust framework implementation for global enterprises.',
    tags: ['24/7 Monitoring', 'SOC Tier 3'],
    metrics: { threatBlocked: '1.2M+', response: '14m', ueba: 'ACTIVE' }
  },
  {
    id: 'bespoke',
    title: 'Software Modernization',
    icon: <Cpu size={32} strokeWidth={1.5} />,
    desc: 'Transforming legacy systems into high-performance SaaS platforms. AI integration, microservices architecture, and mission-critical reliability.',
    tags: ['AI-Driven', 'Cloud Native'],
    metrics: { codeQuality: 'A+', velocity: '+40%', unitTest: '99%' }
  }
];

export default function ServicesPage() {
  const [activeSegment, setActiveSegment] = useState('cloud');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'cloud' || hash === 'cyber' || hash === 'bespoke') {
        setActiveSegment(hash);
    } else if (hash === 'sec') {
        setActiveSegment('cyber');
    } else if (hash === 'saas') {
        setActiveSegment('bespoke');
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Header Section */}
      <section className="section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div style={{ 
                display: 'inline-flex', 
                padding: '0.4rem 1rem', 
                backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                color: 'var(--brand-cyan)', 
                borderRadius: '2rem', 
                fontSize: '0.75rem', 
                fontWeight: 800,
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                Technical Mastery
              </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }}>Solutions Built for the <span className="text-gradient">Elite</span>.</h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.25rem', maxWidth: '750px', lineHeight: '1.7' }}>
              We don&apos;t just provide services; we engineer digital sovereignty. Explore our core pillars of enterprise technical evolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURE VISUALIZATION */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '10rem' }}>
        <div className="container">
            <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', minHeight: '600px' }}>
                    
                    {/* Control Panel */}
                    <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '4rem', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ fontSize: '0.7rem', fontWeight: 900, marginBottom: '2.5rem', letterSpacing: '4px', opacity: 0.3 }}>SYSTEM ORCHESTRATION</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {SERVICES.map(s => (
                                <button 
                                    key={s.id}
                                    onClick={() => setActiveSegment(s.id)}
                                    className={`nav-link ${activeSegment === s.id ? 'active' : ''}`}
                                    style={{ 
                                        padding: '1.5rem', 
                                        justifyContent: 'flex-start',
                                        gap: '1.5rem',
                                        backgroundColor: activeSegment === s.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                                        opacity: activeSegment === s.id ? 1 : 0.4
                                    }}
                                >
                                    {s.icon}
                                    <div style={{ textAlign: 'left' }}>
                                        <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.2rem' }}>{s.title}</div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary)' }}>Ready for Deployment</div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '4rem' }}>
                            <div className="glass-panel" style={{ padding: '1.5rem', backgroundColor: '#020617', borderRadius: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <Activity size={16} color="var(--primary)" />
                                    <span style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '1px' }}>GLOBAL STATUS</span>
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>99.9997%</div>
                                <div style={{ fontSize: '0.65rem', opacity: 0.5, marginTop: '0.5rem' }}>Real-time availability monitoring active.</div>
                            </div>
                        </div>
                    </div>

                    {/* Architectural Viewport */}
                    <div style={{ padding: '4rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeSegment}
                                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                transition={{ duration: 0.4 }}
                                style={{ width: '100%', textAlign: 'center' }}
                            >
                                <div style={{ color: 'var(--primary)', marginBottom: '3rem', transform: 'scale(2)' }}>
                                    {SERVICES.find(s => s.id === activeSegment)?.icon}
                                </div>
                                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{SERVICES.find(s => s.id === activeSegment)?.title}</h2>
                                <p style={{ maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.25rem', opacity: 0.6, lineHeight: 1.6 }}>
                                    {SERVICES.find(s => s.id === activeSegment)?.desc}
                                </p>

                                {/* Technical Metrics Grid */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
                                    {Object.entries(SERVICES.find(s => s.id === activeSegment)?.metrics || {}).map(([key, val]) => (
                                        <div key={key} className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)' }}>
                                            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem' }}>{val}</div>
                                            <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.4 }}>{key.replace(/([A-Z])/g, ' $1')}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                                    <button className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Configure Topology</button>
                                    <button className="btn btn-glass" style={{ padding: '1rem 3rem' }}>View Diagrams</button>
                                </div>
                            </motion.div>
                         </AnimatePresence>

                         {/* Background Geometric Grid */}
                         <div style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: 0.05, backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Traditional Services Grid Re-styled */}
      <section className="section" style={{ paddingTop: 0, borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
             <h2 style={{ fontSize: '3rem' }}>The Full Spectrum Portfolio.</h2>
          </div>
          <div className="bento-grid" style={{ gridAutoRows: 'auto' }}>
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bento-item"
              >
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>{service.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                  {service.desc}
                </p>
                <div style={{ height: '1px', width: '100%', background: 'var(--border)', marginBottom: '2rem' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        {service.tags.map(tag => (
                            <span key={tag} style={{ fontSize: '0.6rem', fontWeight: 900, color: 'var(--primary)', padding: '0.3rem 0.6rem', background: 'var(--muted)', borderRadius: '0.4rem' }}>{tag}</span>
                        ))}
                    </div>
                    <ArrowRight size={20} opacity={0.3} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
