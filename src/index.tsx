import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/Routes';
import { BrowserRouter } from "react-router-dom"
import { CardsProvider } from "./context"
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CardsProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CardsProvider>

  </React.StrictMode>
);

