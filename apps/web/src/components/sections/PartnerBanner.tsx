'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  "GLOBAL QUANTUM SYSTEMS", "VALKYRIE DEFENSE", "AETHER CLOUD", 
  "NEBULA ARCHITECTURE", "ORION SECURITY", "TITAN INFRASTRUCTURE",
  "AURORA DATA", "SPECTRE ANALYTICS", "CORE DYNAMICS"
];

export default function PartnerBanner() {
  return (
    <div style={{ 
        width: '100%', 
        overflow: 'hidden', 
        padding: '4rem 0', 
        borderTop: '1px solid var(--border)', 
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'rgba(255,255,255,0.01)',
        position: 'relative'
    }}>
      <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to right, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)',
          zIndex: 2
      }} />

      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
        }}
        style={{ 
            display: 'flex', 
            gap: '6rem', 
            whiteSpace: 'nowrap',
            alignItems: 'center'
        }}
      >
        {[...PARTNERS, ...PARTNERS].map((partner, i) => (
          <div 
            key={i} 
            style={{ 
                fontSize: '0.75rem', 
                fontWeight: 900, 
                color: 'var(--foreground)', 
                opacity: 0.25, 
                letterSpacing: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}
          >
            <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }} />
            {partner}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
