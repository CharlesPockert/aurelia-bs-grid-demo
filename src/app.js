import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  moduleId: 'remote-data',      nav: true, title:'Remote Data' },
      { route: 'local',  moduleId: 'local-data',      nav: true, title:'Local Data' },
      { route: 'templates',  moduleId: 'column-templates',      nav: true, title:'Column Templates' },
      { route: 'selection',  moduleId: 'row-selection',      nav: true, title:'Selection' },
  	]);

    this.router = router;
  }
}
