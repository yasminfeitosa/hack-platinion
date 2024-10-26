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
      <button onClick={handleBack}> ⬅️ Voltar </button>
      <Link to="/" className="back">
        Início
      </Link>
    </div>
  );
};

export default TopNavBar;
