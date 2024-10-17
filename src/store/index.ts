import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import videoReducer from './reducers/videoReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  videos: videoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;