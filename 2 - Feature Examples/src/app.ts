import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';

@autoinject
export class App {
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;

    config.title = 'Demos';
    config.map([
      { route: ['', 'home', '0'], name: 'home', moduleId: 'views/0 - CLI Result/index', title: 'CLI New', nav: 0 },
      { route: '1', name: '1', moduleId: 'views/1 - Data Binding/index', title: 'Data Binding', nav: 1 },
      { route: '2', name: '2', moduleId: 'views/2 - Custom Attributes/index', title: 'Custom Attributes', nav: 2 },
      { route: '3', name: '3', moduleId: 'views/3 - Value Converters/index', title: 'Value Converters', nav: 3 },
      { route: '4', name: '4', moduleId: 'views/4 - Messaging/index', title: 'Messaging', nav: 4 },
      { route: '5', name: '5', moduleId: 'views/5 - Routing/index', title: 'Routing', nav: 5 },
    ]);
    config.mapUnknownRoutes('views/0/index');
  }
}