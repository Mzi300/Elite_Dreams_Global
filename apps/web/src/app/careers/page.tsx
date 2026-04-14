'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Globe, Cpu, ChevronRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <Briefcase size={24} color="var(--primary)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 900, letterSpacing: '4px' }}>TALENT ACQUISITION</span>
                </div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-2px' }}>JOIN THE <span className="text-gradient">ELITE</span></h1>
                <p style={{ opacity: 0.5, fontSize: '1.25rem', marginTop: '1.5rem' }}>Recruiting the world's most sophisticated engineering and security minds.</p>
            </motion.div>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
                { title: 'Sovereign Node Architect', team: 'Cloud Sytems', location: 'Remote / Global' },
                { title: 'Offensive Security Analyst', team: 'Defensive Perimeter', location: 'Remote / Global' },
                { title: 'Fullstack Sovereign Engineer', team: 'Enterprise Hub', location: 'Remote / Global' }
            ].map((job, i) => (
                <div key={i} className="glass-panel" style={{ padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div>
                        <div style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '2px', marginBottom: '0.5rem' }}>{job.team}</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 900 }}>{job.title}</h3>
                        <div style={{ fontSize: '0.8rem', opacity: 0.4, marginTop: '0.5rem' }}>LOCATION: {job.location}</div>
                    </div>
                    <Link href="/contact" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'white' }}>
                        INITIALIZED APPLICATION <ChevronRight size={16} />
                    </Link>
                </div>
            ))}
        </div>

        <div className="glass-panel" style={{ padding: '4rem', marginTop: '6rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Don't see your tactical niche?</h3>
            <p style={{ opacity: 0.5, marginBottom: '2rem' }}>We are always looking for non-binary thinkers and strategic architects.</p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>GENERAL APPLICATION</Link>
        </div>
      </div>
    </div>
  );
}
