'use client';

import React from 'react';
import { useAdminStore } from '@/lib/store';

export default function TicketsPage() {
  const { enquiries, updateEnquiryStatus, deleteEnquiry } = useAdminStore();
  
  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString();
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Support Ticket Center</h1>
          <p style={{ color: 'var(--secondary)' }}>Manage technical support requests and repair trackings.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
           <button style={{ background: 'none', border: '1px solid var(--border)', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
            Export Report
          </button>
          <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
            + Create Internal Ticket
          </button>
        </div>
      </div>

      <div className="card" style={{ padding: '0' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem' }}>
          <select style={{ padding: '0.6rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', fontWeight: 600 }}>
            <option>All Statuses</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>Closed</option>
          </select>
          <select style={{ padding: '0.6rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', fontWeight: 600 }}>
            <option>All Priorities</option>
            <option>Urgent</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>
              <th style={{ padding: '1rem 1.5rem' }}>Ticket Info</th>
              <th style={{ padding: '1rem 1.5rem' }}>Client</th>
              <th style={{ padding: '1rem 1.5rem' }}>Priority</th>
              <th style={{ padding: '1rem 1.5rem' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem' }}>Created</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(enquiry => (
              <tr key={enquiry.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{enquiry.category} Request</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>#{enquiry.id}</div>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                  <div style={{ fontWeight: 700 }}>{enquiry.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--secondary)' }}>{enquiry.email}</div>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    padding: '0.25rem 0.6rem', 
                    borderRadius: '1rem', 
                    backgroundColor: enquiry.industry === 'Government / Defense' ? 'rgba(244, 63, 94, 0.1)' : 'rgba(0,0,0,0.05)', 
                    color: enquiry.industry === 'Government / Defense' ? '#f43f5e' : 'var(--secondary)',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                  }}>
                    {enquiry.industry}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        backgroundColor: enquiry.status === 'NEW' ? '#10b981' : enquiry.status === 'IN_PROGRESS' ? '#3b82f6' : '#94a3b8' 
                      }}></div>
                        <select 
                            value={enquiry.status}
                            onChange={(e) => updateEnquiryStatus(enquiry.id, e.target.value as any)}
                            style={{ border: 'none', background: 'none', fontWeight: 600, color: 'inherit', cursor: 'pointer' }}
                        >
                            <option value="NEW">NEW</option>
                            <option value="IN_PROGRESS">IN PROGRESS</option>
                            <option value="RESOLVED">RESOLVED</option>
                            <option value="ESCALATED">ESCALATED</option>
                        </select>
                   </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: 'var(--secondary)' }}>{formatDate(enquiry.timestamp)}</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <button 
                    onClick={() => deleteEnquiry(enquiry.id)}
                    style={{ color: '#f43f5e', fontWeight: 600, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    Archive
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
