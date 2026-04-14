'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Command, ArrowRight, CornerDownLeft, Shield, Cpu, Cloud, Book } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  href: string;
  icon: React.ReactNode;
}

const STATIC_RESULTS: SearchResult[] = [
  { id: '1', title: 'Cloud Engineering Segments', category: 'SERVICES', href: '/services#cloud', icon: <Cloud size={16} /> },
  { id: '2', title: 'Cyber Defense Framework', category: 'SERVICES', href: '/services#cyber', icon: <Shield size={16} /> },
  { id: '3', title: 'EliteBook Pro X1', category: 'PRODUCTS', href: '/products', icon: <Cpu size={16} /> },
  { id: '4', title: 'Global Developer Portal', category: 'DOCS', href: '/docs', icon: <Book size={16} /> },
  { id: '5', title: 'Regulatory Disclosures', category: 'GOVERNANCE', href: '/regulatory', icon: <Shield size={16} /> },
  { id: '6', title: 'SLA Agreements', category: 'GOVERNANCE', href: '/sla', icon: <Command size={16} /> },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
  }, [isOpen]);

  const filteredResults = STATIC_RESULTS.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex(prev => (prev + 1) % filteredResults.length);
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex(prev => (prev - 1 + filteredResults.length) % filteredResults.length);
    } else if (e.key === 'Enter') {
      if (filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex].href);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '10vh' }}>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
          />

          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -20 }}
            style={{ 
              position: 'relative', width: '100%', maxWidth: '640px', 
              backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '1.25rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden'
            }}
          >
            <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Search size={20} style={{ opacity: 0.4 }} />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                onKeyDown={onKeyDown}
                placeholder="Type a command or search..." 
                style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'white', fontSize: '1.125rem' }}
              />
              <div style={{ fontSize: '0.65rem', fontWeight: 900, padding: '0.25rem 0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '0.4rem', color: '#94a3b8' }}>ESC</div>
            </div>

            <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '0.75rem' }}>
              {filteredResults.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
                  No tactical results found for &quot;{query}&quot;
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {filteredResults.map((result, i) => (
                    <div 
                      key={result.id}
                      onClick={() => handleSelect(result.href)}
                      onMouseEnter={() => setSelectedIndex(i)}
                      style={{ 
                        padding: '1rem', borderRadius: '0.75rem', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', gap: '1rem',
                        backgroundColor: selectedIndex === i ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                        transition: '0.2s'
                      }}
                    >
                      <div style={{ 
                        width: '32px', height: '32px', borderRadius: '0.5rem', 
                        backgroundColor: selectedIndex === i ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: selectedIndex === i ? 'white' : '#94a3b8'
                      }}>
                        {result.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: selectedIndex === i ? 'white' : '#f8fafc' }}>{result.title}</div>
                        <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase' }}>{result.category}</div>
                      </div>
                      {selectedIndex === i && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.7rem', fontWeight: 900 }}>
                          ENTER <CornerDownLeft size={12} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ padding: '0.75rem 1.5rem', backgroundColor: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.65rem', color: '#64748b' }}>
                        <span style={{ padding: '0.1rem 0.3rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.2rem' }}>↑↓</span> Navigate
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.65rem', color: '#64748b' }}>
                        <span style={{ padding: '0.1rem 0.3rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '0.2rem' }}>↵</span> Select
                    </div>
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: 900, color: 'var(--primary)', opacity: 0.5 }}>ELITE COMMAND V4.0</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
