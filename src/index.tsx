import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import TourList from './components/TourList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TourList />
  </React.StrictMode>
);
 
