import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css"

import App from './App.jsx'
import Assunto from './pages/Assunto';
import Resumo from './pages/Resumo';
import Identificacao from './pages/Identificacao';
import Anexo from './pages/Anexo';
import Login  from './pages/Login';
import Protocolo from './pages/Protocolo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<App />} />
      <Route path='/assunto' element={<Assunto />} />
      <Route path='/resumo' element={<Resumo />} />
      <Route path='/identificacao' element={<Identificacao />} />
      <Route path='/anexo' element={<Anexo />} />
      <Route path='/protocolo' element={<Protocolo />} />
      <Route path='/login' element={<Login />} />

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
