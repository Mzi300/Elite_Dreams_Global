'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAdminStore } from '@/lib/store';
import { BookOpen, Calendar, User, ArrowRight, Share2, Tag } from 'lucide-react';
import Link from 'next/link';

export default function InsightsPage() {
  const { blogPosts } = useAdminStore();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Insights Hero */}
      <section className="section" style={{ padding: '10rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <div style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1rem', backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                color: 'var(--primary)', borderRadius: '2rem', fontSize: '0.75rem', 
                fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '4px'
              }}>
                <BookOpen size={14} /> TECHNICAL INTELLIGENCE
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1.5rem' }}>The Insight <span className="text-gradient">Engine.</span></h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '700px', lineHeight: 1.7 }}>
                Technical thought leadership from the frontlines of global engineering. From offensive security to cloud orchestration, we define the technical frontier.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Featured / Navigation */}
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
           <div className="grid grid-3" style={{ gap: '3rem' }}>
              {blogPosts.length === 0 ? (
                <div style={{ padding: '4rem', gridColumn: 'span 3', textAlign: 'center', border: '1px dashed var(--border)', borderRadius: '1rem' }}>
                    <div style={{ opacity: 0.3, marginBottom: '1rem' }}>NO INTELLIGENCE LOGS FOUND</div>
                    <Link href="/contact" className="btn btn-primary">SUBSCRIBE FOR UPDATES</Link>
                </div>
              ) : (
                blogPosts.map((post, i) => (
                    <motion.div 
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: i * 0.1 }}
                        className="premium-card" 
                        style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                    >
                        {/* Mock Image Placeholder */}
                        <div style={{ height: '240px', backgroundColor: 'rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))' }} />
                            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '0.4rem 0.8rem', backgroundColor: 'var(--primary)', color: 'white', borderRadius: '0.4rem', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase' }}>
                                {post.category}
                            </div>
                        </div>

                        <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.75rem', opacity: 0.4, fontWeight: 800 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {post.date}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={14} /> {post.author}</div>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h3>
                            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>{post.excerpt}</p>
                            
                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Link href={`/insights/${post.id}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, textDecoration: 'none', fontSize: '0.75rem' }}>
                                    READ WHITE PAPER <ArrowRight size={14} />
                                </Link>
                                <Share2 size={16} opacity={0.3} style={{ cursor: 'pointer' }} />
                            </div>
                        </div>
                    </motion.div>
                ))
              )}
           </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="section">
        <div className="container">
           <div className="glass-panel" style={{ padding: '6rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Strategic Intelligence Updates</h2>
                <p style={{ color: 'var(--muted-foreground)', maxWidth: '500px', margin: '0 auto 3rem' }}>Join the tactical newsletter for bi-weekly deep dives into global technical sovereignty.</p>
                <div style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                    <input 
                        type="email" 
                        placeholder="enterprise@mission.com" 
                        style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                    />
                    <button className="btn btn-primary" style={{ padding: '0 2rem' }}>SUBSCRIBE</button>
                </div>
           </div>
        </div>
      </section>

      <style jsx>{`
        .section { padding: 8rem 0; }
      `}</style>
    </div>
  );
}
