import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_SINGLE_POST = 'fetch_single_post'
export const CREATE_POST = 'create_post'
export const DELETE_POST = 'delete_post'

const ROOT_URL = "http://localhost:3030/api/v1"
const API_KEY

export function fetchPosts(){
    const requests = axios.get(`${ROOT_URL}/articles`)
    
    return{
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(value, callback){
    const request = axios.post()

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchSinglePost(id){
    const request = axios.post()

    return{
        type: FETCH_SINGLE_POST,
        payload: request
    }
}

export function deletePost(id){
    const request = axios.post()

    return{
        type: DELETE_POST,
        payload: request
    }
}