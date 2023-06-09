import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Thanks from './pages/Thanks'

const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/sent' element={<Thanks />} />
      </Routes>
    </Router>
  );
};


export default App;