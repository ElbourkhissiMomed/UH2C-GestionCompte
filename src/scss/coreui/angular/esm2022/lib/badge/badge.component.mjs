import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BadgeComponent {
    constructor() { }
    get hostClasses() {
        const positionClasses = {
            'position-absolute': !!this.position,
            'translate-middle': !!this.position,
            'top-0': this.position?.includes('top'),
            'top-100': this.position?.includes('bottom'),
            'start-100': this.position?.includes('end'),
            'start-0': this.position?.includes('start')
        };
        return Object.assign({
            badge: true,
            [`bg-${this.color}`]: !!this.color,
            [`text-${this.textColor}`]: !!this.textColor,
            [`badge-${this.size}`]: !!this.size,
            [`${this.shape}`]: !!this.shape
        }, !!this.position ? positionClasses : {});
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: BadgeComponent, isStandalone: true, selector: "c-badge", inputs: { color: "color", position: "position", shape: "shape", size: "size", textColor: "textColor" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-badge',
                    template: '<ng-content></ng-content>',
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], position: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], textColor: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9iYWRnZS9iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVE5RCxNQUFNLE9BQU8sY0FBYztJQTBCekIsZ0JBQWUsQ0FBQztJQUVoQixJQUNJLFdBQVc7UUFDYixNQUFNLGVBQWUsR0FBRztZQUN0QixtQkFBbUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDcEMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUM1QyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzNDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FDNUMsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNqQixLQUFLLEVBQUUsSUFBSTtZQUNYLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDbEMsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUM1QyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQzFDLENBQUM7SUFDSixDQUFDOytHQS9DVSxjQUFjO21HQUFkLGNBQWMsa09BSGYsMkJBQTJCOzs0RkFHMUIsY0FBYztrQkFMMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzBFQU1VLEtBQUs7c0JBQWIsS0FBSztnQkFLRyxRQUFRO3NCQUFoQixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFJRyxJQUFJO3NCQUFaLEtBQUs7Z0JBS0csU0FBUztzQkFBakIsS0FBSztnQkFLRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYWRnZVBvc2l0aW9ucywgQ29sb3JzLCBTaGFwZXMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWJhZGdlJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcj86IENvbG9ycztcbiAgLyoqXG4gICAqIFBvc2l0aW9uIGJhZGdlIGluIG9uZSBvZiB0aGUgY29ybmVycyBvZiBhIGxpbmsgb3IgYnV0dG9uLlxuICAgKiBAdHlwZSBCYWRnZVBvc2l0aW9uc1xuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb24/OiBCYWRnZVBvc2l0aW9ucztcbiAgLyoqXG4gICAqIFNlbGVjdCB0aGUgc2hhcGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogQHR5cGUgU2hhcGVzXG4gICAqL1xuICBASW5wdXQoKSBzaGFwZT86IFNoYXBlcztcbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbC5cbiAgICovXG4gIEBJbnB1dCgpIHNpemU/OiAnc20nO1xuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dCBjb2xvciBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB0eXBlIFRleHRDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgpIHRleHRDb2xvcj86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIGNvbnN0IHBvc2l0aW9uQ2xhc3NlcyA9IHtcbiAgICAgICdwb3NpdGlvbi1hYnNvbHV0ZSc6ICEhdGhpcy5wb3NpdGlvbixcbiAgICAgICd0cmFuc2xhdGUtbWlkZGxlJzogISF0aGlzLnBvc2l0aW9uLFxuICAgICAgJ3RvcC0wJzogdGhpcy5wb3NpdGlvbj8uaW5jbHVkZXMoJ3RvcCcpLFxuICAgICAgJ3RvcC0xMDAnOiB0aGlzLnBvc2l0aW9uPy5pbmNsdWRlcygnYm90dG9tJyksXG4gICAgICAnc3RhcnQtMTAwJzogdGhpcy5wb3NpdGlvbj8uaW5jbHVkZXMoJ2VuZCcpLFxuICAgICAgJ3N0YXJ0LTAnOiB0aGlzLnBvc2l0aW9uPy5pbmNsdWRlcygnc3RhcnQnKVxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGJhZGdlOiB0cnVlLFxuICAgICAgICBbYGJnLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yLFxuICAgICAgICBbYHRleHQtJHt0aGlzLnRleHRDb2xvcn1gXTogISF0aGlzLnRleHRDb2xvcixcbiAgICAgICAgW2BiYWRnZS0ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXG4gICAgICAgIFtgJHt0aGlzLnNoYXBlfWBdOiAhIXRoaXMuc2hhcGVcbiAgICAgIH0sICEhdGhpcy5wb3NpdGlvbiA/IHBvc2l0aW9uQ2xhc3NlcyA6IHt9XG4gICAgKTtcbiAgfVxufVxuIl19