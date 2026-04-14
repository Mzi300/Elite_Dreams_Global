'use client';

import React, { useState } from 'react';
import { useAdminStore, Order } from '@/lib/store';
import { ShoppingCart, Search, Filter, Eye, CheckCircle, Truck, Clock, XCircle, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrdersPage() {
  const { orders, updateOrderStatus } = useAdminStore();
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'PENDING': return { bg: 'rgba(245, 158, 11, 0.1)', text: '#f59e0b' };
      case 'DEPLOYED': return { bg: 'rgba(14, 165, 233, 0.1)', text: '#0ea5e9' };
      case 'FULFILLED': return { bg: 'rgba(16, 185, 129, 0.1)', text: '#10b981' };
      case 'CANCELLED': return { bg: 'rgba(244, 63, 94, 0.1)', text: '#f43f5e' };
      default: return { bg: 'rgba(0,0,0,0.05)', text: 'var(--secondary)' };
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'PENDING': return <Clock size={14} />;
      case 'DEPLOYED': return <Truck size={14} />;
      case 'FULFILLED': return <CheckCircle size={14} />;
      case 'CANCELLED': return <XCircle size={14} />;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Global Logistics</h1>
          <p style={{ color: 'var(--secondary)' }}>Intercept and monitor real-time enterprise hardware acquisitions.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(14, 165, 233, 0.05)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5 }}>ACTIVE SHIPMENTS</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 900 }}>{orders.filter(o => o.status === 'DEPLOYED').length}</span>
            </div>
        </div>
      </div>

      <div className="card" style={{ padding: '0' }}>
         <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} size={18} />
            <input 
                type="text" 
                placeholder="Search orders, clients, or unit IDs..." 
                style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)' }}
            />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--muted)', fontWeight: 700, cursor: 'pointer' }}>
            <Filter size={16} /> Filter
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>
              <th style={{ padding: '1rem 1.5rem' }}>Transmission ID</th>
              <th style={{ padding: '1rem 1.5rem' }}>Enterprise Client</th>
              <th style={{ padding: '1rem 1.5rem' }}>Units</th>
              <th style={{ padding: '1rem 1.5rem' }}>Total Value</th>
              <th style={{ padding: '1rem 1.5rem' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
                <tr>
                    <td colSpan={6} style={{ padding: '4rem', textAlign: 'center', opacity: 0.3, fontWeight: 700 }}>No active logistics detected.</td>
                </tr>
            ) : (
                orders.map(order => (
                    <tr key={order.id} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '1rem 1.5rem' }}>
                            <div style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--primary)' }}>{order.id}</div>
                            <div style={{ fontSize: '0.65rem', opacity: 0.5 }}>{new Date(order.timestamp).toLocaleString()}</div>
                        </td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                            <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{order.customerName}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--secondary)' }}>ID: {order.customerId}</div>
                        </td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                            <div style={{ display: 'flex', WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent)' }}>
                                {order.items.slice(0, 3).map((item, i) => (
                                    <div key={i} style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', border: '1px solid var(--border)', marginLeft: i > 0 ? '-8px' : 0 }}>
                                        {item.name[0]}
                                    </div>
                                ))}
                                {order.items.length > 3 && (
                                    <div style={{ fontSize: '0.7rem', opacity: 0.5, marginLeft: '0.5rem', alignSelf: 'center' }}>+{order.items.length - 3}</div>
                                )}
                            </div>
                        </td>
                        <td style={{ padding: '1rem 1.5rem', fontWeight: 800, color: 'white' }}>${order.total.toLocaleString()}</td>
                        <td style={{ padding: '1rem 1.5rem' }}>
                            <div style={{ 
                                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                padding: '0.25rem 0.6rem', borderRadius: '1rem', fontSize: '0.65rem', fontWeight: 900,
                                backgroundColor: getStatusColor(order.status).bg,
                                color: getStatusColor(order.status).text
                            }}>
                                {getStatusIcon(order.status)}
                                {order.status}
                            </div>
                        </td>
                        <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                            <button onClick={() => setSelectedOrder(order)} style={{ color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}>DETAILS</button>
                        </td>
                    </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      {/* Order Detail Modal */}
      <AnimatePresence>
        {selectedOrder && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedOrder(null)} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }} />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="card" 
                    style={{ position: 'relative', width: '100%', maxWidth: '800px', padding: 0, overflow: 'hidden' }}
                >
                    {/* Modal Header */}
                    <div style={{ padding: '2rem 3rem', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.4, letterSpacing: '4px', marginBottom: '0.5rem' }}>TRANSMISSION DATA</div>
                            <h2 style={{ fontSize: '1.5rem' }}>Order {selectedOrder.id}</h2>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <select 
                                value={selectedOrder.status}
                                onChange={(e) => updateOrderStatus(selectedOrder.id, e.target.value as any)}
                                style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)', background: 'var(--background)', border: '1px solid var(--border)', color: 'white', fontWeight: 700 }}
                            >
                                <option value="PENDING">PENDING</option>
                                <option value="DEPLOYED">DEPLOYED</option>
                                <option value="FULFILLED">FULFILLED</option>
                                <option value="CANCELLED">CANCELLED</option>
                            </select>
                            <button onClick={() => setSelectedOrder(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}><XCircle size={24} /></button>
                        </div>
                    </div>

                    <div style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }}>
                        <div>
                            <h4 style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.3, letterSpacing: '2px', marginBottom: '1.5rem' }}>MANIFEST</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {selectedOrder.items.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                                        <div>
                                            <div style={{ fontWeight: 700 }}>{item.name}</div>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>SKU: {item.id}</div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontWeight: 800 }}>${item.price.toLocaleString()}</div>
                                            <div style={{ fontSize: '0.7rem', opacity: 0.5 }}>Qty: {item.quantity}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px dashed var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontWeight: 900, fontSize: '1rem' }}>AGGRAGATED TOTAL</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)' }}>${selectedOrder.total.toLocaleString()}</div>
                            </div>
                        </div>

                        <div>
                             <h4 style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.3, letterSpacing: '2px', marginBottom: '1.5rem' }}>CLIENT INTELLIGENCE</h4>
                             <div className="glass-panel" style={{ padding: '1.5rem' }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4 }}>ENTITY NAME</div>
                                    <div style={{ fontWeight: 700 }}>{selectedOrder.customerName}</div>
                                </div>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4 }}>COMMUNICATION NODE</div>
                                    <div style={{ fontWeight: 700 }}>{selectedOrder.customerId}@elite-dreams.global</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.65rem', fontWeight: 900, opacity: 0.4 }}>DEPLOYMENT SITE</div>
                                    <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Sector 7G, Quantum Cluster A4, Digital Sovereign Zone</div>
                                </div>
                             </div>
                             
                             <div style={{ marginTop: '2.5rem' }}>
                                <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>GENERATE INVOICE</button>
                                <button className="btn btn-outline" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>EXPORT SHIPMENT DATA</button>
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}
