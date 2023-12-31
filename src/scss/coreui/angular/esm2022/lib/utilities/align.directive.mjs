import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AlignDirective {
    get hostClasses() {
        return {
            [`align-${this.align}`]: !!this.align,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AlignDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: AlignDirective, isStandalone: true, selector: "[cAlign]", inputs: { align: ["cAlign", "align"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AlignDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cAlign]',
                    standalone: true
                }]
        }], propDecorators: { align: [{
                type: Input,
                args: ['cAlign']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpZ24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi91dGlsaXRpZXMvYWxpZ24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGNBQWM7SUFPekIsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDdEMsQ0FBQztJQUNKLENBQUM7K0dBWlUsY0FBYzttR0FBZCxjQUFjOzs0RkFBZCxjQUFjO2tCQUoxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBTWtCLEtBQUs7c0JBQXJCLEtBQUs7dUJBQUMsUUFBUTtnQkFHWCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGlnbm1lbnQgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0FsaWduXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQWxpZ25EaXJlY3RpdmUge1xuICAvKipcbiAgICogU2V0IHZlcnRpY2FsIGFsaWdubWVudCBvZiBpbmxpbmUsIGlubGluZS1ibG9jaywgaW5saW5lLXRhYmxlLCBhbmQgdGFibGUgY2VsbCBlbGVtZW50c1xuICAgKiBAdHlwZSBBbGlnbm1lbnRcbiAgICovXG4gIEBJbnB1dCgnY0FsaWduJykgYWxpZ24/OiBBbGlnbm1lbnQ7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBbYGFsaWduLSR7dGhpcy5hbGlnbn1gXTogISF0aGlzLmFsaWduLFxuICAgIH07XG4gIH1cblxufVxuIl19