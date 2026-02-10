import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Valentine from './pages/Valentine';
import Yes from './pages/Yes';
import No from './pages/No';

const AppRoutes: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle 404 redirects with hash - only run once
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      const path = hash.replace('#', '');
      navigate(path, { replace: true });
      // Clear the hash after navigation
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/valentine/" replace />} />
      <Route path="/valentine/" element={<Valentine />} />
      <Route path="/valentine/yes/" element={<Yes />} />
      <Route path="/valentine/no/" element={<No />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/gerbus">
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
