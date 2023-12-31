import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FormFeedbackComponent {
    constructor() {
        /**
         * If your form layout allows it, you can display validation feedback in a styled tooltip.
         * @type boolean
         */
        this.tooltip = false;
    }
    get hostClasses() {
        return {
            'valid-feedback': this.valid === true && !this.tooltip,
            'valid-tooltip': this.valid === true && this.tooltip,
            'invalid-feedback': this.valid !== true && !this.tooltip,
            'invalid-tooltip': this.valid !== true && this.tooltip
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormFeedbackComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: FormFeedbackComponent, isStandalone: true, selector: "c-form-feedback", inputs: { tooltip: ["tooltip", "tooltip", booleanAttribute], valid: "valid" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormFeedbackComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-form-feedback',
                    template: '<ng-content></ng-content>',
                    standalone: true
                }]
        }], propDecorators: { tooltip: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], valid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1mZWVkYmFjay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1mZWVkYmFjay9mb3JtLWZlZWRiYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT2hGLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFPRTs7O1dBR0c7UUFDcUMsWUFBTyxHQUFxQixLQUFLLENBQUM7S0FpQjNFO0lBVEMsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDdEQsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQ3BELGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDeEQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87U0FDdkQsQ0FBQztJQUNKLENBQUM7K0dBdEJVLHFCQUFxQjttR0FBckIscUJBQXFCLDZGQU1aLGdCQUFnQixvR0FUMUIsMkJBQTJCOzs0RkFHMUIscUJBQXFCO2tCQUxqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFPeUMsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFNN0IsS0FBSztzQkFBYixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1mb3JtLWZlZWRiYWNrJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmVlZGJhY2tDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBJZiB5b3VyIGZvcm0gbGF5b3V0IGFsbG93cyBpdCwgeW91IGNhbiBkaXNwbGF5IHZhbGlkYXRpb24gZmVlZGJhY2sgaW4gYSBzdHlsZWQgdG9vbHRpcC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHRvb2x0aXA6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCB2YWxpZGF0aW9uIHN0YXRlIHRvIHZhbGlkLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSB2YWxpZD86IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAndmFsaWQtZmVlZGJhY2snOiB0aGlzLnZhbGlkID09PSB0cnVlICYmICF0aGlzLnRvb2x0aXAsXG4gICAgICAndmFsaWQtdG9vbHRpcCc6IHRoaXMudmFsaWQgPT09IHRydWUgJiYgdGhpcy50b29sdGlwLFxuICAgICAgJ2ludmFsaWQtZmVlZGJhY2snOiB0aGlzLnZhbGlkICE9PSB0cnVlICYmICF0aGlzLnRvb2x0aXAsXG4gICAgICAnaW52YWxpZC10b29sdGlwJzogdGhpcy52YWxpZCAhPT0gdHJ1ZSAmJiB0aGlzLnRvb2x0aXBcbiAgICB9O1xuICB9XG59XG4iXX0=