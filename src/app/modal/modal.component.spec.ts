import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';

import { ModalComponent } from './modal.component';

@Component({
    selector: 'test-cmp',
    template: `
        <modal>
            <h1 title>Modal title</h1>
            <div class="body" content>Body content</div>
        </modal>
    `
})
class TestComponent { }

describe('TestComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ModalComponent, TestComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('should project title and content area', () => {
        let el = fixture.debugElement.children[0].nativeElement;
        expect(el.querySelectorAll('h1')[0].textContent).toEqual('Modal title');
        expect(el.querySelectorAll('div.body')[0].textContent).toEqual('Body content');
    });

    it('should set the isOpen flag when calling .open()', () => {
        let modalComponent = fixture.debugElement.children[0].componentInstance;
        modalComponent.open();
        expect(modalComponent.isOpen).toBeTruthy();
    });

    it('should close when clicking the ok button', async(() => {
        let instance = fixture.debugElement.children[0].componentInstance;
        let el = fixture.debugElement.children[0].nativeElement;

        // open the dialog
        instance.open(()=>{});
        expect(instance.isOpen).toBeTruthy();
        fixture.detectChanges();

        expect(el.querySelectorAll('.md-backdrop')[0].hidden).toBeFalsy();
        // close it again by clicking the button
        el.querySelectorAll('button')[0].click();

        fixture.detectChanges();
        expect(instance.isOpen).toBeFalsy();
        expect(el.querySelectorAll('.md-backdrop')[0].hidden).toBeTruthy();
    }));

});
