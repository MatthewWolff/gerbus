import React, { useEffect } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #ffeef8 0%, #ffe0f0 100%)',
    padding: '20px',
  },
  image: {
    width: 'min(300px, 80vw)',
    borderRadius: '12px',
    marginBottom: '2rem',
    boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
  },
  text: {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: 'bold' as const,
    color: '#ff1493',
    textAlign: 'center' as const,
    fontFamily: "'Pacifico', cursive",
  },
};

const No: React.FC = () => {
  useEffect(() => {
    document.title = 'No????';
  }, []);

  return (
    <div style={styles.container}>
      <img src="/gerbus/images/justin-burned-small.jpg" alt="Burned" style={styles.image} />
      <h1 style={styles.text}>Why would you go to the "No" page?</h1>
    </div>
  );
};

export default No;
