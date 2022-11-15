import React from 'react'

import logo from '../assets/logo.png'
import logoText from "../assets/S7_Airlines.png";
import ROV from "../assets/ROV.png";
import SVO from "../assets/SVO.png";
import baggage from "../assets/baggage.png";

const AviaInfo = () => {
  return (
    <div className="aviainfo">
      <div className="aviainfo__container">
        <div className="aviainfo__card">
          <div className="aviainfo__status status-aviainfo">
            <div className="status-aviainfo__promo">Невозвратный</div>
            <div className="status-aviainfo__logo">
              <img src={logo} alt="logo" />
              <img src={logoText} alt="logoText" />
            </div>
          </div>
          <section className="aviainfo__body body-aviainfo">
            <div className="body-aviainfo__flight-plan flight-plan">
              <div className="flight-plan__departure-date">
                <span>09:20</span>
                <span>Москва</span>
                <span>19.05.2022</span>
              </div>
              <div className="flight-plan__plan">
                <div>
                  <img src={SVO} alt="text" />
                  <span></span>
                  <img src={ROV} alt="text" />
                </div>
                <span>В пути 1 ч 55 мин</span>
              </div>
              <div className="flight-plan__arrival-date">
                <span>09:20</span>
                <span>Москва</span>
                <span>19.05.2022</span>
              </div>
              <div className="flight-plan__icons-baggage">
                <img src={baggage} alt="baggage" />
              </div>
            </div>
            <div className="body-aviainfo__times">
              <button type="button">09:20 - 11:05</button>
              <button type="button">09:20 - 11:05</button>
              <button type="button">09:20 - 11:05</button>
            </div>
          </section>
          <span></span>
          <div className="aviainfo__price">4 150 ₽</div>
        </div>
      </div>
    </div>
  );
}

export default AviaInfo
