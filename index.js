//reducer - helps us manage app state
// const reducer = (state, action) => newState

function counterReducer(state, action) {
  return state + 1;  
}

console.log(counterReducer(0) === 1);
