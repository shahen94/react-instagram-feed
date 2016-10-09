import fetch from 'isomorphic-fetch';
import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import postSaga, { fetchPosts } from '../posts.saga';
import {
  POSTS,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
} from '../../constants';
describe('Sagas/Posts.saga.js', () => {
  describe('takeEvery', () => {
    it('should yield new generator', () => {
      expect(true).to.be.equal(false);
      // @TODO
    });
  });
  describe('fetchPosts', () => {
    it('should yield a posts', () => {
      expect(true).to.be.equal(false);
      // @TODO
    });
  });
});
