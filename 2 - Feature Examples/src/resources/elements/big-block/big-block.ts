import { autoinject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@autoinject
export class BigBlock {
  @bindable name;
  @bindable color;

  private thisElement: HTMLElement;

  private buttonColor = {
    color: "white"
  };

  private signal = "color_signal";

  constructor(private eventAggregator: EventAggregator) {
    this.eventAggregator.subscribe(this.signal, (message) => {
      this.blockListener(message);
    });
  }

  attached() {
    this.thisElement.style.backgroundColor = this.color;
  }

  private blockClicked() {
    this.eventAggregator.publish(this.signal, this.color);
  }

  private blockListener(message) {
    this.thisElement.style.backgroundColor = message;
  }
}

