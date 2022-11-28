import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Links, MainPage } from './components';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects' element={<Links />} />
      </Routes>
      < Footer />
    </HelmetProvider>
  );
}

export default App;
