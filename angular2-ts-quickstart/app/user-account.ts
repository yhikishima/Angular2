import {Component, Input} from 'angular2/core';

@Component({
  selector: 'user-account',
  template: `
    userName: {{userName}}<br>
    fullName: {{fullName}}
  `,
  directives : [UserAccount]
})

export class UserAccount {
  @Input() userName: string;
  @Input() fullName: string;

  constructor() {

  }
}
