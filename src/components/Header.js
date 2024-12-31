import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>CINEFLIX HISTÓRIA</h1>
      <nav style={styles.navButtons}>
        <NavButton to="/" label="Home" />
        <NavButton to="/objetivo" label="Objetivo" />
        <NavButton to="/aprendizagem" label="Aprendizagem" />
        <NavButton to="/contato" label="Contato" />
      </nav>

      {/* Botão flutuante H+ */}
      <button
        style={styles.floatingButton}
        onMouseEnter={handleHoverEnterFloating}
        onMouseLeave={handleHoverLeaveFloating}
        onClick={() => (window.location.href = '/admin')}
      >
        H+
      </button>
    </header>
  );
}

// Componente reutilizável para botões de navegação
function NavButton({ to, label }) {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <button
        style={styles.navButton}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        {label}
      </button>
    </Link>
  );
}

// Efeitos de hover para os botões
function handleHoverEnter(e) {
  e.target.style.backgroundColor = 'red';
  e.target.style.color = 'black';
}

function handleHoverLeave(e) {
  e.target.style.backgroundColor = 'transparent';
  e.target.style.color = 'red';
}

// Efeitos de hover para o botão flutuante H+
function handleHoverEnterFloating(e) {
  e.target.style.backgroundColor = 'black';
  e.target.style.color = 'red';
}

function handleHoverLeaveFloating(e) {
  e.target.style.backgroundColor = 'red';
  e.target.style.color = 'black';
}

// Estilos com responsividade
const styles = {
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#000', // Fundo preto
    position: 'relative',
  },
  title: {
    color: 'red',
    fontSize: '3rem',
    marginBottom: '10px',
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap', // Permite que os botões quebrem para a próxima linha em telas menores
  },
  navButton: {
    padding: '10px 20px',
    border: '2px solid red',
    backgroundColor: 'transparent',
    color: 'red',
    borderRadius: '5px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  floatingButton: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'red',
    color: 'black',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: '2px solid red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  },

  // Responsividade
  '@media (max-width: 768px)': {
    title: {
      fontSize: '2rem', // Reduz o tamanho do título
    },
    navButton: {
      padding: '8px 16px',
      fontSize: '0.9rem',
    },
    floatingButton: {
      width: '40px',
      height: '40px',
      top: '10px',
      right: '10px',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '1.5rem',
    },
    navButton: {
      padding: '6px 12px',
      fontSize: '0.8rem',
    },
    floatingButton: {
      width: '35px',
      height: '35px',
      top: '5px',
      right: '5px',
    },
  },
};

export default Header;
