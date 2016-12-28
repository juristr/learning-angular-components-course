import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tab',
    template: `
        <div class="tabs-panel" [hidden]="!isActive">
            <ng-content></ng-content>
        </div>
    `
})
export class TabComponent implements OnInit {
    @Input() title: string;
    isActive: boolean = false;

    ngOnInit() {

    }
}