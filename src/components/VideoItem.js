import React from 'react';

function VideoItem({ title, url }) {
  // Extração do ID do vídeo do URL do YouTube (compatível com vários formatos)
  const videoId = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/)?.[1];
  console.log('URL recebida:', url, 'ID extraído:', videoId);

  return (
    <div style={styles.card}>
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          style={styles.video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div style={styles.errorMessage}>
          <p>URL inválida ou vídeo indisponível</p>
        </div>
      )}
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.icons}>
        <button style={styles.icon}>👍</button>
        <button style={styles.icon}>⭐</button>
        <button style={styles.icon}>🔗</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#222',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '300px',
    margin: '10px',
    border: '2px solid red',
  },
  video: {
    width: '100%',
    height: '315px', // Proporção 16:9
    borderRadius: '10px',
  },
  title: {
    fontSize: '1.2rem',
    color: '#fff',
    margin: '10px 0',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px',
  },
  icon: {
    fontSize: '1.2rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'red',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  iconHover: {
    transform: 'scale(1.2)',
  },
  errorMessage: {
    color: '#f00',
    fontSize: '1rem',
    marginTop: '10px',
  },
};

export default VideoItem;
