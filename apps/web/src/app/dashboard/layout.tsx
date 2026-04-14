import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: 'Account Overview', href: '/dashboard', icon: '👤' },
    { name: 'My Orders', href: '/dashboard/orders', icon: '📦' },
    { name: 'Support Tickets', href: '/dashboard/tickets', icon: '🎫' },
    { name: 'Profile Settings', href: '/dashboard/profile', icon: '⚙️' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        borderRight: '1px solid var(--border)', 
        backgroundColor: 'var(--card)', 
        padding: '2rem 1rem' 
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menuItems.map(item => (
            <Link 
              key={item.href} 
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                color: 'var(--foreground)',
                fontWeight: 500,
                transition: 'var(--transition-fast)'
              }}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main style={{ flex: 1, padding: '3rem', backgroundColor: 'var(--background)' }}>
        {children}
      </main>
    </div>
  );
}
