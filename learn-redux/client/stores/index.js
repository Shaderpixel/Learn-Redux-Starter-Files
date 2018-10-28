import { applyMiddleware, createStore, compose } from 'redux';
import history from './history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// import the root reducer
import rootReducer from '../reducers/index';

// import the comments and posts data
import comments from '../data/comments';
import posts from '../data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments,
};

// enhancing our store so that it can be used with the Chrome Redux dev tool extension
const storeEnhancers = compose(
  // if the Redux dev tool extension is in the window, run it otherwise return the store itself
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  // this is for making sure that the connectRouter works properly
  applyMiddleware(routerMiddleware(history)),
);

const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  storeEnhancers,
);

// checking if modules have changed and need to be replaced using the webpack-hot-module-replacer
if (module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(connectRouter(history)(nextRootReducer));
  });
}

export default store;
