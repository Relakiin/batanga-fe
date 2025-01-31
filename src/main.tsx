import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Play from './pages/Play';
import Rules from './pages/Rules';
import Info from './pages/Info';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="/play" element={<Play />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/info" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>
);
