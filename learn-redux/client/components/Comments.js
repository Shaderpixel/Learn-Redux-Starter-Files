import React from 'react';

class Comments extends React.Component {
  // render function
  renderComment = (comment, i) => {
    //key is needed if multiple elements needs to be outputted
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.routeMatch.params.postId,
              i,
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  };

  handleSubmit = e => {
    /**
     * using arrow function here instead because this is not rebound to nothing and that it
     * retains what this was which is the Comments class. See readme for article resources
     * */
    e.preventDefault();

    // console.log(this.refs);
    const { postId } = this.props.routeMatch.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment); // calling the action
    this.refs.commentForm.reset(); // clear input fields
  };

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="Author" />
          <input type="text" ref="comment" placeholder="Enter your comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
