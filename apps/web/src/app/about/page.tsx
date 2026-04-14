'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Globe, Zap, Shield, Users, ArrowDown, Cpu, Activity } from 'lucide-react';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Vision Hero */}
      <section className="section" style={{ padding: '12rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          >
             <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1rem', backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                color: 'var(--primary)', borderRadius: '2rem', fontSize: '0.75rem', 
                fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '4px'
              }}>
                <Target size={14} /> THE GLOBAL MISSION
              </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '2rem', letterSpacing: '-0.04em' }}>Engineering Digital <span className="text-gradient">Sovereignty.</span></h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--muted-foreground)', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
                 Elite Dreams Global Technologies defines the frontier of enterprise engineering. We exist to provide the technical foundation for the world&apos;s most ambitious organizations.
            </p>
            <motion.div 
                animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
                style={{ color: 'var(--primary)', opacity: 0.5 }}
            >
                <ArrowDown size={32} />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background Visual */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: 0.1, backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </section>

      {/* Core Values / Pillars */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                 <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '0.75rem', marginBottom: '1.5rem', letterSpacing: '2px' }}>OUR PHILOSOPHY</div>
                 <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Technical Excellence without compromise.</h2>
                 <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                    We believe that the future is built on secure, scalable, and sovereign technical infrastructure. At Elite Dreams, we combine visionary strategy with elite execution to solve the impossible.
                 </p>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ color: 'var(--primary)' }}><Shield size={24} /></div>
                        <div>
                            <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>Unwavering Security</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.6 }}>Security is not a feature; it is our baseline.</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ color: 'var(--primary)' }}><Cpu size={24} /></div>
                        <div>
                            <div style={{ fontWeight: 800, marginBottom: '0.25rem' }}>Innovation Precision</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.6 }}>We engineer for the next decade, from day one.</div>
                        </div>
                    </div>
                 </div>
              </motion.div>
              
              <div className="grid grid-2" style={{ gap: '2rem' }}>
                 <div className="glass-panel" style={{ padding: '3rem', transform: 'translateY(2rem)' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>99.9%</div>
                    <div style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Execution Accuracy</div>
                    <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>Precision-modeled deployment pipelines for global clusters.</p>
                 </div>
                 <div className="glass-panel" style={{ padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>24/7</div>
                    <div style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Mission Monitoring</div>
                    <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>Constant surveillance of the global technical landscape.</p>
                 </div>
                 <div className="glass-panel" style={{ padding: '3rem', transform: 'translateY(2rem)' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>100+</div>
                    <div style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Global Markets</div>
                    <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>Expanding sovereignty across every continent.</p>
                 </div>
                 <div className="glass-panel" style={{ padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>∞</div>
                    <div style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Future Focus</div>
                    <p style={{ fontSize: '0.85rem', opacity: 0.5 }}>Our roadmap is written in legacy, but aimed at infinity.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>The Elite Network.</h2>
              <p style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>Building the future of finance, defense, and global infrastructure.</p>
           </div>
           
           <div className="glass-panel" style={{ padding: '6rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
                 <div style={{ flex: 1, minWidth: '300px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Global Orchestration</h3>
                    <p style={{ lineHeight: 1.8, opacity: 0.6, marginBottom: '2.5rem' }}>
                        From our global headquarters to our satellite command centers, we maintain a unified technical vision. Our mission is to empower the elite with the tools of digital supremacy.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Activity size={18} color="var(--primary)" />
                            <span style={{ fontWeight: 800, fontSize: '0.8rem' }}>LIVE OPS</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Users size={18} color="var(--primary)" />
                            <span style={{ fontWeight: 800, fontSize: '0.8rem' }}>1.2M+ NODES</span>
                        </div>
                    </div>
                 </div>
                 
                 <div style={{ flex: 1, minWidth: '300px' }}>
                    <div className="premium-card" style={{ padding: '3rem', backgroundColor: 'var(--background)' }}>
                        <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><Globe size={32} /></div>
                        <h4 style={{ marginBottom: '1rem' }}>Planetary Presence</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6, lineHeight: 1.6 }}>Deploying infrastructure that ignores borders and respects only the code. Pure technical sovereignty.</p>
                    </div>
                 </div>
              </div>
              
              {/* Abstract decorative element */}
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'var(--primary)', opacity: 0.05, borderRadius: '50%', filter: 'blur(100px)' }}></div>
           </div>
        </div>
      </section>

      <style jsx>{`
        .section { padding: 10rem 0; }
      `}</style>
    </div>
  );
}
