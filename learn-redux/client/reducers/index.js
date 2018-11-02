/**
 * redux can only take in one reducer so we combine our reducers into one rootReducer
 * */

import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
