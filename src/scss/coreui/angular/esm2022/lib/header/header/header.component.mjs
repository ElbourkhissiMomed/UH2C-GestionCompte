import { Component, HostBinding, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class HeaderComponent {
    constructor() {
        /**
         * Default role for header. [docs]
         * @type string
         * @default 'header'
         */
        this.role = 'header';
    }
    get getClasses() {
        return !!this.container ? this.containerClasses : this.headerClasses;
    }
    get headerClasses() {
        return {
            header: true,
            [`header-${this.position}`]: !!this.position
        };
    }
    get containerClasses() {
        return {
            container: this.container === true,
            [`container-${this.container}`]: typeof this.container === 'string'
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: HeaderComponent, isStandalone: true, selector: "c-header, [c-header]", inputs: { container: "container", position: "position", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.getClasses" } }, ngImport: i0, template: "<div [ngClass]=\"headerClasses\" *ngIf=\"!!container; else elseBlock\">\n  <ng-content></ng-content>\n</div>\n<ng-template #elseBlock>\n  <ng-content></ng-content>\n</ng-template>\n\n\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-header, [c-header]', standalone: true, imports: [NgClass, NgIf], template: "<div [ngClass]=\"headerClasses\" *ngIf=\"!!container; else elseBlock\">\n  <ng-content></ng-content>\n</div>\n<ng-template #elseBlock>\n  <ng-content></ng-content>\n</ng-template>\n\n\n" }]
        }], propDecorators: { container: [{
                type: Input
            }], position: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], getClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9oZWFkZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFZaEQsTUFBTSxPQUFPLGVBQWU7SUFONUI7UUFlRTs7OztXQUlHO1FBRU0sU0FBSSxHQUFHLFFBQVEsQ0FBQztLQW9CMUI7SUFsQkMsSUFDSSxVQUFVO1FBQ1osT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUk7WUFDWixDQUFDLFVBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQzdDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUk7WUFDbEMsQ0FBQyxhQUFhLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRO1NBQ3BFLENBQUM7SUFDSixDQUFDOytHQWxDVSxlQUFlO21HQUFmLGVBQWUsd09DYjVCLDJMQVFBLDRDREdZLE9BQU8sb0ZBQUUsSUFBSTs7NEZBRVosZUFBZTtrQkFOM0IsU0FBUzsrQkFDRSxzQkFBc0IsY0FFcEIsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzs4QkFNZixTQUFTO3NCQUFqQixLQUFLO2dCQUlHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBT0csSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLO2dCQUdGLFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBQb3NpdGlvbnMgfSBmcm9tICcuLi8uLi9jb3JldWkudHlwZXMnO1xuXG50eXBlIENvbnRhaW5lciA9IGJvb2xlYW4gfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCcgfCAnZmx1aWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWhlYWRlciwgW2MtaGVhZGVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdDbGFzcywgTmdJZl1cbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmluZXMgb3B0aW9uYWwgY29udGFpbmVyIHdyYXBwaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyPzogQ29udGFpbmVyO1xuICAvKipcbiAgICogUGxhY2UgaGVhZGVyIGluIG5vbi1zdGF0aWMgcG9zaXRpb25zLlxuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb24/OiBQb3NpdGlvbnM7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHJvbGUgZm9yIGhlYWRlci4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnaGVhZGVyJ1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBASW5wdXQoKSByb2xlID0gJ2hlYWRlcic7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBnZXRDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuICEhdGhpcy5jb250YWluZXIgPyB0aGlzLmNvbnRhaW5lckNsYXNzZXMgOiB0aGlzLmhlYWRlckNsYXNzZXM7XG4gIH1cblxuICBnZXQgaGVhZGVyQ2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXI6IHRydWUsXG4gICAgICBbYGhlYWRlci0ke3RoaXMucG9zaXRpb259YF06ICEhdGhpcy5wb3NpdGlvblxuICAgIH07XG4gIH1cblxuICBnZXQgY29udGFpbmVyQ2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyID09PSB0cnVlLFxuICAgICAgW2Bjb250YWluZXItJHt0aGlzLmNvbnRhaW5lcn1gXTogdHlwZW9mIHRoaXMuY29udGFpbmVyID09PSAnc3RyaW5nJ1xuICAgIH07XG4gIH1cbn1cbiIsIjxkaXYgW25nQ2xhc3NdPVwiaGVhZGVyQ2xhc3Nlc1wiICpuZ0lmPVwiISFjb250YWluZXI7IGVsc2UgZWxzZUJsb2NrXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctdGVtcGxhdGU+XG5cblxuIl19