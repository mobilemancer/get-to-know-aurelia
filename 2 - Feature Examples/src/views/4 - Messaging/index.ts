import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@autoinject
export class Index {
    public header = "Pub/Sub Messaging";

    private luke_says: HTMLElement;
    private c3po_says: HTMLElement;

    private lukeCounter = 0;
    private c3poCounter = 0;

    private c3poSignals = [
        "Are you there sir?",
        "We've had some problems...",
        "No! Shut them *all* down, hurry!",
        "Listen to them, they're dying R2! Curse my metal body, I wasn't fast enough, it's all my fault! My poor Master."
    ];
    private lukeSignals = [
        "3PO?",
        "Will you shut up and listen to me! Shut down all the garbage mashers on the detention level, will ya? Do you copy? Shut down all the garbage mashers on the detention level!",
        "What? HAHA! Hey, you did it 3PO!",
        "3PO, we're all right! We're all right! Ha ha! Hey, open the pressure maintenance hatch on unit number... where are we? 3263827!"
    ];

    constructor(private eventAggregator: EventAggregator) {
        this.eventAggregator.subscribe('c3po_signal', (message) => {
            this.lukeComs(message);
        });
        this.eventAggregator.subscribe('luke_signal', (message) => {
            this.c3poComs(message);
        });
    }

    attached() {

    }

    public lukeClicked() {
        this.eventAggregator.publish('luke_signal', this.lukeSignals[this.lukeCounter++ % 4]);
    }
    public c3poClicked() {
        this.eventAggregator.publish('c3po_signal', this.c3poSignals[this.c3poCounter++ % 4]);
    }

    private lukeComs(message) {
        this.c3po_says.innerText = `-"${message}"`;
    }
    private c3poComs(message) {
        this.luke_says.innerText = `-"${message}"`;
    }
}