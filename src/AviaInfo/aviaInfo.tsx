import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import logoText from "../assets/S7_Airlines.png";
import ROV from "../assets/ROV.png";
import SVO from "../assets/SVO.png";
import baggage from "../assets/baggage.png";
import Line from "../assets/Line.png";
import delimiter from "../assets/delimiter.png";

interface AviaProps {
  sityNameDeparture?: string
  sityNameArrival?: string
  dateDeparture?: string
  dateArrival?: string
}

const AviaInfo: FC<AviaProps> = ({ sityNameDeparture, sityNameArrival, dateDeparture, dateArrival }) => {
  const [activeItem, setActiveItem] = useState(0)
  const [departureDate, setDepartureDate] = useState('09:20')
  const [arrivalDate, setArrivalDate] = useState('11:05')
  const arrayTimes = ['09:20 - 11:05', '10:20 - 12:05', '11:20 - 13:05']

  const firstTime = (elem: string, index: number) => {
    setDepartureDate(elem.split('-').slice(0, 1).join(''))
    setArrivalDate(elem.split('-').slice(1, 2).join(''))
    setActiveItem(index)
  }

  return (
    <div className="aviainfo">
      <div className="aviainfo__container">
        {/* <section className="aviainfo__card">
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
                <span className="time">{departureDate}</span>
                <span className="sity-name">{sityNameDeparture}</span>
                <span className="date">{dateDeparture}</span>
              </div>
              <div className="flight-plan__scheme">
                <div className="flight-plan__scheme-group-img">
                  <img src={SVO} alt="text" />
                  <img src={Line} alt="line" />
                  <img src={ROV} alt="text" />
                </div>
                <span>В пути 1 ч 45 мин</span>
              </div>
              <div className="flight-plan__arrival-date">
                <span className="time">{arrivalDate}</span>
                <span className="sity-name">{sityNameArrival}</span>
                <span className="date">{dateArrival}</span>
              </div>
              <div className="flight-plan__icons-baggage">
                <img src={baggage} alt="baggage" />
              </div>
            </div>
            <div className="body-aviainfo__times">
              {arrayTimes.map((elem, index) => {
                return <button
                  className={activeItem === index ? 'active' : 'body-aviainfo__times-button'}
                  type="button"
                  key={elem}
                  onClick={() => firstTime(elem, index)}
                >
                  {elem}
                </button>
              })}
            </div>
          </section>
          <img src={delimiter} alt="delimiter" />
          <div className="aviainfo__price">4 150 ₽</div>
        </section> */}
        <section>
          <div className="aviainfo__card">
            <Link to="/" className="aviainfo__status status-aviainfo">
              <div className="status-aviainfo__promo">Невозвратный</div>
              <div className="status-aviainfo__logotype">
                <img src={logo} alt="logo" className="status-aviainfo__logotype-logo" />
                <img src={logoText} alt="logoText" className="status-aviainfo__logotype-logo-text" />
              </div>
            </Link>
            <div className="aviainfo__body body-aviainfo">
              <div className="body-aviainfo__flight-plan flight-plan">
                <div className="flight-plan__departure-date">
                  <span className="time">{departureDate}</span>
                  <span className="sity-name">{sityNameDeparture}</span>
                  <span className="date">{dateDeparture}</span>
                </div>
                <div className="flight-plan__scheme">
                  <div className="flight-plan__scheme-group-img">
                    <img src={SVO} alt="text" />
                    <img src={Line} alt="line" />
                    <img src={ROV} alt="text" />
                  </div>
                  <span>В пути 1 ч 45 мин</span>
                </div>
                <div className="flight-plan__arrival-date">
                  <span className="time">{arrivalDate}</span>
                  <span className="sity-name">{sityNameArrival}</span>
                  <span className="date">{dateArrival}</span>
                </div>
                <div className="flight-plan__icons-baggage">
                  <img src={baggage} alt="baggage" />
                </div>
              </div>
              <div className="body-aviainfo__times">
                {arrayTimes.map((elem, index) => {
                  return <button
                    className={activeItem === index ? 'active' : 'body-aviainfo__times-button'}
                    type="button"
                    key={elem}
                    onClick={() => firstTime(elem, index)}
                  >
                    {elem}
                  </button>
                })}
              </div>
            </div>
            <img src={delimiter} alt="delimiter" />
            <div className="aviainfo__price">4 150 ₽</div>
          </div>
          <div className="aviainfo__card">
            <Link to="/" className="aviainfo__status status-aviainfo">
              <div className="status-aviainfo__promo">Невозвратный</div>
              <div className="status-aviainfo__logotype">
                <img src={logo} alt="logo" className="status-aviainfo__logotype-logo" />
                <img src={logoText} alt="logoText" className="status-aviainfo__logotype-logo-text" />
              </div>
            </Link>
            <div className="aviainfo__body body-aviainfo">
              <div className="body-aviainfo__flight-plan flight-plan">
                <div className="flight-plan__departure-date">
                  <span className="time">{departureDate}</span>
                  <span className="sity-name">{sityNameDeparture}</span>
                  <span className="date">{dateDeparture}</span>
                </div>
                <div className="flight-plan__scheme">
                  <div className="flight-plan__scheme-group-img">
                    <img src={SVO} alt="text" />
                    <img src={Line} alt="line" />
                    <img src={ROV} alt="text" />
                  </div>
                  <span>В пути 1 ч 45 мин</span>
                </div>
                <div className="flight-plan__arrival-date">
                  <span className="time">{arrivalDate}</span>
                  <span className="sity-name">{sityNameArrival}</span>
                  <span className="date">{dateArrival}</span>
                </div>
                <div className="flight-plan__icons-baggage">
                  <img src={baggage} alt="baggage" />
                </div>
              </div>
              <div className="body-aviainfo__times">
                {arrayTimes.map((elem, index) => {
                  return <button
                    className={activeItem === index ? 'active' : 'body-aviainfo__times-button'}
                    type="button"
                    key={elem}
                    onClick={() => firstTime(elem, index)}
                  >
                    {elem}
                  </button>
                })}
              </div>
            </div>
            <img src={delimiter} alt="delimiter" />
            <div className="aviainfo__price">4 150 ₽</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AviaInfo
