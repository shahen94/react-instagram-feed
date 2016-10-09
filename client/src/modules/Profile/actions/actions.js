import { createAction } from 'redux-actions';
import {
  FOCUS_SEARCH_INPUT,
  BLUR_SEARCH_INPUT,
  SEARCH_INPUT_TEXT_CHANGED,
} from '../constants';

export const focusSearchInput = createAction(FOCUS_SEARCH_INPUT);
export const blurSearchInput = createAction(BLUR_SEARCH_INPUT);
export const searchTextChanged = createAction(SEARCH_INPUT_TEXT_CHANGED);
