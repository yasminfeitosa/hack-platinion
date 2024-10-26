import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '40px' }}>
      <div style={{ backgroundColor: '#b3ffce', borderColor: '#31c8742', color: 'white', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>Está tudo bem!</h2>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>Veja o que está acontecendo perto de você:</p>
        <div style={{ backgroundColor: '#ddd', height: '150px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src='../assets/maps.jpeg' />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>Com esse projeto, você foi ajudado 3 vezes anteriormente.</p>
      </div>
    </div>
  );
};

export default Home;
