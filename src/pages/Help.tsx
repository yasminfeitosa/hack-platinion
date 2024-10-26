import React from 'react';
import './Help.css';

interface HelpProps {
  isDisaster: boolean;
}

const Help: React.FC<HelpProps> = ({ isDisaster }) => {
  const handleEmergencyClick = () => {
    alert("Em um aplicativo real, isso abriria o discador do telefone para ligar para o 193 (Bombeiros).");
  };

  return (
    <div className="help">
      <h2>Ajuda</h2>
      {isDisaster ? (
        <div className="emergency-alert">
          <p>Detectamos uma emergência na sua região neste momento!</p>
          <p>Em caso de alagamento, entre em contato com os bombeiros.</p>
          <button onClick={handleEmergencyClick} className="emergency-button">
            Clique aqui para pedir ajuda
          </button>
        </div>
      ) : (
        <p>Sem emergências no momento. Estamos aqui para ajudar!</p>
      )}
    </div>
  );
};

export default Help;
