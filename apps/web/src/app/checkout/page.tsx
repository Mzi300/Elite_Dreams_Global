'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdminStore } from '@/lib/store';
import { ShieldCheck, CreditCard, ChevronRight, Package, ArrowLeft, Loader2, CheckCircle2, Globe, Building2 } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, clearCart, placeOrder } = useAdminStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: 'TECHNOLOGY',
    requirements: ''
  });

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise validation
    setTimeout(() => {
        const newOrderId = `ORD-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
        
        placeOrder({
            customerId: 'GUEST',
            customerName: formData.name,
            items: cart,
            total: total
        });

        setOrderId(newOrderId);
        setIsSubmitting(false);
        setIsSuccess(true);
        clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel" 
                style={{ maxWidth: '600px', width: '100%', padding: '5rem 3rem', textAlign: 'center', border: '1px solid var(--primary)' }}
            >
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <CheckCircle2 size={48} />
                </div>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', color: 'white' }}>PROTOCOL INITIALIZED</h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem', lineHeight: 1.7 }}>
                    Your enterprise acquisition request has been encrypted and transmitted to the Elite Dreams Command Center. An operational agent will contact you shortly.
                </p>
                
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', marginBottom: '3rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.3, letterSpacing: '2px', marginBottom: '0.5rem' }}>TRANSMISSION ID</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px' }}>{orderId}</div>
                </div>

                <Link href="/" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem' }}>
                    RETURN TO BASE COMMAND
                </Link>
            </motion.div>
        </div>
    );
  }

  if (cart.length === 0 && !isSuccess) {
      return (
          <div style={{ minHeight: '100vh', backgroundColor: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                  <h2 style={{ color: 'white', marginBottom: '2rem' }}>Capture Buffer Empty</h2>
                  <Link href="/products" className="btn btn-primary">RESTOCK TACTICAL ASSETS</Link>
              </div>
          </div>
      );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '5rem' }}>
          
          {/* Left: Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div style={{ marginBottom: '4rem' }}>
                <Link href="/" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginBottom: '2rem' }}>
                    <ArrowLeft size={16} /> BACK TO BASE
                </Link>
                <h1 style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-2px', marginBottom: '1rem' }}>ENTERPRISE <span className="text-gradient">ACQUISITION</span></h1>
                <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px' }}>Secure your tactical infrastructure via our sovereign procurement protocol.</p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px', marginBottom: '0.75rem' }}>CLIENT NAME</label>
                        <input 
                            required 
                            type="text" 
                            className="terminal-input" 
                            placeholder="e.g. Acme Tech Solutions"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px', marginBottom: '0.75rem' }}>SECURE EMAIL</label>
                        <input 
                            required 
                            type="email" 
                            className="terminal-input" 
                            placeholder="admin@enterprise.global"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px', marginBottom: '0.75rem' }}>STRATEGIC INDUSTRY</label>
                    <select 
                        className="terminal-input" 
                        value={formData.industry}
                        onChange={e => setFormData({...formData, industry: e.target.value})}
                    >
                        <option value="TECHNOLOGY">Cyber Intelligence & Tech</option>
                        <option value="GOVERNMENT">Public Sector & Defense</option>
                        <option value="HEALTHCARE">Global Bio-Metrics</option>
                        <option value="FINANCE">Sovereign Asset Management</option>
                    </select>
                </div>

                <div className="form-group">
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 900, opacity: 0.4, letterSpacing: '2px', marginBottom: '0.75rem' }}>OPERATIONAL REQUIREMENTS</label>
                    <textarea 
                        className="terminal-input" 
                        rows={4} 
                        placeholder="Specify custom integration protocols..."
                        value={formData.requirements}
                        onChange={e => setFormData({...formData, requirements: e.target.value})}
                    ></textarea>
                </div>

                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ color: 'var(--primary)' }}><ShieldCheck size={32} /></div>
                    <p style={{ fontSize: '0.875rem', opacity: 0.7, margin: 0 }}>
                        Your data is protected by <strong>Sovereign End-to-End Encryption</strong>. This acquisition is subject to Elite Dreams Governance Framework Alpha-1.
                    </p>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ padding: '1.5rem', fontWeight: 900, fontSize: '1.1rem', pointerEvents: isSubmitting ? 'none' : 'auto' }}>
                    {isSubmitting ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Loader2 className="animate-spin" size={20} /> INITIALIZING UPLINK...
                        </div>
                    ) : (
                        'AUTHORIZE STRATEGIC ACQUISITION'
                    )}
                </button>
            </form>
          </motion.div>

          {/* Right: Summary */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="glass-panel" style={{ padding: '2.5rem', position: 'sticky', top: '10rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Package size={20} color="var(--primary)" /> ORDER MANIFEST
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2.5rem' }}>
                    {cart.map(item => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{item.name}</div>
                                <div style={{ fontSize: '0.7rem', opacity: 0.4, textTransform: 'uppercase', marginTop: '0.25rem' }}>UNIT x{item.quantity}</div>
                            </div>
                            <div style={{ fontWeight: 800, color: 'var(--primary)' }}>${(item.price * item.quantity).toLocaleString()}</div>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', opacity: 0.6 }}>
                        <span>SUBTOTAL</span>
                        <span>${total.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', opacity: 0.6 }}>
                        <span>SOVEREIGN TAX</span>
                        <span style={{ color: '#10b981' }}>$0.00 (EXEMPT)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 900, marginTop: '1rem', color: 'white', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <span>TOTAL</span>
                        <span className="text-gradient">${total.toLocaleString()}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', opacity: 0.3, fontWeight: 800 }}>
                    <Globe size={12} /> GLOBAL ENTERPRISE STANDARD ACQUISITION
                </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      <style jsx>{`
        .terminal-input {
            width: 100%;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 8px;
            padding: 1rem 1.25rem;
            color: white;
            font-size: 0.95rem;
            outline: none;
            transition: all 0.2s ease;
        }
        .terminal-input:focus {
            background: rgba(255,255,255,0.06);
            border-color: var(--primary);
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.1);
        }
        form label {
            transition: all 0.2s ease;
        }
        form .form-group:focus-within label {
            color: var(--primary);
            opacity: 1;
        }
      `}</style>
    </div>
  );
}
