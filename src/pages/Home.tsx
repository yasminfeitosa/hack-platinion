import React from 'react';
import './Home.css';
import map from '../assets/maps.jpeg';

interface HomeProps {
  isDisaster: boolean;
}

const Home: React.FC<HomeProps> = ({ isDisaster }) => {
  return (
    <div className="home-container">
      {isDisaster ? (
        <div className="disaster-alert">
          <h2>⚠️ Alerta de Alagamento! </h2>
          <p>No caminho de sua residência: Morumbi, Zona Oeste</p>
          <p>Previsto para 26/10/2024 às 18h04 </p>
        </div>
      ) : (
        <div className="safe-message">
          <h2>Está tudo bem!</h2>
        </div>
      )}

      {isDisaster && (
        <div className="what-to-do">
          <h2> Siga nossas orientações: </h2>
          <p> Imaginamos que estará <b> voltando para casa neste momento </b>. 
            Pedimos que, quando sair, recalcule e siga a rota alternativa abaixo e que estacione em um local seguro com nosso parceiro <b> Shopping Butantã. </b>
          </p>
          <p> Seguindo nossa indicação, você garante sua <b>segurança</b> e <b> 10% de cashback </b> na próxima mensalidade com a Refúgio!</p>
          <p> Use seu CPF e o cupom: <b> REFUGIOTEAJUDA </b> no parceiro. </p>
          <p id="date-to"> Até: 26/10/2024 - Hora: 17:00</p>
          <p>  </p>
        </div>
      )}

      <div className="map-section">
        <h3>Veja por onde você deve se mover de forma segura:</h3>
        <div className="map-placeholder">
          <img src={map} alt="Mapa da região" />
        </div>
      </div>

      <div className="assistance-info">
        <h3>Relembre! Com a gente, você:</h3>
        <div className="assistance-item">
          <span className="icon">✅</span>
          <p>Foi ajudado <b>3</b> vezes neste ano e se manteve a salvo.</p>
        </div>
        <div className="assistance-item">
          <span className="icon">💸</span>
          <p>Já ganhou <b>R$150,00</b> em combustíveis renováveis em nossos parceiros.</p>
        </div>
        <div className="assistance-item">
          <span className="icon">🌍</span>
          <p>Contribuiu para não aumentar sua pegada de carbono em <b>5,6 toneladas</b>.</p>
        </div>
     </div>
    </div>
  );
};

export default Home;

