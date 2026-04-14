'use client';

import React from 'react';
import { useAdminStore } from '@/lib/store';
import { Settings as SettingsIcon, Shield, Monitor, Globe, Bell, Lock, Database, RefreshCcw, Save } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const { settings, updateSettings } = useAdminStore();

  const handleToggle = (key: keyof typeof settings) => {
    if (typeof settings[key] === 'boolean') {
        updateSettings({ [key]: !settings[key] });
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Global Configurations</h1>
          <p style={{ color: 'var(--secondary)' }}>Sovereign control over the Elite Dreams digital ecosystem infrastructure.</p>
        </div>
        <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Save size={18} /> Commit Global Changes
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 3fr', gap: '4rem' }}>
        {/* Sidebar Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '0.75rem 1.25rem', borderRadius: 'var(--radius)', backgroundColor: 'var(--muted)', fontWeight: 800, fontSize: '0.8rem', color: 'var(--primary)', letterSpacing: '1px' }}>SYSTEM CORE</div>
            <div style={{ padding: '0.75rem 1.25rem', opacity: 0.4, fontWeight: 700, fontSize: '0.8rem' }}>SECURITY PROTOCOLS</div>
            <div style={{ padding: '0.75rem 1.25rem', opacity: 0.4, fontWeight: 700, fontSize: '0.8rem' }}>API INTEGRATIONS</div>
            <div style={{ padding: '0.75rem 1.25rem', opacity: 0.4, fontWeight: 700, fontSize: '0.8rem' }}>BRANDING & THEME</div>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section className="card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Monitor size={20} className="text-gradient" /> Mainframe Visibility
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Maintenance Mode</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Redirect all public traffic to the tactical maintenance hub.</div>
                        </div>
                        <button 
                            onClick={() => handleToggle('maintenanceMode')}
                            style={{ 
                                width: '50px', height: '26px', borderRadius: '20px', 
                                backgroundColor: settings.maintenanceMode ? 'var(--primary)' : 'var(--muted)',
                                border: '1px solid var(--border)', cursor: 'pointer', position: 'relative',
                                transition: 'var(--transition)'
                            }}
                        >
                            <div style={{ 
                                position: 'absolute', top: '2px', left: settings.maintenanceMode ? '26px' : '2px', 
                                width: '20px', height: '20px', borderRadius: '50%', background: 'white',
                                transition: 'var(--transition)'
                            }} />
                        </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Public Branding Name</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Primary entity title across all global headers.</div>
                        </div>
                        <input 
                            value={settings.brandingName}
                            onChange={(e) => updateSettings({ brandingName: e.target.value })}
                            style={{ padding: '0.6rem 1rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius)', fontWeight: 700 }}
                        />
                    </div>
                </div>
            </section>

            <section className="card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Shield size={20} className="text-gradient" /> Security Overwatch
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Threat Enforcement Level</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Firewall intensity and access policy strictness.</div>
                        </div>
                        <select 
                            value={settings.securityLevel}
                            onChange={(e) => updateSettings({ securityLevel: e.target.value as any })}
                            style={{ padding: '0.6rem 1rem', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', borderRadius: 'var(--radius)', fontWeight: 700 }}
                        >
                            <option value="STANDARD">STANDARD OPS</option>
                            <option value="PARANOID">HIGH VIGILANCE</option>
                            <option value="MISSION_CRITICAL">MISSION CRITICAL</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>System Health Transmissions</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>Operational status: {settings.apiStatus}</div>
                        </div>
                        <button className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <RefreshCcw size={12} /> SYNC NODE
                        </button>
                    </div>
                </div>
            </section>

             <div style={{ border: '1px solid rgba(244, 63, 94, 0.2)', padding: '2rem', borderRadius: 'var(--radius)', background: 'rgba(244, 63, 94, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div style={{ fontWeight: 900, fontSize: '0.75rem', color: '#f43f5e', letterSpacing: '2px', marginBottom: '0.5rem' }}>DANGER ZONE</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Purge all local tactical logs and reset enterprise state.</div>
                </div>
                <button className="btn" style={{ backgroundColor: '#f43f5e', color: 'white', padding: '0.75rem 1.5rem', fontWeight: 900 }}>PURGE ALL DATA</button>
             </div>
        </div>
      </div>
    </div>
  );
}
