import * as types from '../const/actionTypes/Like';
import {POSTS_FETCH_SUCCESS} from '../const/actionTypes/Posts';
import {POST_FETCH_SUCCESS} from '../const/actionTypes/Post';

const initialState = {
  isFetching: false,
  error: false,
  likes: [],
};

const getLikes = (entries) => (
  entries.map((entry) =>
    Object.assign({}, {id: entry.id}, {like: entry.metadata.like || 0}))
);

export default function likes(state = initialState, action) {
  switch (action.type) {
    case types.LIKE_ERROR:
      return Object.assign({}, state, {error: true});
    case types.LIKE_REQUEST:
      return Object.assign({}, state, {isFetching: true});
    case POSTS_FETCH_SUCCESS:
      return Object.assign({}, initialState, {isFetching: false},
             {likes: getLikes(action.response.entries)});
    case POST_FETCH_SUCCESS:
      return Object.assign({}, initialState, {isFetching: false},
        {likes: [{
          id: action.response.id,
          like: action.response.metadata.like || 0
        }]});
    case types.LIKE_SUCCESS:
      return Object.assign({}, state,
        {likes: state.likes.map((like) => {
          if (like.id !== action.response.id) return like;
          return {id: action.response.id, like: action.response.metadata.like};
        })});
    default:
      return state;
  }
}
