'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Shield, ArrowRight, AlertTriangle } from 'lucide-react';
import { useAdminStore } from '@/lib/store';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
  const login = useAdminStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
      window.location.href = `${adminUrl}?key=${password}`;
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', position: 'relative', overflow: 'hidden' }}>
      {/* Background Atmosphere */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '50%', height: '50%', background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)', filter: 'blur(120px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '50%', height: '50%', background: 'radial-gradient(circle, var(--brand-indigo-glow) 0%, transparent 70%)', filter: 'blur(120px)', zIndex: 0 }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel" 
        style={{ width: '100%', maxWidth: '440px', padding: '4rem', zIndex: 1, textAlign: 'center' }}
      >
        <div style={{ 
          width: '64px', 
          height: '64px', 
          background: 'linear-gradient(135deg, var(--foreground), var(--brand-indigo))', 
          borderRadius: '16px',
          margin: '0 auto 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: 'var(--shadow-premium)'
        }}>
          <Shield size={32} />
        </div>

        <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '0.75rem' }}>Admin Gateway</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', marginBottom: '3rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 800 }}>
          Elite Dreams Global Command
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
             <div style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }}>
                <Lock size={18} />
             </div>
             <input 
                type="password" 
                placeholder="Access Protocol Key" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                style={{ 
                    paddingLeft: '3.5rem', 
                    backgroundColor: 'rgba(255,255,255,0.03)', 
                    color: 'white',
                    borderColor: error ? '#f43f5e' : 'rgba(255,255,255,0.1)'
                }} 
                required
             />
          </div>

          {error && (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    padding: '1rem', 
                    backgroundColor: 'rgba(244, 63, 94, 0.1)', 
                    borderRadius: '0.85rem',
                    color: '#fb7185',
                    fontSize: '0.8rem',
                    fontWeight: 700
                }}
            >
                <AlertTriangle size={16} /> INVALID PROTOCOL ACCESS CODE
            </motion.div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ 
                padding: '1.25rem', 
                marginTop: '1.5rem', 
                width: '100%', 
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
            }}
          >
            Authorize Access <ArrowRight size={18} />
          </button>
        </form>

        <p style={{ marginTop: '4rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontWeight: 700, letterSpacing: '1px' }}>
          SECURE QUANTUM ENCRYPTION ACTIVE
        </p>
      </motion.div>
    </div>
  );
}
