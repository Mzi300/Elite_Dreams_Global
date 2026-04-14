'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ShieldX } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Elite Dreams Admin Error]:', error);
  }, [error]);

  return (
    <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card" 
            style={{ maxWidth: '500px', width: '100%', padding: '4rem', textAlign: 'center', borderColor: 'rgba(244, 63, 94, 0.2)' }}
        >
            <div style={{ 
                width: '64px', height: '64px', borderRadius: '16px', 
                background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 2.5rem'
            }}>
                <ShieldX size={32} />
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sovereign Node Failure</h2>
            <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: '3rem', lineHeight: 1.6 }}>
                An unexpected tactical error has occurred within the administrative interface. The core state remains protected, but a refresh of the operational node is required.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button 
                    onClick={() => reset()}
                    className="btn btn-primary" 
                    style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontWeight: 800 }}
                >
                    <RefreshCw size={18} /> RESTART PROTOCOL
                </button>
                <button 
                    onClick={() => window.location.href = '/'}
                    className="btn" 
                    style={{ padding: '1rem', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', fontWeight: 800 }}
                >
                    <Home size={18} /> RETURN TO BASE
                </button>
            </div>

            <div style={{ marginTop: '3rem', fontSize: '0.65rem', opacity: 0.3, fontFamily: 'monospace' }}>
                DIGEST: {error.digest || 'ANONYMOUS_FAILURE'}
            </div>
        </motion.div>
    </div>
  );
}
