import React from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #ffeef8 0%, #ffe0f0 100%)',
    padding: '20px',
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
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Why would you go to the "No" page?</h1>
    </div>
  );
};

export default No;
