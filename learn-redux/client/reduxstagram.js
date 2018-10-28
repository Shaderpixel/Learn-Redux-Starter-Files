// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';

// import react router deps
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import history from './stores/history';
import store from './stores/index';

// Sentry testing
// import Raven from 'raven-js';
// import { sentry_url, logException } from './data/config';
//
// Raven.config(sentry_url, {
//   tags: {
//     git_commit: 'afj;aljfsdfsdf',
//     userLevel: 'editor',
//   },
// }).install(); // That's all it takes to set up Sentry

// throw custom error using the logException
// logException(new Error('download failed!'), {
//   email: 'wesbos@gmail.com',
// });

// when you do not need a stack trace and just log a message in the sentry dashboard
// Raven.captureMessage('Something bad happened!');

// after you log the exception or capture a message you can pop when you need a report dialog to solicit user feedback
// Raven.showReportDialog();

// console.log(store.doesNot.nope());

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

render(router, document.querySelector('#root'));
