import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

class PhotoGrid extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
  };

  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => (
          <Photo {...this.props} key={i} i={i} post={post} />
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
