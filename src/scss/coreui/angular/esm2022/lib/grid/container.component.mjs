import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ContainerComponent {
    constructor() {
        /**
         * Set container 100% wide until a breakpoint.
         */
        this.breakpoint = '';
        /**
         * Set container 100% wide, spanning the entire width of the viewport.
         * @type boolean | string
         */
        this.fluid = false;
    }
    get hostClasses() {
        return {
            container: !this.fluid && !this.breakpoint,
            'container-fluid': !!this.fluid,
            [`container-${this.breakpoint}`]: !!this.breakpoint
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: ContainerComponent, isStandalone: true, selector: "c-container, [cContainer]", inputs: { breakpoint: "breakpoint", fluid: ["fluid", "fluid", booleanAttribute] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-container, [cContainer]', template: '<ng-content></ng-content>', standalone: true, styles: [":host{display:block}\n"] }]
        }], propDecorators: { breakpoint: [{
                type: Input
            }], fluid: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZ3JpZC9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFXaEYsTUFBTSxPQUFPLGtCQUFrQjtJQU4vQjtRQVFFOztXQUVHO1FBQ00sZUFBVSxHQUErQixFQUFFLENBQUM7UUFFckQ7OztXQUdHO1FBQ3FDLFVBQUssR0FBcUIsS0FBSyxDQUFDO0tBVXpFO0lBUkMsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUMxQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDL0IsQ0FBQyxhQUFhLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUNwRCxDQUFDO0lBQ0osQ0FBQzsrR0FwQlUsa0JBQWtCO21HQUFsQixrQkFBa0IsMkhBV1QsZ0JBQWdCLG9GQWYxQiwyQkFBMkI7OzRGQUkxQixrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0UsMkJBQTJCLFlBQzNCLDJCQUEyQixjQUV6QixJQUFJOzhCQU9QLFVBQVU7c0JBQWxCLEtBQUs7Z0JBTWtDLEtBQUs7c0JBQTVDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBR2xDLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSUNvbnRhaW5lciB9IGZyb20gJy4vY29udGFpbmVyLnR5cGUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludHMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWNvbnRhaW5lciwgW2NDb250YWluZXJdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbnRhaW5lciB7XG5cbiAgLyoqXG4gICAqIFNldCBjb250YWluZXIgMTAwJSB3aWRlIHVudGlsIGEgYnJlYWtwb2ludC5cbiAgICovXG4gIEBJbnB1dCgpIGJyZWFrcG9pbnQ6IEV4Y2x1ZGU8QnJlYWtwb2ludHMsICd4cyc+ID0gJyc7XG5cbiAgLyoqXG4gICAqIFNldCBjb250YWluZXIgMTAwJSB3aWRlLCBzcGFubmluZyB0aGUgZW50aXJlIHdpZHRoIG9mIHRoZSB2aWV3cG9ydC5cbiAgICogQHR5cGUgYm9vbGVhbiB8IHN0cmluZ1xuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGZsdWlkOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXI6ICF0aGlzLmZsdWlkICYmICF0aGlzLmJyZWFrcG9pbnQsXG4gICAgICAnY29udGFpbmVyLWZsdWlkJzogISF0aGlzLmZsdWlkLFxuICAgICAgW2Bjb250YWluZXItJHt0aGlzLmJyZWFrcG9pbnR9YF06ICEhdGhpcy5icmVha3BvaW50XG4gICAgfTtcbiAgfVxufVxuIl19