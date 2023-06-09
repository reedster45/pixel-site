import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Thanks from './pages/Thanks'

const App = () => {
 
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/sent' element={<Thanks />} />
          <Route index element={<Home />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};


export default App;