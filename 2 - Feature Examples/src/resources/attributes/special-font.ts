import {autoinject} from 'aurelia-framework';

@autoinject()
export class SpecialFontCustomAttribute {
  constructor(private element: Element) { 
     this.element.style.fontFamily = 'Comic Sans MS';
  }

  valueChanged(newValue, oldValue) {

  }
}

