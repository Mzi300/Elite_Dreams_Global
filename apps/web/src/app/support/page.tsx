'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Shield, Hammer, Monitor, Phone, MessageSquare, Clock, Globe, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Support Hero */}
      <section className="section" style={{ padding: '10rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
               <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1rem', backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                color: 'var(--primary)', borderRadius: '2rem', fontSize: '0.75rem', 
                fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px'
              }}>
                <Activity size={14} /> GLOBAL INTELLIGENCE & SUPPORT
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1.5rem' }}>Mission Critical <span className="text-gradient">Assistance.</span></h1>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '1.25rem', lineHeight: '1.7' }}>
                Access our 24/7 technical response units. Whether it&apos;s a hardware failure or a security breach, we provide elite-level resolution protocols.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          {submitted ? (
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="glass-panel" style={{ textAlign: 'center', padding: '6rem' }}
             >
                <div style={{ width: '80px', height: '80px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 3rem' }}>
                    <CheckCircle size={40} />
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Transmission Received</h2>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
                    Your support request has been logged in our global cluster. A tactical specialist will intercept your ticket within 15 minutes.
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)} style={{ padding: '1rem 3rem' }}>
                    NEW TRANSMISSION
                </button>
             </motion.div>
          ) : (
            <div className="glass-panel" style={{ padding: '4rem' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5 }}>REQUEST PROTOCOL</label>
                            <select required style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}>
                                <option value="">Select Service</option>
                                <option value="repair">Tactical Hardware Repair</option>
                                <option value="installation">Security Suite Deployment</option>
                                <option value="it_support">Enterprise Infrastructure Support</option>
                                <option value="consultation">Strategic Sovereign Consultation</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5 }}>ASSET CATEGORY</label>
                            <select required style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}>
                                <option value="">Select Category</option>
                                <option value="laptop">Elite Computing Unit</option>
                                <option value="security">V-Shield Spectral System</option>
                                <option value="server">Core Cluster Node</option>
                                <option value="network">SecureLink Gateway</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5 }}>SITUATION BRIEFING</label>
                        <textarea 
                            required 
                            placeholder="Describe the technical anomaly..." 
                            rows={4} 
                            style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'white', resize: 'vertical' }}
                        />
                    </div>

                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5 }}>DEPLOYMENT WINDOW</label>
                            <input type="date" required style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <label style={{ fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5 }}>URGENCY CLEARANCE</label>
                            <select required style={{ padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}>
                                <option value="low">Priority 3 (Standard)</option>
                                <option value="medium">Priority 2 (Urgent)</option>
                                <option value="high">Priority 1 (MISSION CRITICAL)</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem', marginTop: '2rem', fontSize: '1rem', fontWeight: 900 }}>
                        INITIALIZE RESOLUTION PROTOCOL <ArrowRight size={18} />
                    </button>
                </form>
            </div>
          )}

          <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="premium-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)' }}><Phone size={24} /></div>
                <div>
                    <div style={{ fontWeight: 900, fontSize: '0.7rem', opacity: 0.5, letterSpacing: '2px', marginBottom: '0.25rem' }}>VOICE COMMS</div>
                    <div style={{ fontWeight: 800 }}>+1 (800) VTECH-CORP</div>
                </div>
            </div>
            <div className="premium-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)' }}><MessageSquare size={24} /></div>
                <div>
                    <div style={{ fontWeight: 900, fontSize: '0.7rem', opacity: 0.5, letterSpacing: '2px', marginBottom: '0.25rem' }}>SECURE CHAT</div>
                    <div style={{ fontWeight: 800 }}>24/7 ENCRYPTED CHANNEL</div>
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
