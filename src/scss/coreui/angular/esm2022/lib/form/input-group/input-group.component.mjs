import { Component, HostBinding, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class InputGroupComponent {
    get hostClasses() {
        return {
            'input-group': true,
            [`input-group-${this.sizing}`]: !!this.sizing,
        };
    }
    constructor() {
        /**
         * Size the component small or large.
         */
        this.sizing = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: InputGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: InputGroupComponent, isStandalone: true, selector: "c-input-group", inputs: { sizing: "sizing" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: InputGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-input-group',
                    template: `<ng-content></ng-content>`,
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { sizing: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL2lucHV0LWdyb3VwL2lucHV0LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyxtQkFBbUI7SUFNOUIsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJO1lBQ25CLENBQUMsZUFBZSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07U0FDOUMsQ0FBQztJQUNKLENBQUM7SUFFRDtRQWJBOztXQUVHO1FBQ00sV0FBTSxHQUE4QixFQUFFLENBQUM7SUFVakMsQ0FBQzsrR0FkTCxtQkFBbUI7bUdBQW5CLG1CQUFtQiw4SkFIcEIsMkJBQTJCOzs0RkFHMUIsbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7MEVBS1UsTUFBTTtzQkFBZCxLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWlucHV0LWdyb3VwJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEdyb3VwQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbCBvciBsYXJnZS5cbiAgICovXG4gIEBJbnB1dCgpIHNpemluZzogc3RyaW5nIHwgJ3NtJyB8ICdsZycgfCAnJyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2lucHV0LWdyb3VwJzogdHJ1ZSxcbiAgICAgIFtgaW5wdXQtZ3JvdXAtJHt0aGlzLnNpemluZ31gXTogISF0aGlzLnNpemluZyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG59XG4iXX0=