import { expect } from 'chai';
import { logger } from '../';

describe('Middleware/logger.js', () => {
  it('should log something', () => {
    const err = new ReferenceError('This is a bad function.');
    const dispatch = (arg) => console.log(arg);
    const logging = logger()(dispatch);
    expect(logging.bind('yo')).to.not.throw(err);
    // @TODO wrong test
  });
});
