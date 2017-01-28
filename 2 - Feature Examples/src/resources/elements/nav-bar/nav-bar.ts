import { autoinject } from 'aurelia-framework';
import { computedFrom } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class NavBar {
  // get => computed! Dirty checked 8 times/s... OBS! Make sure to throttle 
  // @computedFrom('router.currentInstruction.config.title')
  public get header(): string {
    return this.router.currentInstruction.config.title || this.router.parent.currentInstruction.config.title;
  }

  constructor(private router: Router) { }
}