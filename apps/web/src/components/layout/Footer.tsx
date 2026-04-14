'use client';

import Link from 'next/link';
import { Activity, Shield, Cpu, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#020617', color: '#f8fafc', padding: '6rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div style={{ 
        position: 'absolute', 
        bottom: '-10%', 
        right: '-5%', 
        width: '40%', 
        height: '40%', 
        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '2rem' }}>
               <div style={{ 
                width: '32px', 
                height: '32px', 
                background: 'linear-gradient(135deg, white, var(--brand-indigo))', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--foreground)',
                fontWeight: 900,
                fontSize: '1rem'
              }}>E</div>
              <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
                ELITE <span className="text-gradient">DREAMS</span>
              </span>
            </div>
            <p style={{ color: '#94a3b8', maxWidth: '440px', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              The definitive platform for global enterprise engineering. From cloud-native strategy to offensive security, we define the technical standards of the future.
            </p>
            
            {/* Global Infrastructure Status Widget */}
            <div className="glass-panel" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={16} color="#10b981" />
                    <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#10b981' }}>OPERATIONAL</span>
                </div>
                <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.6 }}>SYSTEM UPTIME: 99.9997%</div>
                <Link href="/status" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    STATUS PAGE <ArrowUpRight size={12} />
                </Link>
            </div>
          </div>

          <div>
            <div className="nav-link" style={{ fontSize: '0.7rem', color: 'white', marginBottom: '1.5rem', opacity: 0.3, letterSpacing: '4px', cursor: 'default' }}>STRATEGIC PILLARS</div>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none' }}>
              <li><Link href="/services#cloud" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>Cloud Engineering</Link></li>
              <li><Link href="/services#sec" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>Cyber Defense Systems</Link></li>
              <li><Link href="/services#saas" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>Software Modernization</Link></li>
              <li><Link href="/insights" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>Technical Insights</Link></li>
              <li><Link href="/docs" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>Global Developer Portal</Link></li>
            </ul>
          </div>

          <div>
            <div className="nav-link" style={{ fontSize: '0.7rem', color: 'white', marginBottom: '1.5rem', opacity: 0.3, letterSpacing: '4px', cursor: 'default' }}>GOVERNANCE</div>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none' }}>
              <li><Link href="/about" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>The Global Mission</Link></li>
              <li><Link href="/regulatory" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>Regulatory Disclosure</Link></li>
              <li><Link href="/compliance" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>Governance Framework</Link></li>
              <li><Link href="/sla" className="nav-link" style={{ color: 'white', opacity: 0.6 }}>SLA Agreements</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '3rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          fontSize: '0.875rem',
          color: '#475569'
        }}>
          <div>
            © 2026 Elite Dreams Global Technologies Inc. <span style={{ marginLeft: '1rem', color: '#64748b' }}>ENGINEERING ENTERPRISE EXCELLENCE.</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/privacy" className="nav-link" style={{ fontSize: '0.75rem', color: '#64748b' }}>Privacy Protocols</Link>
            <Link href="/terms" className="nav-link" style={{ fontSize: '0.75rem', color: '#64748b' }}>Terms of Sovereignty</Link>
            <Link href="/cookies" className="nav-link" style={{ fontSize: '0.75rem', color: '#64748b' }}>Cookie Governance</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bottom-link {
          text-decoration: none;
          color: inherit;
          font-weight: 700;
          transition: var(--transition);
        }
        .bottom-link:hover {
          color: white;
        }
      `}</style>
    </footer>
  );
}
