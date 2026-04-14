'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionValue, Variants } from 'framer-motion';
import { Cloud, ShieldCheck, Cpu, BarChart3, Globe, ChevronRight, Zap, Target, Activity, ArrowRight } from 'lucide-react';
import PartnerBanner from '@/components/sections/PartnerBanner';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.4 } 
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

// --- MAGNETIC COMPONENT ---
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Limits the pull distance
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="hyper-premium-root">
      <main>
        {/* --- HERO SECTION: FULL-IMMERSIVE BACKGROUND --- */}
        <section ref={heroRef} className="section" style={{ 
          height: '110vh', 
          display: 'flex', 
          alignItems: 'center', 
          position: 'relative', 
          padding: 0,
          backgroundColor: '#020617',
          overflow: 'hidden'
        }}>
          {/* Immersive Background Image with Parallax */}
          <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, y: heroY, scale: heroScale }}>
             <Image 
                src="/elite_dreams_hero_bg_1776080579570.png" 
                alt="Elite Dreams Global Digital Infrastructure" 
                fill 
                style={{ objectFit: 'cover', opacity: 0.6 }}
                priority
            />
            {/* Cinematic Gradient Overlays */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #020617 15%, transparent 50%, #020617 85%)' }}></div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #020617 95%)' }}></div>
          </motion.div>

          {/* Grid Background Effect */}
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.5
          }}></div>

          <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <div className="animate-reveal">
              <motion.div variants={itemVariants} style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.6rem 1.25rem', 
                backgroundColor: 'rgba(255, 255, 255, 0.03)', 
                color: 'var(--brand-cyan)', 
                borderRadius: '0.75rem', 
                fontSize: '0.7rem', 
                fontWeight: 900,
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.3rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}>
                <Zap size={12} fill="currentColor" />
                Established 2011 // Global Standard
              </motion.div>
              
              <motion.h1 variants={itemVariants} style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 0.9 }}>
                Engineering the <br/><span className="text-gradient">Future</span> of <br/> Global Enterprise.
              </motion.h1>
              
              <motion.p variants={itemVariants} style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '3rem', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: '1.6', fontWeight: 500 }}>
                Elite Dreams Global Technologies is the world-class partner for cloud architecture, cybersecurity systems, and infinite software scalability. We define the technical standards of the future.
              </motion.p>
              
              <motion.div variants={itemVariants} style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                <Magnetic>
                    <a href="#solutions" className="btn btn-primary" style={{ backgroundColor: 'white', color: '#020617', padding: '1rem 3rem' }}>
                        Start Transformation <ChevronRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </a>
                </Magnetic>
                <Magnetic>
                    <a href="/products" className="btn btn-glass" style={{ color: 'white', border: '1px solid rgba(255,255,255,0.15)', padding: '1.25rem 3.5rem' }}>
                        View Platform Assets
                    </a>
                </Magnetic>
              </motion.div>
            </div>
          </div>

          {/* Floating Tactical HUD Element */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              position: 'absolute', 
              bottom: '5rem', 
              right: '5rem', 
              zIndex: 3 
            }}
          >
              <div className="glass-panel" style={{ 
                  padding: '1.5rem 2.5rem', 
                  borderRadius: '1.25rem',
                  backdropFilter: 'blur(32px) saturate(200%)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
                  textAlign: 'left'
              }}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 800, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '5px', marginBottom: '1rem' }}>Core System Matrix</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 1, 0.2] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}
                          />
                          <span style={{ color: 'white', fontWeight: 900, fontSize: '0.9rem', letterSpacing: '1px' }}>ACTIVE</span>
                      </div>
                      <div style={{ height: '28px', width: '1px', backgroundColor: 'rgba(255,255,255,0.15)' }}></div>
                      <div style={{ color: 'white', opacity: 0.7, fontSize: '0.85rem', fontFamily: 'monospace' }}>Uptime: 99.9997%</div>
                  </div>
                  
                  {/* Decorative Scanline Animation */}
                  <motion.div 
                    animate={{ y: [0, 80, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    style={{ 
                        position: 'absolute', 
                        left: 0, top: 0, right: 0, 
                        height: '1px', 
                        background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
                        pointerEvents: 'none'
                    }}
                  />
              </div>
          </motion.div>
        </section>

        {/* --- LOGO MARQUEE: SOCIAL PROOF --- */}
        <div style={{ padding: '6rem 0', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--muted)', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.3, filter: 'grayscale(100%)', flexWrap: 'wrap', gap: '4rem' }}>
                    {['MICROSOFT', 'AWS', 'CISCO', 'DATADOG', 'PALANTIR', 'NVIDIA'].map((client) => (
                        <span key={client} style={{ fontWeight: 900, fontSize: '1.25rem', letterSpacing: '6px' }}>{client}</span>
                    ))}
                </div>
            </div>
        </div>

        {/* --- INNOVATION BENTO GRID: SOLUTIONS --- */}
        <section id="solutions" className="section">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: '8rem' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary)', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                    <div style={{ width: '40px', height: '1px', backgroundColor: 'currentColor' }}></div>
                    Strategic Capability
                </div>
                <h2 style={{ maxWidth: '900px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Forging Excellence in <br/><span className="text-gradient">Mission-Critical</span> Environments.</h2>
            </motion.div>
            
            <div className="bento-grid">
              {/* Item 1: Large Primary */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bento-item bento-large interactive"
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '60%', background: 'radial-gradient(circle at top right, var(--primary-glow), transparent 70%)', zIndex: 0 }}></div>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ color: 'var(--primary)', marginBottom: '3rem' }}>
                        <Cloud size={56} strokeWidth={1.25} />
                    </div>
                    <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Cloud Engineering</h3>
                    <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', marginBottom: '4rem', flex: 1, lineHeight: 1.8 }}>
                        We architect ultra-scalable multi-cloud environments for the world&apos;s most demanding enterprises. Zero-latency infrastructure defined by code.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div className="glass-panel" style={{ padding: '0.75rem 1.5rem', fontSize: '0.7rem', fontWeight: 900, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '1px' }}>
                            <Target size={14} /> AZURE EXPERTISE
                        </div>
                        <div className="glass-panel" style={{ padding: '0.75rem 1.5rem', fontSize: '0.7rem', fontWeight: 900, color: 'var(--brand-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem', letterSpacing: '1px' }}>
                            <Activity size={14} /> AWS PARTNER
                        </div>
                    </div>
                </div>
              </motion.div>

              {/* Item 2: Cyber High Contrast */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bento-item bento-tall interactive" 
                style={{ backgroundColor: '#020617', color: 'white' }}
              >
                 <div style={{ color: 'var(--primary)', marginBottom: '3rem' }}>
                    <ShieldCheck size={56} strokeWidth={1.25} />
                 </div>
                 <h3 style={{ color: 'white' }}>Cyber Defense Systems</h3>
                 <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', marginTop: '2rem', lineHeight: 2 }}>
                    24/7 Global Security Operations Center (SOC) monitoring using offensive intelligence to proactively neutralize advanced threats.
                 </p>
                 <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
                    <div style={{ height: '3px', background: 'linear-gradient(to right, var(--primary), transparent)', width: '100%', borderRadius: '2px' }}></div>
                 </div>
              </motion.div>

              {/* Item 3: Software Wide */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bento-item bento-wide interactive"
              >
                 <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '5rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ color: 'var(--primary)', marginBottom: '2.5rem' }}>
                            <Cpu size={48} strokeWidth={1.25} />
                        </div>
                        <h3>Software Modernization</h3>
                        <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem', marginTop: '1.5rem', lineHeight: 1.7 }}>
                            Converting legacy technical debt into high-performance, cloud-native SaaS ecosystems with AI-first architecture.
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: '3.5rem', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--foreground)', marginBottom: '0.5rem', letterSpacing: '-2px' }}>99.999%</div>
                        <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', opacity: 0.4, letterSpacing: '4px' }}>Enterprise SLI</div>
                    </div>
                 </div>
              </motion.div>

              {/* Item 4: Data */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bento-item interactive"
              >
                 <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}>
                    <BarChart3 size={40} strokeWidth={1.25} />
                 </div>
                 <h3>Global Insights</h3>
                 <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', lineHeight: 1.8, opacity: 0.8 }}>
                    Predictive modeling and enterprise data engineering for real-time strategic decisioning.
                 </p>
              </motion.div>

              {/* Item 5: Hardware */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bento-item interactive"
              >
                 <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}>
                    <Globe size={40} strokeWidth={1.25} />
                 </div>
                 <h3>Strategic Markets</h3>
                 <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', lineHeight: 1.8, opacity: 0.8 }}>
                    Hardware logistics and technical deployments across the world&apos;s most critical sectors.
                 </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- CALL TO ACTION: GLASS CENTER --- */}
        <section className="section" style={{ padding: '12rem 0' }}>
            <div className="container">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-panel" 
                  style={{ 
                    padding: '12rem 4rem', 
                    borderRadius: 'var(--radius-lg)', 
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, var(--muted), transparent)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid var(--border)'
                  }}
                >
                    {/* Animated background glow */}
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        style={{ 
                            position: 'absolute', top: '-50%', left: '-50%', 
                            width: '100%', height: '100%', 
                            background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
                            opacity: 0.5, zIndex: 0 
                        }} 
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>Ready to Scale Your Global Engineering <br/>Partnership Today?</h2>
                        <p style={{ fontSize: '1.5rem', color: 'var(--muted-foreground)', marginBottom: '5rem', maxWidth: '750px', margin: '0 auto 5rem', lineHeight: 1.6 }}>
                            Join 500+ global enterprises that trust Elite Dreams for their digital sovereignty and technical evolution.
                        </p>
                        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
                            <Magnetic>
                                <a href="/contact" className="btn btn-primary" style={{ padding: '1.5rem 5rem' }}>Partner With Us</a>
                            </Magnetic>
                            <Magnetic>
                                <a href="/industries" className="btn btn-outline" style={{ padding: '1.5rem 5rem', backgroundColor: 'var(--background)', border: '1px solid var(--border)' }}>Case Studies</a>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
      </main>

      <style jsx>{`
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: 1fr 1fr; }
          .bento-large, .bento-wide, .bento-tall { grid-column: span 2; grid-row: auto; }
        }
        @media (max-width: 640px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-large, .bento-wide, .bento-tall, .bento-item { grid-column: auto; }
          .btn { width: 100%; }
          .container { padding: 0 1.5rem; }
        }
      `}</style>
    </div>
  );
}
