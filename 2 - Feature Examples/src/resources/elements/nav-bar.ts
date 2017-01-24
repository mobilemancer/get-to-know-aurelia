import { Router } from 'aurelia-router';
import { bindable, autoinject } from 'aurelia-framework';

@autoinject
export class NavBar {
  public header: string;

  constructor(private router: Router) { }

  created() {
    this.header = this.router.currentInstruction.config.title || this.router.parent.currentInstruction.config.title;
    // if (!!this.router.currentInstruction) {
    // } else {
    //   this.header = this.router.parent.currentInstruction.config.title;
    // }
  }
}