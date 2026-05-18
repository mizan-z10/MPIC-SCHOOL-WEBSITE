import React, { useState, useRef, useEffect } from 'react';
import { Award, Search, ShieldCheck, FileX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CertificateSearch = () => {
  const [tab, setTab] = useState('roll');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [found, setFound] = useState(null); // null = no search yet, false = not found, object = found
  const confettiRef = useRef(null);

  useEffect(() => {
    setTimeout(() => launchCelebration(), 500);
  }, []);

  const launchCelebration = () => {
    const layer = confettiRef.current;
    if (!layer) return;
    layer.innerHTML = '';
    const colors = ['#f59e0b','#3b82f6','#ec4899','#10b981','#f97316','#8b5cf6','#c8a96e','#ef4444'];

    for (let i = 0; i < 70; i++) {
      const el = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
      el.style.cssText = `
        position:absolute;
        left:${Math.random() * 100}%;
        top:-15px;
        width:${size}px;height:${size}px;
        background:${color};
        border-radius:${Math.random() > 0.4 ? '50%' : '3px'};
        animation:confettiFall ${Math.random() * 2 + 1.8}s ${Math.random() * 1.5}s linear forwards;
      `;
      layer.appendChild(el);
    }

    for (let j = 0; j < 8; j++) {
      const star = document.createElement('div');
      star.innerHTML = '★';
      star.style.cssText = `
        position:absolute;
        left:${Math.random() * 80 + 10}%;
        top:${Math.random() * 40}%;
        font-size:${Math.random() * 24 + 16}px;
        color:${colors[Math.floor(Math.random() * 4)]};
        animation:starBurst ${Math.random() + 1}s ${Math.random() * 0.8}s ease forwards;
      `;
      layer.appendChild(star);
    }

    setTimeout(() => { layer.innerHTML = ''; }, 5000);
  };

  const searchCertificate = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setFound(null);
    try {
      const res = await fetch(`/api/certificate/search?type=${tab}&query=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.found) {
        setFound(data.student);
        setTimeout(() => launchCelebration(), 200);
      } else {
        setFound(false);
      }
    } catch {
      setFound(false);
    } finally {
      setLoading(false);
    }
  };

  const details = found
    ? [
        ['Student Name', found.name],
        ['Roll Number', found.roll],
        ['Class', found.cls],
        ['Result', found.result],
        ["Father's Name", found.father],
        ['Date of Birth', found.dob],
        ['Session', found.session],
        ['Issued On', found.issued],
        ['Certificate No.', found.certNo],
      ]
    : [];

  const tabs = [
    { key: 'roll', label: 'Roll Number', placeholder: 'e.g. 2024-1042', hint: 'Format: YYYY-XXXX' },
    { key: 'name', label: 'Student Name', placeholder: 'e.g. Ramesh Kumar Yadav', hint: 'Enter full name as registered' },
  ];

  const activeTab = tabs.find(t => t.key === tab);

  return (
    <>
      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(700px) rotate(800deg); opacity: 0; }
        }
        @keyframes starBurst {
          0%   { transform: scale(0) rotate(0deg); opacity: 1; }
          50%  { transform: scale(1.4) rotate(180deg); opacity: 1; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(74, 222, 128, 0); }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.4); }
        }
      `}</style>

      <div style={{ position: 'relative', minHeight: '100vh', padding: '2rem 1rem 3rem', overflow: 'hidden' }}>

        {/* Confetti Layer */}
        <div
          ref={confettiRef}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 20, overflow: 'hidden' }}
        />

        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 56, height: 56, background: '#0d2347', borderRadius: '50%',
            border: '2px solid #b8943f', marginBottom: 12,
          }}>
            <Award size={26} color="#c8a96e" />
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 500, margin: '0 0 6px' }}>Certificate Verification</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 14, margin: 0 }}>
            Mahadev Prasad Inter College, Chauri Chaura <br /> Verify your academic certificates issued by MPIC lab
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          style={{
            background: 'var(--color-background-primary)',
            border: '0.5px solid var(--color-border-tertiary)',
            borderRadius: 12,
            maxWidth: 520, margin: '0 auto', padding: '2rem 1.5rem',
          }}
        >
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border-tertiary)', marginBottom: '1.5rem' }}>
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => { setTab(t.key); setQuery(''); setFound(null); }}
                style={{
                  flex: 1, padding: '10px 8px', border: 'none', background: 'transparent',
                  borderBottom: tab === t.key ? '2px solid #378ADD' : '2px solid transparent',
                  color: tab === t.key ? '#378ADD' : 'var(--color-text-secondary)',
                  fontSize: 14, fontWeight: 500, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  transition: 'all 0.2s',
                }}
              >
                {t.key === 'roll' ? <Search size={15} /> : <Award size={15} />}
                {t.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <label style={{ fontSize: 13, color: 'var(--color-text-secondary)', display: 'block', marginBottom: 6 }}>
            Enter {activeTab.label}
          </label>
          <input
            type="text"
            
            value={query}
            onChange={e => { setQuery(e.target.value); setFound(null); }}
            onKeyDown={e => { if (e.key === 'Enter') searchCertificate(); }}
            placeholder={activeTab.placeholder}
            style={{
              width: '100%', padding: '12px 14px',
              border: '1px solid var(--color-border-secondary)',
              borderRadius: 8, fontSize: 15,
              background: 'var(--color-background-primary)',
              color: 'var(--color-text-primary)',
              outline: 'none', boxSizing: 'border-box',
            }}
          />
          <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 5 }}>
            {activeTab.hint}
          </div>

          {/* Search Button */}
          <button
            onClick={searchCertificate}
            disabled={loading}
            style={{
              width: '100%', padding: 13, background: '#1a3a6b', color: '#fff',
              border: 'none', borderRadius: 8, fontSize: 15, fontWeight: 500,
              cursor: loading ? 'not-allowed' : 'pointer', marginTop: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              opacity: loading ? 0.7 : 1, transition: 'all 0.2s',
            }}
          >
            {loading ? (
              <div style={{ display: 'flex', gap: 5 }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: 7, height: 7, borderRadius: '50%', background: '#fff',
                    animation: `dotPulse 0.8s ${i * 0.15}s ease-in-out infinite`,
                  }} />
                ))}
              </div>
            ) : (
              <><Search size={16} /> Search Certificate</>
            )}
          </button>

          {/* Results */}
          <AnimatePresence>

            {/* Not Found */}
            {found === false && (
              <motion.div
                key="notfound"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  marginTop: '1.5rem',
                  background: 'var(--color-background-danger)',
                  border: '1px solid var(--color-border-danger)',
                  borderRadius: 12, padding: '1.5rem', textAlign: 'center',
                }}
              >
                <FileX size={40} color="var(--color-text-danger)" style={{ marginBottom: 10 }} />
                <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--color-text-danger)', marginBottom: 6 }}>
                  No Certificate Found
                </div>
                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                  No record found for <b>"{query}"</b>.<br />Please check and try again.
                </div>
                <div style={{ marginTop: 10, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
                  If you think this is an error, contact the school office.
                </div>
              </motion.div>
            )}

            {/* Found */}
            {found && (
              <motion.div
                key="found"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  marginTop: '1.5rem', borderRadius: 12,
                  overflow: 'hidden', border: '1px solid #b8943f',
                  animation: 'glowPulse 2s ease-in-out infinite',
                }}
              >
                {/* Verified Header */}
                <div style={{
                  background: '#0d2347', padding: '1.25rem',
                  textAlign: 'center', borderBottom: '2px solid #b8943f',
                }}>
                  <div style={{ color: '#c8a96e', fontSize: 11, letterSpacing: 2, fontWeight: 500 }}>
                    MADHYA PRADESH INTER COLLEGE
                  </div>
                  <div style={{ color: '#e8d5a3', fontSize: 16, fontWeight: 500, marginTop: 4 }}>
                    Certificate Verified
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: '#052e16', color: '#4ade80',
                      fontSize: 12, fontWeight: 500,
                      padding: '5px 14px', borderRadius: 999,
                    }}>
                      <ShieldCheck size={14} /> Authentic Record
                    </span>
                  </div>
                </div>

                {/* Detail Rows */}
                <div style={{ background: 'var(--color-background-primary)', padding: '1rem 1.25rem' }}>
                  {details.map(([label, value]) => (
                    <div key={label} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '9px 0', borderBottom: '0.5px solid var(--color-border-tertiary)',
                      fontSize: 13, flexWrap: 'wrap', gap: 4,
                    }}>
                      <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>{label}</span>
                      <span style={{
                        color: label === 'Result' ? '#16a34a' : 'var(--color-text-primary)',
                        fontWeight: label === 'Result' ? 500 : 400,
                      }}>
                        {value}
                      </span>
                    </div>
                  ))}

                  {/* Bottom Banner */}
                  <div style={{
                    marginTop: 14, padding: 10,
                    background: 'var(--color-background-success)',
                    borderRadius: 8, display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <ShieldCheck size={18} color="var(--color-text-success)" />
                    <span style={{ fontSize: 12, color: 'var(--color-text-success)', fontWeight: 500 }}>
                      This certificate is genuine and verified from MPIC official records.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '1.5rem' }}
        >
          <p style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>
            <ShieldCheck size={13} style={{ verticalAlign: -2, marginRight: 4 }} />
            Verified by MPIC official records system
          </p>
        </motion.div>

      </div>
    </>
  );
};

export default CertificateSearch;