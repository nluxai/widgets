import React from 'react'
import ReactDOM from 'react-dom/client'
import EinBotWidget from './EinBotWidget/EinBotWidget.tsx'
import './index.css'

const urlParams = new URLSearchParams(window.location.search);

if (document?.body) {
    const bgColor = urlParams.get('bgColor');
    document.body.style.backgroundColor = bgColor || 'white';
}

const theme = urlParams.get('theme') as 'light' | 'dark' | undefined;
const direction = urlParams.get('direction') as 'row' | 'column' | undefined;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EinBotWidget theme={theme} direction={direction} />
  </React.StrictMode>,
);
