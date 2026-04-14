'use client';

import React from 'react';
import Link from 'next/link';
import { useAdminStore } from '@/lib/store';

export default function AdminDashboard() {
  const { enquiries } = useAdminStore();
  
  const stats = [
    { label: 'Total Revenue', value: '$124,592.00', trend: '+12.5%', icon: '💰' },
    { label: 'Open Enquiries', value: enquiries.filter(e => e.status === 'NEW').length.toString(), trend: 'Live', icon: '🎫' },
    { label: 'Cloud Up-time', value: '99.98%', trend: 'Stable', icon: '☁️' },
    { label: 'New Customers', value: '18', trend: '+5.2%', icon: '👥' },
  ];

  const recentEnquiries = enquiries.slice(0, 5);
  
  const recentOrders = [
    { id: 'ORD-7721', client: 'Acme Corp', amount: '$4,299.00', status: 'Delivered', date: '2026-04-12' },
    { id: 'ORD-7722', client: 'Global Health', amount: '$12,500.00', status: 'Processing', date: '2026-04-13' },
    { id: 'ORD-7723', client: 'TechStart Inc', amount: '$899.00', status: 'Shipped', date: '2026-04-13' },
  ];
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Business Overview</h1>
        <p style={{ color: 'var(--secondary)' }}>Real-time monitoring of Elite Dreams ecosystem performance.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {stats.map(stat => (
          <div key={stat.label} className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                color: stat.trend.startsWith('+') ? '#10b981' : stat.trend === 'Live' ? 'var(--primary)' : stat.trend.startsWith('-') ? '#f43f5e' : 'var(--secondary)',
                backgroundColor: stat.trend.startsWith('+') ? 'rgba(16, 185, 129, 0.1)' : stat.trend === 'Live' ? 'rgba(14,165,233,0.1)' : stat.trend.startsWith('-') ? 'rgba(244, 63, 94, 0.1)' : 'rgba(0,0,0,0.05)',
                padding: '0.25rem 0.5rem',
                borderRadius: '1rem'
              }}>
                {stat.trend}
              </span>
            </div>
            <div style={{ color: 'var(--secondary)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{stat.label}</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Recent Orders */}
        <div className="card" style={{ padding: '0' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.1rem' }}>Recent Enterprise Orders</h3>
            <button style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>
                <th style={{ padding: '1rem 1.5rem' }}>Order ID</th>
                <th style={{ padding: '1rem 1.5rem' }}>Client</th>
                <th style={{ padding: '1rem 1.5rem' }}>Amount</th>
                <th style={{ padding: '1rem 1.5rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600, fontSize: '0.875rem' }}>{order.id}</td>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>{order.client}</td>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>{order.amount}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: '1rem', 
                      backgroundColor: 'rgba(14, 165, 233, 0.1)', 
                      color: 'var(--primary)',
                      fontWeight: 600
                    }}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Tickets (Enquiries) */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Recent Website Enquiries</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentEnquiries.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--secondary)', fontSize: '0.875rem' }}>
                    No recent enquiries from the network.
                </div>
            ) : (
                recentEnquiries.map(enquiry => (
                <div key={enquiry.id} style={{ 
                    padding: '1rem', 
                    borderRadius: 'var(--radius)', 
                    border: '1px solid var(--border)',
                    backgroundColor: 'rgba(0,0,0,0.01)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.75rem', color: 'var(--primary)' }}>{enquiry.category}</span>
                    <span style={{ 
                        fontSize: '0.65rem', 
                        fontWeight: 800, 
                        textTransform: 'uppercase',
                        color: enquiry.status === 'NEW' ? '#10b981' : 'var(--secondary)'
                    }}>
                        {enquiry.status}
                    </span>
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{enquiry.name} - {enquiry.industry}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{enquiry.message}</div>
                </div>
                ))
            )}
          </div>
          <Link href="/tickets">
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '0.75rem' }}>
                Go to Ticket Hub
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
