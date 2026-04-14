'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Scale, ShoppingCart, Factory, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

const INDUSTRIES = [
  {
    name: 'National Healthcare',
    desc: 'Securing electronic health records (EHR) and implementing AI-driven diagnostic infrastructure for sovereign health departments.',
    icon: <Stethoscope size={32} strokeWidth={1.5} />,
    intensity: 'high'
  },
  {
    name: 'Financial Services',
    desc: 'Ultra-low latency trading environments and quantum-resistant encryption for global institutional banking and fintech leaders.',
    icon: <Scale size={32} strokeWidth={1.5} />,
    intensity: 'max'
  },
  {
    name: 'Advanced Retail',
    desc: 'Implementing massive-scale omnichannel logistics and real-time inventory intelligence for the world&apos;s largest consumer brands.',
    icon: <ShoppingCart size={32} strokeWidth={1.5} />,
    intensity: 'medium'
  },
  {
    name: 'Manufacturing 4.0',
    desc: 'Industrial IoT integration and bespoke ERP modernization for automated high-output production environments.',
    icon: <Factory size={32} strokeWidth={1.5} />,
    intensity: 'high'
  },
  {
    name: 'Defense & Government',
    desc: 'Mission-critical software engineering and hardened physical infrastructure for national security and governmental departments.',
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    intensity: 'max'
  },
  {
    name: 'Telecom & Tech',
    desc: 'Scaling 5G infrastructure and architecting mass-scale data centers for the next generation of global connectivity.',
    icon: <Cpu size={32} strokeWidth={1.5} />,
    intensity: 'medium'
  }
];

export default function IndustriesPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Immersive Header */}
      <section className="section" style={{ paddingBottom: '3rem' }}>
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
              color: 'var(--brand-indigo)', 
              borderRadius: '2rem', 
              fontSize: '0.75rem', 
              fontWeight: 800,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Global Impact Sectors
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }}>Where Tech Meets <span className="text-gradient">Empire</span>.</h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.25rem', maxWidth: '700px', lineHeight: '1.7' }}>
              Elite Dreams Global provides the technical backbone for the most mission-critical sectors of the modern economy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Bento Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="bento-grid">
            {INDUSTRIES.map((industry, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`bento-item ${i === 0 || i === 4 ? 'bento-large' : ''} ${i === 1 ? 'bento-wide' : ''}`}
                style={{ 
                    position: 'relative', 
                    overflow: 'hidden',
                    backgroundColor: industry.intensity === 'max' ? '#020617' : 'var(--card)',
                    color: industry.intensity === 'max' ? 'white' : 'inherit'
                }}
              >
                {/* Visual Flair */}
                {industry.intensity === 'max' && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '-20%', 
                    right: '-20%', 
                    width: '60%', 
                    height: '60%', 
                    background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)', 
                    zIndex: 0 
                  }}></div>
                )}

                <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ color: industry.intensity === 'max' ? 'white' : 'var(--primary)', marginBottom: '2.5rem' }}>
                        {industry.icon}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                        <h3 style={{ marginBottom: '1.5rem', color: industry.intensity === 'max' ? 'white' : 'inherit' }}>{industry.name}</h3>
                        <p style={{ 
                            color: industry.intensity === 'max' ? 'rgba(255,255,255,0.6)' : 'var(--muted-foreground)', 
                            fontSize: '1rem', 
                            lineHeight: 1.7 
                        }}>
                            {industry.desc}
                        </p>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ 
                            fontSize: '0.65rem', 
                            fontWeight: 900, 
                            textTransform: 'uppercase', 
                            letterSpacing: '2px',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '0.5rem',
                            backgroundColor: industry.intensity === 'max' ? 'rgba(255,255,255,0.1)' : 'var(--muted)',
                            color: industry.intensity === 'max' ? 'white' : 'var(--primary)'
                        }}>
                            Intensity: {industry.intensity}
                        </div>
                        <ArrowUpRight size={20} opacity={0.3} />
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ maxWidth: '800px', margin: '0 auto' }}
            >
                <div style={{ fontSize: '3rem', marginBottom: '2rem', opacity: 0.1 }}>&ldquo;</div>
                <h2 style={{ fontSize: '2.5rem', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.4, marginBottom: '2.5rem' }}>
                    Standard software solves problems. Elite engineering redefines the possibility.
                </h2>
                <div style={{ fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                    Elite Dreams Global Manifesto
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
