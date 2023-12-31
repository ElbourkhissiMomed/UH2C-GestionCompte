import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class NavItemComponent {
    get hostClasses() {
        return {
            'nav-item': true
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: NavItemComponent, isStandalone: true, selector: "c-nav-item", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-nav-item', template: `<ng-content></ng-content>`, standalone: true, styles: [":host{display:list-item;text-align:match-parent;text-align:-webkit-match-parent}\n"] }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9uYXYvbmF2LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVF2RCxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO0lBQ0osQ0FBQzsrR0FQVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQiw2SEFKakIsMkJBQTJCOzs0RkFJMUIsZ0JBQWdCO2tCQU41QixTQUFTOytCQUNFLFlBQVksWUFDWiwyQkFBMkIsY0FFekIsSUFBSTs4QkFLWixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1uYXYtaXRlbScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogWycuL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTmF2SXRlbUNvbXBvbmVudCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnbmF2LWl0ZW0nOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19