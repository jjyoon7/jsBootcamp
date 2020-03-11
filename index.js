//reducer - helps us manage app state
// const reducer = (state, action) => newState

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state  
  }
}