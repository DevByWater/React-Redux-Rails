import _ from 'lodash'
import { FETCH_ARTICLES, FETCH_SINGLE_ARTICLE, DELETE_ARTICLE } from '../actions'

export default function(state = {}, action){
    switch(action.type){
        case DELETE_ARTICLE:
            return _.omit(state, action.payload)
        case FETCH_ARTICLES:
            return _.mapKeys(action.payload.data, "id")
        case FETCH_SINGLE_ARTICLE:
            return {...state, [action.payload.data.id]: action.payload.data}
        default:
            return state
    }
}