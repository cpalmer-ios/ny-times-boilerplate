import { FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from "./articlesTypes";

export const initialState = {
    loading: false,
    articles: [],
    error: ''
}


export const articlesReducer = (state = initialState, action) => {
    switch(action.type) {
    case FETCH_ARTICLES_REQUEST:
        return {
            ...state,
            loading: true
        }
    case FETCH_ARTICLES_SUCCESS:
        return {
            ...state,
            loading: false,
            articles: action.payload.results,
            error: ''
        }
    case FETCH_ARTICLES_FAILURE:
        return {
            ...state,
            loading: true,
            articles: [],
            error: action.payload.results
        }
        default: return state
    }
}