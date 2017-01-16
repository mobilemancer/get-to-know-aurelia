import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router } from 'aurelia-router';

@autoinject
export class App {
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;

    config.title = 'SWETUGG';
    config.map([
      { route: ['', 'home', '0'], name: 'home', moduleId: 'views/0/index', title: '0', nav: 0 },
      { route: '1', name: '1', moduleId: 'views/1/index', title: '1', nav: 1 },
      { route: '2', name: '2', moduleId: 'views/2/index', title: '2', nav: 2 },

    ]);
    config.mapUnknownRoutes('views/0/index');
  }
}