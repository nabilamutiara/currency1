import React from "react";
import "./homepage.css";
import digitalImage from './financial2.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/convert');
  };

  const handleNavigate2 = () => {
    navigate('/location');
  };

  return (
    <div className="homepage">
      <div className="logo">
        <div className="tulisanlogo">
            currenz
        </div>
      </div>
      <div className="tulisanbanyak">
        <div className="tulisanselaintombol">
            <div className="realtime">
                Real-Time Currency Converter
            </div>
            <div className="simplify">
                Simplify Your Money Exchange Instantly!
            </div>
            <div className="choose">
                choose one below
            </div>
        </div>
        <div className="tulisantombol">
            <div className="tombolhomepage">
              <button className="tombol1" onClick={handleNavigate}>
                convert your currency
              </button>
              <button className="tombol2" onClick={handleNavigate2}>
                  find exchange location
              </button>
            </div>
        </div>
        <div className="gambar">
          <img src={digitalImage} alt="digital" />
        </div>
        <div className="bysiapa">
          <div className="bynabila">
            by Nabila Mutiara S.
          </div>
          <div className="check">
          <a 
            href="https://www.linkedin.com/in/nabila-mutiara-susetio-7681081b4/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }} // Opsional untuk gaya
          >
            check my linkedin
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
