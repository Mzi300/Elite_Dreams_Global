'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Shield, Zap, CornerDownLeft } from 'lucide-react';
import { useAdminStore } from '@/lib/store';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const { chatMessages, sendMessage } = useAdminStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText, 'USER');
    setInputText('');
    
    // Simulated Automated Response after 1s
    if (chatMessages.length === 0) {
        setTimeout(() => {
            sendMessage("Transmission received. An Elite Tactical Agent is being deployed to this channel.", 'ADMIN');
        }, 1500);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
      {/* Floating Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
            width: '64px', height: '64px', borderRadius: '50%', 
            backgroundColor: 'var(--primary)', color: 'white', 
            border: 'none', cursor: 'pointer', boxShadow: '0 10px 30px rgba(14, 165, 233, 0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {chatMessages.filter(m => m.sender === 'ADMIN').length > 0 && !isOpen && (
             <span style={{ position: 'absolute', top: 0, right: 0, width: '15px', height: '15px', background: '#f43f5e', borderRadius: '50%', border: '2px solid var(--background)' }} />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="glass-panel"
                style={{ 
                    position: 'absolute', bottom: '5rem', right: 0, 
                    width: '380px', height: '550px', 
                    display: 'flex', flexDirection: 'column', 
                    overflow: 'hidden', padding: 0,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
            >
                {/* Header */}
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Shield size={20} color="white" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Tactical Support Desk</div>
                            <div style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }} /> ONLINE
                            </div>
                        </div>
                    </div>
                </div>

                {/* Messages Container */}
                <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {chatMessages.length === 0 ? (
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', opacity: 0.4 }}>
                            <Zap size={32} style={{ marginBottom: '1rem' }} />
                            <div style={{ fontSize: '0.8rem', fontWeight: 800 }}>ESTABLISHING ENCRYPTED LINK...</div>
                            <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Send a message to initialize synchronization.</p>
                        </div>
                    ) : (
                        chatMessages.map(msg => (
                            <div key={msg.id} style={{ alignSelf: msg.sender === 'USER' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
                                <div style={{ 
                                    padding: '1rem', 
                                    borderRadius: msg.sender === 'USER' ? '1.25rem 1.25rem 0.25rem 1.25rem' : '1.25rem 1.25rem 1.25rem 0.25rem',
                                    backgroundColor: msg.sender === 'USER' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    fontSize: '0.875rem',
                                    lineHeight: 1.5,
                                    border: msg.sender === 'ADMIN' ? '1px solid var(--border)' : 'none'
                                }}>
                                    {msg.text}
                                </div>
                                <div style={{ fontSize: '0.6rem', marginTop: '0.4rem', opacity: 0.3, textAlign: msg.sender === 'USER' ? 'right' : 'left' }}>
                                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <div style={{ position: 'relative' }}>
                        <input 
                            type="text" 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Enter transmission..." 
                            style={{ 
                                width: '100%', padding: '1rem 3.5rem 1rem 1.25rem', 
                                background: 'var(--background)', borderRadius: '0.75rem', 
                                border: '1px solid var(--border)', color: 'white', fontSize: '0.875rem' 
                            }}
                        />
                        <button 
                            type="submit"
                            style={{ 
                                position: 'absolute', right: '0.5rem', top: '50%', 
                                transform: 'translateY(-50%)', padding: '0.5rem', 
                                background: 'var(--primary)', color: 'white', border: 'none', 
                                borderRadius: '0.5rem', cursor: 'pointer' 
                            }}
                        >
                            <Send size={18} />
                        </button>
                    </div>
                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem', opacity: 0.3, fontSize: '0.6rem', fontWeight: 900 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><User size={10} /> SECURE CHANNEL</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Shield size={10} /> ENCRYPTED</div>
                    </div>
                </form>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
