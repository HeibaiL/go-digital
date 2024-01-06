import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import pageUrl from './const/pages';
import HomePage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import TickerProvider from './providers/ticker/TickerProvider';

import './styles/app.scss';

function App() {
  return (
    <TickerProvider>
      <Router>
        <Routes>
          <Route path={pageUrl.root} element={<HomePage />} />
          <Route path="*" element={<Navigate replace to={pageUrl.root} />} />
          <Route path={pageUrl.examplePage} element={<ExamplePage />} />
        </Routes>
      </Router>
    </TickerProvider>
  );
}

export default App;
