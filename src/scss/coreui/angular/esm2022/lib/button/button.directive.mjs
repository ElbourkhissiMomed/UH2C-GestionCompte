import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonDirective {
    constructor() {
        /**
         * Toggle the active state for the component. [docs]
         * @type boolean
         */
        this.active = false;
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
         * @type Colors
         */
        this.color = 'primary';
        /**
         * Toggle the disabled state for the component.
         * @type boolean
         */
        this.disabled = false;
        /**
         * Size the component small or large.
         * @type {'sm' | 'lg'}
         */
        this.size = '';
        /**
         * Specifies the type of button. Always specify the type attribute for the `<button>` element.
         * Different browsers may use different default types for the `<button>` element.
         */
        this.type = 'button';
    }
    get hostClasses() {
        return {
            btn: true,
            [`btn-${this.color}`]: !!this.color && !this.variant,
            [`btn-${this.variant}`]: !!this.variant && !this.color,
            [`btn-${this.variant}-${this.color}`]: !!this.variant && !!this.color,
            [`btn-${this.size}`]: !!this.size,
            [`${this.shape}`]: !!this.shape,
            disabled: this.disabled,
            active: this.active
        };
    }
    get ariaDisabled() {
        return this.disabled || null;
    }
    ;
    get isActive() {
        return this.active || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get tabIndex() {
        return this.disabled ? '-1' : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: ButtonDirective, isStandalone: true, selector: "[cButton]", inputs: { active: ["active", "active", booleanAttribute], color: "color", disabled: ["disabled", "disabled", booleanAttribute], shape: "shape", size: "size", type: "type", variant: "variant" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses", "attr.aria-disabled": "this.ariaDisabled", "attr.aria-pressed": "this.isActive", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.tabIndex" } }, exportAs: ["cButton"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cButton]',
                    exportAs: 'cButton',
                    standalone: true
                }]
        }], propDecorators: { active: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], variant: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], ariaDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], isActive: [{
                type: HostBinding,
                args: ['attr.aria-pressed']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVNoRixNQUFNLE9BQU8sZUFBZTtJQUw1QjtRQU9FOzs7V0FHRztRQUNxQyxXQUFNLEdBQXFCLEtBQUssQ0FBQztRQUV6RTs7O1dBR0c7UUFDTSxVQUFLLEdBQVksU0FBUyxDQUFDO1FBQ3BDOzs7V0FHRztRQUNxQyxhQUFRLEdBQXFCLEtBQUssQ0FBQztRQVEzRTs7O1dBR0c7UUFDTSxTQUFJLEdBQXNCLEVBQUUsQ0FBQztRQUV0Qzs7O1dBR0c7UUFFTSxTQUFJLEdBQWUsUUFBUSxDQUFDO0tBeUN0QztJQWpDQyxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUk7WUFDVCxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNwRCxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0RCxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDckUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNqQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFBQSxDQUFDO0lBRUYsSUFDSSxRQUFRO1FBQ1YsT0FBZ0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7SUFFRixJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7K0dBNUVVLGVBQWU7bUdBQWYsZUFBZSxvRkFNTixnQkFBZ0Isc0RBV2hCLGdCQUFnQjs7NEZBakJ6QixlQUFlO2tCQUwzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsU0FBUztvQkFDbkIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQU95QyxNQUFNO3NCQUE3QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU03QixLQUFLO3NCQUFiLEtBQUs7Z0JBS2tDLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBTTdCLEtBQUs7c0JBQWIsS0FBSztnQkFNRyxJQUFJO3NCQUFaLEtBQUs7Z0JBT0csSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLO2dCQU1HLE9BQU87c0JBQWYsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFlaEIsWUFBWTtzQkFEZixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsUUFBUTtzQkFEWCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFNNUIsWUFBWTtzQkFEZixXQUFXO3VCQUFDLGVBQWU7Z0JBTXhCLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnV0dG9uVHlwZSwgQ29sb3JzLCBTaGFwZXMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0J1dHRvbl0nLFxuICBleHBvcnRBczogJ2NCdXR0b24nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgYWN0aXZlIHN0YXRlIGZvciB0aGUgY29tcG9uZW50LiBbZG9jc11cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGFjdGl2ZTogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy4gW2RvY3NdXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I/OiBDb2xvcnMgPSAncHJpbWFyeSc7XG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGRpc2FibGVkIHN0YXRlIGZvciB0aGUgY29tcG9uZW50LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQ6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2VsZWN0IHRoZSBzaGFwZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBAdHlwZSB7ICdyb3VuZGVkJyB8ICdyb3VuZGVkLXRvcCcgfCAncm91bmRlZC1lbmQnIHwgJ3JvdW5kZWQtYm90dG9tJyB8ICdyb3VuZGVkLXN0YXJ0JyB8ICdyb3VuZGVkLWNpcmNsZScgfCAncm91bmRlZC1waWxsJyB8ICdyb3VuZGVkLTAnIHwgJ3JvdW5kZWQtMScgfCAncm91bmRlZC0yJyB8ICdyb3VuZGVkLTMnIHwgc3RyaW5nIH1cbiAgICovXG4gIEBJbnB1dCgpIHNoYXBlPzogU2hhcGVzO1xuXG4gIC8qKlxuICAgKiBTaXplIHRoZSBjb21wb25lbnQgc21hbGwgb3IgbGFyZ2UuXG4gICAqIEB0eXBlIHsnc20nIHwgJ2xnJ31cbiAgICovXG4gIEBJbnB1dCgpIHNpemU/OiAnc20nIHwgJ2xnJyB8ICcnID0gJyc7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgdHlwZSBvZiBidXR0b24uIEFsd2F5cyBzcGVjaWZ5IHRoZSB0eXBlIGF0dHJpYnV0ZSBmb3IgdGhlIGA8YnV0dG9uPmAgZWxlbWVudC5cbiAgICogRGlmZmVyZW50IGJyb3dzZXJzIG1heSB1c2UgZGlmZmVyZW50IGRlZmF1bHQgdHlwZXMgZm9yIHRoZSBgPGJ1dHRvbj5gIGVsZW1lbnQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudHlwZScpXG4gIEBJbnB1dCgpIHR5cGU6IEJ1dHRvblR5cGUgPSAnYnV0dG9uJztcblxuICAvKipcbiAgICogU2V0IHRoZSBidXR0b24gdmFyaWFudCB0byBhbiBvdXRsaW5lZCBidXR0b24gb3IgYSBnaG9zdCBidXR0b24uXG4gICAqIEB0eXBlIHsnZ2hvc3QnIHwgJ291dGxpbmUnfVxuICAgKi9cbiAgQElucHV0KCkgdmFyaWFudD86ICdnaG9zdCcgfCAnb3V0bGluZSc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBidG46IHRydWUsXG4gICAgICBbYGJ0bi0ke3RoaXMuY29sb3J9YF06ICEhdGhpcy5jb2xvciAmJiAhdGhpcy52YXJpYW50LFxuICAgICAgW2BidG4tJHt0aGlzLnZhcmlhbnR9YF06ICEhdGhpcy52YXJpYW50ICYmICF0aGlzLmNvbG9yLFxuICAgICAgW2BidG4tJHt0aGlzLnZhcmlhbnR9LSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLnZhcmlhbnQgJiYgISF0aGlzLmNvbG9yLFxuICAgICAgW2BidG4tJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgW2Ake3RoaXMuc2hhcGV9YF06ICEhdGhpcy5zaGFwZSxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZVxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXG4gIGdldCBhcmlhRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgbnVsbDtcbiAgfTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1wcmVzc2VkJylcbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICByZXR1cm4gPGJvb2xlYW4+dGhpcy5hY3RpdmUgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBhdHRyRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnJyA6IG51bGw7XG4gIH07XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgZ2V0IHRhYkluZGV4KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJy0xJyA6IG51bGw7XG4gIH1cbn1cbiJdfQ==