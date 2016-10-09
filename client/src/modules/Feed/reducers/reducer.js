import {
  RELOAD_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  FOCUS_SEARCH_INPUT,
  BLUR_SEARCH_INPUT,
  SEARCH_INPUT_TEXT_CHANGED,
  SEARCH_INPUT_TEXT_FETCHED_SUCCESS,
  SEARCH_INPUT_TEXT_FETCHED_FAILED,
  FEED_ITEM_MODAL_OPEN,
  FEED_ITEM_MODAL_CLOSE,
  FETCH_FEED_ITEM_FAILED,
  FETCH_FEED_ITEM_SUCCESS,
} from '../constants';

const initialState = {
  posts: [],
  isLoading: true,
  error: '',
  isSearchInputFocused: false,
  modal: {
    visible: false,
    item: {},
    loading: false,
    error: ''
  },
  search: {
    text: '',
    result: [],
    error: '',
    loading: false
  },
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case RELOAD_POSTS:
      return Object.assign({}, state, {
        isLoading: true
      });

    case FETCH_POSTS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: payload
      });

    case FETCH_POSTS_SUCCESS:
      return Object.assign({}, state, {
        posts: payload.slice(0, 10),
        isLoading: false,
        error: '',
      });

    case FOCUS_SEARCH_INPUT:
      return Object.assign({}, state, {
        isSearchInputFocused: true
      });

    case BLUR_SEARCH_INPUT:
      return Object.assign({}, state, {
        isSearchInputFocused: false
      });

    case SEARCH_INPUT_TEXT_CHANGED:
      return Object.assign({}, state, {
        search: {
          ...state.search,
          text: payload,
          result: [],
          loading: true
        }
      });

    case SEARCH_INPUT_TEXT_FETCHED_SUCCESS:
      return Object.assign({}, state, {
        search: {
          ...state.search,
          result: payload,
          loading: false,
          error: ''
        }
      });

    case SEARCH_INPUT_TEXT_FETCHED_FAILED:
      return Object.assign({} ,state, {
        search: {
          ...state.search,
          loading: false,
          result: [],
          error: payload
        }
      });

    case FETCH_FEED_ITEM_SUCCESS:
      return Object.assign({}, state, {
        modal: {
          ...state.modal,
          item: payload,
          loading: false,
          error: ''
        }
      });

    case FETCH_FEED_ITEM_FAILED:
      return Object.assign({}, state, {
        modal: {
          ...state.modal,
          item: {},
          loading: false,
          error: payload
        }
      });

    case FEED_ITEM_MODAL_OPEN:
      return Object.assign({}, state, {
        modal: {
          ...state.modal,
          visible: true,
          loading: true,
        }
      });

    case FEED_ITEM_MODAL_CLOSE:
      return Object.assign({}, state, {
        modal: {
          ...state.modal,
          visible: false
        }
      });

    default:
      return state;
  }
}
