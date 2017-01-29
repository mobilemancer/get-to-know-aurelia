import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@autoinject
export class Index {
    public header = "Pub/Sub Messaging";
    public block1: HTMLElement;
    public block2: HTMLElement;

    constructor(private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe('block1_signal', (message) => {
            this.block2Listener(message);
        });
        this.eventAggregator.subscribe('block2_signal', (message) => {
            this.block1Listener(message);
        });
    }

    attached() {
        this.block1.style.backgroundColor = "red";
        this.block2.style.backgroundColor = "blue";
    }

    public block1Clicked() {
        this.eventAggregator.publish('block1_signal', 'red');
        this.block1.style.backgroundColor = 'red';

    }
    public block2Clicked() {
        this.eventAggregator.publish('block2_signal', 'blue');
        this.block2.style.backgroundColor = 'blue';
    }

    private block1Listener(message) {
        this.block1.style.backgroundColor = message;
    }

    private block2Listener(message) {
        this.block2.style.backgroundColor = message;
    }
}