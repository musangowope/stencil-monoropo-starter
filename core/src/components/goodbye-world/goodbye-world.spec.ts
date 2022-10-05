import '@stencil/core/testing';

import { GoodByeWorld } from './goodbye-world';

describe('good-bye-world-builds', () => {
  it('builds', () => {
    expect(new GoodByeWorld()).toBeTruthy();
  });
});
