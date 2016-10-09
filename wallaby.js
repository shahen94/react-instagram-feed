/* eslint-disable */

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.NODE_PATH='.:./client';

module.exports = function Wallaby(wallaby) {
  return {
    files: [
      'client/**/*.js',
      { pattern: 'client/**/test/*.test.js', ignore: true },
    ],
    tests: [
      '/client/**/test/*.test.js',
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--harmony_destructuring',
      }
    },
    testFramework: 'mocha',
    setup: function () {
      require('./client/init.test');
    },
  };
};
