import {Component, Input} from 'angular2/core';
import {Logger} from './logger.service';
import {UserAccount} from './user-account';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {App2Component} from './app2.component';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives : [AppComponent, UserAccount],
  providers  : [Logger]
})

// @RouteConfig(
//   {
//     path: '/page1',
//     name: 'Page1',
//     useAsDefault: true,
//     component: page1Component
//   },
//   {
//     path: '/page2',
//     name: 'Page2',
//     component: page2Component
//   }
// )

export class AppComponent {
  @Input() userName: string;
  @Input() fullName: string;

  constructor(private _service: Logger) {
    this.clickMessage = "initializa!!!";
    this.valName = '';
    // this.router = router;
    this.lists = [
      {name: '森', huri: 'もり', schoolYear: '1年', set: '1組'},
      {name: '森田', huri: 'もりた', schoolYear: '2年', set: '2組'},
      {name: '田中', huri: 'たなか', schoolYear: '3年', set: '3組'}
    ];
  }

  onClick(){
    this.clickMessage ='押したなぁ！';
    this._service.log('ログが出たね');
  }

  toApp() {
    // this.router.navigate(['./apps', {param: 3}]);
  }
}
