import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FormSelectDirective {
    get hostClasses() {
        return {
            'form-select': true,
            [`form-select-${this.sizing}`]: !!this.sizing,
            'is-valid': this.valid === true,
            'is-invalid': this.valid === false,
        };
    }
    constructor() {
        /**
         * Size the component small or large.
         */
        this.sizing = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormSelectDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: FormSelectDirective, isStandalone: true, selector: "select[cSelect]", inputs: { sizing: "sizing", valid: "valid" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'select[cSelect]',
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { sizing: [{
                type: Input
            }], valid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9mb3JtL2Zvcm0tc2VsZWN0L2Zvcm0tc2VsZWN0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBTXpFLE1BQU0sT0FBTyxtQkFBbUI7SUFZOUIsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJO1lBQ25CLENBQUMsZUFBZSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDN0MsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSTtZQUMvQixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7UUFyQkE7O1dBRUc7UUFDTSxXQUFNLEdBQStCLEVBQUUsQ0FBQztJQWtCbEMsQ0FBQzsrR0F0QkwsbUJBQW1CO21HQUFuQixtQkFBbUI7OzRGQUFuQixtQkFBbUI7a0JBSi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzBFQUtVLE1BQU07c0JBQWQsS0FBSztnQkFNRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3NlbGVjdFtjU2VsZWN0XScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVNlbGVjdERpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBTaXplIHRoZSBjb21wb25lbnQgc21hbGwgb3IgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSBzaXppbmc/OiAnJyB8ICdzbScgfCAnbGcnIHwgc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIFNldCBjb21wb25lbnQgdmFsaWRhdGlvbiBzdGF0ZSB0byB2YWxpZC5cbiAgICogQHR5cGUge2Jvb2xlYW4gfCB1bmRlZmluZWR9XG4gICAqL1xuICBASW5wdXQoKSB2YWxpZD86IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnZm9ybS1zZWxlY3QnOiB0cnVlLFxuICAgICAgW2Bmb3JtLXNlbGVjdC0ke3RoaXMuc2l6aW5nfWBdOiAhIXRoaXMuc2l6aW5nLFxuICAgICAgJ2lzLXZhbGlkJzogdGhpcy52YWxpZCA9PT0gdHJ1ZSxcbiAgICAgICdpcy1pbnZhbGlkJzogdGhpcy52YWxpZCA9PT0gZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxufVxuIl19