import React from 'react';

// Componente responsável por renderizar uma lista de vídeos
function VideoRow({ title, videos }) {
  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <h2 style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>{title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div
              key={video.id}
              style={{
                backgroundColor: '#222',
                border: '1px solid red',
                borderRadius: '10px',
                padding: '10px',
                width: '300px',
                textAlign: 'center',
              }}
            >
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${new URL(video.url).searchParams.get('v')}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{video.title}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: 'gray' }}>Nenhum vídeo disponível.</p>
        )}
      </div>
    </div>
  );
}

export default VideoRow;
