'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, CheckCircle, Zap, Activity, Globe, Scale, ArrowRight, Download, Server } from 'lucide-react';

const SLA_TIERS = [
  { 
    tier: 'Enterprise Global', 
    uptime: '99.999%', 
    response: '< 15 Minutes', 
    recovery: '4 Hours',
    features: ['Dedicated Technical Lead', 'Global Cluster Failover', 'Custom Security Protocol']
  },
  { 
    tier: 'Strategic Partner', 
    uptime: '99.99%', 
    response: '< 1 Hour', 
    recovery: '8 Hours',
    features: ['24/7 Phone Support', 'Standard Failover', 'Standard Security Audits']
  },
];

export default function SLAPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* SLA Hero */}
      <section className="section" style={{ padding: '10rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
             <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1.25rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                color: 'var(--primary)', borderRadius: '2rem', fontSize: '0.75rem', 
                fontWeight: 900, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '4px'
              }}>
                <Clock size={14} /> SERVICE LEVEL AGREEMENTS
              </div>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', marginBottom: '2rem', letterSpacing: '-0.04em' }}>Unwavering <br /><span className="text-gradient">Availability.</span></h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '700px', lineHeight: 1.8 }}>
                Elite Dreams provides the most aggressive uptime guarantees in the industry. Our SLAs are backed by a global network of redundant clusters and elite technical response units.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SLA Metrics */}
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
           <div className="grid grid-2" style={{ gap: '4rem' }}>
              {SLA_TIERS.map((tier, i) => (
                <motion.div 
                    key={tier.tier} 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="premium-card" style={{ padding: '5rem' }}
                >
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '2px', marginBottom: '2.5rem', textTransform: 'uppercase' }}>{tier.tier} Protocol</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>{tier.uptime}</div>
                            <div style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.5, letterSpacing: '1px' }}>UPTIME GUARANTEE</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>{tier.response}</div>
                            <div style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.5, letterSpacing: '1px' }}>MAX RESPONSE TIME</div>
                        </div>
                    </div>
                    
                    <div style={{ height: '1px', background: 'var(--border)', marginBottom: '3.5rem' }}></div>
                    
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem' }}>
                        {tier.features.map(f => (
                            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem', opacity: 0.8 }}>
                                <CheckCircle size={18} color="var(--primary)" /> {f}
                            </li>
                        ))}
                    </ul>
                    
                    <button className="btn btn-primary" style={{ width: '100%', padding: '1.25rem' }}>REQUEST FULL TERMS</button>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Global Monitoring Notice */}
      <section className="section">
        <div className="container">
           <div className="glass-panel" style={{ padding: '6rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '5rem', alignItems: 'center' }}>
              <div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Activity size={24} color="var(--primary)" />
                    <h3 style={{ fontSize: '2rem' }}>Real-time Orchestration</h3>
                 </div>
                 <p style={{ fontSize: '1.1rem', color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '3rem' }}>
                    Our SLAs are not just legal promises; they are technical realities. Every system node is monitored in real-time by our global command centers. In the event of a deviation, failsafe protocols are engaged automatically within milliseconds.
                 </p>
                 <div style={{ display: 'flex', gap: '3rem' }}>
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>&lt; 5ms</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.5, fontWeight: 900 }}>FAILOVER LATENCY</div>
                    </div>
                    <div>
                        <div style={{ fontWeight: 800, fontSize: '1.25rem' }}>14ms</div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.5, fontWeight: 900 }}>MTTD (MEAN TIME TO DETECT)</div>
                    </div>
                 </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div className="premium-card" style={{ padding: '2rem', backgroundColor: 'var(--background)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <div style={{ fontWeight: 800 }}>Standard SLA v2.4</div>
                        <Download size={18} opacity={0.3} />
                    </div>
                    <button className="btn btn-glass" style={{ width: '100%', padding: '0.75rem', fontSize: '0.7rem' }}>DOWNLOAD PDF PROTOCOL</button>
                 </div>
                 <div className="premium-card" style={{ padding: '2rem', backgroundColor: 'var(--background)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <div style={{ fontWeight: 800 }}>Custom Enterprise Addendum</div>
                        <Download size={18} opacity={0.3} />
                    </div>
                    <button className="btn btn-glass" style={{ width: '100%', padding: '0.75rem', fontSize: '0.7rem' }}>CONSULT AGENT</button>
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
