import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import Single from './Single';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Richeduxstagram</Link>
        </h1>
        <Switch>
          <Route exact path="/" render={() => <PhotoGrid {...this.props} />} />
          <Route
            path="/view/:postId"
            render={state => (
              <Single {...this.props} routeMatch={state.match} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;
