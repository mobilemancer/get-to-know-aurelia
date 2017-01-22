import { Router } from 'aurelia-router';
import { bindable, autoinject } from 'aurelia-framework';

@autoinject
export class NavBar {
  public header: string;

  constructor(private router: Router) { }

  created() {
    this.header = this.router.currentInstruction.config.title;
  }
}