import {
  FeedSaga
} from '../modules';

export function* rootSaga() {
  yield [
    FeedSaga(),
  ];
}
