import { Component, HostBinding, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../carousel.service";
export class CarouselItemComponent {
    /**
     * @ignore
     */
    set active(value) {
        this._active = coerceBooleanProperty(value);
        this.changeDetectorRef.markForCheck();
    }
    get active() {
        return this._active;
    }
    get hostClasses() {
        return {
            'carousel-item': true,
            active: this.active
        };
    }
    constructor(carouselService, changeDetectorRef) {
        this.carouselService = carouselService;
        this.changeDetectorRef = changeDetectorRef;
        this._active = false;
        /**
         * Time delay before cycling to next item. If -1, uses carousel interval value.
         * @type number
         * @default -1
         */
        this.interval = -1;
    }
    ngOnDestroy() {
        this.carouselStateSubscribe(false);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.carouselStateSubscribe();
        });
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
                if ('active' in nextIndex) {
                    this.active = nextIndex.active === this.index;
                }
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselItemComponent, deps: [{ token: i1.CarouselService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: CarouselItemComponent, isStandalone: true, selector: "c-carousel-item", inputs: { active: "active", interval: "interval" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: "<!--todo ngIf-->\n<ng-container *ngIf=\"active\">\n  <ng-content></ng-content>\n</ng-container>\n\n", styles: [":host{display:block}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-item', standalone: true, imports: [NgIf], template: "<!--todo ngIf-->\n<ng-container *ngIf=\"active\">\n  <ng-content></ng-content>\n</ng-container>\n\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.CarouselService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { active: [{
                type: Input
            }], interval: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9DLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQVk1RSxNQUFNLE9BQU8scUJBQXFCO0lBT2hDOztPQUVHO0lBQ0gsSUFDSSxNQUFNLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQVdELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSTtZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUNVLGVBQWdDLEVBQ2hDLGlCQUFvQztRQURwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQW5CdEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUV4Qjs7OztXQUlHO1FBQ00sYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBYTVCLENBQUM7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFlBQXFCLElBQUk7UUFDdEQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQzNGLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQy9DO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLHlCQUF5QixFQUFFLFdBQVcsRUFBRSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzsrR0E5RFUscUJBQXFCO21HQUFyQixxQkFBcUIsc0xDZGxDLHFHQUtBLGdGRE9ZLElBQUk7OzRGQUVILHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxJQUFJLENBQUM7c0lBYVgsTUFBTTtzQkFEVCxLQUFLO2dCQWlCRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENhcm91c2VsU2VydmljZSB9IGZyb20gJy4uL2Nhcm91c2VsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWNhcm91c2VsLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWZdXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2FjdGl2ZTogQm9vbGVhbklucHV0O1xuXG4gIGluZGV4PzogbnVtYmVyO1xuICBwcml2YXRlIGNhcm91c2VsSW5kZXhTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBhY3RpdmUodmFsdWUpIHtcbiAgICB0aGlzLl9hY3RpdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGltZSBkZWxheSBiZWZvcmUgY3ljbGluZyB0byBuZXh0IGl0ZW0uIElmIC0xLCB1c2VzIGNhcm91c2VsIGludGVydmFsIHZhbHVlLlxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlZmF1bHQgLTFcbiAgICovXG4gIEBJbnB1dCgpIGludGVydmFsOiBudW1iZXIgPSAtMTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdjYXJvdXNlbC1pdGVtJzogdHJ1ZSxcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmVcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IENhcm91c2VsU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbFN0YXRlU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZVN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjYXJvdXNlbFN0YXRlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLmNhcm91c2VsSW5kZXhTdWJzY3JpcHRpb24gPSB0aGlzLmNhcm91c2VsU2VydmljZS5jYXJvdXNlbEluZGV4JC5zdWJzY3JpYmUoKG5leHRJbmRleCkgPT4ge1xuICAgICAgICBpZiAoJ2FjdGl2ZScgaW4gbmV4dEluZGV4KSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmUgPSBuZXh0SW5kZXguYWN0aXZlID09PSB0aGlzLmluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJvdXNlbEluZGV4U3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPCEtLXRvZG8gbmdJZi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGl2ZVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cblxuIl19