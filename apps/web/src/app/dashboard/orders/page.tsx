'use client';

import React from 'react';

const USER_MOCK_ORDERS = [
  { id: 'ORD-7723', item: 'EliteBook Pro X1', price: '$1,499.00', status: 'Shipped', date: '2026-04-12' },
  { id: 'ORD-6510', item: 'V-Shield Security Cam x2', price: '$598.00', status: 'Delivered', date: '2026-02-15' },
  { id: 'ORD-5402', item: 'Quantum Hub Docking', price: '$199.00', status: 'Delivered', date: '2025-11-20' },
];

export default function ClientOrders() {
  return (
    <div>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>My Purchase History</h1>
        <p style={{ color: 'var(--secondary)' }}>Track your recent hardware orders and download invoices.</p>
      </div>

      <div className="card" style={{ padding: '0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>
              <th style={{ padding: '1rem 1.5rem' }}>Order Number</th>
              <th style={{ padding: '1rem 1.5rem' }}>Product</th>
              <th style={{ padding: '1rem 1.5rem' }}>Amount</th>
              <th style={{ padding: '1rem 1.5rem' }}>Date</th>
              <th style={{ padding: '1rem 1.5rem' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {USER_MOCK_ORDERS.map(order => (
              <tr key={order.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, fontSize: '0.875rem' }}>{order.id}</td>
                <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem' }}>{order.item}</td>
                <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem' }}>{order.price}</td>
                <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', color: 'var(--secondary)' }}>{order.date}</td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.25rem 0.6rem', 
                    borderRadius: '1rem', 
                    backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                    color: '#3b82f6',
                    fontWeight: 600
                  }}>
                    {order.status}
                  </span>
                </td>
                <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
                  <button style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Track Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
