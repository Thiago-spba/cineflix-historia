import React from 'react';
import VideoItem from './VideoItem';

function VideoRow({ videos }) {
  console.log('Vídeos recebidos em VideoRow:', videos); // Log para depuração
  return (
    <div style={styles.row}>
      <div style={styles.videoContainer}>
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            title={video.title}
            url={video.url} // Passar o URL do vídeo para o VideoItem
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
  videoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
};

export default VideoRow;
