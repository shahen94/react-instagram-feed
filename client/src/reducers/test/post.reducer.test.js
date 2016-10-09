import { expect } from 'chai';
import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILED } from '../../constants';
import { createAction } from 'redux-actions';
import reducer, { postsInitialState } from '../posts.reducer';

describe('Reducers/Posts.reducer.js', () => {
  it('should return initial state on uncought action', () => {
    const newState = reducer(undefined, {});
    expect(newState).to.be.deep.equal(postsInitialState);
  });
  it(`should reduce ${FETCH_POSTS_SUCCESS} action`, () => {
    const data = [{ id: 1, name: 'yo' }];
    const action = createAction(FETCH_POSTS_SUCCESS);

    const newState = reducer({}, action(data));
    expect(newState).to.be.deep.equal({
      posts: data,
      showError: false,
    });
  });
  it(`should reduce ${FETCH_POSTS_FAILED} action`, () => {
    const action = createAction(FETCH_POSTS_FAILED);
    const newState = reducer(undefined, action());
    expect(newState).to.be.deep.equal({
      posts: [],
      showError: true,
      errorMessage: 'Failed to load posts',
    });
  });
});
