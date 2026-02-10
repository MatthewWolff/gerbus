import React, { useMemo, useEffect } from 'react';

// Add your GIF URLs here
const CELEBRATION_GIFS = [
  'https://media1.tenor.com/m/Y2FxdK3vctgAAAAd/lov-you.gif',
  'https://media1.tenor.com/m/HqqEEFNbLNEAAAAd/chile-yoda.gif',
  'https://media1.tenor.com/m/OC-AjwOOBHIAAAAd/star-wars.gif',
];

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #ffeef8 0%, #ffe0f0 100%)',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  card: {
    width: 'min(720px, 92vw)',
    padding: '26px 22px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '22px',
    textAlign: 'center' as const,
    boxShadow: '0 18px 60px rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: '#ff1493',
    marginBottom: '2rem',
    fontFamily: "'Pacifico', cursive",
  },
  gif: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
  },
};

const Yes: React.FC = () => {
  useEffect(() => {
    document.title = 'Yay! 🎉💕';
  }, []);

  const randomGif = useMemo(() => {
    return CELEBRATION_GIFS[Math.floor(Math.random() * CELEBRATION_GIFS.length)];
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Yay! 🎉💕</h1>
        <img src={randomGif} alt="Celebration" style={styles.gif} />
      </div>
    </div>
  );
};

export default Yes;
