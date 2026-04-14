'use client';

import React, { useEffect, useState } from 'react';
import { useAdminStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Loader2 } from 'lucide-react';

export default function SessionGuard({ children }: { children: React.ReactNode }) {
    const { isAdmin } = useAdminStore();
    const [mounted, setMounted] = useState(false);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Delay check slightly to allow Zustand hydration from localStorage
        const timer = setTimeout(() => {
            if (isAdmin) {
                setAuthorized(true);
            } else {
                // If not admin, redirect back to the home site's login
                const webUrl = process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3001';
                window.location.href = `${webUrl}/login`;
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [isAdmin]);

    if (!mounted || !authorized) {
        return (
            <div style={{ 
                height: '100vh', 
                width: '100vw', 
                backgroundColor: '#020617', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'fixed',
                inset: 0,
                zIndex: 9999
            }}>
                <div style={{ textAlign: 'center' }}>
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                        >
                            <div style={{ 
                                width: '80px', height: '80px', borderRadius: '20px', 
                                background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 2rem',
                                border: '1px solid rgba(14, 165, 233, 0.2)'
                            }}>
                                <Lock size={32} />
                            </div>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem', color: 'white' }}>
                                AUTHENTICATING COMMAND ACCESS
                            </h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700 }}>
                                <Loader2 size={14} className="animate-spin" />
                                VALIDATING SOVEREIGN CREDENTIALS...
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
