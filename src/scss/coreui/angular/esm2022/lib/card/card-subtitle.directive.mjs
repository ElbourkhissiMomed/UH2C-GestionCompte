import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class CardSubtitleDirective {
    get hostClasses() {
        return {
            'card-subtitle': true
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CardSubtitleDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: CardSubtitleDirective, isStandalone: true, selector: "[cCardSubtitle]", host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CardSubtitleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardSubtitle]',
                    standalone: true
                }]
        }], propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zdWJ0aXRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2NhcmQvY2FyZC1zdWJ0aXRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTXZELE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUM7SUFDSixDQUFDOytHQVBVLHFCQUFxQjttR0FBckIscUJBQXFCOzs0RkFBckIscUJBQXFCO2tCQUpqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFJSyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NDYXJkU3VidGl0bGVdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkU3VidGl0bGVEaXJlY3RpdmUge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2NhcmQtc3VidGl0bGUnOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19