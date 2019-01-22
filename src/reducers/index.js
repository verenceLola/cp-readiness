import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import profileDetails from './profileReducer';
import ownArticlesReducer from './userSpecificReducer';
import loginReducer from './loginReducers';

// combines reducers for the application
const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  profileDetails,
  ownArticles: ownArticlesReducer,
  loginReducer,
});

export default rootReducer;
