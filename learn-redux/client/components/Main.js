import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => <PhotoGrid {...this.props} />}
          />
          <Route
            path={'/view/:postId'}
            render={state => <Single {...this.props} match={state.match} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;
