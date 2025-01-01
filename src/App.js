import React from 'react';
import Homepage from './pages/homepage';  // Pastikan import sesuai jalur yang benar
import Convert from './pages/convert';    // Pastikan import sesuai jalur yang benar
import Hitung from './pages/hitungpercobaan';
import Lokasi from './pages/location';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/convert' element={<Convert />} />
        <Route path='/hitung' element={<Hitung />} />
        <Route path='/location' element={<Lokasi />} />
      </Routes>
    </Router>
  );
}

export default App;
