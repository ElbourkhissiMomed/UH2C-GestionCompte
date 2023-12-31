import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AccordionService } from '../accordion.service';
import * as i0 from "@angular/core";
import * as i1 from "../accordion.service";
export class AccordionComponent {
    /**
     * Make accordion items stay open when another item is opened
     * @type boolean
     */
    set alwaysOpen(value) {
        this.accordionService.alwaysOpen = coerceBooleanProperty(value);
    }
    get alwaysOpen() {
        return this.accordionService.alwaysOpen;
    }
    get hostClasses() {
        return {
            accordion: true,
            'accordion-flush': !!this.flush
        };
    }
    constructor(accordionService) {
        this.accordionService = accordionService;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionComponent, deps: [{ token: i1.AccordionService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: AccordionComponent, isStandalone: true, selector: "c-accordion", inputs: { flush: "flush", alwaysOpen: "alwaysOpen" }, host: { properties: { "class": "this.hostClasses" } }, providers: [AccordionService], exportAs: ["cAccordionItem"], ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-accordion', template: `<ng-content></ng-content>`, exportAs: 'cAccordionItem', providers: [AccordionService], standalone: true, styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AccordionService }]; }, propDecorators: { flush: [{
                type: Input
            }], alwaysOpen: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYWNjb3JkaW9uL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVV4RCxNQUFNLE9BQU8sa0JBQWtCO0lBUzdCOzs7T0FHRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUk7WUFDZixpQkFBaUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUNVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7K0dBL0JPLGtCQUFrQjttR0FBbEIsa0JBQWtCLHVLQUhsQixDQUFDLGdCQUFnQixDQUFDLHdEQUhuQiwyQkFBMkI7OzRGQU0xQixrQkFBa0I7a0JBUjlCLFNBQVM7K0JBQ0UsYUFBYSxZQUNiLDJCQUEyQixZQUUzQixnQkFBZ0IsYUFDZixDQUFDLGdCQUFnQixDQUFDLGNBQ2pCLElBQUk7dUdBVVAsS0FBSztzQkFBYixLQUFLO2dCQU1GLFVBQVU7c0JBRGIsS0FBSztnQkFTRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IEFjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuLi9hY2NvcmRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGV4cG9ydEFzOiAnY0FjY29yZGlvbkl0ZW0nLFxuICBwcm92aWRlcnM6IFtBY2NvcmRpb25TZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hbHdheXNPcGVuOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgYmFja2dyb3VuZC1jb2xvciwgc29tZSBib3JkZXJzLCBhbmQgc29tZSByb3VuZGVkIGNvcm5lcnMgdG8gcmVuZGVyIGFjY29yZGlvbnMgZWRnZS10by1lZGdlIHdpdGggdGhlaXIgcGFyZW50IGNvbnRhaW5lci5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgZmx1c2g/OiBib29sZWFuO1xuICAvKipcbiAgICogTWFrZSBhY2NvcmRpb24gaXRlbXMgc3RheSBvcGVuIHdoZW4gYW5vdGhlciBpdGVtIGlzIG9wZW5lZFxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWx3YXlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS5hbHdheXNPcGVuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgYWx3YXlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY2NvcmRpb25TZXJ2aWNlLmFsd2F5c09wZW47XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY29yZGlvbjogdHJ1ZSxcbiAgICAgICdhY2NvcmRpb24tZmx1c2gnOiAhIXRoaXMuZmx1c2hcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY2NvcmRpb25TZXJ2aWNlOiBBY2NvcmRpb25TZXJ2aWNlXG4gICkge31cblxufVxuIl19