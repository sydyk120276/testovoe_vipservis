import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import logoText from "../assets/S7_Airlines.png";
import ROV from "../assets/ROV.png";
import SVO from "../assets/SVO.png";
import baggage from "../assets/baggage.png";
import Line from "../assets/Line.png";
import delimiter from "../assets/delimiter.png";

const AviaInfo = () => {
  return (
    <div className="aviainfo">
      <div className="aviainfo__container">
        <div className="aviainfo__card">
          <Link to="/" className="aviainfo__status status-aviainfo">
            <div className="status-aviainfo__promo">Невозвратный</div>
            <div className="status-aviainfo__logotype">
              <img src={logo} alt="logo" className="status-aviainfo__logotype-logo" />
              <img src={logoText} alt="logoText" className="status-aviainfo__logotype-logo-text" />
            </div>
          </Link>
          <section className="aviainfo__body body-aviainfo">
            <div className="body-aviainfo__flight-plan flight-plan">
              <div className="flight-plan__departure-date">
                <span className="time">09:20</span>
                <span className="sity-name">Москва</span>
                <span className="date">19.05.2022</span>
              </div>
              <div className="flight-plan__scheme">
                <div className="flight-plan__scheme-group-img">
                  <img src={SVO} alt="text" />
                  <img src={Line} alt="line" />
                  <img src={ROV} alt="text" />
                </div>
                <span>В пути 1 ч 55 мин</span>
              </div>
              <div className="flight-plan__arrival-date">
                <span className="time">09:20</span>
                <span className="sity-name">Москва</span>
                <span className="date">19.05.2022</span>
              </div>
              <div className="flight-plan__icons-baggage">
                <img src={baggage} alt="baggage" />
              </div>
            </div>
            <div className="body-aviainfo__times">
              <button type="button" className="body-aviainfo__times-button active">09:20 - 11:05</button>
              <button type="button" className="body-aviainfo__times-button">09:20 - 11:05</button>
              <button type="button" className="body-aviainfo__times-button">09:20 - 11:05</button>
            </div>
          </section>
          <img src={delimiter} alt="delimiter" />
          <div className="aviainfo__price">4 150 ₽</div>
        </div>
      </div>
    </div>
  );
}

export default AviaInfo
