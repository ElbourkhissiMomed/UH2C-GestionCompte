import { Component, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../carousel-state";
export class CarouselControlComponent {
    constructor(changeDetectorRef, carouselState) {
        this.changeDetectorRef = changeDetectorRef;
        this.carouselState = carouselState;
        /**
         * Carousel control direction. [docs]
         * @type {'next' | 'prev'}
         */
        this.direction = 'next';
        this.hasContent = true;
    }
    /**
     * Carousel control caption. [docs]
     * @type string
     */
    set caption(value) {
        this._caption = value;
    }
    get caption() {
        return !!this._caption ? this._caption : this.direction === 'prev' ? 'Previous' : 'Next';
    }
    get hostRole() {
        return 'button';
    }
    get hostClasses() {
        return `carousel-control-${this.direction}`;
    }
    get carouselControlIconClass() {
        return `carousel-control-${this.direction}-icon`;
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            this.play();
        }
        if ($event.key === 'ArrowLeft') {
            this.play('prev');
        }
        if ($event.key === 'ArrowRight') {
            this.play('next');
        }
    }
    onClick($event) {
        this.play();
    }
    ngAfterViewInit() {
        this.hasContent = this.content?.nativeElement.childNodes.length ?? false;
        this.changeDetectorRef.detectChanges();
    }
    play(direction = this.direction) {
        const nextIndex = this.carouselState.direction(direction);
        this.carouselState.state = { activeItemIndex: nextIndex };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselControlComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.CarouselState }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: CarouselControlComponent, isStandalone: true, selector: "c-carousel-control", inputs: { caption: "caption", direction: "direction" }, host: { listeners: { "keyup": "onKeyUp($event)", "click": "onClick($event)" }, properties: { "attr.role": "this.hostRole", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: "<div #content *ngIf = \"hasContent; else defaultContent\"><ng-content></ng-content></div>\n<ng-template #defaultContent>\n  <span [class]=\"carouselControlIconClass\" [attr.aria-label]=\"direction\" [attr.aria-hidden]=\"true\"></span>\n  <span class=\"visually-hidden\">{{caption}}</span>\n</ng-template>\n", dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel-control', standalone: true, imports: [NgIf], template: "<div #content *ngIf = \"hasContent; else defaultContent\"><ng-content></ng-content></div>\n<ng-template #defaultContent>\n  <span [class]=\"carouselControlIconClass\" [attr.aria-label]=\"direction\" [attr.aria-hidden]=\"true\"></span>\n  <span class=\"visually-hidden\">{{caption}}</span>\n</ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.CarouselState }]; }, propDecorators: { caption: [{
                type: Input
            }], direction: [{
                type: Input
            }], hostRole: [{
                type: HostBinding,
                args: ['attr.role']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], content: [{
                type: ViewChild,
                args: ['content']
            }], onKeyUp: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWNvbnRyb2wvY2Fyb3VzZWwtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLWNvbnRyb2wvY2Fyb3VzZWwtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVV2QyxNQUFNLE9BQU8sd0JBQXdCO0lBRW5DLFlBQ1UsaUJBQW9DLEVBQ3BDLGFBQTRCO1FBRDVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFpQnRDOzs7V0FHRztRQUNNLGNBQVMsR0FBb0IsTUFBTSxDQUFDO1FBa0I3QyxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBdENmLENBQUM7SUFHSjs7O09BR0c7SUFDSCxJQUNJLE9BQU8sQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMzRixDQUFDO0lBUUQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQ0ksV0FBVztRQUNiLE9BQU8sb0JBQW9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsSUFBSSx3QkFBd0I7UUFDMUIsT0FBTyxvQkFBb0IsSUFBSSxDQUFDLFNBQVMsT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFPRCxPQUFPLENBQUMsTUFBcUI7UUFDM0IsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQjtRQUNELElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxZQUFZLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQjtJQUNILENBQUM7SUFHTSxPQUFPLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUztRQUNyQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUM1RCxDQUFDOytHQXZFVSx3QkFBd0I7bUdBQXhCLHdCQUF3QixzWUNwQnJDLG9UQUtBLDRDRGFZLElBQUk7OzRGQUVILHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRSxvQkFBb0IsY0FFbEIsSUFBSSxXQUNQLENBQUMsSUFBSSxDQUFDO29JQWVYLE9BQU87c0JBRFYsS0FBSztnQkFhRyxTQUFTO3NCQUFqQixLQUFLO2dCQUdGLFFBQVE7c0JBRFgsV0FBVzt1QkFBQyxXQUFXO2dCQU1wQixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFTRSxPQUFPO3NCQUE1QixTQUFTO3VCQUFDLFNBQVM7Z0JBS3BCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBYzFCLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENhcm91c2VsU3RhdGUgfSBmcm9tICcuLi9jYXJvdXNlbC1zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtY2Fyb3VzZWwtY29udHJvbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWZdXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY2Fyb3VzZWxTdGF0ZTogQ2Fyb3VzZWxTdGF0ZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBfY2FwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIENhcm91c2VsIGNvbnRyb2wgY2FwdGlvbi4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGNhcHRpb24odmFsdWUpIHtcbiAgICB0aGlzLl9jYXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY2FwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiAhIXRoaXMuX2NhcHRpb24gPyB0aGlzLl9jYXB0aW9uIDogdGhpcy5kaXJlY3Rpb24gPT09ICdwcmV2JyA/ICdQcmV2aW91cycgOiAnTmV4dCc7XG4gIH1cblxuICAvKipcbiAgICogQ2Fyb3VzZWwgY29udHJvbCBkaXJlY3Rpb24uIFtkb2NzXVxuICAgKiBAdHlwZSB7J25leHQnIHwgJ3ByZXYnfVxuICAgKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcgPSAnbmV4dCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBnZXQgaG9zdFJvbGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ2J1dHRvbic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBjYXJvdXNlbC1jb250cm9sLSR7dGhpcy5kaXJlY3Rpb259YDtcbiAgfVxuXG4gIGdldCBjYXJvdXNlbENvbnRyb2xJY29uQ2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGNhcm91c2VsLWNvbnRyb2wtJHt0aGlzLmRpcmVjdGlvbn0taWNvbmA7XG4gIH1cblxuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudD86IEVsZW1lbnRSZWY7XG5cbiAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnLCBbJyRldmVudCddKVxuICBvbktleVVwKCRldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gICAgaWYgKCRldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICB0aGlzLnBsYXkoJ3ByZXYnKTtcbiAgICB9XG4gICAgaWYgKCRldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgdGhpcy5wbGF5KCduZXh0Jyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhc0NvbnRlbnQgPSB0aGlzLmNvbnRlbnQ/Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGggPz8gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHBsYXkoZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmNhcm91c2VsU3RhdGUuZGlyZWN0aW9uKGRpcmVjdGlvbik7XG4gICAgdGhpcy5jYXJvdXNlbFN0YXRlLnN0YXRlID0geyBhY3RpdmVJdGVtSW5kZXg6IG5leHRJbmRleCB9O1xuICB9XG59XG4iLCI8ZGl2ICNjb250ZW50ICpuZ0lmID0gXCJoYXNDb250ZW50OyBlbHNlIGRlZmF1bHRDb250ZW50XCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuPG5nLXRlbXBsYXRlICNkZWZhdWx0Q29udGVudD5cbiAgPHNwYW4gW2NsYXNzXT1cImNhcm91c2VsQ29udHJvbEljb25DbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwiZGlyZWN0aW9uXCIgW2F0dHIuYXJpYS1oaWRkZW5dPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57e2NhcHRpb259fTwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=