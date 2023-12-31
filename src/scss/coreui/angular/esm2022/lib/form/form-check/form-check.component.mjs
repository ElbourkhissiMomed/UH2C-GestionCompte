import { booleanAttribute, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { FormCheckLabelDirective } from './form-check-label.directive';
import * as i0 from "@angular/core";
export class FormCheckComponent {
    constructor() {
        /**
         * Group checkboxes or radios on the same horizontal row.
         * @type boolean
         * @default false
         */
        this.inline = false;
        /**
         * Put checkboxes or radios on the opposite side.
         * @type boolean
         * @default false
         * @since 4.4.7
         */
        this.reverse = false;
        /**
         * Size the component large or extra large. Works only with `[switch]="true"` [docs]
         * @type {'lg' | 'xl' | ''}
         */
        this.sizing = '';
        /**
         * Render a toggle switch on for checkbox.
         * @type boolean
         * @default false
         */
        this.switch = false;
        this.#formCheckClass = true;
    }
    get hostClasses() {
        return {
            'form-check': this.formCheckClass,
            'form-switch': this.switch,
            [`form-switch-${this.sizing}`]: this.switch && !!this.sizing,
            'form-check-inline': this.inline,
            'form-check-reverse': this.reverse
        };
    }
    #formCheckClass;
    get formCheckClass() {
        return this.#formCheckClass;
    }
    ngAfterContentInit() {
        this.#formCheckClass = !!this.formCheckLabel;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormCheckComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: FormCheckComponent, isStandalone: true, selector: "c-form-check", inputs: { inline: ["inline", "inline", booleanAttribute], reverse: ["reverse", "reverse", booleanAttribute], sizing: "sizing", switch: ["switch", "switch", booleanAttribute] }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "formCheckLabel", first: true, predicate: FormCheckLabelDirective, descendants: true }], exportAs: ["cFormCheck"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormCheckComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-form-check',
                    template: '<ng-content></ng-content>',
                    exportAs: 'cFormCheck',
                    standalone: true
                }]
        }], propDecorators: { inline: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], reverse: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], sizing: [{
                type: Input
            }], switch: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], formCheckLabel: [{
                type: ContentChild,
                args: [FormCheckLabelDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jaGVjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1jaGVjay9mb3JtLWNoZWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFRdkUsTUFBTSxPQUFPLGtCQUFrQjtJQU4vQjtRQVFFOzs7O1dBSUc7UUFDcUMsV0FBTSxHQUFxQixLQUFLLENBQUM7UUFFekU7Ozs7O1dBS0c7UUFDcUMsWUFBTyxHQUFxQixLQUFLLENBQUM7UUFFMUU7OztXQUdHO1FBQ00sV0FBTSxHQUFzQixFQUFFLENBQUM7UUFFeEM7Ozs7V0FJRztRQUNxQyxXQUFNLEdBQXFCLEtBQUssQ0FBQztRQWdCekUsb0JBQWUsR0FBRyxJQUFJLENBQUM7S0FReEI7SUF0QkMsSUFDSSxXQUFXO1FBRWIsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYztZQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDMUIsQ0FBQyxlQUFlLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQzVELG1CQUFtQixFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ2hDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBSUQsZUFBZSxDQUFRO0lBQ3ZCLElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9DLENBQUM7K0dBbkRVLGtCQUFrQjttR0FBbEIsa0JBQWtCLHVGQU9ULGdCQUFnQixtQ0FRaEIsZ0JBQWdCLGtEQWFoQixnQkFBZ0IsZ0lBY3RCLHVCQUF1QiwwRUE5QzNCLDJCQUEyQjs7NEZBSTFCLGtCQUFrQjtrQkFOOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFReUMsTUFBTTtzQkFBN0MsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFRRSxPQUFPO3NCQUE5QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU03QixNQUFNO3NCQUFkLEtBQUs7Z0JBT2tDLE1BQU07c0JBQTdDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBR2xDLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPO2dCQVltQixjQUFjO3NCQUFwRCxZQUFZO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIGJvb2xlYW5BdHRyaWJ1dGUsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybUNoZWNrTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tY2hlY2stbGFiZWwuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1mb3JtLWNoZWNrJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgZXhwb3J0QXM6ICdjRm9ybUNoZWNrJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ2hlY2tDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICAvKipcbiAgICogR3JvdXAgY2hlY2tib3hlcyBvciByYWRpb3Mgb24gdGhlIHNhbWUgaG9yaXpvbnRhbCByb3cuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBpbmxpbmU6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUHV0IGNoZWNrYm94ZXMgb3IgcmFkaW9zIG9uIHRoZSBvcHBvc2l0ZSBzaWRlLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBzaW5jZSA0LjQuN1xuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHJldmVyc2U6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2l6ZSB0aGUgY29tcG9uZW50IGxhcmdlIG9yIGV4dHJhIGxhcmdlLiBXb3JrcyBvbmx5IHdpdGggYFtzd2l0Y2hdPVwidHJ1ZVwiYCBbZG9jc11cbiAgICogQHR5cGUgeydsZycgfCAneGwnIHwgJyd9XG4gICAqL1xuICBASW5wdXQoKSBzaXppbmc/OiAnbGcnIHwgJ3hsJyB8ICcnID0gJyc7XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIHRvZ2dsZSBzd2l0Y2ggb24gZm9yIGNoZWNrYm94LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgc3dpdGNoOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtLWNoZWNrJzogdGhpcy5mb3JtQ2hlY2tDbGFzcyxcbiAgICAgICdmb3JtLXN3aXRjaCc6IHRoaXMuc3dpdGNoLFxuICAgICAgW2Bmb3JtLXN3aXRjaC0ke3RoaXMuc2l6aW5nfWBdOiB0aGlzLnN3aXRjaCAmJiAhIXRoaXMuc2l6aW5nLFxuICAgICAgJ2Zvcm0tY2hlY2staW5saW5lJzogdGhpcy5pbmxpbmUsXG4gICAgICAnZm9ybS1jaGVjay1yZXZlcnNlJzogdGhpcy5yZXZlcnNlXG4gICAgfTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoRm9ybUNoZWNrTGFiZWxEaXJlY3RpdmUpIGZvcm1DaGVja0xhYmVsITogRm9ybUNoZWNrTGFiZWxEaXJlY3RpdmU7XG5cbiAgI2Zvcm1DaGVja0NsYXNzID0gdHJ1ZTtcbiAgZ2V0IGZvcm1DaGVja0NsYXNzKCkge1xuICAgIHJldHVybiB0aGlzLiNmb3JtQ2hlY2tDbGFzcztcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLiNmb3JtQ2hlY2tDbGFzcyA9ICEhdGhpcy5mb3JtQ2hlY2tMYWJlbDtcbiAgfVxufVxuIl19