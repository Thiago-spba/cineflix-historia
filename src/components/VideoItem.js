import React from 'react';

function VideoItem({ title, url }) {
  // Extração do ID do vídeo do URL do YouTube (compatível com vários formatos)
  const videoId = url.match(/(?:youtube\.com\/.*(?:v=|embed\/)|youtu\.be\/)([^&?]+)/)?.[1];
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
        <button style={styles.icon} title="Curtir">👍</button>
        <button style={styles.icon} title="Favoritar">⭐</button>
        <button
          style={styles.icon}
          title="Copiar Link"
          onClick={() => navigator.clipboard.writeText(url)}
        >
          🔗
        </button>
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
    border: '2px solid #444',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  video: {
    width: '100%',
    height: '200px', // Proporção ajustada para manter boa visualização
    borderRadius: '10px',
    border: 'none',
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
    color: '#f00',
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
