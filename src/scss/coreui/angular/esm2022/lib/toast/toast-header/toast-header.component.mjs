import { Component, HostBinding, Input, Optional } from '@angular/core';
import { NgIf } from '@angular/common';
import { ButtonCloseDirective } from '../../button';
import { ToastCloseDirective } from '../toast-close.directive';
import * as i0 from "@angular/core";
import * as i1 from "../toast/toast.component";
export class ToastHeaderComponent {
    constructor(toast) {
        this.toast = toast;
        /**
         * Add close button to a toast header
         * @type boolean
         */
        this.closeButton = true;
        this.toastHeaderClass = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastHeaderComponent, deps: [{ token: i1.ToastComponent, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ToastHeaderComponent, isStandalone: true, selector: "c-toast-header", inputs: { closeButton: "closeButton" }, host: { properties: { "class.toast-header": "this.toastHeaderClass" } }, exportAs: ["cToastHeader"], ngImport: i0, template: "<ng-container>\n  <ng-content></ng-content>\n  <button *ngIf=\"closeButton\" [cToastClose]=\"toast\" [style]=\"{outline: 0}\" aria-label=\"close\" cButtonClose class=\"ms-auto\"></button>\n</ng-container>\n", dependencies: [{ kind: "directive", type: ToastCloseDirective, selector: "[cToastClose]", inputs: ["cToastClose"], exportAs: ["cToastClose"] }, { kind: "directive", type: ButtonCloseDirective, selector: "[cButtonClose]", inputs: ["white"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toast-header', exportAs: 'cToastHeader', standalone: true, imports: [ToastCloseDirective, ButtonCloseDirective, NgIf], template: "<ng-container>\n  <ng-content></ng-content>\n  <button *ngIf=\"closeButton\" [cToastClose]=\"toast\" [style]=\"{outline: 0}\" aria-label=\"close\" cButtonClose class=\"ms-auto\"></button>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ToastComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { closeButton: [{
                type: Input
            }], toastHeaderClass: [{
                type: HostBinding,
                args: ['class.toast-header']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdG9hc3QvdG9hc3QtaGVhZGVyL3RvYXN0LWhlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RvYXN0L3RvYXN0LWhlYWRlci90b2FzdC1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdkMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXBELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFTL0QsTUFBTSxPQUFPLG9CQUFvQjtJQVUvQixZQUNxQixLQUFzQjtRQUF0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQVQzQzs7O1dBR0c7UUFDTSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVPLHFCQUFnQixHQUFHLElBQUksQ0FBQztJQUl2RCxDQUFDOytHQVpNLG9CQUFvQjttR0FBcEIsb0JBQW9CLHVOQ2RqQyxnTkFJQSw0Q0RRWSxtQkFBbUIsOEdBQUUsb0JBQW9CLDhFQUFFLElBQUk7OzRGQUU5QyxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UsZ0JBQWdCLFlBRWhCLGNBQWMsY0FDWixJQUFJLFdBQ1AsQ0FBQyxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUM7OzBCQWF2RCxRQUFROzRDQUxGLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRTZCLGdCQUFnQjtzQkFBbEQsV0FBVzt1QkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBCdXR0b25DbG9zZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2J1dHRvbic7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4uL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdENsb3NlRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9hc3QtY2xvc2UuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy10b2FzdC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZXhwb3J0QXM6ICdjVG9hc3RIZWFkZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbVG9hc3RDbG9zZURpcmVjdGl2ZSwgQnV0dG9uQ2xvc2VEaXJlY3RpdmUsIE5nSWZdXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0SGVhZGVyQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogQWRkIGNsb3NlIGJ1dHRvbiB0byBhIHRvYXN0IGhlYWRlclxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBjbG9zZUJ1dHRvbiA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b2FzdC1oZWFkZXInKSB0b2FzdEhlYWRlckNsYXNzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdG9hc3Q/OiBUb2FzdENvbXBvbmVudFxuICApIHsgfVxuXG59XG4iLCI8bmctY29udGFpbmVyPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxidXR0b24gKm5nSWY9XCJjbG9zZUJ1dHRvblwiIFtjVG9hc3RDbG9zZV09XCJ0b2FzdFwiIFtzdHlsZV09XCJ7b3V0bGluZTogMH1cIiBhcmlhLWxhYmVsPVwiY2xvc2VcIiBjQnV0dG9uQ2xvc2UgY2xhc3M9XCJtcy1hdXRvXCI+PC9idXR0b24+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==