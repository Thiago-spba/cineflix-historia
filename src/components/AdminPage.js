import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function AdminPage() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const { width, height } = useWindowSize();

  // Função para embaralhar os vídeos
  const shuffleVideos = (videos) => {
    const shuffled = [...videos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Função para carregar vídeos
  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/videos');
      const shuffledVideos = shuffleVideos(response.data);
      console.log('Vídeos carregados:', shuffledVideos); // Verificar os dados carregados
      setVideos(shuffledVideos);
    } catch (error) {
      console.error('Erro ao carregar vídeos:', error);
    }
  };

  // Adicionar vídeo
  const addVideo = async () => {
    if (title.trim() === '' || url.trim() === '') {
      setMessage('Preencha todos os campos!');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    try {
      const newVideo = { title, url };
      const response = await axios.post('http://localhost:3001/videos', newVideo);
      const updatedVideos = [...videos, { ...newVideo, id: response.data.id }];
      setVideos(shuffleVideos(updatedVideos));
      setTitle('');
      setUrl('');

      setShowConfetti(true);
      setMessage('Vídeo adicionado com sucesso!');
      setTimeout(() => {
        setShowConfetti(false);
      }, 10000);

      setTimeout(() => {
        setMessage('');
      }, 10000);
    } catch (error) {
      console.error('Erro ao adicionar vídeo:', error);
      setMessage('Erro ao adicionar vídeo!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Excluir vídeo com confirmação
  const deleteVideo = async (id) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir este vídeo?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3001/videos/${id}`);
      const updatedVideos = videos.filter((video) => video.id !== id);
      setVideos(shuffleVideos(updatedVideos));
      setMessage('Vídeo excluído com sucesso!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Erro ao excluir vídeo:', error);
      setMessage('Erro ao excluir vídeo!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleLogin = () => {
    if (password === 'admin123') {
      setAuthenticated(true);
    } else {
      setMessage('Senha incorreta!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (!authenticated) {
    return (
      <div
        style={{
          paddingTop: '70px',
          backgroundColor: '#111',
          minHeight: '100vh',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'red', marginBottom: '20px' }}>Página do Administrador</h1>
        <p>Insira a senha para acessar:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        />
        <br />
        <button
          onClick={handleLogin}
          style={{
            padding: '10px 20px',
            backgroundColor: 'red',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '70px', backgroundColor: '#111', minHeight: '100vh', color: '#fff' }}>
      {showConfetti && <Confetti width={width} height={height} />}

      <h1 style={{ textAlign: 'center', color: 'red', marginBottom: '20px' }}>Página do Administrador</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Título do Vídeo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '40%',
          }}
        />
        <input
          type="text"
          placeholder="URL do Vídeo"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '40%',
          }}
        />
        <button
          onClick={addVideo}
          style={{
            padding: '10px 20px',
            backgroundColor: 'red',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Adicionar
        </button>
      </div>

      {message && (
        <div
          style={{
            textAlign: 'center',
            color: 'lime',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          {message}
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              backgroundColor: '#222',
              border: '1px solid red',
              borderRadius: '5px',
              padding: '10px',
              width: '300px',
              textAlign: 'center',
              color: '#fff',
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
            <button
              onClick={() => deleteVideo(video.id)}
              style={{
                padding: '10px',
                backgroundColor: 'red',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
