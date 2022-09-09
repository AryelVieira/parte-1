import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Contatos } from './pages/Contatos';

import { Home } from './pages/Home';
import { Servicos } from './pages/Servicos';

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contatos' element={<Contatos/>} />
        <Route path='/servicos' element={<Servicos/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
