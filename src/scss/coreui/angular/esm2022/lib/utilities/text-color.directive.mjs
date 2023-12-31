import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class TextColorDirective {
    get hostClasses() {
        const color = this.color;
        return {
            [`text-${color}`]: !!color
        };
    }
    constructor() {
        /**
         * Set text-color of element
         * @type TextColors
         */
        this.color = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TextColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: TextColorDirective, isStandalone: true, selector: "[cTextColor]", inputs: { color: ["cTextColor", "color"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TextColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTextColor]',
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input,
                args: ['cTextColor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb2xvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3V0aWxpdGllcy90ZXh0LWNvbG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzlELE1BQU0sT0FBTyxrQkFBa0I7SUFRN0IsSUFDSSxXQUFXO1FBQ2IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixPQUFPO1lBQ0wsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUs7U0FDM0IsQ0FBQztJQUNKLENBQUM7SUFFRDtRQWRBOzs7V0FHRztRQUNrQixVQUFLLEdBQWUsRUFBRSxDQUFDO0lBVTdCLENBQUM7K0dBaEJMLGtCQUFrQjttR0FBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQUo5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7MEVBT3NCLEtBQUs7c0JBQXpCLEtBQUs7dUJBQUMsWUFBWTtnQkFHZixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZXh0Q29sb3JzIH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NUZXh0Q29sb3JdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Q29sb3JEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBTZXQgdGV4dC1jb2xvciBvZiBlbGVtZW50XG4gICAqIEB0eXBlIFRleHRDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgnY1RleHRDb2xvcicpIGNvbG9yOiBUZXh0Q29sb3JzID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jb2xvcjtcbiAgICByZXR1cm4ge1xuICAgICAgW2B0ZXh0LSR7Y29sb3J9YF06ICEhY29sb3JcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19