import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./toaster/toaster.service";
export class ToastCloseDirective {
    constructor(toasterService) {
        this.toasterService = toasterService;
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.toasterService.setState({ show: false, toast: this.toast });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastCloseDirective, deps: [{ token: i1.ToasterService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ToastCloseDirective, isStandalone: true, selector: "[cToastClose]", inputs: { toast: ["cToastClose", "toast"] }, host: { listeners: { "click": "toggleOpen($event)" } }, exportAs: ["cToastClose"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cToastClose]',
                    exportAs: 'cToastClose',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i1.ToasterService }]; }, propDecorators: { toast: [{
                type: Input,
                args: ['cToastClose']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90b2FzdC90b2FzdC1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRL0QsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBR3ZELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7K0dBVlUsbUJBQW1CO21HQUFuQixtQkFBbUI7OzRGQUFuQixtQkFBbUI7a0JBTC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7cUdBR3VCLEtBQUs7c0JBQTFCLEtBQUs7dUJBQUMsYUFBYTtnQkFLcEIsVUFBVTtzQkFEVCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ZXIvdG9hc3Rlci5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NUb2FzdENsb3NlXScsXG4gIGV4cG9ydEFzOiAnY1RvYXN0Q2xvc2UnLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0Q2xvc2VEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgnY1RvYXN0Q2xvc2UnKSB0b2FzdDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnNldFN0YXRlKHsgc2hvdzogZmFsc2UsIHRvYXN0OiB0aGlzLnRvYXN0IH0pO1xuICB9XG5cbn1cbiJdfQ==