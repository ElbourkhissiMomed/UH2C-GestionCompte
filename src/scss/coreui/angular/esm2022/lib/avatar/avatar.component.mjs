import { Component, HostBinding, Input } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
export class AvatarComponent {
    constructor() {
        /**
         * Size the component small, large, or extra large.
         * @default 'md'
         */
        this.size = 'md';
    }
    get statusClass() {
        return {
            'avatar-status': true,
            [`bg-${this.status}`]: !!this.status
        };
    }
    get hostClasses() {
        return {
            avatar: true,
            [`avatar-${this.size}`]: !!this.size,
            [`bg-${this.color}`]: !!this.color,
            [`${this.shape}`]: !!this.shape,
            [`text-${this.textColor}`]: !!this.textColor
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: AvatarComponent, isStandalone: true, selector: "c-avatar", inputs: { color: "color", shape: "shape", size: "size", src: "src", status: "status", textColor: "textColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<ng-container>\n  <ng-container *ngTemplateOutlet=\"defaultImageTemplate\"></ng-container>\n  <span *ngIf=\"!!status\" [ngClass]=\"statusClass\"></span>\n</ng-container>\n\n<ng-template #defaultImageTemplate>\n  <img *ngIf=\"!!src; else imageContent\" [src]=\"src\" class=\"avatar-img\" />\n  <ng-template #imageContent>\n    <ng-content></ng-content>\n  </ng-template>\n</ng-template>\n", dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-avatar', standalone: true, imports: [
                        NgTemplateOutlet,
                        NgClass,
                        NgIf
                    ], template: "<ng-container>\n  <ng-container *ngTemplateOutlet=\"defaultImageTemplate\"></ng-container>\n  <span *ngIf=\"!!status\" [ngClass]=\"statusClass\"></span>\n</ng-container>\n\n<ng-template #defaultImageTemplate>\n  <img *ngIf=\"!!src; else imageContent\" [src]=\"src\" class=\"avatar-img\" />\n  <ng-template #imageContent>\n    <ng-content></ng-content>\n  </ng-template>\n</ng-template>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], src: [{
                type: Input
            }], status: [{
                type: Input
            }], textColor: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYXZhdGFyL2F2YXRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2F2YXRhci9hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBY2xFLE1BQU0sT0FBTyxlQUFlO0lBaUMxQjtRQXRCQTs7O1dBR0c7UUFDTSxTQUFJLEdBQXdCLElBQUksQ0FBQztJQWtCMUIsQ0FBQztJQUVqQixJQUFJLFdBQVc7UUFDYixPQUFPO1lBQ0wsZUFBZSxFQUFFLElBQUk7WUFDckIsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSTtZQUNaLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDcEMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNsQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQy9CLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDN0MsQ0FBQztJQUNKLENBQUM7K0dBbkRVLGVBQWU7bUdBQWYsZUFBZSwyT0NmNUIscVlBV0EsNENEREksZ0JBQWdCLG9KQUNoQixPQUFPLG9GQUNQLElBQUk7OzRGQUdLLGVBQWU7a0JBVjNCLFNBQVM7K0JBQ0UsVUFBVSxjQUVSLElBQUksV0FDUDt3QkFDUCxnQkFBZ0I7d0JBQ2hCLE9BQU87d0JBQ1AsSUFBSTtxQkFDTDswRUFPUSxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csS0FBSztzQkFBYixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFLRyxHQUFHO3NCQUFYLEtBQUs7Z0JBS0csTUFBTTtzQkFBZCxLQUFLO2dCQU1HLFNBQVM7c0JBQWpCLEtBQUs7Z0JBWUYsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDbGFzcywgTmdJZiwgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbG9ycywgU2hhcGVzLCBTaXplcywgVGV4dENvbG9ycyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtYXZhdGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F2YXRhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ1RlbXBsYXRlT3V0bGV0LFxuICAgIE5nQ2xhc3MsXG4gICAgTmdJZlxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdHlwZSBDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgpIGNvbG9yPzogQ29sb3JzO1xuICAvKipcbiAgICogU2VsZWN0IHRoZSBzaGFwZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBAdHlwZSBTaGFwZXNcbiAgICovXG4gIEBJbnB1dCgpIHNoYXBlPzogU2hhcGVzO1xuICAvKipcbiAgICogU2l6ZSB0aGUgY29tcG9uZW50IHNtYWxsLCBsYXJnZSwgb3IgZXh0cmEgbGFyZ2UuXG4gICAqIEBkZWZhdWx0ICdtZCdcbiAgICovXG4gIEBJbnB1dCgpIHNpemU/OiBPbWl0PFNpemVzLCAneHhsJz4gPSAnbWQnO1xuICAvKipcbiAgICogVGhlIHNyYyBhdHRyaWJ1dGUgZm9yIHRoZSBpbWcgZWxlbWVudC5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBzcmM/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBzdGF0dXMgaW5kaWNhdG9yIHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIENvbG9yc1xuICAgKi9cbiAgQElucHV0KCkgc3RhdHVzPzogQ29sb3JzO1xuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBjb2xvciBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqXG4gICAqIEB2YWx1ZXMgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyB8ICdkYXJrJyB8ICdsaWdodCcgfCAnd2hpdGUnIHwgJ211dGVkJyB8IHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgdGV4dENvbG9yPzogVGV4dENvbG9ycztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldCBzdGF0dXNDbGFzcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnYXZhdGFyLXN0YXR1cyc6IHRydWUsXG4gICAgICBbYGJnLSR7dGhpcy5zdGF0dXN9YF06ICEhdGhpcy5zdGF0dXNcbiAgICB9O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBhdmF0YXI6IHRydWUsXG4gICAgICBbYGF2YXRhci0ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXG4gICAgICBbYGJnLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yLFxuICAgICAgW2Ake3RoaXMuc2hhcGV9YF06ICEhdGhpcy5zaGFwZSxcbiAgICAgIFtgdGV4dC0ke3RoaXMudGV4dENvbG9yfWBdOiAhIXRoaXMudGV4dENvbG9yXG4gICAgfTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRlZmF1bHRJbWFnZVRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gIDxzcGFuICpuZ0lmPVwiISFzdGF0dXNcIiBbbmdDbGFzc109XCJzdGF0dXNDbGFzc1wiPjwvc3Bhbj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRJbWFnZVRlbXBsYXRlPlxuICA8aW1nICpuZ0lmPVwiISFzcmM7IGVsc2UgaW1hZ2VDb250ZW50XCIgW3NyY109XCJzcmNcIiBjbGFzcz1cImF2YXRhci1pbWdcIiAvPlxuICA8bmctdGVtcGxhdGUgI2ltYWdlQ29udGVudD5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvbmctdGVtcGxhdGU+XG48L25nLXRlbXBsYXRlPlxuIl19