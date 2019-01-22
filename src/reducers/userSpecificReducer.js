import Cookies from 'js-cookie';
import { FETCH_ARTICLES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  articles: [],
};

const ownArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload ? action.payload.filter(article => (
          article.author.username.toLowerCase() === Cookies.get('username').toLowerCase()
        )) : action.payload,
      };
    default:
      return state;
  }
};

export default ownArticlesReducer;
