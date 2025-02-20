// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GitHub } from '@mui/icons-material';

const Home = () => {
  return (
    <section id="home" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1 id='welcomeToStocker'>
        Bienvenido a <span style={{ color: '#4876ee' }}>Stocker</span>
      </h1>
      <p style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        La forma más sencilla de gestionar tu negocio de forma eficiente, explore nuestro dashboard de vanguardia, que ofrece soluciones de alta calidad adaptadas a sus necesidades. Mejore su experiencia con funciones y servicios de primer nivel.
      </p>

      {/* Input para el correo */}
      <div style={{ marginTop: '20px' }}>
        <input 
          type="email" 
          placeholder="Ingrese su correo" 
          style={{
            padding: '10px',
            width: '250px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: 'white'
          }}
        />
        <button style={{ 
          marginLeft: '10px',
          padding: '10px 15px',
          backgroundColor: '#4876ee',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Suscribirse
        </button>
        <p style={{ fontSize: '12px', marginTop: '10px', color: '#666' }}>
          Al hacer clic en el botón, aceptas nuestros <strong>Términos y Condiciones</strong>.
        </p>
      </div>

      {/* Icono de GitHub */}
      <div style={{ marginTop: '20px' }}>
        <a href="https://github.com/No-Country-simulation/equipo-c24-33-t-webapp" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none' }}>
          <GitHub fontSize="large" />
        </a>
      </div>
    </section>
  );
};

export default Home;
