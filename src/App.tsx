import React from 'react';
import { Routes, Route } from 'react-router-dom'
import "typeface-roboto";
import './App.scss';

import Avia from './Avia/avia';
import AviaInfo from './AviaInfo/aviaInfo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Avia />} />
      <Route path="/aviainfo" element={<AviaInfo />} />
      <Route path="*" element={<Avia />} />
    </Routes>
  );
}

export default App;
