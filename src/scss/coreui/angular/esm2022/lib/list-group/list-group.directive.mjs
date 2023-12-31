import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ListGroupDirective {
    constructor() {
        /**
         * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
         * @type boolean
         */
        this.flush = false;
    }
    get hostClasses() {
        return {
            'list-group': true,
            'list-group-horizontal': this.horizontal === true || this.horizontal === '',
            [`list-group-horizontal-${this.horizontal}`]: !!this.horizontal && typeof this.horizontal !== 'boolean',
            'list-group-flush': this.flush
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ListGroupDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: ListGroupDirective, isStandalone: true, selector: "[cListGroup]", inputs: { flush: ["flush", "flush", booleanAttribute], horizontal: "horizontal" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ListGroupDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cListGroup]',
                    standalone: true
                }]
        }], propDecorators: { flush: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], horizontal: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1ncm91cC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2xpc3QtZ3JvdXAvbGlzdC1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU9oRixNQUFNLE9BQU8sa0JBQWtCO0lBSi9CO1FBTUU7OztXQUdHO1FBQ3FDLFVBQUssR0FBcUIsS0FBSyxDQUFDO0tBaUJ6RTtJQVZDLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQix1QkFBdUIsRUFBRSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUU7WUFDM0UsQ0FBQyx5QkFBeUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVM7WUFDdkcsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDL0IsQ0FBQztJQUNKLENBQUM7K0dBckJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLG9GQU1ULGdCQUFnQjs7NEZBTnpCLGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQU95QyxLQUFLO3NCQUE1QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUs3QixVQUFVO3NCQUFsQixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpemVzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NMaXN0R3JvdXBdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0R3JvdXBEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgc29tZSBib3JkZXJzIGFuZCByb3VuZGVkIGNvcm5lcnMgdG8gcmVuZGVyIGxpc3QgZ3JvdXAgaXRlbXMgZWRnZS10by1lZGdlIGluIGEgcGFyZW50IGNvbXBvbmVudCAoZS5nLiwgYDxDQ2FyZD5gKS5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGZsdXNoOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgaG9yaXpvbnRhbCBsYXlvdXQgdHlwZS5cbiAgICovXG4gIEBJbnB1dCgpIGhvcml6b250YWw/OiBib29sZWFuIHwgU2l6ZXM7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnbGlzdC1ncm91cCc6IHRydWUsXG4gICAgICAnbGlzdC1ncm91cC1ob3Jpem9udGFsJzogdGhpcy5ob3Jpem9udGFsID09PSB0cnVlIHx8IHRoaXMuaG9yaXpvbnRhbCA9PT0gJycsXG4gICAgICBbYGxpc3QtZ3JvdXAtaG9yaXpvbnRhbC0ke3RoaXMuaG9yaXpvbnRhbH1gXTogISF0aGlzLmhvcml6b250YWwgJiYgdHlwZW9mIHRoaXMuaG9yaXpvbnRhbCAhPT0gJ2Jvb2xlYW4nLFxuICAgICAgJ2xpc3QtZ3JvdXAtZmx1c2gnOiB0aGlzLmZsdXNoXG4gICAgfTtcbiAgfVxuXG59XG5cbiJdfQ==