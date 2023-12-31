import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ListGroupItemDirective {
    constructor(hostElement) {
        this.hostElement = hostElement;
        /**
         * Set disabled attr for the host element. [docs]
         * @type boolean
         */
        this.disabled = false;
    }
    get isDisabled() {
        return this.disabled || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get getTabindex() {
        return this.disabled ? '-1' : null;
    }
    get ariaCurrent() {
        return !!this.active;
    }
    get hostClasses() {
        const host = this.hostElement.nativeElement;
        return {
            'list-group-item': true,
            'list-group-item-action': host.nodeName === 'A' || host.nodeName === 'BUTTON',
            active: !!this.active,
            disabled: this.isDisabled,
            [`list-group-item-${this.color}`]: !!this.color
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ListGroupItemDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: ListGroupItemDirective, isStandalone: true, selector: "[cListGroupItem], c-list-group-item", inputs: { active: "active", color: "color", disabled: ["disabled", "disabled", booleanAttribute] }, host: { properties: { "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex", "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses" } }, exportAs: ["cListGroupItem"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ListGroupItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cListGroupItem], c-list-group-item',
                    exportAs: 'cListGroupItem',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { active: [{
                type: Input
            }], color: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1ncm91cC1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbGlzdC1ncm91cC9saXN0LWdyb3VwLWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQWMsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRNUYsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUNVLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBZWpDOzs7V0FHRztRQUNxQyxhQUFRLEdBQXFCLEtBQUssQ0FBQztJQWxCdkUsQ0FBQztJQW9CTCxJQUNJLFVBQVU7UUFDWixPQUFnQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELElBQXNDLFdBQVc7UUFDL0MsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsTUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ3pELE9BQU87WUFDTCxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLHdCQUF3QixFQUFFLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUTtZQUM3RSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3JCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN6QixDQUFDLG1CQUFtQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDaEQsQ0FBQztJQUNKLENBQUM7K0dBckRVLHNCQUFzQjttR0FBdEIsc0JBQXNCLHNKQXNCYixnQkFBZ0I7OzRGQXRCekIsc0JBQXNCO2tCQUxsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQ0FBcUM7b0JBQy9DLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtpR0FXVSxNQUFNO3NCQUFkLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQU1rQyxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUdsQyxVQUFVO3NCQURiLFdBQVc7dUJBQUMsb0JBQW9CO2dCQU03QixZQUFZO3NCQURmLFdBQVc7dUJBQUMsZUFBZTtnQkFNeEIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLGVBQWU7Z0JBS1UsV0FBVztzQkFBaEQsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBSzVCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjTGlzdEdyb3VwSXRlbV0sIGMtbGlzdC1ncm91cC1pdGVtJyxcbiAgZXhwb3J0QXM6ICdjTGlzdEdyb3VwSXRlbScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEdyb3VwSXRlbURpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGFjdGl2ZSBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0cyB0aGUgY29sb3IgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I/OiBDb2xvcnM7XG5cbiAgLyoqXG4gICAqIFNldCBkaXNhYmxlZCBhdHRyIGZvciB0aGUgaG9zdCBlbGVtZW50LiBbZG9jc11cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGRpc2FibGVkOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGlzYWJsZWQnKVxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgcmV0dXJuIDxib29sZWFuPnRoaXMuZGlzYWJsZWQgfHwgbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXG4gIGdldCBhdHRyRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnJyA6IG51bGw7XG4gIH07XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgZ2V0IGdldFRhYmluZGV4KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJy0xJyA6IG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1jdXJyZW50JykgZ2V0IGFyaWFDdXJyZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuYWN0aXZlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIGNvbnN0IGhvc3Q6IEhUTUxFbGVtZW50ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiB7XG4gICAgICAnbGlzdC1ncm91cC1pdGVtJzogdHJ1ZSxcbiAgICAgICdsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uJzogaG9zdC5ub2RlTmFtZSA9PT0gJ0EnIHx8IGhvc3Qubm9kZU5hbWUgPT09ICdCVVRUT04nLFxuICAgICAgYWN0aXZlOiAhIXRoaXMuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcbiAgICAgIFtgbGlzdC1ncm91cC1pdGVtLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=