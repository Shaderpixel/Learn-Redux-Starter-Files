// function is the action creator and the object that is returned is the action that is going to be dispatched
// increment likes
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index,
  };
}

// add comment
export function add_comment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment,
  };
}

// remove comment
export function remove_comment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i,
  };
}
