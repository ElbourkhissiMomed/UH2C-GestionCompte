import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../sidebar.service";
/**
 * Allows the sidebar to be toggled/folded via click on host element.
 */
export class SidebarToggleDirective {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
        /**
         * Sidebar property name for toggle action. [docs]
         *
         * @type 'visible' | 'unfoldable'
         * @default 'visible'
         */
        this.toggle = 'visible';
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.sidebarService.toggle({ toggle: this.toggle, id: this.id });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarToggleDirective, deps: [{ token: i1.SidebarService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: SidebarToggleDirective, isStandalone: true, selector: "[cSidebarToggle]", inputs: { id: ["cSidebarToggle", "id"], toggle: "toggle" }, host: { listeners: { "click": "toggleOpen($event)" } }, exportAs: ["cSidebarToggle"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cSidebarToggle]',
                    exportAs: 'cSidebarToggle',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i1.SidebarService }]; }, propDecorators: { id: [{
                type: Input,
                args: ['cSidebarToggle']
            }], toggle: [{
                type: Input
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci10b2dnbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItdG9nZ2xlL3NpZGViYXItdG9nZ2xlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUk3RDs7R0FFRztBQU1ILE1BQU0sT0FBTyxzQkFBc0I7SUFlakMsWUFDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFUeEM7Ozs7O1dBS0c7UUFDTSxXQUFNLEdBQTZCLFNBQVMsQ0FBQTtJQUlsRCxDQUFDO0lBR0osVUFBVSxDQUFDLE1BQVc7UUFDcEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7K0dBdkJVLHNCQUFzQjttR0FBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQUxsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjtxR0FPMEIsRUFBRTtzQkFBMUIsS0FBSzt1QkFBQyxnQkFBZ0I7Z0JBT2QsTUFBTTtzQkFBZCxLQUFLO2dCQU9OLFVBQVU7c0JBRFQsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2lkZWJhclNlcnZpY2V9IGZyb20gJy4uL3NpZGViYXIuc2VydmljZSc7XG5cbi8qKlxuICogQWxsb3dzIHRoZSBzaWRlYmFyIHRvIGJlIHRvZ2dsZWQvZm9sZGVkIHZpYSBjbGljayBvbiBob3N0IGVsZW1lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjU2lkZWJhclRvZ2dsZV0nLFxuICBleHBvcnRBczogJ2NTaWRlYmFyVG9nZ2xlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIElkIG9mIHNpZGViYXIgZm9yIHRvZ2dsZSBhY3Rpb24uIFtkb2NzXVxuICAgKlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgnY1NpZGViYXJUb2dnbGUnKSBpZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFNpZGViYXIgcHJvcGVydHkgbmFtZSBmb3IgdG9nZ2xlIGFjdGlvbi4gW2RvY3NdXG4gICAqXG4gICAqIEB0eXBlICd2aXNpYmxlJyB8ICd1bmZvbGRhYmxlJ1xuICAgKiBAZGVmYXVsdCAndmlzaWJsZSdcbiAgICovXG4gIEBJbnB1dCgpIHRvZ2dsZTogJ3Zpc2libGUnIHwgJ3VuZm9sZGFibGUnID0gJ3Zpc2libGUnXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgdG9nZ2xlT3BlbigkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgdG9nZ2xlOiB0aGlzLnRvZ2dsZSwgaWQ6IHRoaXMuaWQgfSk7XG4gIH1cbn1cbiJdfQ==