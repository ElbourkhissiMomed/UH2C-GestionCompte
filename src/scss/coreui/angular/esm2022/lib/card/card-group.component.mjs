import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class CardGroupComponent {
    get hostClasses() {
        return {
            'card-group': true
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CardGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: CardGroupComponent, isStandalone: true, selector: "c-card-group, [c-card-group]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CardGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-card-group, [c-card-group]',
                    template: '<ng-content></ng-content>',
                    standalone: true
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2NhcmQvY2FyZC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7SUFDSixDQUFDOytHQVBVLGtCQUFrQjttR0FBbEIsa0JBQWtCLCtJQUhuQiwyQkFBMkI7OzRGQUcxQixrQkFBa0I7a0JBTDlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUlLLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWNhcmQtZ3JvdXAsIFtjLWNhcmQtZ3JvdXBdJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkR3JvdXBDb21wb25lbnQge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NhcmQtZ3JvdXAnOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19