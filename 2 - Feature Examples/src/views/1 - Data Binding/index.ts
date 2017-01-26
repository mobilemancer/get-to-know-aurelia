export class Index {
    public header = "Data-Binding";
    public counter = 0;
    public message = "Hello!";
    public message2 = "Hello Again!";
    public displayCounter = false;

    constructor() {
        this.addOne();
    }

    public enableCounter() {
        this.displayCounter = true;
    }

    private async addOne() {
        await this.sleep(500);
        this.counter++;
        this.addOne();
    }

    private sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}