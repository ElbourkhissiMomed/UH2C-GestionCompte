import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../carousel.service";
import * as i2 from "../carousel-state";
export class CarouselIndicatorsComponent {
    constructor(carouselService, carouselState) {
        this.carouselService = carouselService;
        this.carouselState = carouselState;
        this.items = [];
        this.active = 0;
    }
    ngOnInit() {
        this.carouselStateSubscribe();
    }
    ngOnDestroy() {
        this.carouselStateSubscribe(false);
    }
    onClick(index) {
        if (index !== this.active) {
            const direction = index < this.active ? 'prev' : 'next';
            this.carouselState.state = { direction, activeItemIndex: index };
        }
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextIndex) => {
                this.items = this.carouselState?.state?.items?.map(item => item.index) ?? [];
                if ('active' in nextIndex) {
                    this.active = nextIndex.active ?? 0;
                }
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselIndicatorsComponent, deps: [{ token: i1.CarouselService }, { token: i2.CarouselState }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: CarouselIndicatorsComponent, isStandalone: true, selector: "c-carousel-indicators", ngImport: i0, template: "<div class=\"carousel-indicators\">\n  <ng-container *ngFor=\"let item of items; let i=index\">\n    <button [attr.data-coreui-target]=\"i\" type=\"button\" (click)=\"onClick(i)\" [class]=\"{active: active === i}\" [attr.aria-current]=\"active === i\"></button>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselIndicatorsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-indicators', standalone: true, imports: [NgForOf], template: "<div class=\"carousel-indicators\">\n  <ng-container *ngFor=\"let item of items; let i=index\">\n    <button [attr.data-coreui-target]=\"i\" type=\"button\" (click)=\"onClick(i)\" [class]=\"{active: active === i}\" [attr.aria-current]=\"active === i\"></button>\n  </ng-container>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.CarouselService }, { type: i2.CarouselState }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW5kaWNhdG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWluZGljYXRvcnMvY2Fyb3VzZWwtaW5kaWNhdG9ycy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWluZGljYXRvcnMvY2Fyb3VzZWwtaW5kaWNhdG9ycy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFZMUMsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxZQUNVLGVBQWdDLEVBQ2hDLGFBQTRCO1FBRDVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUd0QyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztRQUNuQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBSFIsQ0FBQztJQU1KLFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixNQUFNLFNBQVMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ2xFO0lBQ0gsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFlBQXFCLElBQUk7UUFDdEQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQzNGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzdFLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztpQkFDckM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMseUJBQXlCLEVBQUUsV0FBVyxFQUFFLENBQUM7U0FDL0M7SUFDSCxDQUFDOytHQXBDVSwyQkFBMkI7bUdBQTNCLDJCQUEyQixpRkNieEMsb1NBS0EsNENETVksT0FBTzs7NEZBRU4sMkJBQTJCO2tCQU52QyxTQUFTOytCQUNFLHVCQUF1QixjQUVyQixJQUFJLFdBQ1AsQ0FBQyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvck9mIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDYXJvdXNlbFN0YXRlIH0gZnJvbSAnLi4vY2Fyb3VzZWwtc3RhdGUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY2Fyb3VzZWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtY2Fyb3VzZWwtaW5kaWNhdG9ycycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1pbmRpY2F0b3JzLmNvbXBvbmVudC5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nRm9yT2ZdXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW5kaWNhdG9yc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IENhcm91c2VsU2VydmljZSxcbiAgICBwcml2YXRlIGNhcm91c2VsU3RhdGU6IENhcm91c2VsU3RhdGVcbiAgKSB7fVxuXG4gIGl0ZW1zOiAobnVtYmVyIHwgdW5kZWZpbmVkKVtdID0gW107XG4gIGFjdGl2ZSA9IDA7XG4gIHByaXZhdGUgY2Fyb3VzZWxJbmRleFN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsU3RhdGVTdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZVN1YnNjcmliZShmYWxzZSk7XG4gIH1cblxuICBvbkNsaWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggIT09IHRoaXMuYWN0aXZlKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBpbmRleCA8IHRoaXMuYWN0aXZlID8gJ3ByZXYnIDogJ25leHQnO1xuICAgICAgdGhpcy5jYXJvdXNlbFN0YXRlLnN0YXRlID0geyBkaXJlY3Rpb24sIGFjdGl2ZUl0ZW1JbmRleDogaW5kZXggfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhcm91c2VsU3RhdGVTdWJzY3JpYmUoc3Vic2NyaWJlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmIChzdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWxJbmRleFN1YnNjcmlwdGlvbiA9IHRoaXMuY2Fyb3VzZWxTZXJ2aWNlLmNhcm91c2VsSW5kZXgkLnN1YnNjcmliZSgobmV4dEluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmNhcm91c2VsU3RhdGU/LnN0YXRlPy5pdGVtcz8ubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkgPz8gW107XG4gICAgICAgIGlmICgnYWN0aXZlJyBpbiBuZXh0SW5kZXgpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9IG5leHRJbmRleC5hY3RpdmUgPz8gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2Fyb3VzZWxJbmRleFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpPWluZGV4XCI+XG4gICAgPGJ1dHRvbiBbYXR0ci5kYXRhLWNvcmV1aS10YXJnZXRdPVwiaVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25DbGljayhpKVwiIFtjbGFzc109XCJ7YWN0aXZlOiBhY3RpdmUgPT09IGl9XCIgW2F0dHIuYXJpYS1jdXJyZW50XT1cImFjdGl2ZSA9PT0gaVwiPjwvYnV0dG9uPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19