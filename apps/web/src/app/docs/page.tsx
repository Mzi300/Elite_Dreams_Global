'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Code2, Book, Box, Search, ArrowRight, Zap, Globe, Lock } from 'lucide-react';

const DocCard = ({ title, desc, icon: Icon }: any) => (
    <div className="glass-panel" style={{ padding: '2.5rem', transition: 'all 0.3s ease', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.05)' }} 
         onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
         onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
        <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><Icon size={28} /></div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '1rem' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', opacity: 0.5, lineHeight: 1.6, marginBottom: '2rem' }}>{desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary)' }}>
            EXPLORE MODULE <ArrowRight size={14} />
        </div>
    </div>
);

export default function DocsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '6rem' }}>
          
          <div>
            <header style={{ marginBottom: '6rem' }}>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px', marginBottom: '1.5rem' }}>ENGINEERING INTERFACE</div>
                    <h1 style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-3px', marginBottom: '2rem' }}>DEVELOPER <span className="text-gradient">PORTAL</span></h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.5, maxWidth: '600px', lineHeight: 1.7 }}>
                        Access the Elite Dreams global API specifications, tactical integration guides, and enterprise SDKs.
                    </p>
                </motion.div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '6rem' }}>
                <DocCard icon={Zap} title="Quickstart Protocol" desc="Initialize your first sovereign node integration in under 5 minutes." />
                <DocCard icon={Box} title="API Reference" desc="Comprehensive documentation for all Elite Cloud and Security endpoints." />
                <DocCard icon={Lock} title="Security SDKs" desc="Pre-built components for defensive perimeter isolation and encryption." />
                <DocCard icon={Globe} title="Global Orchestration" desc="Managing multi-region infrastructure via the Command API." />
            </div>

            <div className="glass-panel" style={{ padding: '4rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '2rem' }}>Technical Deep Dives</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                        'Implementing Zero-Trust Authentication Loops',
                        'Optimizing Multi-Cloud Asset Propagation',
                        'Tactical Threat Hunter Integration',
                        'Global Energy Route Mapping'
                    ].map((title, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ fontWeight: 600 }}>{title}</div>
                            <ArrowRight size={16} opacity={0.3} />
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <aside>
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '1px' }}>SYSTEM STATUS</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#10b981', fontSize: '0.875rem', fontWeight: 800 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                    ALL SYSTEMS NOMINAL
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '1px' }}>RESOURCES</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                    <li><Link href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Community Hub</Link></li>
                    <li><Link href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Change Logs</Link></li>
                    <li><Link href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Architecture Patterns</Link></li>
                    <li><Link href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Developer Support</Link></li>
                </ul>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
