import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BreadcrumbComponent {
    get hostClasses() {
        return {
            breadcrumb: true
        };
    }
    constructor() {
        /**
         * Default aria-label for breadcrumb. [docs]
         * @type string
         * @default 'breadcrumb'
         */
        this.ariaLabel = 'breadcrumb';
        /**
         * Default role for breadcrumb. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: BreadcrumbComponent, isStandalone: true, selector: "c-breadcrumb", inputs: { ariaLabel: "ariaLabel", role: "role" }, host: { properties: { "attr.aria-label": "this.ariaLabel", "attr.role": "this.role", "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-breadcrumb',
                    template: '<ng-content></ng-content>',
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { ariaLabel: [{
                type: HostBinding,
                args: ['attr.aria-label']
            }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzlELE1BQU0sT0FBTyxtQkFBbUI7SUFpQjlCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFBO0lBQ0gsQ0FBQztJQUVEO1FBdkJBOzs7O1dBSUc7UUFFTSxjQUFTLEdBQUcsWUFBWSxDQUFDO1FBRWxDOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsWUFBWSxDQUFDO0lBU2IsQ0FBQzsrR0F4Qk4sbUJBQW1CO21HQUFuQixtQkFBbUIsZ1BBSHBCLDJCQUEyQjs7NEZBRzFCLG1CQUFtQjtrQkFML0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzBFQVFVLFNBQVM7c0JBRGpCLFdBQVc7dUJBQUMsaUJBQWlCOztzQkFDN0IsS0FBSztnQkFRRyxJQUFJO3NCQURaLFdBQVc7dUJBQUMsV0FBVzs7c0JBQ3ZCLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCBhcmlhLWxhYmVsIGZvciBicmVhZGNydW1iLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdicmVhZGNydW1iJ1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICBASW5wdXQoKSBhcmlhTGFiZWwgPSAnYnJlYWRjcnVtYic7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgcm9sZSBmb3IgYnJlYWRjcnVtYi4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnbmF2aWdhdGlvbidcbiAgICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgQElucHV0KCkgcm9sZSA9ICduYXZpZ2F0aW9uJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBicmVhZGNydW1iOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl19