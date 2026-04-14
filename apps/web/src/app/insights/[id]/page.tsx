'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useAdminStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Globe, ShieldAlert, Cpu, Activity } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostPage() {
  const { id } = useParams();
  const { blogPosts } = useAdminStore();
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: '2rem' }}>INTELLIGENCE FRAGMENT NOT FOUND</h2>
                <Link href="/insights" className="btn btn-primary">RETURN TO FEED</Link>
            </div>
        </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white', padding: '10rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            
            <Link href="/insights" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginBottom: '3rem' }}>
                <ArrowLeft size={16} /> BACK TO FEED
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '4px' }}>{post.category}</span>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', opacity: 0.4 }}>
                    <Calendar size={14} /> {post.date}
                </div>
            </div>

            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.1, marginBottom: '3rem' }}>{post.title}</h1>

            {/* Content Body */}
            <div className="glass-panel" style={{ padding: '0', background: 'transparent', border: 'none' }}>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'white', marginBottom: '3rem', fontWeight: 500 }}>
                    {post.excerpt}
                </p>
                <div style={{ height: '1px', background: 'linear-gradient(to right, var(--primary), transparent)', marginBottom: '3rem', opacity: 0.3 }}></div>
                <div style={{ lineHeight: 1.9, color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
                    {post.content.split('\n\n').map((para, i) => (
                        <p key={i} style={{ marginBottom: '2rem' }}>{para}</p>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '6rem', padding: '4rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Strategic Analysis Concluded</h3>
                <p style={{ opacity: 0.5, marginBottom: '3rem' }}>Interested in implementing these tactical frameworks for your enterprise?</p>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>CONNECT TO ARCHITECT</Link>
            </div>

        </motion.div>
      </div>
    </div>
  );
}
