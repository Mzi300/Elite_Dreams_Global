'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAdminStore } from '@/lib/store';
import { MessageSquare, Send, User, Shield, Zap, Circle, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminSupportDesk() {
  const { chatMessages, sendMessage, clearChat } = useAdminStore();
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText, 'ADMIN');
    setInputText('');
  };

  return (
    <div style={{ height: 'calc(100vh - 150px)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Tactical Support Desk</h1>
          <p style={{ color: 'var(--secondary)' }}>Intercept and resolve incoming tactical queries in real-time.</p>
        </div>
        <button 
            onClick={clearChat}
            style={{ 
                color: '#f43f5e', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)', 
                padding: '0.6rem 1.25rem', borderRadius: 'var(--radius)', 
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600
            }}
        >
            <Trash2 size={16} /> Purge Logs
        </button>
      </div>

      <div className="card" style={{ flex: 1, padding: 0, display: 'grid', gridTemplateColumns: '300px 1fr', overflow: 'hidden' }}>
        {/* Active Sessions Sidebar */}
        <div style={{ borderRight: '1px solid var(--border)', backgroundColor: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '2px', opacity: 0.5 }}>ACTIVE CHANNELS</div>
            <div style={{ flex: 1, padding: '1rem' }}>
                <div style={{ 
                    padding: '1rem', borderRadius: 'var(--radius)', 
                    backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                    border: '1px solid rgba(14, 165, 233, 0.2)',
                    display: 'flex', alignItems: 'center', gap: '1rem'
                }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <User size={20} />
                        </div>
                        <span style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', background: '#10b981', borderRadius: '50%', border: '2px solid var(--card)' }} />
                    </div>
                    <div>
                        <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Global Visitor #772</div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 800 }}>SYNCED</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Chat Interface */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'rgba(0,0,0,0.1)' }}>
            {/* Viewport Header */}
            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ fontWeight: 800 }}>Channel: OMEGA-SEVEN</div>
                    <div style={{ padding: '0.25rem 0.6rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontSize: '0.65rem', fontWeight: 900, borderRadius: '2rem' }}>ENCRYPTED</div>
                </div>
                <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>LATENCY: 14ms</div>
            </div>

            {/* Messages Viewport */}
            <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {chatMessages.map(msg => (
                    <div key={msg.id} style={{ alignSelf: msg.sender === 'ADMIN' ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
                         <div style={{ 
                            padding: '1.25rem', 
                            borderRadius: '1rem',
                            backgroundColor: msg.sender === 'ADMIN' ? 'var(--primary)' : 'var(--muted)',
                            color: 'white',
                            fontSize: '0.9rem',
                            lineHeight: 1.5,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}>
                             {msg.text}
                         </div>
                         <div style={{ fontSize: '0.65rem', marginTop: '0.5rem', opacity: 0.4, textAlign: msg.sender === 'ADMIN' ? 'right' : 'left', fontWeight: 700 }}>
                            {msg.sender} @ {new Date(msg.timestamp).toLocaleTimeString()}
                         </div>
                    </div>
                ))}
            </div>

            {/* Tactical Input */}
            <form onSubmit={handleSend} style={{ padding: '2rem', borderTop: '1px solid var(--border)', backgroundColor: 'var(--card)' }}>
                 <div style={{ position: 'relative' }}>
                    <input 
                        type="text" 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type response for tactical sync..." 
                        style={{ 
                            width: '100%', padding: '1.25rem 4rem 1.25rem 1.5rem', 
                            background: 'var(--background)', borderRadius: 'var(--radius)', 
                            border: '1px solid var(--border)', color: 'white', fontSize: '1rem',
                            fontWeight: 500
                        }}
                    />
                    <button 
                        type="submit"
                        style={{ 
                            position: 'absolute', right: '0.75rem', top: '50%', 
                            transform: 'translateY(-50%)', padding: '0.75rem', 
                            background: 'var(--primary)', color: 'white', border: 'none', 
                            borderRadius: 'var(--radius)', cursor: 'pointer', display: 'flex', alignItems: 'center'
                        }}
                    >
                        <Send size={20} />
                    </button>
                 </div>
                 <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', fontSize: '0.65rem', fontWeight: 900, opacity: 0.3, letterSpacing: '1px' }}>
                    <div>PROTOCOL: SECURE-RT-v4</div>
                    <div>END-TO-END QUANTUM ENCRYPTION ACTIVE</div>
                 </div>
            </form>
        </div>
      </div>
    </div>
  );
}
