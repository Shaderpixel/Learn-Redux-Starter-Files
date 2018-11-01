// let's go!
import React from 'react';
import { render } from 'react-dom';

// import router dependencies
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import history from './stores/history';

// import css
import css from './styles/style.styl';

//Import components
import Main from './components/Main';

const router = (
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
);

render(router, document.querySelector('#root'));
