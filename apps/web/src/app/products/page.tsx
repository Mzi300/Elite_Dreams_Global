'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdminStore } from '@/lib/store';
import { Laptop, ShieldCheck, Usb, ShoppingCart, ArrowUpRight, Search, Plus, X, BarChart, Server, Cpu as CpuIcon, Shield, Activity, Zap, CheckCircle } from 'lucide-react';

export default function ProductsPage() {
  const { products, addToCart } = useAdminStore();
  const [filter, setFilter] = useState('ALL');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showToast, setShowToast] = useState(false);
  
  const handleAddToCart = (product: any) => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'DEVICES': return <Laptop size={48} />;
      case 'SECURITY_SYSTEMS': return <Shield size={48} />;
      case 'ACCESSORIES': return <Usb size={48} />;
      case 'SOVEREIGN_NODE': return <Server size={48} />;
      default: return <Zap size={48} />;
    }
  };

  const filteredProducts = filter === 'ALL' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)', position: 'relative', overflowX: 'hidden' }}>
      {/* Header Area */}
      <section className="section" style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
               <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem', 
                backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                color: 'var(--brand-indigo)', 
                borderRadius: '2rem', 
                fontSize: '0.75rem', 
                fontWeight: 900,
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>
                <Zap size={14} fill="currentColor" /> Enterprise Hardware
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>Technology Systems</h1>
              <p style={{ color: 'var(--muted-foreground)', maxWidth: '500px', lineHeight: 1.6 }}>Premium authorized hardware and security appliances for modern global infrastructure.</p>
            </motion.div>
            
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 style={{ display: 'flex', gap: '1rem', padding: '0.5rem', backgroundColor: 'var(--muted)', borderRadius: '1.25rem' }}
            >
              {['ALL', 'DEVICES', 'SECURITY_SYSTEMS', 'ACCESSORIES'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`tab-button ${filter === cat ? 'active' : ''}`}
                >
                  {cat.replace('_', ' ')}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Area */}
      <section className="section">
        <div className="container">
          <motion.div layout className="grid grid-3">
            <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product, i) => (
                <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    key={product.id} 
                    className="premium-card"
                >
                    <div style={{ 
                        height: '280px', 
                        backgroundColor: 'var(--muted)', 
                        borderRadius: '0.75rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: 'var(--primary)',
                        marginBottom: '2rem',
                        border: '1px solid var(--border)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                            <div style={{ padding: '0.4rem 0.8rem', backgroundColor: 'var(--card)', borderRadius: '0.5rem', fontSize: '0.7rem', fontWeight: 900, border: '1px solid var(--border)', color: 'var(--muted-foreground)' }}>
                                SKU-{product.id.padStart(4, '0')}
                            </div>
                        </div>
                        {getCategoryIcon(product.category)}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {product.category.replace('_', ' ')}
                            </div>
                            <button onClick={() => setSelectedProduct(product)} className="nav-link" style={{ padding: '0.5rem', color: 'var(--primary)' }}>
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>{product.name}</h3>
                        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                            {product.description}
                        </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--muted-foreground)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Unit Price</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-1px' }}>
                                ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </span>
                        </div>
                        <button onClick={() => setSelectedProduct(product)} className="btn btn-glass" style={{ padding: '0.8rem 1.25rem', fontSize: '0.75rem', fontWeight: 900 }}>
                            SPEC VAULT
                        </button>
                    </div>
                </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SPECIFICATION VAULT (SIDE DRAWER) */}
      <AnimatePresence>
        {selectedProduct && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', justifyContent: 'flex-end' }}>
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setSelectedProduct(null)}
                    style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
                />
                <motion.div 
                    initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    style={{ position: 'relative', width: '100%', maxWidth: '600px', backgroundColor: 'var(--background)', height: '100%', boxShadow: '-20px 0 50px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }}
                >
                    <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6rem' }}>
                            <div style={{ width: '80px', height: '80px', background: 'var(--muted)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                                {selectedProduct.icon}
                            </div>
                            <button onClick={() => setSelectedProduct(null)} style={{ background: 'none', border: 'none', color: 'var(--foreground)', cursor: 'pointer', opacity: 0.4 }}>
                                <X size={32} />
                            </button>
                        </div>

                        <div style={{ marginBottom: '6rem' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1.5rem' }}>TECHNICAL DATA SHEET</div>
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{selectedProduct.name}</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', lineHeight: 1.7 }}>{selectedProduct.description}</p>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem', background: 'rgba(255,255,255,0.02)', marginBottom: '4rem' }}>
                            <h4 style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '2px', opacity: 0.3, marginBottom: '2.5rem' }}>SPECIFICATION HUB</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {Object.entries(selectedProduct.specs || {}).map(([key, val]) => (
                                    <div key={key} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.5rem' }}>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', opacity: 0.5 }}>{key}</div>
                                        <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{val as string}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginTop: 'auto', display: 'flex', gap: '2rem' }}>
                             <button 
                                onClick={() => {
                                    handleAddToCart(selectedProduct);
                                    setSelectedProduct(null);
                                }}
                                className="btn btn-primary" style={{ flex: 2, padding: '1.25rem' }}
                             >Acquire Unit</button>
                             <button className="btn btn-outline" style={{ flex: 1, padding: '1.25rem' }}>Export PDF</button>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
      {/* NOTIFICATION TOAST */}
      <AnimatePresence>
        {showToast && (
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                style={{ 
                    position: 'fixed', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', 
                    padding: '1.25rem 2.5rem', backgroundColor: 'var(--primary)', color: 'white',
                    borderRadius: '1rem', boxShadow: '0 20px 40px rgba(14, 165, 233, 0.3)',
                    display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 2000,
                    fontWeight: 700
                }}
            >
                <CheckCircle size={20} /> Unit Secured in Your Vault
            </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .tab-button {
          padding: 0.6rem 1.25rem;
          border-radius: 0.85rem;
          border: 1px solid transparent;
          background-color: transparent;
          color: var(--muted-foreground);
          cursor: pointer;
          font-weight: 800;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: var(--transition);
          white-space: nowrap;
        }
        .tab-button:hover {
          color: var(--primary);
          background-color: var(--background);
          transform: translateY(-2px);
          box-shadow: var(--shadow-premium);
        }
        .tab-button.active {
          background-color: var(--background);
          color: var(--foreground);
          box-shadow: var(--shadow-premium);
          border-color: var(--border);
        }
      `}</style>
    </div>
  );
}
