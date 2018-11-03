// let's go!
import React from 'react';
import { render } from 'react-dom';

// import router dependencies
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import history from './stores/history';
import { Provider } from 'react-redux';
import store from './stores/index';

// import css
import css from './styles/style.styl';

//Import components
import App from './components/App';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
);

render(router, document.querySelector('#root'));
