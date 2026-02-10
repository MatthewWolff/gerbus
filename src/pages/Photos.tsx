import React, { useState, useEffect } from 'react';

const images = [
  '/gerbus/images/barbie-and-ken.jpg',
  '/gerbus/images/justin-blanket.jpg',
  '/gerbus/images/justin-blurry.jpg',
  '/gerbus/images/justin-burned.jpg',
  '/gerbus/images/justin-drug-store.jpg',
  '/gerbus/images/justin-full.jpg',
  '/gerbus/images/justin-graduation.jpg',
  '/gerbus/images/justin-maddie-lawschool.jpg',
  '/gerbus/images/justin-maddie-sleeping.jpg',
  '/gerbus/images/justin-pantsless.jpg',
  '/gerbus/images/justin-parking.jpg',
  '/gerbus/images/justin-sexy.jpg',
  '/gerbus/images/justin-squeegee.jpg',
  '/gerbus/images/justin-vapor-trails.jpg',
  '/gerbus/images/justin-with-sleeping-kittens.jpg',
  '/gerbus/images/lightsaber-battle.jpg',
  '/gerbus/images/maddie-coffeemaker.jpg',
  '/gerbus/images/maddie-stone-stacked.jpg',
  '/gerbus/images/maddie-timeout.jpg',
  '/gerbus/images/painting-glasses.jpg',
  '/gerbus/images/painting.jpg',
  '/gerbus/images/star-cruiser-backseat.jpg',
];

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ffeef8 0%, #ffe0f0 100%)',
    padding: '40px 20px',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    color: '#ff1493',
    textAlign: 'center' as const,
    marginBottom: '2rem',
    fontFamily: "'Pacifico', cursive",
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  gridItem: {
    position: 'relative' as const,
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover' as const,
    display: 'block',
  },
  modal: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  modalImage: {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain' as const,
    borderRadius: '8px',
  },
};

const Photos: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Photos';
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Photos</h1>
      <div style={styles.grid}>
        {images.map((img, index) => (
          <div
            key={index}
            style={styles.gridItem}
            onClick={() => setSelectedImage(img)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img src={img} alt={`Photo ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div style={styles.modal} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full size" style={styles.modalImage} />
        </div>
      )}
    </div>
  );
};

export default Photos;
