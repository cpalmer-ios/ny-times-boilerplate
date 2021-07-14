import axios from 'axios';
import { FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from "./articlesTypes";

const fetchArticlesRequest = () => {
    return {
        type: FETCH_ARTICLES_REQUEST,
    }
}

const fetchArticlesSuccess = articles => {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles
    }
}

const fetchArticlesFailure = error => {
    return {
        type: FETCH_ARTICLES_FAILURE,
        payload: error
    }
}

export const fetchArticles = () => {
    return (dispatch) => {
        dispatch(fetchArticlesRequest)
        axios.get('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=AXrknngffNPixAPCn6HSSdn0S8ho9k7y')
        .then(response => {
            const articles = response.data
            console.log(articles)
            dispatch(fetchArticlesSuccess(articles))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchArticlesFailure(errorMsg))
        })
    }
}