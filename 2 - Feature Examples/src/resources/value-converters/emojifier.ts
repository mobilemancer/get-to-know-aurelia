export class EmojifierValueConverter {
  toView(value) {
    return this.emojifyText(value);
  }

  private emojifyText(text: string) {
    let result = text.replace('cake', '<i class="em em-cake"></i>');
    result = result.replace('Angular is great!', '<i class="em em-poop"></i>');
    result = result.replace('cool', '<i class="em em-cool"></i>');
    result = result.replace('Aurelia', '<i class="em em-gift_heart"></i>Aurelia<i class="em em-gift_heart"></i>');    
    return result;
  }
}