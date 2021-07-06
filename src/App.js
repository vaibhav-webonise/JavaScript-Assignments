import React from 'react';
import Todo from './Todo'
import todoReducer from './store'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

let middleware = applyMiddleware(thunk);
const store = createStore(todoReducer, middleware);

function App() {
  return (
    <div >
      <Provider
        store={store}><Todo />
      </Provider>
    </div>
  );
}

export default App;
