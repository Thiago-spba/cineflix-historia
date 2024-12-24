import React, { useEffect, useState } from 'react';
import VideoRow from './VideoRow'; 

function Home() {
  const [videos, setVideos] = useState([]); 

  // Função para carregar e embaralhar os vídeos do JSON Server
  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3001/videos'); 
      const data = await response.json();
      setVideos(shuffleVideos(data)); 
    } catch (error) {
      console.error('Erro ao carregar os vídeos:', error);
    }
  };

  // Função para embaralhar os vídeos
  const shuffleVideos = (videos) => {
    const shuffled = [...videos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // useEffect para carregar os vídeos quando a página é montada
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div style={{ paddingTop: '70px', backgroundColor: '#111', minHeight: '100vh' }}>
      <VideoRow title="Vídeos Disponíveis" videos={videos} />
    </div>
  );
}

export default Home;
