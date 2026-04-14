'use client';

import { useAdminStore } from '@/lib/store';
import { useRouter, usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const logout = useAdminStore(state => state.logout);
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLogout = () => {
    logout();
    const webUrl = process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3001';
    window.location.href = webUrl;
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

  const logoutItem = { name: 'Logout', icon: '🚪' };

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
      <Link 
        href={process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3001'}
        style={{ 
            fontWeight: 800, 
            fontSize: '1.25rem', 
            color: 'var(--primary)', 
            marginBottom: '3rem', 
            padding: '0 1rem',
            textDecoration: 'none',
            display: 'block'
        }}
      >
        ELITE DREAMS <span style={{ color: 'var(--foreground)' }}>GLOBAL</span>
      </Link>

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
        {/* Logout Tab */}
        <button 
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius)',
            border: 'none',
            textDecoration: 'none',
            color: 'var(--foreground)',
            fontWeight: 500,
            transition: 'var(--transition-fast)',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            textAlign: 'left',
            marginTop: '2rem',
            borderTop: '1px solid var(--border)',
            paddingTop: '1.5rem'
          }}
          onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(244, 63, 94, 0.05)';
              e.currentTarget.style.color = '#f43f5e';
          }}
          onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--foreground)';
          }}
        >
          <span>{logoutItem.icon}</span>
          {logoutItem.name}
        </button>
      </nav>

      <div style={{ padding: '1rem', marginTop: 'auto' }}>
        <a 
          href={process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3001'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            color: 'var(--primary)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            borderRadius: 'var(--radius)',
            backgroundColor: 'var(--muted)',
            border: '1px solid var(--border)'
          }}
        >
          RETURN HOME <ArrowUpRight size={16} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            A
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Admin User</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>Command Level 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
