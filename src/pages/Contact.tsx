import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá! Como posso ajudar você hoje?' },
  ]);
  const [input, setInput] = useState('');

  const predefinedMessages = [
    'O que devo fazer agora?',
    'Como posso ajudar a prevenir futuros desastres?',
    'Está chovendo muito! Onde é seguro deixar meu carro hoje?',
    'Pretendo viajar nos próximos dias, há alertas para minha rota?',
  ];

  const handleUserMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', text: message },
      { sender: 'bot', text: 'Ainda estamos processando a sua pergunta. Obrigado pelo interesse!' },
    ]);
    setInput('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      handleUserMessage(input);
    }
  };

  return (
    <div className="contact-chat">
      <h2>Precisa de ajuda? Fale com a gente! </h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="predefined-buttons">
        {predefinedMessages.map((msg, index) => (
          <button key={index} onClick={() => handleUserMessage(msg)} className="predefined-button">
            {msg}
          </button>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage} className="send-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
