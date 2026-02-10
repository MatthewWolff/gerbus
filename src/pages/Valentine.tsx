import React, { useRef, useCallback } from 'react';

const DETECTION_RADIUS = 140;
const MOVE_DISTANCE = 200;

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
  ewok: {
    width: 'min(260px, 80vw)',
    margin: '0 auto 20px',
    display: 'block',
    filter: 'drop-shadow(0 10px 14px rgba(0,0,0,0.12))',
  },
  title: {
    fontSize: '3rem',
    color: '#ff1493',
    marginBottom: '2rem',
    textAlign: 'center' as const,
  },
  buttonZone: {
    position: 'relative' as const,
    width: '520px',
    height: '200px',
    margin: '0 auto',
    overflow: 'visible',
  },
  yesButton: {
    position: 'absolute' as const,
    top: '50%',
    left: '18%',
    transform: 'translateY(-50%)',
    padding: '1rem 2rem',
    fontSize: '1.5rem',
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
    transition: 'transform 0.12s ease, background 0.12s ease',
  },
  noButton: {
    position: 'absolute' as const,
    top: '50%',
    left: '62%',
    transform: 'translateY(-50%)',
    padding: '1rem 2rem',
    fontSize: '1.5rem',
    backgroundColor: '#e5e7eb',
    color: '#111827',
    border: 'none',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
  },
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const Valentine: React.FC = () => {
  const zoneRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYes = useCallback(() => {
    alert('Yay! 💕 I knew you would say yes! 🎉');
  }, []);

  const moveNo = useCallback((px: number, py: number) => {
    if (!zoneRef.current || !noButtonRef.current) return;

    const zone = zoneRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    let dx = (button.left + button.width / 2) - px;
    let dy = (button.top + button.height / 2) - py;
    const mag = Math.hypot(dx, dy) || 1;
    dx /= mag;
    dy /= mag;

    let newLeft = (button.left - zone.left) + dx * MOVE_DISTANCE;
    let newTop = (button.top - zone.top) + dy * MOVE_DISTANCE;

    noButtonRef.current.style.left = `${newLeft}px`;
    noButtonRef.current.style.top = `${newTop}px`;
    noButtonRef.current.style.transform = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!noButtonRef.current) return;

    const button = noButtonRef.current.getBoundingClientRect();
    const distance = Math.hypot(
      (button.left + button.width / 2) - e.clientX,
      (button.top + button.height / 2) - e.clientY
    );

    if (distance < DETECTION_RADIUS) {
      moveNo(e.clientX, e.clientY);
    }
  }, [moveNo]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src="/gerbus/valentine/ewok.png" alt="Ewok" style={styles.ewok} />
        <h1 style={styles.title}>Will you be my Valentine?</h1>
        <div ref={zoneRef} onMouseMove={handleMouseMove} style={styles.buttonZone}>
          <button onClick={handleYes} style={styles.yesButton}>
            Yes! 💕
          </button>
          <button ref={noButtonRef} style={styles.noButton}>
            No 😢
          </button>
        </div>
      </div>
    </div>
  );
};

export default Valentine;
