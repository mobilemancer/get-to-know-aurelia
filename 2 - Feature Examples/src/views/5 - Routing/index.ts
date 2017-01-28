import { autoinject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class Index {
    public router: Router

    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;

        config.title = 'Child router';
        config.map([
            { route: '', moduleId: 'views/6/index' },
            { route: '1', name: '1', moduleId: 'views/1 - Data Binding/index', title: 'Data Binding', nav: 1 },
            { route: '2', name: '2', moduleId: 'views/2 - Custom Attributes/index', title: 'Custom Attributes', nav: 2 },
            { route: '3', name: '3', moduleId: 'views/3 - Value Converters/index', title: 'Value Converters', nav: 3 },
            { route: '4', name: '4', moduleId: 'views/4 - Messaging/index', title: 'Messaging', nav: 4 },
            { route: '6', name: '6', moduleId: 'views/6/index', title: 'Routing', nav: 5 },
            { route: '7', name: '7', moduleId: 'views/7 - Custom Elements/index', title: 'Custom Elements', nav: 6 }
        ]);
    }
}