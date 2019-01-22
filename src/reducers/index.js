import { combineReducers } from 'redux';
import registrationReducer from './registrationReducer';
import articleReducer from './articleReducer';
import profileDetails from './profileReducer';
import ownArticlesReducer from './userSpecificReducer';

// combines reducers for the application
const rootReducer = combineReducers({
  registrationReducer,
  articles: articleReducer,
  profileDetails,
  ownArticles: ownArticlesReducer,
});

export default rootReducer;
