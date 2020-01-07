import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// app container
import App from './containers';

const publicUrl = process.env.PUBLIC_URL || '/';
const supportsHistory = 'pushState' in window.history;
const rootElement = document.getElementById('root');

const renderApp = (TheApp: React.FC) => {
  if (rootElement) {
    const HelixApp = (
      <BrowserRouter basename={publicUrl} forceRefresh={!supportsHistory}>
        <TheApp />
      </BrowserRouter>
    );

    return render(HelixApp, rootElement);
  }

  return null;
};

if (module.hot) {
  module.hot.accept(() => {
    const NewApp = require('./containers').default;
    renderApp(NewApp);
  });
}

renderApp(App);

// service worker bit
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
