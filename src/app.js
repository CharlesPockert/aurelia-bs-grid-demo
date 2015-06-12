import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  moduleId: './remote-data',      nav: true, title:'Remote Data' },
    ]);

    this.router = router;
  }
}
