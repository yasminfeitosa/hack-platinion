import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TopNavBar.css';

const TopNavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="top-nav">
      <div className="top-nav-row">
        <Link to="/" className="home-link">
          Início
        </Link>
        <button onClick={handleBack} className="back-button">
          Voltar ⬅️
        </button>
      </div>

      <div className="location">
        <span>Seu local: Av. Paulista, 1000, São Paulo </span>
        <Link to="/address" className="change-location">
          (Mudar)
        </Link>
      </div>
    </div>
  );
};

export default TopNavBar;
