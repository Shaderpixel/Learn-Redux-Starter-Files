/**
 *  Taking the presentational component (Main.js) and infuse it with both the action creators and the data
 * */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// functions that are going to take our states and actions and surface the data and action to our component via props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
