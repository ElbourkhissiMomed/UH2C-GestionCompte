import { ContentChild, Directive, HostBinding, Input } from '@angular/core';
import { PlaceholderDirective } from './placeholder.directive';
import * as i0 from "@angular/core";
export class PlaceholderAnimationDirective {
    constructor() {
        this.#animate = false;
    }
    #animate;
    get hostClasses() {
        return {
            [`placeholder-${this.animation}`]: this.#animate && !!this.animation
        };
    }
    ngAfterContentInit() {
        this.#animate = this.placeholder?.visible;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PlaceholderAnimationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PlaceholderAnimationDirective, isStandalone: true, selector: "[cPlaceholderAnimation]", inputs: { animation: ["cPlaceholderAnimation", "animation"] }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "placeholder", first: true, predicate: PlaceholderDirective, descendants: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PlaceholderAnimationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPlaceholderAnimation]',
                    standalone: true
                }]
        }], propDecorators: { animation: [{
                type: Input,
                args: ['cPlaceholderAnimation']
            }], placeholder: [{
                type: ContentChild,
                args: [PlaceholderDirective]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXItYW5pbWF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXItYW5pbWF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFNL0QsTUFBTSxPQUFPLDZCQUE2QjtJQUoxQztRQWVFLGFBQVEsR0FBWSxLQUFLLENBQUM7S0FZM0I7SUFaQyxRQUFRLENBQWtCO0lBRTFCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxDQUFDLGVBQWUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDckUsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQztJQUM1QyxDQUFDOytHQXRCVSw2QkFBNkI7bUdBQTdCLDZCQUE2QixrUEFTMUIsb0JBQW9COzs0RkFUdkIsNkJBQTZCO2tCQUp6QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFRaUMsU0FBUztzQkFBeEMsS0FBSzt1QkFBQyx1QkFBdUI7Z0JBRU0sV0FBVztzQkFBOUMsWUFBWTt1QkFBQyxvQkFBb0I7Z0JBSzlCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BsYWNlaG9sZGVyLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjUGxhY2Vob2xkZXJBbmltYXRpb25dJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBQbGFjZWhvbGRlckFuaW1hdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIC8qKlxuICAgKiBBbmltYXRpb24gdHlwZSBmb3IgcGxhY2Vob2xkZXJcbiAgICogQHR5cGUgJ2dsb3cnIHwgJ3dhdmUnXG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKi9cbiAgQElucHV0KCdjUGxhY2Vob2xkZXJBbmltYXRpb24nKSBhbmltYXRpb24/OiAnZ2xvdycgfCAnd2F2ZSc7XG5cbiAgQENvbnRlbnRDaGlsZChQbGFjZWhvbGRlckRpcmVjdGl2ZSkgcGxhY2Vob2xkZXIhOiBQbGFjZWhvbGRlckRpcmVjdGl2ZTtcblxuICAjYW5pbWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgW2BwbGFjZWhvbGRlci0ke3RoaXMuYW5pbWF0aW9ufWBdOiB0aGlzLiNhbmltYXRlICYmICEhdGhpcy5hbmltYXRpb25cbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuI2FuaW1hdGUgPSB0aGlzLnBsYWNlaG9sZGVyPy52aXNpYmxlO1xuICB9XG59XG4iXX0=