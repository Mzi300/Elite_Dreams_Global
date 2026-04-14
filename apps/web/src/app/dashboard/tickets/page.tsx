'use client';

import React from 'react';

const USER_MOCK_TICKETS = [
  { id: 'TCK-102', subject: 'Server Latency - EU West', priority: 'High', status: 'In Progress', lastUpdate: '2h ago' },
  { id: 'TCK-098', subject: 'Laptop Battery Diagnostic', priority: 'Medium', status: 'Resolved', lastUpdate: '2 days ago' },
  { id: 'TCK-085', subject: 'Software License Activation', priority: 'Low', status: 'Resolved', lastUpdate: '1 week ago' },
];

export default function ClientTickets() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>My Support Tickets</h1>
          <p style={{ color: 'var(--secondary)' }}>Track the progress of your technical requests and repairs.</p>
        </div>
        <button className="btn btn-primary">Start New Ticket</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {USER_MOCK_TICKETS.map(ticket => (
          <div key={ticket.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '0.875rem' }}>{ticket.id}</span>
                <span style={{ 
                  fontSize: '0.65rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase',
                  color: ticket.priority === 'High' ? '#f59e0b' : 'var(--secondary)',
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '0.25rem'
                }}>
                  {ticket.priority} Priority
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{ticket.subject}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--secondary)' }}>Last updated: {ticket.lastUpdate}</p>
            </div>
            
            <div style={{ textAlign: 'right' }}>
              <div style={{ 
                display: 'inline-block',
                padding: '0.4rem 1rem', 
                borderRadius: '2rem', 
                backgroundColor: ticket.status === 'Resolved' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)', 
                color: ticket.status === 'Resolved' ? '#10b981' : '#3b82f6',
                fontWeight: 700,
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}>
                {ticket.status}
              </div>
              <button style={{ display: 'block', width: '100%', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                View Conversation →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
