import React, { useState } from 'react';
import './PreventInfo.css';

const PreventInfo: React.FC = () => {
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const riscos = [
    { id: 1, descricao: 'Risco de alagamento' },
    { id: 2, descricao: 'Risco de queda' },
    { id: 3, descricao: 'Risco elétrico' },
  ];

  const faqs = [
    {
      id: 1,
      pergunta: 'O que fazer em caso de incêndio?',
      resposta: 'Acionar o alarme de incêndio e sair do local imediatamente.',
    },
    {
      id: 2,
      pergunta: 'O que fazer em caso de alagamentos?',
      resposta: 'Analisar no mapa para onde evacuar e evacuar imediatamente.',
    },
  ];

  return (
    <div className="prevent-info">
      <h2>Sua área possui os seguintes riscos:</h2>
      <div className="riscos">
        {riscos.map((risco) => (
          <div key={risco.id} className="risco">
            {risco.descricao}
          </div>
        ))}
      </div>

      <h3>Como agir? FAQ</h3>
      <div className="faqs">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq">
            <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
              <p>{faq.pergunta}</p>
              <button className="faq-toggle-button">
                {openFaqs[faq.id] ? '-' : '+'}
              </button>
            </div>
            {openFaqs[faq.id] && <p className="faq-answer">{faq.resposta}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreventInfo;
