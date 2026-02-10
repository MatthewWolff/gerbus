import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Valentine from './pages/Valentine';
import Yes from './pages/Yes';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/gerbus">
      <Routes>
        <Route path="/" element={<Navigate to="/valentine" replace />} />
        <Route path="/valentine" element={<Valentine />} />
        <Route path="/valentine/yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
