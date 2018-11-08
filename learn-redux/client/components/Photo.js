import React from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

class Photo extends React.Component {
  static propTypes = {
    post: PropTypes.shape({
      caption: PropTypes.string,
      code: PropTypes.string,
      display_src: PropTypes.string,
      id: PropTypes.string,
      likes: PropTypes.number,
    }),
    i: PropTypes.number,
    comments: PropTypes.shape({}),
    increment: PropTypes.func,
  };

  render() {
    const { post, i, comments } = this.props;
    const transitionOptions = {
      classNames: 'like',
      key: post.likes,
      timeout: { enter: 500, exit: 500 },
    };

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
            <TransitionGroup component={null}>
              <CSSTransition {...transitionOptions}>
                <span className="likes-heart" key={post.likes}>
                  {post.likes}
                </span>
              </CSSTransition>
            </TransitionGroup>
          </Link>
        </div>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button
              className="likes"
              onClick={this.props.increment.bind(null, i)}
            >
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />&nbsp;
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;
