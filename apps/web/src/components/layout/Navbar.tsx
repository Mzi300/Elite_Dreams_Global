'use client';

import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Menu, X, ShoppingCart, ChevronRight, Search } from 'lucide-react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useAdminStore } from '@/lib/store';

// --- MAGNETIC WRAPPER ---
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic"
    >
      {children}
    </motion.div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, isAdmin, logout, removeFromCart } = useAdminStore();
  
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <nav className="glass-panel" style={{ 
      position: 'sticky', 
      top: '1.5rem', 
      zIndex: 1000, 
      margin: '0 1.5rem',
      height: '80px', 
      display: 'flex', 
      alignItems: 'center',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 2rem' }}>
        {/* LOGO */}
        <Magnetic>
            <Link href="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            textDecoration: 'none',
            color: 'inherit'
            }}>
            <div style={{ 
                width: '36px', 
                height: '36px', 
                background: 'linear-gradient(135deg, var(--foreground), var(--brand-indigo))', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 900,
                fontSize: '1.125rem'
            }}>E</div>
            <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.06em' }} className="hide-mobile">
                ELITE <span className="text-gradient hide-laptop">DREAMS</span>
            </span>
            </Link>
        </Magnetic>

        {/* DESKTOP NAVIGATION */}
        <div className="nav-group desktop-only" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          <Link href="/services" className="nav-link" style={{ fontSize: '0.85rem' }}>Solutions</Link>
          <Link href="/insights" className="nav-link" style={{ fontSize: '0.85rem' }}>Insights</Link>
          <Link href="/products" className="nav-link" style={{ fontSize: '0.85rem' }}>Hub</Link>
          <Link href="/docs" className="nav-link" style={{ fontSize: '0.85rem' }}>Intelligence</Link>
          <Link href="/support" className="nav-link" style={{ fontSize: '0.85rem' }}>Support</Link>
        </div>

        {/* ACTIONS */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
           {/* SEARCH TRIGGER */}
           <button 
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                className="desktop-only nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', opacity: 0.6 }}
           >
                <Search size={16} />
                <span className="hide-tablet" style={{ fontSize: '0.65rem', fontWeight: 900, background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.4rem', borderRadius: '0.25rem' }}>K</span>
           </button>

           {/* LANGUAGE SWITCHER */}
           <div className="desktop-only" style={{ display: 'flex', gap: '0.25rem' }}>
                {['EN', 'AR', 'FR'].map(l => (
                    <button 
                        key={l}
                        onClick={() => useAdminStore.getState().setLocale(l as any)}
                        style={{ 
                            fontSize: '0.65rem', fontWeight: 900, padding: '0.2rem 0.3rem', 
                            background: 'none', border: 'none', color: 'white', cursor: 'pointer',
                            opacity: useAdminStore.getState().locale === l ? 1 : 0.2
                        }}
                    >
                        {l}
                    </button>
                ))}
           </div>

           <div className="desktop-only" style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

           <div className="desktop-only" style={{ display: 'flex', gap: '0.25rem' }}>
              {isAdmin ? (
                <>
                    <a href={process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000'} className="nav-link" style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.8rem' }}>Console</a>
                </>
              ) : (
                <Link href="/login" className="nav-link" style={{ fontSize: '0.8rem' }}>Login</Link>
              )}
           </div>
           
           <Magnetic>
            <button 
                onClick={() => setIsCartOpen(true)}
                className="nav-link" 
                style={{ padding: '0.5rem', position: 'relative', background: 'none', border: 'none', cursor: 'pointer' }}
            >
                <ShoppingCart size={20} strokeWidth={2} />
                {cartCount > 0 && (
                <span style={{ 
                    position: 'absolute', 
                    top: '2px', 
                    right: '2px', 
                    width: '16px', 
                    height: '16px', 
                    backgroundColor: 'var(--primary)', 
                    color: 'white', 
                    fontSize: '0.6rem', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 900,
                    border: '1px solid var(--background)'
                }}>{cartCount}</span>
                )}
            </button>
           </Magnetic>

           <Magnetic>
            <Link href="/contact" className="btn btn-primary desktop-only" style={{ padding: '0.65rem 1.25rem', borderRadius: '0.6rem', fontSize: '0.8rem' }}>
                Join Elite
            </Link>
           </Magnetic>

           {/* MOBILE TOGGLE */}
           <button 
              className="mobile-only nav-link" 
              style={{ padding: '0.75rem' }} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* CART DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 1100 }}>
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={() => setIsCartOpen(false)}
                    style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}
                />
                <motion.div 
                    initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    style={{ 
                        position: 'absolute', right: 0, top: 0, bottom: 0, 
                        width: '100%', maxWidth: '400px', 
                        backgroundColor: 'var(--background)',
                        borderLeft: '1px solid var(--border)',
                        boxShadow: '-20px 0 50px rgba(0,0,0,0.2)',
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.25rem' }}>Your Acquisition</h3>
                        <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--foreground)', cursor: 'pointer' }}>
                            <X size={24} />
                        </button>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {cart.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--muted-foreground)' }}>
                                Your vault is currently empty.
                            </div>
                        ) : (
                            cart.map(item => (
                                <div key={item.id} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>QTY: {item.quantity}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontWeight: 800 }}>${(item.price * item.quantity).toLocaleString()}</div>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            style={{ fontSize: '0.65rem', color: '#f43f5e', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                                        >
                                            REMOVE
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '3rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <span style={{ fontWeight: 600 }}>Total Value</span>
                            <span style={{ fontWeight: 900, fontSize: '1.25rem' }}>${cartTotal.toLocaleString()}</span>
                        </div>
                        <Link href="/checkout" onClick={() => setIsCartOpen(false)} className="btn btn-primary" style={{ width: '100%', padding: '1.25rem' }}>
                            Finalize Transaction
                        </Link>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>


      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="glass-panel mobile-only" style={{ 
          position: 'fixed', 
          top: '6rem', 
          left: '1rem', 
          right: '1rem', 
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'reveal 0.3s ease-out'
        }}>
           <Link href="/services" className="nav-link" onClick={() => setIsMenuOpen(false)} style={{ justifyContent: 'space-between' }}>
              Strategic Solutions <ChevronRight size={16} opacity={0.5} />
           </Link>
           <Link href="/industries" className="nav-link" onClick={() => setIsMenuOpen(false)} style={{ justifyContent: 'space-between' }}>
              Global Sectors <ChevronRight size={16} opacity={0.5} />
           </Link>
           <Link href="/products" className="nav-link" onClick={() => setIsMenuOpen(false)} style={{ justifyContent: 'space-between' }}>
              Enterprise Hub <ChevronRight size={16} opacity={0.5} />
           </Link>
           <Link href="/support" className="nav-link" onClick={() => setIsMenuOpen(false)} style={{ justifyContent: 'space-between' }}>
              Intelligence <ChevronRight size={16} opacity={0.5} />
           </Link>
           <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '1rem 0' }}></div>
           <Link href="/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>Login</Link>
           <Link href="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)} style={{ width: '100%', marginTop: '1rem' }}>
              Get Started
           </Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 901px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 1200px) {
          .hide-tablet { display: none !important; }
        }
        @media (max-width: 1100px) {
          .hide-laptop { display: none !important; }
        }
        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
          .hide-mobile { display: none; }
        }
      `}</style>
    </nav>
  );
}
