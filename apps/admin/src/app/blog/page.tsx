'use client';

import React, { useState } from 'react';
import { useAdminStore, BlogPost } from '@/lib/store';
import { Search, Plus, Edit2, Trash2, BookOpen, Clock, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogAdminPage() {
  const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost } = useAdminStore();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<Omit<BlogPost, 'id' | 'date'>>({
    title: '',
    excerpt: '',
    content: '',
    category: 'NEWS',
    author: 'Elite Dreams Admin'
  });

  const handleOpenEditor = (post: BlogPost | null = null) => {
    if (post) {
      setEditingPost(post);
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        author: post.author
      });
    } else {
      setEditingPost(null);
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: 'NEWS',
        author: 'Elite Dreams Admin'
      });
    }
    setIsEditorOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      updateBlogPost(editingPost.id, formData);
    } else {
      addBlogPost(formData);
    }
    setIsEditorOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Insight Content Management</h1>
          <p style={{ color: 'var(--secondary)' }}>Publish and manage global technical thought leadership.</p>
        </div>
        <button className="btn btn-primary" onClick={() => handleOpenEditor()} style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> New Publication
        </button>
      </div>

      <div className="card" style={{ padding: '0' }}>
         <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ position: 'relative' }}>
                <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} size={18} />
                <input 
                    type="text" 
                    placeholder="Search publications..." 
                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)' }}
                />
            </div>
         </div>

         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>
                <th style={{ padding: '1rem 1.5rem' }}>Title & Author</th>
                <th style={{ padding: '1rem 1.5rem' }}>Category</th>
                <th style={{ padding: '1rem 1.5rem' }}>Date</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map(post => (
                <tr key={post.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{post.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>by {post.author}</div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem', background: 'var(--muted)', borderRadius: '0.4rem', fontWeight: 800 }}>{post.category}</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--secondary)' }}>{post.date}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                     <button onClick={() => handleOpenEditor(post)} style={{ color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', marginRight: '1rem' }}><Edit2 size={16} /></button>
                     <button onClick={() => deleteBlogPost(post.id)} style={{ color: '#f43f5e', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
         </table>
      </div>

      {/* Editor Modal */}
      <AnimatePresence>
        {isEditorOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsEditorOpen(false)} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }} />
             <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="card" 
                style={{ position: 'relative', width: '100%', maxWidth: '800px', padding: '3rem', maxHeight: '90vh', overflowY: 'auto' }}
             >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem' }}>{editingPost ? 'Edit Publication' : 'New Publication Protocols'}</h2>
                    <button onClick={() => setIsEditorOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}><X size={24} /></button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>PUBLICATION TITLE</label>
                        <input 
                            required 
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Enter whitepaper title..." 
                            style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>CATEGORY</label>
                            <select 
                                value={formData.category}
                                onChange={e => setFormData({ ...formData, category: e.target.value as any })}
                                style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                            >
                                <option value="CLOUD">CLOUD ENGINEERING</option>
                                <option value="SECURITY">CYBER DEFENSE</option>
                                <option value="SOFTWARE">MODERNIZATION</option>
                                <option value="NEWS">GENERAL ANNOUNCEMENT</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>AUTHOR ENTITY</label>
                            <input 
                                required 
                                value={formData.author}
                                onChange={e => setFormData({ ...formData, author: e.target.value })}
                                style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>STRATEGIC EXCERPT</label>
                        <textarea 
                            required 
                            rows={2}
                            value={formData.excerpt}
                            onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                            placeholder="Brief summary for indexing..." 
                            style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white', resize: 'vertical' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>TECHNICAL CONTENT (MARKDOWN)</label>
                        <textarea 
                            required 
                            rows={8}
                            value={formData.content}
                            onChange={e => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Full intelligence log content..." 
                            style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white', resize: 'vertical', fontFamily: 'monospace' }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem', marginTop: '1rem', fontWeight: 900 }}>
                        {editingPost ? 'COMMIT CHANGES' : 'PUBLISH TO GLOBAL NETWORK'}
                    </button>
                </form>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
