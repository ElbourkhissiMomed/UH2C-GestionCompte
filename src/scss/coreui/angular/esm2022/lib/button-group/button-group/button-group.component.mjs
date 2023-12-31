import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonGroupComponent {
    get hostClasses() {
        return {
            'btn-group': !this.vertical,
            'btn-group-vertical': this.vertical,
            [`btn-group-${this.size}`]: !!this.size,
        };
    }
    constructor() {
        /**
         * Default role attr for ButtonGroup. [docs]
         * @type string
         * @default 'group'
         */
        this.role = 'group';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ButtonGroupComponent, isStandalone: true, selector: "c-button-group", inputs: { size: "size", vertical: "vertical", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ButtonGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-button-group',
                    template: `<ng-content></ng-content>`,
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { size: [{
                type: Input
            }], vertical: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC9idXR0b24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLG9CQUFvQjtJQW9CL0IsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQzNCLG9CQUFvQixFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ25DLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUk7U0FDeEMsQ0FBQztJQUNKLENBQUM7SUFHRDtRQWxCQTs7OztXQUlHO1FBRU0sU0FBSSxHQUFHLE9BQU8sQ0FBQztJQVlSLENBQUM7K0dBOUJOLG9CQUFvQjttR0FBcEIsb0JBQW9CLHlOQUhyQiwyQkFBMkI7OzRGQUcxQixvQkFBb0I7a0JBTGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzBFQU9VLElBQUk7c0JBQVosS0FBSztnQkFLRyxRQUFRO3NCQUFoQixLQUFLO2dCQU9HLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtYnV0dG9uLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Hcm91cENvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbCBvciBsYXJnZS5cbiAgICogQHR5cGUgeyAnc20nIHwgJ2xnJyB9XG4gICAqL1xuICBASW5wdXQoKSBzaXplPzogJ3NtJyB8ICdsZyc7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzZXQgb2YgYnV0dG9ucyB0aGF0IGFwcGVhciB2ZXJ0aWNhbGx5IHN0YWNrZWQgcmF0aGVyIHRoYW4gaG9yaXpvbnRhbGx5LiBTcGxpdCBidXR0b24gZHJvcGRvd25zIGFyZSBub3Qgc3VwcG9ydGVkIGhlcmUuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIHZlcnRpY2FsPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERlZmF1bHQgcm9sZSBhdHRyIGZvciBCdXR0b25Hcm91cC4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnZ3JvdXAnXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIEBJbnB1dCgpIHJvbGUgPSAnZ3JvdXAnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2J0bi1ncm91cCc6ICF0aGlzLnZlcnRpY2FsLFxuICAgICAgJ2J0bi1ncm91cC12ZXJ0aWNhbCc6IHRoaXMudmVydGljYWwsXG4gICAgICBbYGJ0bi1ncm91cC0ke3RoaXMuc2l6ZX1gXTogISF0aGlzLnNpemUsXG4gICAgfTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19