// a reducer takes in two things:
// 1. it takes in the action (info about what happened)
// 2. it takes in a copy of current state
// it goes into the state does the action and returns a copy of the state to react

function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [
        ...state,
        {
          text: action.comment,
          user: action.author,
        },
      ];
    case 'REMOVE_COMMENT':
      // we need to return the new state without the deleted comment
      return [
        // from the state to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one to the end
        ...state.slice(action.i + 1),
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  // console.log(state, action);
  // check to see if a postId is present before we do anything
  if (action.postId !== undefined) {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one by using the redux reducer composition
      [action.postId]: postComments(state[action.postId], action),
    };
  }

  return state;
}

export default comments;
