import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NavComponent {
    get hostClasses() {
        return {
            nav: true,
            [`nav-${this.layout}`]: !!this.layout,
            [`nav-${this.variant}`]: !!this.variant
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: NavComponent, isStandalone: true, selector: "c-nav", inputs: { layout: "layout", variant: "variant" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host .nav-link:focus{outline:0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-nav', template: `<ng-content></ng-content>`, standalone: true, styles: [":host .nav-link:focus{outline:0}\n"] }]
        }], propDecorators: { layout: [{
                type: Input
            }], variant: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbmF2L25hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVE5RCxNQUFNLE9BQU8sWUFBWTtJQVl2QixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUk7WUFDVCxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3JDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDeEMsQ0FBQztJQUNKLENBQUM7K0dBbkJVLFlBQVk7bUdBQVosWUFBWSwwS0FKYiwyQkFBMkI7OzRGQUkxQixZQUFZO2tCQU54QixTQUFTOytCQUNFLE9BQU8sWUFDUCwyQkFBMkIsY0FFekIsSUFBSTs4QkFPUCxNQUFNO3NCQUFkLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1uYXYnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZVVybHM6IFsnLi9uYXYuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQge1xuICAvKipcbiAgICogU3BlY2lmeSBhIGxheW91dCB0eXBlIGZvciBjb21wb25lbnQuXG4gICAqIEB0eXBlIHsnZmlsbCcgfCAnanVzdGlmaWVkJ31cbiAgICovXG4gIEBJbnB1dCgpIGxheW91dD86ICdmaWxsJyB8ICdqdXN0aWZpZWQnO1xuICAvKipcbiAgICogU2V0IHRoZSBuYXYgdmFyaWFudCB0byB0YWJzIG9yIHBpbGxzLlxuICAgKiBAdHlwZSB7J3RhYnMnIHwgJ3BpbGxzJyB8ICd1bmRlcmxpbmUnfVxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudD86ICcnIHwgJ3RhYnMnIHwgJ3BpbGxzJyA7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXY6IHRydWUsXG4gICAgICBbYG5hdi0ke3RoaXMubGF5b3V0fWBdOiAhIXRoaXMubGF5b3V0LFxuICAgICAgW2BuYXYtJHt0aGlzLnZhcmlhbnR9YF06ICEhdGhpcy52YXJpYW50XG4gICAgfTtcbiAgfVxufVxuIl19