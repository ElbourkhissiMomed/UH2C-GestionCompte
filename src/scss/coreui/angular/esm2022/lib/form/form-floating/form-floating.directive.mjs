import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FormFloatingDirective {
    constructor() {
        /**
         * Enable floating labels
         * @type boolean
         */
        this.floating = true;
    }
    get hostClasses() {
        return {
            'form-floating': this.floating
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormFloatingDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: FormFloatingDirective, isStandalone: true, selector: "[cFormFloating]", inputs: { floating: ["cFormFloating", "floating", booleanAttribute] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormFloatingDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cFormFloating]',
                    standalone: true
                }]
        }], propDecorators: { floating: [{
                type: Input,
                args: [{ alias: 'cFormFloating', transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1mbG9hdGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1mbG9hdGluZy9mb3JtLWZsb2F0aW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWhGLE1BQU0sT0FBTyxxQkFBcUI7SUFKbEM7UUFNRTs7O1dBR0c7UUFDNkQsYUFBUSxHQUFxQixJQUFJLENBQUM7S0FTbkc7SUFQQyxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQy9CLENBQUM7SUFDSixDQUFDOytHQWJVLHFCQUFxQjttR0FBckIscUJBQXFCLHFHQU1ZLGdCQUFnQjs7NEZBTmpELHFCQUFxQjtrQkFKakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBT2lFLFFBQVE7c0JBQXZFLEtBQUs7dUJBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFHMUQsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0Zvcm1GbG9hdGluZ10nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GbG9hdGluZ0RpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBmbG9hdGluZyBsYWJlbHNcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgYWxpYXM6ICdjRm9ybUZsb2F0aW5nJywgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGZsb2F0aW5nOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtLWZsb2F0aW5nJzogdGhpcy5mbG9hdGluZ1xuICAgIH07XG4gIH1cblxufVxuIl19