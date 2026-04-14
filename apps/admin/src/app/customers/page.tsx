'use client';

import React, { useState } from 'react';
import { useAdminStore, Customer } from '@/lib/store';
import { Users, Search, Plus, Mail, Shield, Zap, Globe, MoreVertical, Edit2, Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomersPage() {
  const { customers, addCustomer, updateCustomer } = useAdminStore();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [formData, setFormData] = useState<Omit<Customer, 'id' | 'joined' | 'totalSpend'>>({
    name: '',
    contact: '',
    email: '',
    type: 'ENTERPRISE'
  });

  const handleOpenEditor = (cust: Customer | null = null) => {
    if (cust) {
      setEditingCustomer(cust);
      setFormData({
        name: cust.name,
        contact: cust.contact,
        email: cust.email,
        type: cust.type
      });
    } else {
      setEditingCustomer(null);
      setFormData({ name: '', contact: '', email: '', type: 'ENTERPRISE' });
    }
    setIsEditorOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCustomer) {
      updateCustomer(editingCustomer.id, formData);
    } else {
      addCustomer(formData);
    }
    setIsEditorOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Client Intelligence</h1>
          <p style={{ color: 'var(--secondary)' }}>Manage enterprise relationships and monitor global account standing.</p>
        </div>
        <button onClick={() => handleOpenEditor()} className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> Initialize New Client
        </button>
      </div>

      <div className="card" style={{ padding: '0' }}>
         <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} size={18} />
            <input 
                type="text" 
                placeholder="Find enterprise nodes or primary contacts..." 
                style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             {['ENTERPRISE', 'STARTUP', 'GOVERNMENT'].map(type => (
                 <button key={type} style={{ fontSize: '0.65rem', fontWeight: 800, padding: '0.5rem 1rem', borderRadius: 'var(--radius)', background: 'var(--muted)', border: '1px solid var(--border)', cursor: 'pointer' }}>{type}</button>
             ))}
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>
              <th style={{ padding: '1rem 1.5rem' }}>Entity / Node</th>
              <th style={{ padding: '1rem 1.5rem' }}>Account Type</th>
              <th style={{ padding: '1rem 1.5rem' }}>Primary Liaison</th>
              <th style={{ padding: '1rem 1.5rem' }}>Lifetime Value</th>
              <th style={{ padding: '1rem 1.5rem' }}>Sovereignty Date</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(cust => (
              <tr key={cust.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--brand-indigo))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, fontSize: '0.8rem' }}>
                            {cust.name[0]}
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{cust.name}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--secondary)' }}>{cust.id}</div>
                        </div>
                   </div>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ 
                        fontSize: '0.65rem', fontWeight: 900, padding: '0.2rem 0.5rem', borderRadius: '0.4rem', 
                        background: cust.type === 'GOVERNMENT' ? 'rgba(168, 85, 247, 0.1)' : 'rgba(14, 165, 233, 0.1)',
                        color: cust.type === 'GOVERNMENT' ? '#a855f7' : '#0ea5e9'
                    }}>
                        {cust.type}
                    </span>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{cust.contact}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Mail size={12} /> {cust.email}
                    </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 800, color: 'white' }}>${cust.totalSpend.toLocaleString()}</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--secondary)' }}>{cust.joined}</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <button onClick={() => handleOpenEditor(cust)} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}><MoreVertical size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer Editor Modal */}
      <AnimatePresence>
        {isEditorOpen && (
             <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsEditorOpen(false)} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)' }} />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                    className="card" style={{ position: 'relative', width: '100%', maxWidth: '500px', padding: '3rem' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                         <h2 style={{ fontSize: '1.25rem' }}>{editingCustomer ? 'Update Entity' : 'New Strategic Node'}</h2>
                         <button onClick={() => setIsEditorOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}><X size={24} /></button>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, display: 'block', marginBottom: '0.5rem' }}>ENTITY NAME</label>
                            <input 
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                style={{ width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius)' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, display: 'block', marginBottom: '0.5rem' }}>PRIMARY LIAISON</label>
                            <input 
                                required
                                value={formData.contact}
                                onChange={e => setFormData({ ...formData, contact: e.target.value })}
                                style={{ width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius)' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, display: 'block', marginBottom: '0.5rem' }}>COMMUNICATION NODE (EMAIL)</label>
                            <input 
                                required
                                type="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                style={{ width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius)' }}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4, display: 'block', marginBottom: '0.5rem' }}>ACCOUNT CLASSIFICATION</label>
                            <select 
                                value={formData.type}
                                onChange={e => setFormData({ ...formData, type: e.target.value as any })}
                                style={{ width: '100%', padding: '0.8rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius)' }}
                            >
                                <option value="ENTERPRISE">ENTERPRISE</option>
                                <option value="STARTUP">STARTUP</option>
                                <option value="GOVERNMENT">GOVERNMENT</option>
                                <option value="INDIVIDUAL">INDIVIDUAL</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" style={{ marginTop: '1.5rem', padding: '1rem', fontWeight: 900 }}>AUTHENTICATE ENTITY</button>
                    </form>
                </motion.div>
             </div>
        )}
      </AnimatePresence>
    </div>
  );
}
