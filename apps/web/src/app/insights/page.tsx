'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAdminStore } from '@/lib/store';
import { BookOpen, Calendar, User, ArrowRight, Search, Activity, Cpu, ShieldAlert, Globe } from 'lucide-react';

export default function InsightsPage() {
  const { blogPosts } = useAdminStore();

  const categories = [
    { name: 'CLOUD', icon: Globe, count: 12 },
    { name: 'SECURITY', icon: ShieldAlert, count: 8 },
    { name: 'SOFTWARE', icon: Cpu, count: 15 },
    { name: 'NEWS', icon: Activity, count: 5 }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container">
        
        <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px', marginBottom: '1.5rem' }}>STRATEGIC INTELLIGENCE</div>
                <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-3px', marginBottom: '2rem' }}>TECHNICAL <span className="text-gradient">INSIGHTS</span></h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.5, maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                    Deep dives into offensive security, hyper-scale architecture, and the future of global enterprise engineering.
                </p>
            </motion.div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '6rem' }}>
            
            {/* Main Feed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                {blogPosts.length === 0 ? (
                    <div className="glass-panel" style={{ padding: '6rem', textAlign: 'center' }}>
                        <BookOpen size={48} style={{ opacity: 0.1, marginBottom: '2rem' }} />
                        <h3 style={{ opacity: 0.3 }}>INTELLIGENCE FEED INITIALIZING...</h3>
                    </div>
                ) : (
                    blogPosts.map((post, i) => (
                        <motion.article 
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel"
                            style={{ padding: '4rem', display: 'flex', gap: '3rem' }}
                        >
                            <div style={{ width: '200px', height: '240px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', overflow: 'hidden', flexShrink: 0 }}>
                                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--primary), transparent)', opacity: 0.2 }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '2px' }}>{post.category}</span>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', opacity: 0.4 }}>
                                        <Calendar size={12} /> {post.date}
                                    </div>
                                </div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.3 }}>{post.title}</h2>
                                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2.5rem' }}>{post.excerpt}</p>
                                <Link href={`/insights/${post.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'white', textDecoration: 'none', fontWeight: 800, fontSize: '0.9rem' }}>
                                    READ FULL ANALYSIS <ArrowRight size={16} color="var(--primary)" />
                                </Link>
                            </div>
                        </motion.article>
                    ))
                )}
            </div>

            {/* Sidebar */}
            <aside>
                <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '2rem' }}>CATEGORIES</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {categories.map(cat => (
                            <div key={cat.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}>
                                    <cat.icon size={16} opacity={0.5} />
                                    {cat.name}
                                </div>
                                <span style={{ fontSize: '0.75rem', opacity: 0.3 }}>{cat.count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '2.5rem' }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1.5rem' }}>UPLINK</h3>
                    <p style={{ fontSize: '0.8rem', opacity: 0.4, lineHeight: 1.6, marginBottom: '2rem' }}>Subscribe to priority intelligence transmissions directly to your inbox.</p>
                    <input type="email" placeholder="email@enterprise.global" style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.75rem', color: 'white', fontSize: '0.875rem', marginBottom: '1rem' }} />
                    <button className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>SUBSCRIBE</button>
                </div>
            </aside>

        </div>
      </div>
    </div>
  );
}
