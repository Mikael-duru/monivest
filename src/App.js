import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Hero from './pages/Hero';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} exact />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;