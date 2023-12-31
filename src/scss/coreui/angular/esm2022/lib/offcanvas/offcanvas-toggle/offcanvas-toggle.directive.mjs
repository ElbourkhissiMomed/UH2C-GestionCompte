import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../offcanvas.service";
export class OffcanvasToggleDirective {
    constructor(offcanvasService) {
        this.offcanvasService = offcanvasService;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.offcanvasService.toggle({ show: 'toggle', id: this.id });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasToggleDirective, deps: [{ token: i1.OffcanvasService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: OffcanvasToggleDirective, isStandalone: true, selector: "[cOffcanvasToggle]", inputs: { id: ["cOffcanvasToggle", "id"] }, host: { listeners: { "click": "toggleOpen($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cOffcanvasToggle]',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i1.OffcanvasService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cOffcanvasToggle']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL29mZmNhbnZhcy9vZmZjYW52YXMtdG9nZ2xlL29mZmNhbnZhcy10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUS9ELE1BQU0sT0FBTyx3QkFBd0I7SUFRbkMsWUFDVSxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDO0lBR0osVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDOytHQWhCVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qjs7NEZBQXhCLHdCQUF3QjtrQkFKcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7dUdBTzRCLEVBQUU7c0JBQTVCLEtBQUs7dUJBQUMsa0JBQWtCO2dCQU96QixVQUFVO3NCQURULFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9mZmNhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi9vZmZjYW52YXMuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjT2ZmY2FudmFzVG9nZ2xlXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgT2ZmY2FudmFzVG9nZ2xlRGlyZWN0aXZlIHtcblxuICAvKipcbiAgICogSHRtbCBpZCBhdHRyIG9mIG9mZmNhbnZhcyB0byB0b2dnbGUuXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCdjT2ZmY2FudmFzVG9nZ2xlJykgaWQ/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvZmZjYW52YXNTZXJ2aWNlOiBPZmZjYW52YXNTZXJ2aWNlXG4gICkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9mZmNhbnZhc1NlcnZpY2UudG9nZ2xlKHsgc2hvdzogJ3RvZ2dsZScsIGlkOiB0aGlzLmlkIH0pO1xuICB9XG59XG4iXX0=