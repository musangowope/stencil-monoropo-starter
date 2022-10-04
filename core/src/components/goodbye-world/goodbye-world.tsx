import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'goodbye-world',
})
export class GoodByeWorld {

  render() {
    return (
      <Host>Goodbye world</Host>
    );
  }
}
