import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import profileDetails from './profileReducer';

// combines reducers for the application
const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  profileDetails,
});

export default rootReducer;
