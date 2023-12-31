import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CalloutComponent {
    get hostClasses() {
        return {
            callout: true,
            [`callout-${this.color}`]: !!this.color
        };
    }
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CalloutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: CalloutComponent, isStandalone: true, selector: "c-callout, [cCallout]", inputs: { color: "color" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CalloutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-callout, [cCallout]', template: `<ng-content></ng-content>`, standalone: true, styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbG91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2NhbGxvdXQvY2FsbG91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVM5RCxNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCLElBQ0ksV0FBVztRQUViLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSTtZQUNiLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQzsrR0FqQk4sZ0JBQWdCO21HQUFoQixnQkFBZ0Isb0tBSmpCLDJCQUEyQjs7NEZBSTFCLGdCQUFnQjtrQkFONUIsU0FBUzsrQkFDRSx1QkFBdUIsWUFDdkIsMkJBQTJCLGNBRXpCLElBQUk7MEVBUVAsS0FBSztzQkFBYixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtY2FsbG91dCwgW2NDYWxsb3V0XScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogWycuL2NhbGxvdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBDYWxsb3V0Q29tcG9uZW50IHtcblxuICAvKipcbiAgICogU2V0cyB0aGUgY29sb3IgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I/OiBDb2xvcnM7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbGxvdXQ6IHRydWUsXG4gICAgICBbYGNhbGxvdXQtJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3JcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19