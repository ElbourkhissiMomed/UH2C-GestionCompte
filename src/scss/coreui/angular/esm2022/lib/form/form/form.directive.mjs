import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FormDirective {
    constructor() {
        /**
         * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
         * @type boolean
         * @default false
         */
        this.validated = false;
    }
    get hostClasses() {
        return {
            'was-validated': this.validated
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: FormDirective, isStandalone: true, selector: "form[cForm]", inputs: { validated: ["validated", "validated", booleanAttribute] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'form[cForm]',
                    standalone: true
                }]
        }], propDecorators: { validated: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS9mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWhGLE1BQU0sT0FBTyxhQUFhO0lBSjFCO1FBTUU7Ozs7V0FJRztRQUNxQyxjQUFTLEdBQXFCLEtBQUssQ0FBQztLQVE3RTtJQU5DLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDaEMsQ0FBQztJQUNKLENBQUM7K0dBZFUsYUFBYTttR0FBYixhQUFhLCtGQU9KLGdCQUFnQjs7NEZBUHpCLGFBQWE7a0JBSnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFReUMsU0FBUztzQkFBaEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFHbEMsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdmb3JtW2NGb3JtXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgRm9ybURpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIE1hcmsgYSBmb3JtIGFzIHZhbGlkYXRlZC4gSWYgeW91IHNldCBpdCBgdHJ1ZWAsIGFsbCB2YWxpZGF0aW9uIHN0eWxlcyB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGZvcm0uIFtkb2NzXVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgdmFsaWRhdGVkOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnd2FzLXZhbGlkYXRlZCc6IHRoaXMudmFsaWRhdGVkXG4gICAgfTtcbiAgfVxufVxuIl19