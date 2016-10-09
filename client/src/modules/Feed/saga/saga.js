import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import {
  fetchPostsFailed,
  fetchPostsSuccess,
  searchTextFetchedSuccess,
  searchTextFetchedFailed,
  fetchFeedItemSuccess,
  fetchFeedItemFailed,
} from '../actions';
import {
  RELOAD_POSTS,
  SEARCH_INPUT_TEXT_CHANGED,
  FEED_ITEM_MODAL_OPEN
} from '../constants';
import Api from '../api';

function* fetchPosts () {
  try {
    const posts = yield call(Api.fetchPosts);
    yield put(fetchPostsSuccess(posts));
  } catch (e) {
    yield put(fetchPostsFailed(e));
  }
}

function* fetchSearchResult(action) {
  try {
    const result = yield call(Api.fetchSearchResult, action.payload);
    yield put(searchTextFetchedSuccess(result));
  } catch (e) {
    console.log(e);
    yield put(searchTextFetchedFailed(e));
  }
}

export function* fetchFeedItem(action = {}) {
  try {
    const item = yield call(Api.getItem, action.payload);
    yield put(fetchFeedItemSuccess(item));
  } catch(e) {
    console.log(e);
    yield put(fetchFeedItemFailed(e));
  }
}

// export for testing
export function* fetchPostsSaga () {
  yield* takeEvery(RELOAD_POSTS, fetchPosts);
}
// export for testing
export function* fetchSearchResultsSaga() {
  yield* takeLatest(SEARCH_INPUT_TEXT_CHANGED, fetchSearchResult);
}
// export for testing
export function* fetchFeedItemSaga () {
  yield* takeEvery(FEED_ITEM_MODAL_OPEN, fetchFeedItem)
}


export default function* () {
  yield [
    fetchPostsSaga(),
    fetchSearchResultsSaga(),
    fetchFeedItemSaga()
  ]
}
