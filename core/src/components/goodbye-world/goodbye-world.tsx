import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'goodbye-world',
})
export class GoodByeWorld {

  render() {
    return (
      <Host>
        <div>A am a transformer</div>
        <button>New button</button>
      </Host>
    );
  }
}
