import { combineReducers } from "redux";
import { articlesReducer } from './articles/articlesReducer';

const rootReducer = combineReducers({
    articles: articlesReducer
});

export default rootReducer;