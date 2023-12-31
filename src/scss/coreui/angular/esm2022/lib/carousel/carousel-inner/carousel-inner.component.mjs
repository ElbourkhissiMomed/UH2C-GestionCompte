import { Component, ContentChildren, HostBinding } from '@angular/core';
import { fadeAnimation, slideAnimation } from '../carousel.animation';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import * as i0 from "@angular/core";
import * as i1 from "../carousel-state";
export class CarouselInnerComponent {
    constructor(carouselState) {
        this.carouselState = carouselState;
        this.carouselInnerClass = true;
        this.slide = { left: true };
        this.transition = 'slide';
    }
    ngAfterContentInit() {
        this.setItems();
    }
    ngAfterContentChecked() {
        this.setItems();
        const state = this.carouselState?.state;
        const nextIndex = state?.activeItemIndex;
        const nextDirection = state?.direction;
        if (this.activeIndex !== nextIndex) {
            this.animate = state?.animate;
            this.slide = { left: nextDirection === 'next' };
            this.activeIndex = state?.activeItemIndex;
            this.transition = state?.transition ?? 'slide';
        }
    }
    setItems() {
        if (this.prevContentItems !== this.contentItems) {
            this.prevContentItems = this.contentItems;
            this.carouselState.setItems(this.contentItems);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselInnerComponent, deps: [{ token: i1.CarouselState }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: CarouselInnerComponent, isStandalone: true, selector: "c-carousel-inner", host: { properties: { "class.carousel-inner": "this.carouselInnerClass" } }, queries: [{ propertyName: "contentItems", predicate: CarouselItemComponent }], ngImport: i0, template: "<div [@slideAnimation]=\"slide\" [@.disabled]=\"!animate\">\n  <ng-content></ng-content>\n</div>\n<!--todo-->\n<!--<div [@fadeAnimation]=\"slide\" [@.disabled]=\"!animate\" >-->\n<!--  <ng-content></ng-content>-->\n<!--</div>-->\n", styles: [":host{display:block}\n"], animations: [slideAnimation, fadeAnimation] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselInnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-inner', animations: [slideAnimation, fadeAnimation], standalone: true, template: "<div [@slideAnimation]=\"slide\" [@.disabled]=\"!animate\">\n  <ng-content></ng-content>\n</div>\n<!--todo-->\n<!--<div [@fadeAnimation]=\"slide\" [@.disabled]=\"!animate\" >-->\n<!--  <ng-content></ng-content>-->\n<!--</div>-->\n", styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.CarouselState }]; }, propDecorators: { carouselInnerClass: [{
                type: HostBinding,
                args: ['class.carousel-inner']
            }], contentItems: [{
                type: ContentChildren,
                args: [CarouselItemComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC1pbm5lci9jYXJvdXNlbC1pbm5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWlubmVyL2Nhcm91c2VsLWlubmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7QUFVakYsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUVYLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcvRCxVQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFHLE9BQU8sQ0FBQztJQU44QixDQUFDO0lBVXBELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDeEMsTUFBTSxTQUFTLEdBQUcsS0FBSyxFQUFFLGVBQWUsQ0FBQztRQUN6QyxNQUFNLGFBQWEsR0FBRyxLQUFLLEVBQUUsU0FBUyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsYUFBYSxLQUFLLE1BQU0sRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxFQUFFLGVBQWUsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssRUFBRSxVQUFVLElBQUksT0FBTyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7K0dBakNVLHNCQUFzQjttR0FBdEIsc0JBQXNCLHNMQVFoQixxQkFBcUIsNkJDNUJ4Qyx3T0FPQSxrRERVYyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUM7OzRGQUdoQyxzQkFBc0I7a0JBUGxDLFNBQVM7K0JBQ0Usa0JBQWtCLGNBR2hCLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxjQUMvQixJQUFJO29HQUtxQixrQkFBa0I7c0JBQXRELFdBQVc7dUJBQUMsc0JBQXNCO2dCQUthLFlBQVk7c0JBQTNELGVBQWU7dUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEhvc3RCaW5kaW5nLFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZhZGVBbmltYXRpb24sIHNsaWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vY2Fyb3VzZWwuYW5pbWF0aW9uJztcbmltcG9ydCB7IENhcm91c2VsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Nhcm91c2VsLWl0ZW0vY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTdGF0ZSB9IGZyb20gJy4uL2Nhcm91c2VsLXN0YXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jYXJvdXNlbC1pbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1pbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLWlubmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFuaW1hdGlvbiwgZmFkZUFuaW1hdGlvbl0sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxJbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcm91c2VsU3RhdGU6IENhcm91c2VsU3RhdGUpIHt9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pbm5lcicpIGNhcm91c2VsSW5uZXJDbGFzcyA9IHRydWU7XG4gIGFjdGl2ZUluZGV4PzogbnVtYmVyO1xuICBhbmltYXRlPzogYm9vbGVhbjtcbiAgc2xpZGUgPSB7IGxlZnQ6IHRydWUgfTtcbiAgdHJhbnNpdGlvbiA9ICdzbGlkZSc7XG4gIEBDb250ZW50Q2hpbGRyZW4oQ2Fyb3VzZWxJdGVtQ29tcG9uZW50KSBwcml2YXRlIGNvbnRlbnRJdGVtcyE6IFF1ZXJ5TGlzdDxDYXJvdXNlbEl0ZW1Db21wb25lbnQ+O1xuICBwcml2YXRlIHByZXZDb250ZW50SXRlbXMhOiBRdWVyeUxpc3Q8Q2Fyb3VzZWxJdGVtQ29tcG9uZW50PjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJdGVtcygpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0SXRlbXMoKTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY2Fyb3VzZWxTdGF0ZT8uc3RhdGU7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gc3RhdGU/LmFjdGl2ZUl0ZW1JbmRleDtcbiAgICBjb25zdCBuZXh0RGlyZWN0aW9uID0gc3RhdGU/LmRpcmVjdGlvbjtcbiAgICBpZiAodGhpcy5hY3RpdmVJbmRleCAhPT0gbmV4dEluZGV4KSB7XG4gICAgICB0aGlzLmFuaW1hdGUgPSBzdGF0ZT8uYW5pbWF0ZTtcbiAgICAgIHRoaXMuc2xpZGUgPSB7IGxlZnQ6IG5leHREaXJlY3Rpb24gPT09ICduZXh0JyB9O1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHN0YXRlPy5hY3RpdmVJdGVtSW5kZXg7XG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSBzdGF0ZT8udHJhbnNpdGlvbiA/PyAnc2xpZGUnO1xuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXZDb250ZW50SXRlbXMgIT09IHRoaXMuY29udGVudEl0ZW1zKSB7XG4gICAgICB0aGlzLnByZXZDb250ZW50SXRlbXMgPSB0aGlzLmNvbnRlbnRJdGVtcztcbiAgICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZS5zZXRJdGVtcyh0aGlzLmNvbnRlbnRJdGVtcyk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IFtAc2xpZGVBbmltYXRpb25dPVwic2xpZGVcIiBbQC5kaXNhYmxlZF09XCIhYW5pbWF0ZVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjwhLS10b2RvLS0+XG48IS0tPGRpdiBbQGZhZGVBbmltYXRpb25dPVwic2xpZGVcIiBbQC5kaXNhYmxlZF09XCIhYW5pbWF0ZVwiID4tLT5cbjwhLS0gIDxuZy1jb250ZW50PjwvbmctY29udGVudD4tLT5cbjwhLS08L2Rpdj4tLT5cbiJdfQ==