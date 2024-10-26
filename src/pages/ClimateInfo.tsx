import React from 'react';
import './ClimateInfo.css';

const ClimateInfo: React.FC = () => {
  const esgActions = [
    {
      id: 1,
      title: 'Medidas de Redução de Carbono',
      description: 'A Operadora Refúgio investe em projetos de energia limpa e incentiva práticas de trabalho remoto para reduzir emissões de carbono.',
    },
    {
      id: 2,
      title: 'Apoio a Comunidades de Risco',
      description: 'Estamos trabalhando para proteger comunidades vulneráveis com ações de resiliência e treinamentos para lidar com desastres naturais.',
    },
    {
      id: 3,
      title: 'Mitigação de Desastres Naturais',
      description: 'Iniciativas para reduzir riscos em áreas com alta frequência de desastres naturais, como sistemas de alerta precoce e mapeamento de risco.',
    },
  ];

  return (
    <div className="climate-change">
      <h2>Mudanças Climáticas e Sustentabilidade</h2>
      <p className="intro">
        A Operadora Refúgio está comprometida com a sustentabilidade e a mitigação dos riscos associados às mudanças climáticas. Conheça as iniciativas abaixo:
      </p>

      <div className="esg-actions">
        {esgActions.map((action) => (
          <div key={action.id} className="esg-action">
            <h3>{action.title}</h3>
            <p>{action.description}</p>
          </div>
        ))}
      </div>

      <div className="disaster-info">
        <h3>Como você pode ajudar?</h3>
        <p>Evite práticas que contribuem para mudanças climáticas, como o uso excessivo de plásticos e o desperdício de energia. Juntos podemos fazer a diferença!</p>
      </div>
    </div>
  );
};

export default ClimateInfo;
