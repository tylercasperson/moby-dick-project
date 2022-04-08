import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  parseFileReducer,
  parseStopWordsReducer,
  countWordsReducer,
} from './components/data/reducers/parserReducers';

const reducer = combineReducers({
  fileData: parseFileReducer,
  stopWords: parseStopWordsReducer,
  uniqueArr: countWordsReducer,
});

const initialState = {
  fileData: [],
  stopWords: [],
  uniqueArr: [],
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
