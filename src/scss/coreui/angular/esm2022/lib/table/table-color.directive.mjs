import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TableColorDirective {
    get hostClasses() {
        return {
            [`table-${this.color}`]: !!this.color,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TableColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: TableColorDirective, isStandalone: true, selector: "[cTableColor]", inputs: { color: ["cTableColor", "color"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TableColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTableColor]',
                    standalone: true
                }]
        }], propDecorators: { color: [{
                type: Input,
                args: ['cTableColor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90YWJsZS90YWJsZS1jb2xvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU85RCxNQUFNLE9BQU8sbUJBQW1CO0lBUTlCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQ3RDLENBQUM7SUFDSixDQUFDOytHQWJVLG1CQUFtQjttR0FBbkIsbUJBQW1COzs0RkFBbkIsbUJBQW1CO2tCQUovQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBT3VCLEtBQUs7c0JBQTFCLEtBQUs7dUJBQUMsYUFBYTtnQkFHaEIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NUYWJsZUNvbG9yXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb2xvckRpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIFVzZSBjb250ZXh0dWFsIGNvbG9yIGZvciB0YWJsZXMsIHRhYmxlIHJvd3Mgb3IgaW5kaXZpZHVhbCBjZWxscy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoJ2NUYWJsZUNvbG9yJykgY29sb3I/OiBDb2xvcnM7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBbYHRhYmxlLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==