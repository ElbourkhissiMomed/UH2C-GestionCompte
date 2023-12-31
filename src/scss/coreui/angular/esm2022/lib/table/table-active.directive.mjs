import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TableActiveDirective {
    constructor() {
        /**
         * Highlight a table row or cell
         * @type boolean
         */
        this.active = false;
    }
    get hostClasses() {
        return {
            'table-active': this.active
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TableActiveDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: TableActiveDirective, isStandalone: true, selector: "[cTableActive]", inputs: { active: ["cTableActive", "active", booleanAttribute] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TableActiveDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTableActive]',
                    standalone: true
                }]
        }], propDecorators: { active: [{
                type: Input,
                args: [{ alias: 'cTableActive', transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtYWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdGFibGUvdGFibGUtYWN0aXZlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWhGLE1BQU0sT0FBTyxvQkFBb0I7SUFKakM7UUFNRTs7O1dBR0c7UUFDNEQsV0FBTSxHQUFxQixLQUFLLENBQUM7S0FRakc7SUFOQyxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQzVCLENBQUM7SUFDSixDQUFDOytHQWJVLG9CQUFvQjttR0FBcEIsb0JBQW9CLCtGQU1ZLGdCQUFnQjs7NEZBTmhELG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBT2dFLE1BQU07c0JBQXBFLEtBQUs7dUJBQUMsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFHekQsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1RhYmxlQWN0aXZlXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVBY3RpdmVEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBIaWdobGlnaHQgYSB0YWJsZSByb3cgb3IgY2VsbFxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoeyBhbGlhczogJ2NUYWJsZUFjdGl2ZScsIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBhY3RpdmU6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0YWJsZS1hY3RpdmUnOiB0aGlzLmFjdGl2ZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==