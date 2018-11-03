import { createStore, compose, applyMiddleware } from 'redux';

// hook up our Router aka ConnectedRouter with Redux using the connectRouter method and the history object
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from './history';

// import the root reducer
import rootReducer from './../reducers/index';

// import data
import comments from './../data/comments';
import posts from './../data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments,
};

const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  compose(applyMiddleware(routerMiddleware(history))),
);

export default store;
