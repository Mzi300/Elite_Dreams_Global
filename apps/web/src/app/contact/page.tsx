'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAdminStore } from '@/lib/store';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: 'Financial Services',
    category: 'Cloud Engineering',
    message: ''
  });

  const addEnquiry = useAdminStore((state) => state.addEnquiry);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry(formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <section className="section hero-reveal" style={{ paddingBottom: '4rem' }}>
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
              color: 'var(--brand-cyan)', 
              borderRadius: '2rem', 
              fontSize: '0.75rem', 
              fontWeight: 800,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Direct Engagement
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Partner with the <span className="text-gradient">Elite</span>.</h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: '1.7' }}>
              Whether you&apos;re a global startup or a Fortune 500 leader, our technical council is ready to accelerate your digital sovereignty.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start' }}>
            
            {/* Information Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="premium-card"
              >
                 <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}><MapPin size={32} strokeWidth={1.5} /></div>
                 <h4 style={{ marginBottom: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Global Headquarters</h4>
                 <p style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem' }}>Elite Plaza, Suite 500, Silicon Valley, CA 94025</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="premium-card"
              >
                 <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}><Mail size={32} strokeWidth={1.5} /></div>
                 <h4 style={{ marginBottom: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Sales Inquiry</h4>
                 <p style={{ color: 'var(--foreground)', fontWeight: 700, fontSize: '1.25rem' }}>solutions@elitedreams.global</p>
                 <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', marginTop: '0.75rem', opacity: 0.6 }}>Average response time: 2 hours</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="premium-card"
              >
                 <div style={{ color: 'var(--primary)', marginBottom: '2rem' }}><Clock size={32} strokeWidth={1.5} /></div>
                 <h4 style={{ marginBottom: '1rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px' }}>Operating Hours</h4>
                 <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem' }}>Mon - Fri: 24/7 Global Support</p>
                 <p style={{ color: 'var(--muted-foreground)', fontSize: '1rem', marginTop: '0.5rem' }}>Sat - Sun: Mission Critical Only</p>
              </motion.div>
            </div>

            {/* Form Column */}
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="glass-panel" 
                  style={{ padding: '4.5rem', boxShadow: 'var(--shadow-premium)', position: 'relative' }}
                >
                  <h3 style={{ marginBottom: '3rem' }}>Consultation Request</h3>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label style={{ fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)' }}>Full Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} type="text" required placeholder="Jane Smith" className="form-input" />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label style={{ fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)' }}>Work Email</label>
                        <input name="email" value={formData.email} onChange={handleChange} type="email" required placeholder="jane@company.com" className="form-input" />
                      </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label style={{ fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)' }}>Industry</label>
                        <select name="industry" value={formData.industry} onChange={handleChange} className="form-input" style={{ appearance: 'none' }}>
                          <option>National Healthcare</option>
                          <option>Financial Services</option>
                          <option>Advanced Retail</option>
                          <option>Manufacturing</option>
                          <option>Government / Defense</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <label style={{ fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)' }}>Service Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} className="form-input" style={{ appearance: 'none' }}>
                          <option>Cloud Engineering</option>
                          <option>Cyber Defense</option>
                          <option>Software Modernization</option>
                          <option>Enterprise Hardware</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label style={{ fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)' }}>Enterprise Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Briefly describe your enterprise technical requirements..." className="form-input" style={{ resize: 'none' }} />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem', marginTop: '1rem', width: '100%', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                      Initiate Engagement <Send size={18} />
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted-foreground)', marginTop: '1rem', opacity: 0.6 }}>
                      By submitting, you agree to our <a href="/terms" style={{ color: 'var(--foreground)', fontWeight: 700 }}>Terms of Governance</a> and <a href="/privacy" style={{ color: 'var(--foreground)', fontWeight: 700 }}>Privacy Protocols</a>.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="glass-panel"
                  style={{ padding: '6rem 4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 'var(--shadow-premium)' }}
                >
                    <div style={{ color: '#10b981', marginBottom: '2.5rem' }}>
                        <CheckCircle2 size={80} strokeWidth={1} />
                    </div>
                    <h2 style={{ marginBottom: '1.5rem' }}>Inquiry Dispatched</h2>
                    <p style={{ color: 'var(--muted-foreground)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '4rem' }}>
                        Your enterprise technical brief has been secured in our global vault. An Elite strategist will be assigned to your case shortly.
                    </p>
                    <div style={{ height: '1px', width: '100%', background: 'var(--border)', marginBottom: '3rem' }}></div>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem' }}>
                        Close Dispatch <ArrowRight size={18} />
                    </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>
      </section>
    </div>
  );
}
