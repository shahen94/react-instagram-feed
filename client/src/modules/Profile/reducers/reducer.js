import {
  FOCUS_SEARCH_INPUT,
  BLUR_SEARCH_INPUT,
  SEARCH_INPUT_TEXT_CHANGED
} from '../constants';

const initialState = {
  isSearchInputFocused: false,
  searchText: '',
};

export default function (state = initialState, action = {}) {
  const { payload, type } = action;

  switch (type) {
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
        searchText: payload
      });

    default:
      return state;
  }
}
