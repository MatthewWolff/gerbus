import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Valentine from './pages/Valentine';
import Yes from './pages/Yes';
import No from './pages/No';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/gerbus">
      <Routes>
        <Route path="/" element={<Navigate to="/valentine" replace />} />
        <Route path="/valentine" element={<Valentine />} />
        <Route path="/valentine/yes" element={<Yes />} />
        <Route path="/valentine/no" element={<No />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
