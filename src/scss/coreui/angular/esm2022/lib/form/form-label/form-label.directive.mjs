import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FormLabelDirective {
    get hostClasses() {
        return {
            'form-label': true,
            'col-form-label': this.col === 'col',
            [`col-form-label-${this.sizing}`]: !!this.sizing && this.col === 'col',
        };
    }
    constructor() {
        /**
         * For horizontal forms set labels to 'col' and make them vertically centered with their associated form controls.
         * @type 'col'
         */
        this.col = '';
        /**
         * Size the label small or large.
         */
        this.sizing = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormLabelDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: FormLabelDirective, isStandalone: true, selector: "[cLabel]", inputs: { col: ["cLabel", "col"], sizing: "sizing" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormLabelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cLabel]',
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { col: [{
                type: Input,
                args: ['cLabel']
            }], sizing: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1sYWJlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1sYWJlbC9mb3JtLWxhYmVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTlELE1BQU0sT0FBTyxrQkFBa0I7SUFZN0IsSUFDSSxXQUFXO1FBRWIsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSztZQUNwQyxDQUFDLGtCQUFrQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUs7U0FDdkUsQ0FBQztJQUNKLENBQUM7SUFFRDtRQXBCQTs7O1dBR0c7UUFDYyxRQUFHLEdBQWUsRUFBRSxDQUFDO1FBQ3RDOztXQUVHO1FBQ00sV0FBTSxHQUE4QixFQUFFLENBQUM7SUFZakMsQ0FBQzsrR0F0Qkwsa0JBQWtCO21HQUFsQixrQkFBa0I7OzRGQUFsQixrQkFBa0I7a0JBSjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjswRUFPa0IsR0FBRztzQkFBbkIsS0FBSzt1QkFBQyxRQUFRO2dCQUlOLE1BQU07c0JBQWQsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjTGFiZWxdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtTGFiZWxEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBGb3IgaG9yaXpvbnRhbCBmb3JtcyBzZXQgbGFiZWxzIHRvICdjb2wnIGFuZCBtYWtlIHRoZW0gdmVydGljYWxseSBjZW50ZXJlZCB3aXRoIHRoZWlyIGFzc29jaWF0ZWQgZm9ybSBjb250cm9scy5cbiAgICogQHR5cGUgJ2NvbCdcbiAgICovXG4gIEBJbnB1dCgnY0xhYmVsJykgY29sOiAnY29sJyB8ICcnID0gJyc7XG4gIC8qKlxuICAgKiBTaXplIHRoZSBsYWJlbCBzbWFsbCBvciBsYXJnZS5cbiAgICovXG4gIEBJbnB1dCgpIHNpemluZzogJycgfCAnc20nIHwgJ2xnJyB8IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcblxuICAgIHJldHVybiB7XG4gICAgICAnZm9ybS1sYWJlbCc6IHRydWUsXG4gICAgICAnY29sLWZvcm0tbGFiZWwnOiB0aGlzLmNvbCA9PT0gJ2NvbCcsXG4gICAgICBbYGNvbC1mb3JtLWxhYmVsLSR7dGhpcy5zaXppbmd9YF06ICEhdGhpcy5zaXppbmcgJiYgdGhpcy5jb2wgPT09ICdjb2wnLFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbn1cbiJdfQ==