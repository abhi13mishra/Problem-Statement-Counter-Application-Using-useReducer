import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div 
      style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter using useReducer</h2><br/>
      <h1>{state.count}</h1><br/>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: '10px' }} disabled={state.count == 0}>
        Decrement
      </button>
    </div>
  );
}

export default App;