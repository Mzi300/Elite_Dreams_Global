'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Book, Terminal, Zap, Globe, Shield, Cpu, ArrowRight, Search, FileCode, Layers } from 'lucide-react';

const DOC_CATEGORIES = [
  { title: 'Cloud Integration', icon: <Layers size={24} />, desc: 'Core infrastructure SDKs and deployment templates.' },
  { title: 'Security Protocols', icon: <Shield size={24} />, desc: 'Encryption standards and zero-trust authentication docs.' },
  { title: 'Platform APIs', icon: <Terminal size={24} />, desc: 'Restful & gRPC interface references for global systems.' },
];

const QUICK_STARTS = [
  { title: 'Node.js SDK', code: 'npm install @elite-dreams/sdk' },
  { title: 'Python Engine', code: 'pip install elite-dreams-core' },
  { title: 'Global CLI', code: 'curl -sL https://cli.elitedreams.tech | bash' },
];

export default function DocsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: '4rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div 
               initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            >
              <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1rem', backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                color: 'var(--primary)', borderRadius: '2rem', fontSize: '0.75rem', 
                fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase'
              }}>
                <Code size={14} /> Developer Ecosystem
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1 }}>Build the <span className="text-gradient">Unknown.</span></h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '3rem' }}>
                Access the sovereign technical infrastructure of Elite Dreams. Integrate with global cloud clusters, offensive security engines, and AI-driven automation systems.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                 <div style={{ flex: 1, position: 'relative' }}>
                    <Search style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} size={20} />
                    <input 
                        type="text" 
                        placeholder="Search technical documentation..." 
                        style={{ width: '100%', padding: '1.25rem 1.25rem 1.25rem 3.5rem', backgroundColor: 'var(--muted)', borderRadius: '1rem', border: '1px solid var(--border)', color: 'white' }}
                    />
                 </div>
                 <button className="btn btn-primary" style={{ padding: '0 2rem' }}>QUERY</button>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
               className="glass-panel" style={{ padding: '2.5rem', backgroundColor: 'rgba(0,0,0,0.5)', overflow: 'hidden' }}
            >
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f43f5e' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                </div>
                <div style={{ fontFamily: 'monospace', color: '#94a3b8', fontSize: '0.85rem', lineHeight: 2 }}>
                    <div style={{ color: '#10b981' }}>// Initialize Elite Dreams Tactical Unit</div>
                    <div><span style={{ color: 'var(--primary)' }}>import</span> {'{ unit }'} <span style={{ color: 'var(--primary)' }}>from</span> <span style={{ color: '#eab308' }}>&quot;@elite/core&quot;</span>;</div>
                    <br />
                    <div><span style={{ color: 'var(--primary)' }}>const</span> tacticalSession = <span style={{ color: 'var(--primary)' }}>await</span> unit.initialize({'{'}</div>
                    <div style={{ paddingLeft: '2rem' }}>region: <span style={{ color: '#eab308' }}>&quot;GLOBAL_OMEGA&quot;</span>,</div>
                    <div style={{ paddingLeft: '2rem' }}>protocol: <span style={{ color: '#eab308' }}>&quot;QUANTUM_ENCRYPT&quot;</span>,</div>
                    <div style={{ paddingLeft: '2rem' }}>authLevel: <span style={{ color: '#eab308' }}>&quot;ELITE_LEVEL_7&quot;</span></div>
                    <div>{'}'});</div>
                    <br />
                    <div style={{ color: '#10b981' }}>// Mission Ready.</div>
                    <div>tacticalSession.beginSync();</div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="grid grid-3">
             {DOC_CATEGORIES.map((cat, i) => (
               <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="premium-card" style={{ padding: '3rem' }}
               >
                 <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}>{cat.icon}</div>
                 <h3 style={{ marginBottom: '1rem' }}>{cat.title}</h3>
                 <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>{cat.desc}</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px' }}>
                    EXPLORE MODULE <ArrowRight size={14} />
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="section">
        <div className="container">
           <div className="glass-panel" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
              <div>
                 <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Tactical Quickstarts</h2>
                 <p style={{ color: 'var(--muted-foreground)', marginBottom: '3rem', fontSize: '1.1rem' }}>Zero-friction deployment protocols for global engineering teams. Choose your technical stack and begin synchronization.</p>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {QUICK_STARTS.map((q, i) => (
                        <div key={i} style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.25rem' }}>{q.title}</div>
                                <code style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{q.code}</code>
                            </div>
                            <button className="nav-link" style={{ padding: '0.5rem' }}><FileCode size={18} /></button>
                        </div>
                    ))}
                 </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                 <div style={{ padding: '3rem', backgroundColor: 'var(--muted)', borderRadius: '1.5rem', border: '1px solid var(--border)', flex: 1 }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(14,165,233,0.1)', color: 'var(--primary)', borderRadius: '1rem' }}><Cpu size={24} /></div>
                        <div>
                            <div style={{ fontWeight: 800 }}>Core Engine API</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>v4.2.0 Stable</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.6, lineHeight: 1.6, marginBottom: '2rem' }}>Comprehensive REST documentation for our global cluster management engine. Full OpenAPI specifications included.</p>
                    <button className="btn btn-outline" style={{ width: '100%', padding: '1rem' }}>OPEN SPECIFICATIONS</button>
                 </div>
                 
                 <div style={{ padding: '3rem', backgroundColor: 'rgba(14,165,233,0.05)', borderRadius: '1.5rem', border: '1px solid rgba(14,165,233,0.2)', flex: 1 }}>
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ padding: '0.75rem', backgroundColor: 'rgba(14,165,233,0.1)', color: 'var(--primary)', borderRadius: '1rem' }}><Globe size={24} /></div>
                        <div>
                            <div style={{ fontWeight: 800 }}>Support & Community</div>
                            <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>24/7 Priority Support</div>
                        </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.6, lineHeight: 1.6, marginBottom: '2rem' }}>Access our global engineering support channels or join the invitation-only developer roundtable.</p>
                    <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>JOIN ROUNDTABLE</button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <style jsx>{`
        .section { padding: 8rem 0; }
        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 2rem; }
      `}</style>
    </div>
  );
}
