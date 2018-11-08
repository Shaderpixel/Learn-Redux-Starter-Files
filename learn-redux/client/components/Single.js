import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        postId: PropTypes.string,
      }),
    }),
    posts: PropTypes.array,
    comments: PropTypes.shape({}),
  };

  render() {
    const postId = this.props.match.params.postId;
    // index of the post
    const i = this.props.posts.findIndex(post => post.code === postId);
    // get us the post
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments {...this.props} postComments={postComments} />
      </div>
    );
  }
}

export default Single;
