import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './store/redux/index';
import { theme } from './store/styled/settingsTheme/theme';

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </HashRouter>,
);
