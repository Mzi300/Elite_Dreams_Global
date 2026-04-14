'use client';

import React, { useState } from 'react';
import { Shield, Zap, Cloud, Cpu, Globe, Settings as SettingsIcon, Edit2, Plus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_SERVICES = [
    { id: '1', name: 'Cloud Engineering', icon: <Cloud size={24} />, description: 'Hyper-scalable sovereign infrastructure.', status: 'DEPLOYED' },
    { id: '2', name: 'Cyber Defense Systems', icon: <Shield size={24} />, description: 'Offensive security & automated threat response.', status: 'OPERATIONAL' },
    { id: '3', name: 'Software Modernization', icon: <Zap size={24} />, description: 'Legacy refactoring to cloud-native standards.', status: 'OPERATIONAL' },
    { id: '4', name: 'Global Intelligence Hub', icon: <Globe size={24} />, description: 'Data orchestration across 14 global sectors.', status: 'DEPLOYED' },
];

export default function ServicesAdminPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Strategic Services</h1>
          <p style={{ color: 'var(--secondary)' }}>Modify global service offerings and operational availability status.</p>
        </div>
        <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> Add Strategic Pillar
        </button>
      </div>

      <div className="grid grid-2" style={{ gap: '2rem' }}>
        {MOCK_SERVICES.map(service => (
            <div key={service.id} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '1rem', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                        {service.icon}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button style={{ padding: '0.5rem', background: 'none', border: 'none', color: 'var(--secondary)', cursor: 'pointer' }}><Edit2 size={16} /></button>
                        <button style={{ padding: '0.5rem', background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}><Trash2 size={16} /></button>
                    </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.name}</h3>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: 1.6 }}>{service.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 900, color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '1rem' }}>{service.status}</span>
                    <span style={{ fontSize: '0.7rem', opacity: 0.3, fontWeight: 700 }}>REF: {service.id}</span>
                </div>
            </div>
        ))}
        
        {/* ADD NEW PLACEHOLDER */}
        <div style={{ 
            border: '2px dashed var(--border)', 
            borderRadius: 'var(--radius)', 
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
            padding: '4rem', opacity: 0.5, cursor: 'pointer' 
        }}>
            <Plus size={48} style={{ marginBottom: '1.5rem' }} />
            <div style={{ fontWeight: 900, fontSize: '0.75rem', letterSpacing: '2px' }}>INITIALIZE NEW VERTICAL</div>
        </div>
      </div>
    </div>
  );
}
