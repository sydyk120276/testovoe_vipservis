import React, { useState, FC, ChangeEvent } from 'react';
import { Routes, Route } from 'react-router-dom'
import "typeface-roboto";
import './App.scss';

import Avia from './Avia/avia';
import AviaInfo from './AviaInfo/aviaInfo';

const App: FC = () => {
  const [sityNameDeparture, setSityNameDeparture] = useState('Москва')
  const [sityNameArrival, setSityNameArrival] = useState('Бишкек')
  const [dateArrival, setDateArrival] = useState('19.05.2022')
  const [dateDeparture, setDateDeparture] = useState('19.05.2022')

  const onSityNameDeparture = (e: ChangeEvent<HTMLInputElement>) => {
    setSityNameDeparture(e.currentTarget.value)
  }
  const onSityNameArrival = (e: ChangeEvent<HTMLInputElement>) => {
    setSityNameArrival(e.currentTarget.value)
  }
  const onDateDeparture = (e: ChangeEvent<HTMLInputElement>) => {
    setDateDeparture(e.currentTarget.value)
  }
  const onDateArrival = (e: ChangeEvent<HTMLInputElement>) => {
    setDateArrival(e.currentTarget.value)
  }

  return (
    <Routes>
      <Route path="/" element={<Avia
        onSityNameDeparture={onSityNameDeparture}
        onSityNameArrival={onSityNameArrival}
        onDateDeparture={onDateDeparture}
        onDateArrival={onDateArrival}
      />} />
      <Route path="/aviainfo" element={<AviaInfo
        sityNameDeparture={sityNameDeparture[0].toUpperCase() + sityNameDeparture.slice(1)}
        sityNameArrival={sityNameArrival[0].toUpperCase() + sityNameArrival.slice(1)}
        dateDeparture={dateDeparture.split('-').reverse().join('.')}
        dateArrival={dateArrival.split('-').reverse().join('.')}
      />} />
    </Routes>
  );
}

export default App;
