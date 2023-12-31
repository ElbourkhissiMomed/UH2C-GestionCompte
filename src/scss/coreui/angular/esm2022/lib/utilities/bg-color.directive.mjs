import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BgColorDirective {
    get hostClasses() {
        return {
            [`bg-${this.color}`]: !!this.color,
            'bg-gradient': this.gradient,
        };
    }
    constructor() {
        /**
         * Set the background of an element to any contextual class
         */
        this.color = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BgColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: BgColorDirective, isStandalone: true, selector: "[cBgColor]", inputs: { color: ["cBgColor", "color"], gradient: "gradient" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BgColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cBgColor]',
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input,
                args: ['cBgColor']
            }], gradient: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmctY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi91dGlsaXRpZXMvYmctY29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGdCQUFnQjtJQVkzQixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNsQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRDtRQWxCQTs7V0FFRztRQUNnQixVQUFLLEdBQXFCLEVBQUUsQ0FBQztJQWVoQyxDQUFDOytHQXBCTixnQkFBZ0I7bUdBQWhCLGdCQUFnQjs7NEZBQWhCLGdCQUFnQjtrQkFKNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzBFQU1vQixLQUFLO3NCQUF2QixLQUFLO3VCQUFDLFVBQVU7Z0JBS1IsUUFBUTtzQkFBaEIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kQ29sb3JzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NCZ0NvbG9yXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQmdDb2xvckRpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYmFja2dyb3VuZCBvZiBhbiBlbGVtZW50IHRvIGFueSBjb250ZXh0dWFsIGNsYXNzXG4gICAqL1xuICBASW5wdXQoJ2NCZ0NvbG9yJykgY29sb3I6IEJhY2tncm91bmRDb2xvcnMgPSAnJztcbiAgLyoqXG4gICAqIEFkZCBsaW5lYXIgZ3JhZGllbnQgYXMgYmFja2dyb3VuZCBpbWFnZSB0byB0aGUgYmFja2dyb3VuZHMuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIGdyYWRpZW50PzogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IsXG4gICAgICAnYmctZ3JhZGllbnQnOiB0aGlzLmdyYWRpZW50LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19