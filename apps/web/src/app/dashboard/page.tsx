'use client';

import React from 'react';

const USER_MOCK = {
  name: "John Doe",
  email: "john@enterprise.com",
  tier: "Premium Service Client"
};

export default function ClientDashboard() {
  return (
    <div>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome back, {USER_MOCK.name}</h1>
        <p style={{ color: 'var(--secondary)' }}>{USER_MOCK.tier} • Active Service Account</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
        {/* Quick Actions */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Active Orders</h3>
          <div style={{ padding: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700 }}>ORD-7723</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>EliteBook Pro X1 • $1,499.00</div>
            </div>
            <span style={{ 
              fontSize: '0.75rem', 
              padding: '0.25rem 0.6rem', 
              borderRadius: '1rem', 
              backgroundColor: 'rgba(14, 165, 233, 0.1)', 
              color: 'var(--primary)',
              fontWeight: 600
            }}>
              SHIPPED
            </span>
          </div>
          <a href="/dashboard/orders" style={{ display: 'block', marginTop: '1.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>View Order History →</a>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Support Overview</h3>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1, padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>1</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--secondary)', textTransform: 'uppercase', fontWeight: 700 }}>Open Ticket</div>
            </div>
            <div style={{ flex: 1, padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981' }}>12</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--secondary)', textTransform: 'uppercase', fontWeight: 700 }}>Resolved</div>
            </div>
          </div>
          <a href="/dashboard/tickets" style={{ display: 'block', marginTop: '1.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>Manage Tickets →</a>
        </div>
      </div>

      <div className="card" style={{ backgroundColor: 'var(--foreground)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2.5rem' }}>
        <div>
          <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Need technical assistance?</h3>
          <p style={{ opacity: 0.7 }}>Our experts are available 24/7 for premium account support.</p>
        </div>
        <a href="/support" className="btn" style={{ backgroundColor: 'white', color: 'var(--foreground)', padding: '0.8rem 1.8rem' }}>
          Start New Ticket
        </a>
      </div>
    </div>
  );
}
