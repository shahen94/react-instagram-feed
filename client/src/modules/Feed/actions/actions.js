import { createAction } from 'redux-actions';
import {
  RELOAD_POSTS,
  FETCH_POSTS_FAILED,
  FETCH_POSTS_SUCCESS,
  FOCUS_SEARCH_INPUT,
  BLUR_SEARCH_INPUT,
  SEARCH_INPUT_TEXT_CHANGED,
  SEARCH_INPUT_TEXT_FETCHED_SUCCESS,
  SEARCH_INPUT_TEXT_FETCHED_FAILED,
  FEED_ITEM_MODAL_CLOSE,
  FEED_ITEM_MODAL_OPEN,
  FETCH_FEED_ITEM,
  FETCH_FEED_ITEM_FAILED,
  FETCH_FEED_ITEM_SUCCESS,
} from '../constants';

export const reloadPosts = createAction(RELOAD_POSTS);
export const fetchPostsFailed = createAction(FETCH_POSTS_FAILED);
export const fetchPostsSuccess = createAction(FETCH_POSTS_SUCCESS);
export const focusSearchInput = createAction(FOCUS_SEARCH_INPUT);
export const blurSearchInput = createAction(BLUR_SEARCH_INPUT);
export const searchTextChanged = createAction(SEARCH_INPUT_TEXT_CHANGED);
export const searchTextFetchedSuccess = createAction(SEARCH_INPUT_TEXT_FETCHED_SUCCESS);
export const searchTextFetchedFailed = createAction(SEARCH_INPUT_TEXT_FETCHED_FAILED);
export const openModal = createAction(FEED_ITEM_MODAL_OPEN);
export const closeModal = createAction(FEED_ITEM_MODAL_CLOSE);
export const fetchFeedItem = createAction(FETCH_FEED_ITEM);
export const fetchFeedItemSuccess = createAction(FETCH_FEED_ITEM_SUCCESS);
export const fetchFeedItemFailed = createAction(FETCH_FEED_ITEM_FAILED);
