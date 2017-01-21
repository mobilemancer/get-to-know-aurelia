import { autoinject } from 'aurelia-framework';

@autoinject()
export class SpecialFontCustomAttribute {
  constructor(private element: Element) {
    (<any>this.element).style.fontFamily = 'Comic Sans MS';
    (<any>this.element).style.fontSize = '102px';
    (<any>this.element).style.width = '48%';
    (<any>this.element).style.display = 'inline-block';
    (<any>this.element).style.backgroundImage = `-webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.03, rgb(250,3,3)),
    color-stop(0.52, rgb(240,255,127)),
    color-stop(0.76, rgb(42,24,173)))`;
    (<any>this.element).style.webkitBackgroundClip= 'text';
    (<any>this.element).style.webkitTextFillColor='transparent';
  }

  valueChanged(newValue, oldValue) {

  }
}

