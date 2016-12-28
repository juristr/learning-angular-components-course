import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `
    <p>Hello, {{ who }}</p>
    <button (click)="onSayHelloClicked()">Say Hello</button>
`
})
export class HelloAngular2Component {

    @Input() who: string;
    @Output() sayHello: EventEmitter<string> = new EventEmitter();

    onSayHelloClicked() {
        this.sayHello.emit(`Hello ${this.who}`);
    }

}