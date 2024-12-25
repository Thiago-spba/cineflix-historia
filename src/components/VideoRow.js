import React from 'react';
import VideoItem from './VideoItem';

function VideoRow({ title, videos }) {
  if (!videos || videos.length === 0) {
    // Verificação adicional para evitar erros
    return <div style={styles.emptyMessage}>Nenhum vídeo disponível no momento.</div>;
  }

  return (
    <div style={styles.row}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.videoContainer}>
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            url={video.url} // Passa o URL do vídeo para o VideoItem
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  row: {
    marginBottom: '30px',
    padding: '0 20px',
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  videoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  emptyMessage: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '50px',
  },
};

export default VideoRow;
