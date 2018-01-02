import { renderer } from './index.js';

export default function createStore(reducer){
  //func that takes in a reducer as an arg
  let state;

  function dispatch(action){
    state = reducer(state, action);

    // console.log(`create store, ${state}`);
    console.log('createStore', state);

    renderer.render();
  }

  function getState(){
    return state;
  }

  return {
    dispatch,
    getState
  }
}
