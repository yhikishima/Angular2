import {Component, Input} from 'angular2/core';
import {Logger} from './logger.service';
import {UserAccount} from './user-account';
import {Router, ...} from 'angular2/router';
import {App2Component} from './app2.component';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  styleUrls: ['/app/app.component.css'],
  directives : [AppComponent, UserAccount],
  providers  : [Logger]
})

// @RouteConfig({
//   path: '/apps',
//   name: 'Apps',
//   component: App2Component
// })

export class AppComponent {
  @Input() userName: string;
  @Input() fullName: string;

  constructor(private _service: Logger) {
    this.clickMessage = "initializa!!!";
    this.valName = '';
    // this.router = router;
  }

  onClick(){
    this.clickMessage ='押したなぁ！';
    this._service.log('ログが出たね');
  }

  toApp() {
    // this.router.navigate(['./apps', {param: 3}]);
  }
}
