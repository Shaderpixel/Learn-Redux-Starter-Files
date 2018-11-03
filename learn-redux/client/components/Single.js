import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    // index of the post
    const i = this.props.posts.findIndex(
      post => post.code === this.props.match.params.postId,
    );
    // get us the post
    const post = this.props.posts[i];

    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments />
      </div>
    );
  }
}

export default Single;
