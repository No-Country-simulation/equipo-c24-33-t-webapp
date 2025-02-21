// eslint-disable-next-line no-unused-vars
import React from 'react';
import dashboardImage from '../assets/images/dashboard_image.png'; 

const Features = () => {
  return (
    <section id="features" style={{ padding: '50px 20px', margin: '0', textAlign: 'center' }}>      
      {/* Image with caption */}
      <div style={{ marginTop: '10px' }}>
        <img 
          src={dashboardImage} 
          alt="Vista previa del dashboard" 
          style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
        />
        <p style={{ fontSize: '16px', marginTop: '10px', color: '#666' }}>
        Nuestra aplicación ofrece una interfaz fácil de usar, actualizaciones de stock en tiempo real y herramientas de automatización para simplificar la gestión empresarial.
        </p>
      </div>
    </section>
  );
};

export default Features;
