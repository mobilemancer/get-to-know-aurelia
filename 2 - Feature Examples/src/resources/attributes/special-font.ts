import { autoinject } from 'aurelia-framework';

@autoinject()
export class SpecialFontCustomAttribute {

  constructor(private element: Element) {
    const htmlElement = this.element as HTMLElement;
    htmlElement.style.fontFamily = 'Comic Sans MS';
    htmlElement.style.fontSize = '102px';
    htmlElement.style.width = '48%';
    htmlElement.style.display = 'inline-block';
    htmlElement.style.backgroundImage = `-webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0.03, rgb(250,3,3)),
    color-stop(0.52, rgb(240,255,127)),
    color-stop(0.76, rgb(42,24,173)))`;
    htmlElement.style.webkitBackgroundClip = 'text';
    htmlElement.style.webkitTextFillColor = 'transparent';
    htmlElement.style.transform = 'rotate(-45deg)';
  }

  valueChanged(newValue, oldValue) { }

}

