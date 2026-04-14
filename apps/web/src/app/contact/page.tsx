'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Globe, Send, Loader2, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel" style={{ maxWidth: '500px', width: '100%', padding: '4rem', textAlign: 'center', border: '1px solid #10b981' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <CheckCircle2 size={32} />
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>UPLINK SECURED</h2>
                <p style={{ opacity: 0.5, marginBottom: '3rem' }}>Your transmission has been encrypted and routed to the corresponding strategic department.</p>
                <Link href="/" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>RETURN TO BASE</Link>
            </motion.div>
        </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6rem' }}>
            
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px', marginBottom: '1.5rem' }}>PRIORITY UPLINK</div>
                <h1 style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-3px', marginBottom: '2rem' }}>CONNECT TO <span className="text-gradient">ELITE</span></h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.5, marginBottom: '4rem', lineHeight: 1.7 }}>
                    Whether you require offensive security support or hyper-scale infrastructure architecture, our command center is active 24/7.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ color: 'var(--primary)' }}><Mail size={24} /></div>
                        <div>
                            <div style={{ fontWeight: 900, fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, marginBottom: '0.5rem' }}>GENERAL INTELLIGENCE</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>strategic@elite-dreams.global</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ color: 'var(--primary)' }}><Phone size={24} /></div>
                        <div>
                            <div style={{ fontWeight: 900, fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, marginBottom: '0.5rem' }}>SECURE VOICE LINE</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>+1 (800) ELITE-PRO</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <div style={{ color: 'var(--primary)' }}><Globe size={24} /></div>
                        <div>
                            <div style={{ fontWeight: 900, fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.4, marginBottom: '0.5rem' }}>GLOBAL HEADQUARTERS</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Node 01: Silicon Valley, CA</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '4rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '3rem', textAlign: 'center' }}>TRANSMISSION PARAMETERS</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px', marginBottom: '0.75rem' }}>IDENTIFIER</label>
                            <input required type="text" className="terminal-input" placeholder="Name or Organization" />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px', marginBottom: '0.75rem' }}>RETURN UPLINK</label>
                            <input required type="email" className="terminal-input" placeholder="secure-email@enterprise.com" />
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px', marginBottom: '0.75rem' }}>DEPARTMENT</label>
                            <select className="terminal-input">
                                <option>OFFENSIVE SECURITY</option>
                                <option>CLOUD ENGINEERING</option>
                                <option>SAAS MODERNIZATION</option>
                                <option>CORPORATE GOVERNANCE</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px', marginBottom: '0.75rem' }}>MESSAGE PAYLOAD</label>
                            <textarea required className="terminal-input" rows={4} placeholder="Decipher your request..."></textarea>
                        </div>

                        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
                            <ShieldCheck size={20} color="var(--primary)" />
                            <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>Communication is protected by RSA-4096 Sovereign Link.</div>
                        </div>

                        <button disabled={isSubmitting} className="btn btn-primary" style={{ padding: '1.25rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> ESTABLISHING LINK...</> : <><Send size={18} /> INITIATE TRANSMISSION</>}
                        </button>
                    </div>
                </form>
            </motion.div>

        </div>
      </div>

      <style jsx>{`
        .terminal-input {
            width: 100%;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 8px;
            padding: 1rem;
            color: white;
            outline: none;
            transition: all 0.2s ease;
        }
        .terminal-input:focus {
            border-color: var(--primary);
            background: rgba(255,255,255,0.06);
        }
      `}</style>
    </div>
  );
}
