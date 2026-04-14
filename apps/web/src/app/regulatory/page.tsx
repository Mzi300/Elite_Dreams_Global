'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, FileText, CheckCircle, Globe, Lock, Info, ExternalLink } from 'lucide-react';

const DISCLOSURES = [
  { 
    id: 'data-privacy', 
    title: 'Data Sovereignty Protocol', 
    status: 'COMPLIANT', 
    desc: 'Our protocols for data handling exceed GDPR, CCPA, and regional sovereignty requirements. We utilize multi-layer quantum encryption for all data-at-rest.' 
  },
  { 
    id: 'cyber-sec', 
    title: 'Offensive Security Audits', 
    status: 'ACTIVE', 
    desc: 'Continuous real-time penetration testing conducted by internal and external elite technical units. All disclosures are maintained for client review.' 
  },
  { 
    id: 'compliance', 
    title: 'Global Compliance Tier 1', 
    status: 'CERTIFIED', 
    desc: 'Full certification for ISO/IEC 27001, SOC 2 Type II, and PCI-DSS Level 1 across all global cluster locations.' 
  },
];

export default function RegulatoryPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Transparency Hero */}
      <section className="section" style={{ padding: '10rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', 
                color: 'var(--secondary)', borderRadius: '2rem', fontSize: '0.75rem', 
                fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '4px'
              }}>
                <Eye size={14} /> PUBLIC DISCLOSURE
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '2rem' }}>Transparency <br /><span className="text-gradient">By Design.</span></h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>
                Elite Dreams maintains a policy of total technical transparency. We disclose our security posture, regulatory compliance, and operational protocols to ensure unwavering trust in our digital infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclosures Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
             {DISCLOSURES.map((item, i) => (
                <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="premium-card" style={{ padding: '3rem' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                        <div style={{ color: 'var(--primary)' }}><Shield size={28} /></div>
                        <div style={{ 
                            fontSize: '0.65rem', fontWeight: 900, 
                            padding: '0.3rem 0.6rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                            color: '#10b981', borderRadius: '0.4rem', border: '1px solid rgba(16, 185, 129, 0.2)'
                        }}>
                            {item.status}
                        </div>
                    </div>
                    <h3 style={{ marginBottom: '1.25rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '2rem' }}>{item.desc}</p>
                    <button className="nav-link" style={{ padding: 0, gap: '0.5rem', color: 'var(--primary)', fontWeight: 800 }}>
                        VIEW FULL DISCLOSURE <ExternalLink size={14} />
                    </button>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Certified Frameworks */}
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
           <div className="glass-panel" style={{ padding: '4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                 <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Global Standards Dashboard</h2>
                    <p style={{ color: 'var(--muted-foreground)', maxWidth: '500px' }}>Real-time monitoring of our technical and legal compliance status across global jurisdictions.</p>
                 </div>
                 <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ padding: '2rem', backgroundColor: 'var(--background)', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>SOC 2</div>
                        <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>ACTIVE AUDIT</div>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: 'var(--background)', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>HIPAA</div>
                        <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>CERTIFIED</div>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: 'var(--background)', borderRadius: '1rem', border: '1px solid var(--border)', textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '0.25rem' }}>BSI</div>
                        <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>VERIFIED</div>
                    </div>
                 </div>
              </div>

              <div style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                 <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <Info size={18} color="var(--primary)" />
                    <span style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2px' }}>OPERATIONAL TRANSPARENCY NOTICE</span>
                 </div>
                 <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.8 }}>
                    As of Q2 2026, Elite Dreams Global Technologies has successfully transitioned to the **Sovereign-Alpha Encryption** standard for all enterprise clients. This disclosure serves as formal notice of technical architectural upgrades matching international zero-trust mandates.
                 </p>
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
