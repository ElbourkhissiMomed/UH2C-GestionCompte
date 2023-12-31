import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../modal.service";
export class ModalToggleDirective {
    constructor(modalService) {
        this.modalService = modalService;
    }
    dismiss($event) {
        $event.preventDefault();
        this.modalService.toggle({ show: 'toggle', id: this.id });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalToggleDirective, deps: [{ token: i1.ModalService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ModalToggleDirective, isStandalone: true, selector: "[cModalToggle]", inputs: { id: ["cModalToggle", "id"] }, host: { listeners: { "click": "dismiss($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cModalToggle]',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i1.ModalService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cModalToggle']
            }], dismiss: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbW9kYWwvbW9kYWwtZGlzbWlzcy9tb2RhbC10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUS9ELE1BQU0sT0FBTyxvQkFBb0I7SUFNL0IsWUFDVSxZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNoQyxDQUFDO0lBR0wsT0FBTyxDQUFDLE1BQVc7UUFDakIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzsrR0FkVSxvQkFBb0I7bUdBQXBCLG9CQUFvQjs7NEZBQXBCLG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7bUdBS3dCLEVBQUU7c0JBQXhCLEtBQUs7dUJBQUMsY0FBYztnQkFPckIsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NNb2RhbFRvZ2dsZV0nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsVG9nZ2xlRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIEh0bWwgaWQgYXR0ciBvZiBtb2RhbCB0byBkaXNtaXNzLlxuICAgKi9cbiAgQElucHV0KCdjTW9kYWxUb2dnbGUnKSBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2VcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGRpc21pc3MoJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm1vZGFsU2VydmljZS50b2dnbGUoe3Nob3c6ICd0b2dnbGUnLCBpZDogdGhpcy5pZH0pO1xuICB9XG59XG4iXX0=