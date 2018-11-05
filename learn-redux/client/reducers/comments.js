function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment,
        },
      ];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      return [
        // from the start to the one that we want to delete
        ...state.slice(0, action.i),
        // after the deleted one till the end
        ...state.slice(action.i + 1),
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== undefined) {
    /** instead of checking for the action Type we are checking if action.postId is present
     *  this is because only addComment and removeComment uses postId
     ***/
    //take the current state
    // overwrite this post with a a new one
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action), // state here is the comments state, we create a
      // reducer for each piece of state
    };
  }

  return state;
}

export default comments;
