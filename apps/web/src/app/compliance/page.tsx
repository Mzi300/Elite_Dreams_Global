'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Book, CheckCircle, Scale, Database, Lock, Activity, ArrowRight, Zap, Users } from 'lucide-react';

const FRAMEWORK_PILLARS = [
  { 
    id: 'security', 
    title: 'Offensive Security', 
    icon: <Lock size={24} />, 
    desc: 'Our zero-trust architecture is validated through daily automated red-team simulations and proprietary AI detection engines.' 
  },
  { 
    id: 'audit', 
    title: 'Eternal Auditing', 
    icon: <Activity size={24} />, 
    desc: 'Real-time ledger-based auditing of all system changes, providing a tamper-proof record of global infrastructure modifications.' 
  },
  { 
    id: 'ethical', 
    title: 'Ethical Sovereignty', 
    icon: <Scale size={24} />, 
    desc: 'Our AI and automation protocols are governed by a strict ethical framework that prioritizes human oversight and digital autonomy.' 
  },
];

export default function CompliancePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Governance Hero */}
      <section className="section" style={{ padding: '10rem 0', backgroundImage: 'linear-gradient(to bottom, rgba(14, 165, 233, 0.05), transparent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
               <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1.25rem', backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                color: 'var(--primary)', borderRadius: '2rem', fontSize: '0.75rem', 
                fontWeight: 900, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '4px'
              }}>
                <Shield size={14} /> THE GOVERNANCE FRAMEWORK
              </div>
              <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '2rem', letterSpacing: '-0.04em' }}>Technical Authority <br /><span className="text-gradient">Globally Defined.</span></h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', lineHeight: 1.8 }}>
                The Elite Dreams Governance Framework (EDGF) is the definitive manual for technical sovereignty. We establish the standards for security, ethics, and operational reliability across the global network.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
             {FRAMEWORK_PILLARS.map((pillar, i) => (
                <motion.div 
                    key={pillar.id} 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="premium-card" style={{ padding: '4rem' }}
                >
                    <div style={{ width: '64px', height: '64px', background: 'var(--muted)', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '2.5rem' }}>
                        {pillar.icon}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{pillar.title}</h3>
                    <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '2rem' }}>{pillar.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Interactive Compliance Map (Visual Placeholder Representation) */}
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
           <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', minHeight: '500px' }}>
                 <div style={{ padding: '4rem', backgroundColor: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '2px', marginBottom: '1.5rem' }}>GLOBAL STANDARDS ADAPTATION</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Universal Compliance Engine.</h2>
                    <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '3rem' }}>
                        Our systems automatically adapt to local regulatory requirements while maintaining a unified global security posture. One framework, infinite compliance.
                    </p>
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ padding: '0.5rem 1rem', background: 'var(--muted)', borderRadius: '0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>ISO 27001</span>
                        <span style={{ padding: '0.5rem 1rem', background: 'var(--muted)', borderRadius: '0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>NIST 800-53</span>
                        <span style={{ padding: '0.5rem 1rem', background: 'var(--muted)', borderRadius: '0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>HIPAA</span>
                        <span style={{ padding: '0.5rem 1rem', background: 'var(--muted)', borderRadius: '0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>PCI-DSS</span>
                    </div>
                 </div>
                 
                 <div style={{ padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px', background: 'var(--background)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '0.5rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '50%' }}><CheckCircle size={20} /></div>
                            <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Governance Sync Active</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ height: '8px', background: 'var(--muted)', borderRadius: '4px', overflow: 'hidden' }}>
                                <motion.div initial={{ width: 0 }} whileInView={{ width: '94%' }} transition={{ duration: 1.5 }} style={{ height: '100%', background: 'var(--primary)' }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 900, opacity: 0.5 }}>
                                <span>VERIFICATION LEVEL</span>
                                <span>94% COMPLETE</span>
                            </div>
                        </div>
                        <div style={{ marginTop: '3rem', fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.6 }}>
                            &quot;The EDGF ensures that all operational nodes maintain a Minimum Viable Security posture of Tier 4 or higher at all times.&quot;
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <style jsx>{`
        .section { padding: 8rem 0; }
      `}</style>
    </div>
  );
}
