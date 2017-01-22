import { Router } from 'aurelia-router';
import { bindable, autoinject } from 'aurelia-framework';

@autoinject
export class NavBar {
  @bindable value;
  public header: string;

  constructor(private router: Router) {
    router.currentInstruction
  }

  created() {
    this.header = this.router.currentInstruction.config.title;
  }

  valueChanged(newValue, oldValue) { }
}

