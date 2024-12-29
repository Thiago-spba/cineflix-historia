import React, { useEffect, useState } from 'react';
import VideoRow from './VideoRow'; 

function Home() {
  const [videos, setVideos] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); // Estado para exibir carregamento
  const [error, setError] = useState(null); // Estado para erros

  // Função para carregar e embaralhar os vídeos do JSON Server
  const fetchVideos = async () => {
    try {
      const response = await fetch('https://cineflix-json-server.onrender.com/videos');
      if (!response.ok) {
        throw new Error(`Erro ao buscar os vídeos: ${response.status}`);
      }
      const data = await response.json();
      setVideos(shuffleVideos(data)); // Embaralha os vídeos antes de salvar
    } catch (error) {
      console.error('Erro ao carregar os vídeos:', error.message || error);
      setError('Não foi possível carregar os vídeos. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false); // Sempre termina o carregamento
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
    <div style={styles.container}>
      {isLoading && <p style={styles.loading}>Carregando vídeos...</p>}

      {error && <p style={styles.error}>{error}</p>}

      {!isLoading && !error && (
        <VideoRow title="Vídeos Disponíveis" videos={videos} />
      )}
    </div>
  );
}

const styles = {
  container: {
    paddingTop: '20px', // Aproxima a seção de vídeos do topo
    backgroundColor: '#111',
    minHeight: '100vh',
    color: '#fff',
    textAlign: 'center',
  },
  loading: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  error: {
    color: '#ff4747',
    fontSize: '1.5rem',
  },
};

export default Home;
