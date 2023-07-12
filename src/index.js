import './index.css';

import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import Layout from './components/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = document.getElementById("root");
render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  root,
);
