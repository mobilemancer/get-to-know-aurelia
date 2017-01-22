import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';

@autoinject
export class BigBlock {
  @bindable name;
  @bindable color;
  public me: Element;

  constructor(private eventAggregator: EventAggregator) {
    this.eventAggregator.subscribe('block_signal', (message) => {
      this.blockListener(message);
    });
  }

  attached() {
    (<any>this.me).style.backgroundColor = this.color;
  }

  public blockClicked() {
    this.eventAggregator.publish('block_signal', this.color);
    (<any>this.me).style.backgroundColor = this.color;
  }

  private blockListener(message) {
    (<any>this.me).style.backgroundColor = message;
  }
}

