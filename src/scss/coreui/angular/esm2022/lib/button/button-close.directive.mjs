import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import { ButtonDirective } from './button.directive';
import * as i0 from "@angular/core";
export class ButtonCloseDirective extends ButtonDirective {
    constructor() {
        super(...arguments);
        /**
         * Change the default color to white.
         * @type boolean
         */
        this.white = false;
    }
    get hostClasses() {
        return {
            btn: true,
            'btn-close': true,
            'btn-close-white': this.white,
            [`btn-${this.size}`]: !!this.size,
            disabled: this.disabled,
            active: this.active
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonCloseDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: ButtonCloseDirective, isStandalone: true, selector: "[cButtonClose]", inputs: { white: ["white", "white", booleanAttribute] }, host: { properties: { "class": "this.hostClasses" } }, usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cButtonClose]',
                    standalone: true
                }]
        }], propDecorators: { white: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNsb3NlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYnV0dG9uL2J1dHRvbi1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFNckQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7SUFKekQ7O1FBTUU7OztXQUdHO1FBQ3FDLFVBQUssR0FBcUIsS0FBSyxDQUFDO0tBYXpFO0lBWEMsSUFDYSxXQUFXO1FBQ3RCLE9BQU87WUFDTCxHQUFHLEVBQUUsSUFBSTtZQUNULFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzdCLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQzsrR0FsQlUsb0JBQW9CO21HQUFwQixvQkFBb0Isc0ZBTVgsZ0JBQWdCOzs0RkFOekIsb0JBQW9CO2tCQUpoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFPeUMsS0FBSztzQkFBNUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFHekIsV0FBVztzQkFEdkIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjQnV0dG9uQ2xvc2VdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25DbG9zZURpcmVjdGl2ZSBleHRlbmRzIEJ1dHRvbkRpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgZGVmYXVsdCBjb2xvciB0byB3aGl0ZS5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHdoaXRlOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIG92ZXJyaWRlIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBidG46IHRydWUsXG4gICAgICAnYnRuLWNsb3NlJzogdHJ1ZSxcbiAgICAgICdidG4tY2xvc2Utd2hpdGUnOiB0aGlzLndoaXRlLFxuICAgICAgW2BidG4tJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlXG4gICAgfTtcbiAgfVxufVxuIl19