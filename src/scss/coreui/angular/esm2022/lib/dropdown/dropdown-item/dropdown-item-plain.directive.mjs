import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class DropdownItemPlainDirective {
    get hostClasses() {
        return {
            'dropdown-item-text': true
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownItemPlainDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: DropdownItemPlainDirective, isStandalone: true, selector: "[cDropdownItemPlain]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownItemPlainDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownItemPlain]',
                    standalone: true
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS1wbGFpbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLWl0ZW0vZHJvcGRvd24taXRlbS1wbGFpbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTXZELE1BQU0sT0FBTywwQkFBMEI7SUFDckMsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLG9CQUFvQixFQUFFLElBQUk7U0FDM0IsQ0FBQztJQUNKLENBQUM7K0dBTlUsMEJBQTBCO21HQUExQiwwQkFBMEI7OzRGQUExQiwwQkFBMEI7a0JBSnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUdLLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0Ryb3Bkb3duSXRlbVBsYWluXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25JdGVtUGxhaW5EaXJlY3RpdmUge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdkcm9wZG93bi1pdGVtLXRleHQnOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19