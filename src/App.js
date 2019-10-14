import React from 'react';
import Todo from './Todo'
import todoReducer from './store'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store=createStore(todoReducer);

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