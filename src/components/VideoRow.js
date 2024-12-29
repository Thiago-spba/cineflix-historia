import React from 'react';

// Componente responsável por renderizar uma lista de vídeos
function VideoRow({ title, videos }) {
  // Função para extrair o ID do vídeo do YouTube
  const getYouTubeVideoId = (url) => {
    try {
      return new URL(url).searchParams.get('v') || '';
    } catch {
      return ''; // Retorna string vazia se a URL for inválida
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.videoGrid}>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id} style={styles.videoCard}>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(video.url)}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p style={styles.videoTitle}>{video.title}</p>
            </div>
          ))
        ) : (
          <p style={styles.noVideos}>Nenhum vídeo disponível.</p>
        )}
      </div>
    </div>
  );
}

// Estilos centralizados
const styles = {
  container: {
    padding: '20px',
    color: 'white',
  },
  title: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '20px',
  },
  videoGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  videoCard: {
    backgroundColor: '#222',
    border: '1px solid red',
    borderRadius: '10px',
    padding: '10px',
    width: '300px',
    textAlign: 'center',
  },
  videoTitle: {
    marginTop: '10px',
    fontWeight: 'bold',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  noVideos: {
    textAlign: 'center',
    color: 'gray',
  },
};

export default VideoRow;
