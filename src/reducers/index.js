import { combineReducers } from 'redux';

import userReducer from './userReducer';
import boardReducer from './boardReducer';
import voiceReducer from './voiceReducer';

const rootReducer = combineReducers({
  userReducer,
  boardReducer,
  voiceReducer,
});

export default rootReducer;
