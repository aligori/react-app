import { combineReducers } from 'redux';
import imagesReducer from './slices/imagesSlice';

const rootReducer = combineReducers({
  images: imagesReducer
});

export default rootReducer;
