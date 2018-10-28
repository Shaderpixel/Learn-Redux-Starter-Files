import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state) {
  // console.log(state);
  return state;
  /**
   * doesn't seem like we need to return a mapped object since the
   * state object is now similar to the following with
   * addition of router property but if we ever need to change the name of the property in this.props, we can use
   * the following
   */

  // return {
  //   superPosts: state.posts,
  //   comments: state.comments,
  // };
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  return bindActionCreators(actionCreators, dispatch);
}

// connect/surface states and ability to dispatch actions to our component which is Main
// immediately apply Connect against the Main component
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
