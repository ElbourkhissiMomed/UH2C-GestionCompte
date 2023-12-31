import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class PlaceholderDirective {
    constructor() {
        this._visible = false;
    }
    /**
     * placeholder toggler
     * @type boolean
     * @default false
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
    }
    get visible() {
        return this._visible;
    }
    get ariaHidden() {
        return this.visible ? null : true;
    }
    ;
    get hostClasses() {
        return {
            'placeholder': this.visible,
            [`placeholder-${this.size}`]: !!this.size
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PlaceholderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PlaceholderDirective, isStandalone: true, selector: "[cPlaceholder]", inputs: { visible: ["cPlaceholder", "visible"], size: ["cPlaceholderSize", "size"] }, host: { properties: { "attr.aria-hidden": "this.ariaHidden", "class": "this.hostClasses" } }, exportAs: ["cPlaceholder"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PlaceholderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPlaceholder]',
                    exportAs: 'cPlaceholder',
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { visible: [{
                type: Input,
                args: ['cPlaceholder']
            }], size: [{
                type: Input,
                args: ['cPlaceholderSize']
            }], ariaHidden: [{
                type: HostBinding,
                args: ['attr.aria-hidden']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFPNUUsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQjtRQWNRLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFkbEIsQ0FBQztJQUVqQjs7OztPQUlHO0lBQ0gsSUFDSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQVFELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUFBLENBQUM7SUFFRixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzNCLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7U0FDMUMsQ0FBQztJQUNKLENBQUM7K0dBcENVLG9CQUFvQjttR0FBcEIsb0JBQW9COzs0RkFBcEIsb0JBQW9CO2tCQUxoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxjQUFjO29CQUN4QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7MEVBYUssT0FBTztzQkFEVixLQUFLO3VCQUFDLGNBQWM7Z0JBWU0sSUFBSTtzQkFBOUIsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBR3JCLFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NQbGFjZWhvbGRlcl0nLFxuICBleHBvcnRBczogJ2NQbGFjZWhvbGRlcicsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJEaXJlY3RpdmUge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXNpYmxlOiBCb29sZWFuSW5wdXQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogcGxhY2Vob2xkZXIgdG9nZ2xlclxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBASW5wdXQoJ2NQbGFjZWhvbGRlcicpXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cbiAgcHJpdmF0ZSBfdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTaXplIHRoZSBwbGFjZWhvbGRlciBleHRyYSBzbWFsbCwgc21hbGwsIGxhcmdlLlxuICAgKi9cbiAgQElucHV0KCdjUGxhY2Vob2xkZXJTaXplJykgc2l6ZT86ICd4cycgfCAnc20nIHwgJ2xnJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKVxuICBnZXQgYXJpYUhpZGRlbigpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZSA/IG51bGwgOiB0cnVlO1xuICB9O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3BsYWNlaG9sZGVyJzogdGhpcy52aXNpYmxlLFxuICAgICAgW2BwbGFjZWhvbGRlci0ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemVcbiAgICB9O1xuICB9XG59XG4iXX0=