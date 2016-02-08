import { combineReducers } from 'redux';

function nilReducer(state = {}) {
  return state;
}

const rootReducer = combineReducers({nil: nilReducer});

export default rootReducer;
