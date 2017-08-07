import axios from 'axios'

export const FETCH_ARTICLES = 'fetch_articles'
export const FETCH_SINGLE_ARTICLE = 'fetch_single_article'
export const CREATE_ARTICLE = 'create_article'
export const DELETE_ARTICLE = 'delete_article'

const ROOT_URL = "http://localhost:5000/api/v1"


export function fetchArticles(){
    const request = axios.get(`${ROOT_URL}/articles`)
    
    return{
        type: FETCH_ARTICLES,
        payload: request
    }
}

export function createArticle(values, callback){
    const request = axios.post(`${ROOT_URL}/articles`)

    return {
        type: CREATE_ARTICLE,
        payload: request
    }
}

export function fetchSingleArticle(id){
    const request = axios.post(`${ROOT_URL}/articles/${id}`)

    return{
        type: FETCH_SINGLE_ARTICLE,
        payload: request
    }
}

export function deleteArticle(id){
    const request = axios.post(`${ROOT_URL}`)

    return{
        type: DELETE_ARTICLE,
        payload: request
    }
}