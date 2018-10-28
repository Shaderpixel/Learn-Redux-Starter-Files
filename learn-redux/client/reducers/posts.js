// a reducer takes in two things:
// 1. it takes in the action (info about what happened)
// 2. it takes in a copy of current state
// it goes into the state does the action and returns a copy of the state to react

function posts(state = [], action) {
  const { type, index } = action;
  switch (type) { // use switch conditions to ensure the reducer we want is executed
    case 'INCREMENT_LIKES':
      // console.log('Incrementing Likes!!');
      // console.dir(action);
      // console.log(state[index]);

      // return the updated state
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes + 1 }, // state is not altered/mutated
        ...state.slice(index + 1),
      ];

    default:
      return state;
  }
}

export default posts;
