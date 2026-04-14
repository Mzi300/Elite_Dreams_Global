'use client';

import { useAdminStore } from '@/lib/store';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Sidebar() {
  const logout = useAdminStore(state => state.logout);
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLogout = () => {
    logout();
    window.location.href = process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3001';
  };
  const menuItems = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'Products', href: '/products', icon: '📦' },
    { name: 'Orders', href: '/orders', icon: '🛒' },
    { name: 'Tickets', href: '/tickets', icon: '🎫' },
    { name: 'Blog Hub', href: '/blog', icon: '📰' },
    { name: 'Support Desk', href: '/live-support', icon: '💬' },
    { name: 'Services', href: '/services', icon: '🛠️' },
    { name: 'Customers', href: '/customers', icon: '👥' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div style={{
      width: '280px',
      height: '100vh',
      backgroundColor: 'var(--card)',
      borderRight: '1px solid var(--border)',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1rem'
    }}>
      <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '3rem', padding: '0 1rem' }}>
        ELITE DREAMS <span style={{ color: 'var(--foreground)' }}>GLOBAL</span>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {menuItems.map(item => (
          <Link 
            key={item.name} 
            href={item.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              color: pathname === item.href ? 'white' : 'var(--foreground)',
              fontWeight: pathname === item.href ? 700 : 500,
              transition: 'var(--transition-fast)',
              backgroundColor: pathname === item.href ? 'var(--primary)' : 'transparent',
              boxShadow: pathname === item.href ? '0 4px 12px rgba(14, 165, 233, 0.3)' : 'none'
            }}
            onMouseEnter={(e) => {
                if (pathname !== item.href) e.currentTarget.style.backgroundColor = 'rgba(14, 165, 233, 0.05)';
            }}
            onMouseLeave={(e) => {
                if (pathname !== item.href) e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div style={{ padding: '1rem', marginTop: 'auto', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            A
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Admin User</div>
            <button 
                onClick={handleLogout}
                style={{ fontSize: '0.75rem', color: '#f43f5e', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontWeight: 700 }}
            >
                Terminate Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
