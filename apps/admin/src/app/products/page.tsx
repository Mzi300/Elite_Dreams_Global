'use client';

import React, { useState } from 'react';
import { useAdminStore, Product } from '@/lib/store';
import { Search, Plus, Edit2, Trash2, X, Package, Shield, Cpu, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InventoryPage() {
  const { products, addProduct, updateProduct, deleteProduct } = useAdminStore();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    category: 'DEVICES',
    price: 0,
    stock: 0,
    status: 'In Stock',
    description: '',
    specs: {}
  });

  const handleOpenEditor = (product: Product | null = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
        status: product.status,
        description: product.description,
        specs: product.specs
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        category: 'DEVICES',
        price: 0,
        stock: 0,
        status: 'In Stock',
        description: '',
        specs: {}
      });
    }
    setIsEditorOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
    } else {
      addProduct(formData);
    }
    setIsEditorOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Inventory Command</h1>
          <p style={{ color: 'var(--secondary)' }}>Manage your global hardware and security systems repository.</p>
        </div>
        <button className="btn btn-primary" onClick={() => handleOpenEditor()} style={{ padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> Add Tactical Asset
        </button>
      </div>

      <div className="card" style={{ padding: '0' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }} size={18} />
            <input 
                type="text" 
                placeholder="Search tactical assets..." 
                style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.8rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)' }}
            />
          </div>
          <select style={{ padding: '0.6rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)' }}>
            <option>All Categories</option>
            <option>Devices</option>
            <option>Security Systems</option>
            <option>Accessories</option>
          </select>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'rgba(0,0,0,0.02)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)' }}>
              <th style={{ padding: '1rem 1.5rem' }}>Asset Name</th>
              <th style={{ padding: '1rem 1.5rem' }}>Category</th>
              <th style={{ padding: '1rem 1.5rem' }}>Unit Price</th>
              <th style={{ padding: '1rem 1.5rem' }}>Stock Level</th>
              <th style={{ padding: '1rem 1.5rem' }}>Status</th>
              <th style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '0.5rem', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                        {item.category === 'DEVICES' ? <Cpu size={14} /> : <Shield size={14} />}
                    </div>
                    <div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--secondary)' }}>ID: {item.id}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                    <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', background: 'var(--muted)', borderRadius: '0.4rem', fontWeight: 700 }}>{item.category}</span>
                </td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 600 }}>${item.price.toLocaleString()}</td>
                <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ flex: 1, height: '4px', background: 'var(--border)', borderRadius: '2px', width: '60px' }}>
                            <div style={{ width: `${Math.min(item.stock, 100)}%`, height: '100%', background: item.stock > 20 ? 'var(--primary)' : '#f59e0b', borderRadius: '2px' }} />
                        </div>
                        {item.stock} Units
                    </div>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span style={{ 
                    fontSize: '0.65rem', padding: '0.25rem 0.6rem', borderRadius: '1rem', fontWeight: 900,
                    backgroundColor: item.status === 'In Stock' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)', 
                    color: item.status === 'In Stock' ? '#10b981' : '#f43f5e',
                  }}>
                    {item.status.toUpperCase()}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <button onClick={() => handleOpenEditor(item)} style={{ padding: '0.5rem', color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer' }}><Edit2 size={16} /></button>
                    <button onClick={() => deleteProduct(item.id)} style={{ padding: '0.5rem', color: '#f43f5e', background: 'none', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Product Editor Modal */}
      <AnimatePresence>
        {isEditorOpen && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsEditorOpen(false)} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }} />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="card" 
                    style={{ position: 'relative', width: '100%', maxWidth: '700px', padding: '3rem', maxHeight: '90vh', overflowY: 'auto' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem' }}>{editingProduct ? 'Edit Asset Profile' : 'New Asset Deployment'}</h2>
                        <button onClick={() => setIsEditorOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}><X size={24} /></button>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>ASSET NAME</label>
                            <input 
                                required 
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>CATEGORY</label>
                                <select 
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value as any })}
                                    style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                                >
                                    <option value="DEVICES">DEVICES</option>
                                    <option value="SECURITY_SYSTEMS">SECURITY SYSTEMS</option>
                                    <option value="ACCESSORIES">ACCESSORIES</option>
                                    <option value="SOVEREIGN_NODE">SOVEREIGN NODE</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>UNIT PRICE ($)</label>
                                <input 
                                    type="number"
                                    required 
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                                    style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>INITIAL STOCK</label>
                                <input 
                                    type="number"
                                    required 
                                    value={formData.stock}
                                    onChange={e => setFormData({ ...formData, stock: Number(e.target.value) })}
                                    style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>LIFECYCLE STATUS</label>
                                <select 
                                    value={formData.status}
                                    onChange={e => setFormData({ ...formData, status: e.target.value as any })}
                                    style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white' }}
                                >
                                    <option value="In Stock">IN STOCK</option>
                                    <option value="Low Stock">LOW STOCK</option>
                                    <option value="Out of Stock">OUT OF STOCK</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontWeight: 800, fontSize: '0.75rem', opacity: 0.5 }}>TECHNICAL DESCRIPTION</label>
                            <textarea 
                                required 
                                rows={3}
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                                style={{ padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'white', resize: 'vertical' }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem', marginTop: '1rem', fontWeight: 900 }}>
                            {editingProduct ? 'COMMIT TECHNICAL UPDATES' : 'DEPLOY ASSET TO REPOSITORY'}
                        </button>
                    </form>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}
