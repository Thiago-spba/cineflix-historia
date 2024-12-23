import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>CINEFLIX HISTORIA</h1>
      <div style={styles.navButtons}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button
            style={styles.navButton}
            onMouseEnter={(e) => handleHoverEnter(e)}
            onMouseLeave={(e) => handleHoverLeave(e)}
          >
            Home
          </button>
        </Link>
        <Link to="/objetivo" style={{ textDecoration: 'none' }}>
          <button
            style={styles.navButton}
            onMouseEnter={(e) => handleHoverEnter(e)}
            onMouseLeave={(e) => handleHoverLeave(e)}
          >
            Objetivo
          </button>
        </Link>
        <Link to="/aprendizagem" style={{ textDecoration: 'none' }}>
          <button
            style={styles.navButton}
            onMouseEnter={(e) => handleHoverEnter(e)}
            onMouseLeave={(e) => handleHoverLeave(e)}
          >
            Aprendizagem
          </button>
        </Link>
        <Link to="/contato" style={{ textDecoration: 'none' }}>
          <button
            style={styles.navButton}
            onMouseEnter={(e) => handleHoverEnter(e)}
            onMouseLeave={(e) => handleHoverLeave(e)}
          >
            Contato
          </button>
        </Link>
      </div>

      {/* Botão flutuante H+ */}
      <button
        style={styles.floatingButton}
        onMouseEnter={(e) => handleHoverEnterFloating(e)}
        onMouseLeave={(e) => handleHoverLeaveFloating(e)}
        onClick={() => window.location.href = '/admin'}
      >
        H+
      </button>
    </header>
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
};

export default Header;
