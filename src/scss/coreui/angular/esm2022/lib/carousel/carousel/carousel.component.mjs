import { Component, EventEmitter, HostBinding, Inject, Input, Output } from '@angular/core';
import { fromEvent, withLatestFrom, zipWith } from 'rxjs';
import { IntersectionService } from '../../services/intersection.service';
import { ListenersService } from '../../services/listeners.service';
import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';
import { CarouselConfig } from '../carousel.config';
import * as i0 from "@angular/core";
import * as i1 from "../carousel.service";
import * as i2 from "../carousel-state";
import * as i3 from "../../services/intersection.service";
import * as i4 from "../../services/listeners.service";
import * as i5 from "../carousel.config";
export class CarouselComponent {
    get hostClasses() {
        return {
            carousel: true,
            slide: true,
            'carousel-dark': !!this.dark,
            'carousel-fade': this.transition === 'crossfade'
        };
    }
    constructor(config, hostElement, carouselService, carouselState, intersectionService, listenersService) {
        this.config = config;
        this.hostElement = hostElement;
        this.carouselService = carouselService;
        this.carouselState = carouselState;
        this.intersectionService = intersectionService;
        this.listenersService = listenersService;
        /**
         * Index of the active item.
         * @type number
         */
        this.activeIndex = 0;
        /**
         * Carousel automatically starts cycle items.
         * @type boolean
         */
        this.animate = true;
        /**
         * Carousel direction. [docs]
         * @type {'next' | 'prev'}
         */
        this.direction = 'next';
        /**
         * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
         * @type number
         * @default 0
         */
        this.interval = 0;
        /**
         * Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them.
         * @type {'hover' | 'focus' | 'click'}
         */
        this.pause = 'hover';
        /**
         * Support left/right swipe interactions on touchscreen devices.
         * @type boolean
         * @default true
         */
        this.touch = true;
        /**
         * Set type of the transition.
         * @type {'slide' | 'crossfade'}
         * @default 'slide'
         */
        this.transition = 'slide';
        /**
         * Set whether the carousel should cycle continuously or have hard stops.
         * @type boolean
         * @default true
         */
        this.wrap = true;
        /**
         * Event emitted on carousel item change. [docs]
         * @type number
         */
        this.itemChange = new EventEmitter();
        this.activeItemInterval = 0;
        this._visible = true;
        Object.assign(this, config);
    }
    ngOnInit() {
        this.carouselStateSubscribe();
    }
    ngOnDestroy() {
        this.clearListeners();
        this.carouselStateSubscribe(false);
        this.intersectionServiceSubscribe(false);
        this.swipeSubscribe(false);
    }
    ngAfterContentInit() {
        this.intersectionService.createIntersectionObserver(this.hostElement);
        this.intersectionServiceSubscribe();
        this.carouselState.state = { activeItemIndex: this.activeIndex, animate: this.animate };
        this.setListeners();
        this.swipeSubscribe();
    }
    setListeners() {
        const config = {
            hostElement: this.hostElement,
            trigger: this.pause || [],
            callbackOff: () => {
                this.setTimer();
            },
            callbackOn: () => {
                this.resetTimer();
            }
        };
        this.listenersService.setListeners(config);
    }
    clearListeners() {
        this.listenersService.clearListeners();
    }
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    setTimer() {
        const interval = this.activeItemInterval || 0;
        this.resetTimer();
        if (interval > 0) {
            this.timerId = setTimeout(() => {
                const nextIndex = this.carouselState.direction(this.direction);
                this.carouselState.state = { activeItemIndex: nextIndex };
            }, interval);
        }
    }
    resetTimer() {
        clearTimeout(this.timerId);
    }
    carouselStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.carouselIndexSubscription = this.carouselService.carouselIndex$.subscribe((nextItem) => {
                if ('active' in nextItem) {
                    this.itemChange.emit(nextItem.active);
                }
                this.activeItemInterval = typeof nextItem.interval === 'number' && nextItem.interval > -1 ? nextItem.interval : this.interval;
                const isLastItem = ((nextItem.active === nextItem.lastItemIndex) && this.direction === 'next') || ((nextItem.active === 0) && this.direction === 'prev');
                !this.wrap && isLastItem ? this.resetTimer() : this.setTimer();
            });
        }
        else {
            this.carouselIndexSubscription?.unsubscribe();
        }
    }
    intersectionServiceSubscribe(subscribe = true) {
        if (subscribe) {
            this.intersectingSubscription = this.intersectionService.intersecting$.subscribe(isIntersecting => {
                this.visible = isIntersecting;
                isIntersecting ? this.setTimer() : this.resetTimer();
            });
        }
        else {
            this.intersectingSubscription?.unsubscribe();
        }
    }
    swipeSubscribe(subscribe = true) {
        if (this.touch && subscribe) {
            const carouselElement = this.hostElement.nativeElement;
            const touchStart$ = fromEvent(carouselElement, 'touchstart');
            const touchEnd$ = fromEvent(carouselElement, 'touchend');
            const touchMove$ = fromEvent(carouselElement, 'touchmove');
            this.swipeSubscription = touchStart$.pipe(zipWith(touchEnd$.pipe(withLatestFrom(touchMove$))))
                .subscribe(([touchstart, [touchend, touchmove]]) => {
                touchstart.stopPropagation();
                touchmove.stopPropagation();
                const distanceX = touchstart.touches[0].clientX - touchmove.touches[0].clientX;
                if (Math.abs(distanceX) > 0.3 * carouselElement.clientWidth && touchstart.timeStamp <= touchmove.timeStamp) {
                    const nextIndex = this.carouselState.direction(distanceX > 0 ? 'next' : 'prev');
                    this.carouselState.state = { activeItemIndex: nextIndex };
                }
            });
        }
        else {
            this.swipeSubscription?.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselComponent, deps: [{ token: CarouselConfig }, { token: i0.ElementRef }, { token: i1.CarouselService }, { token: i2.CarouselState }, { token: i3.IntersectionService }, { token: i4.ListenersService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: CarouselComponent, isStandalone: true, selector: "c-carousel", inputs: { activeIndex: "activeIndex", animate: "animate", dark: "dark", direction: "direction", interval: "interval", pause: "pause", touch: "touch", transition: "transition", wrap: "wrap" }, outputs: { itemChange: "itemChange" }, host: { properties: { "class": "this.hostClasses" } }, providers: [CarouselService, CarouselState, CarouselConfig, IntersectionService, ListenersService], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-carousel', template: '<ng-content></ng-content>', providers: [CarouselService, CarouselState, CarouselConfig, IntersectionService, ListenersService], standalone: true, styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i5.CarouselConfig, decorators: [{
                    type: Inject,
                    args: [CarouselConfig]
                }] }, { type: i0.ElementRef }, { type: i1.CarouselService }, { type: i2.CarouselState }, { type: i3.IntersectionService }, { type: i4.ListenersService }]; }, propDecorators: { activeIndex: [{
                type: Input
            }], animate: [{
                type: Input
            }], dark: [{
                type: Input
            }], direction: [{
                type: Input
            }], interval: [{
                type: Input
            }], pause: [{
                type: Input
            }], touch: [{
                type: Input
            }], transition: [{
                type: Input
            }], wrap: [{
                type: Input
            }], itemChange: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWdCLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBVXBELE1BQU0sT0FBTyxpQkFBaUI7SUF3RDVCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUM1QixlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXO1NBQ2pELENBQUM7SUFDSixDQUFDO0lBUUQsWUFDa0MsTUFBc0IsRUFDOUMsV0FBdUIsRUFDdkIsZUFBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsbUJBQXdDLEVBQ3hDLGdCQUFrQztRQUxWLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQzlDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG9CQUFl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QW5CLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFLRyxTQUFTO3NCQUFqQixLQUFLO2dCQU1HLFFBQVE7c0JBQWhCLEtBQUs7Z0JBS0csS0FBSztzQkFBYixLQUFLO2dCQU1HLEtBQUs7c0JBQWIsS0FBSztnQkFNRyxVQUFVO3NCQUFsQixLQUFLO2dCQU1HLElBQUk7c0JBQVosS0FBSztnQkFLSSxVQUFVO3NCQUFuQixNQUFNO2dCQUdILFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24sIHdpdGhMYXRlc3RGcm9tLCB6aXBXaXRoIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEludGVyc2VjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcnNlY3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJTGlzdGVuZXJzQ29uZmlnLCBMaXN0ZW5lcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlzdGVuZXJzLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDYXJvdXNlbFN0YXRlIH0gZnJvbSAnLi4vY2Fyb3VzZWwtc3RhdGUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTZXJ2aWNlIH0gZnJvbSAnLi4vY2Fyb3VzZWwuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJvdXNlbENvbmZpZyB9IGZyb20gJy4uL2Nhcm91c2VsLmNvbmZpZyc7XG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4uLy4uL2NvcmV1aS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtDYXJvdXNlbFNlcnZpY2UsIENhcm91c2VsU3RhdGUsIENhcm91c2VsQ29uZmlnLCBJbnRlcnNlY3Rpb25TZXJ2aWNlLCBMaXN0ZW5lcnNTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgLyoqXG4gICAqIEluZGV4IG9mIHRoZSBhY3RpdmUgaXRlbS5cbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVJbmRleCA9IDA7XG4gIC8qKlxuICAgKiBDYXJvdXNlbCBhdXRvbWF0aWNhbGx5IHN0YXJ0cyBjeWNsZSBpdGVtcy5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgYW5pbWF0ZSA9IHRydWU7XG4gIC8qKlxuICAgKiBBZGQgZGFya2VyIGNvbnRyb2xzLCBpbmRpY2F0b3JzLCBhbmQgY2FwdGlvbnMuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIGRhcms/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2Fyb3VzZWwgZGlyZWN0aW9uLiBbZG9jc11cbiAgICogQHR5cGUgeyduZXh0JyB8ICdwcmV2J31cbiAgICovXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogJ25leHQnIHwgJ3ByZXYnID0gJ25leHQnO1xuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiB0aW1lIHRvIGRlbGF5IGJldHdlZW4gYXV0b21hdGljYWxseSBjeWNsaW5nIGFuIGl0ZW0uIElmIGZhbHNlLCBjYXJvdXNlbCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGN5Y2xlLlxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlZmF1bHQgMFxuICAgKi9cbiAgQElucHV0KCkgaW50ZXJ2YWwgPSAwO1xuICAvKipcbiAgICogU2V0cyB3aGljaCBldmVudCBoYW5kbGVycyB5b3XigJlkIGxpa2UgcHJvdmlkZWQgdG8geW91ciBwYXVzZSBwcm9wLiBZb3UgY2FuIHNwZWNpZnkgb25lIHRyaWdnZXIgb3IgYW4gYXJyYXkgb2YgdGhlbS5cbiAgICogQHR5cGUgeydob3ZlcicgfCAnZm9jdXMnIHwgJ2NsaWNrJ31cbiAgICovXG4gIEBJbnB1dCgpIHBhdXNlOiBUcmlnZ2VycyB8IFRyaWdnZXJzW10gfCBmYWxzZSA9ICdob3Zlcic7XG4gIC8qKlxuICAgKiBTdXBwb3J0IGxlZnQvcmlnaHQgc3dpcGUgaW50ZXJhY3Rpb25zIG9uIHRvdWNoc2NyZWVuIGRldmljZXMuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KCkgdG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogU2V0IHR5cGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gICAqIEB0eXBlIHsnc2xpZGUnIHwgJ2Nyb3NzZmFkZSd9XG4gICAqIEBkZWZhdWx0ICdzbGlkZSdcbiAgICovXG4gIEBJbnB1dCgpIHRyYW5zaXRpb246ICdzbGlkZScgfCAnY3Jvc3NmYWRlJyA9ICdzbGlkZSc7XG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgY2Fyb3VzZWwgc2hvdWxkIGN5Y2xlIGNvbnRpbnVvdXNseSBvciBoYXZlIGhhcmQgc3RvcHMuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KCkgd3JhcCA9IHRydWU7XG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIG9uIGNhcm91c2VsIGl0ZW0gY2hhbmdlLiBbZG9jc11cbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBAT3V0cHV0KCkgaXRlbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2Fyb3VzZWw6IHRydWUsXG4gICAgICBzbGlkZTogdHJ1ZSxcbiAgICAgICdjYXJvdXNlbC1kYXJrJzogISF0aGlzLmRhcmssXG4gICAgICAnY2Fyb3VzZWwtZmFkZSc6IHRoaXMudHJhbnNpdGlvbiA9PT0gJ2Nyb3NzZmFkZSdcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjYXJvdXNlbEluZGV4U3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRpbWVySWQhOiBhbnk7XG4gIHByaXZhdGUgaW50ZXJzZWN0aW5nU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGFjdGl2ZUl0ZW1JbnRlcnZhbCA9IDA7XG4gIHByaXZhdGUgc3dpcGVTdWJzY3JpcHRpb24/OiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDYXJvdXNlbENvbmZpZykgcHJpdmF0ZSBjb25maWc6IENhcm91c2VsQ29uZmlnLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IENhcm91c2VsU2VydmljZSxcbiAgICBwcml2YXRlIGNhcm91c2VsU3RhdGU6IENhcm91c2VsU3RhdGUsXG4gICAgcHJpdmF0ZSBpbnRlcnNlY3Rpb25TZXJ2aWNlOiBJbnRlcnNlY3Rpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbGlzdGVuZXJzU2VydmljZTogTGlzdGVuZXJzU2VydmljZVxuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsU3RhdGVTdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmNhcm91c2VsU3RhdGVTdWJzY3JpYmUoZmFsc2UpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uU2VydmljZVN1YnNjcmliZShmYWxzZSk7XG4gICAgdGhpcy5zd2lwZVN1YnNjcmliZShmYWxzZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25TZXJ2aWNlLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuaG9zdEVsZW1lbnQpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uU2VydmljZVN1YnNjcmliZSgpO1xuICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZS5zdGF0ZSA9IHsgYWN0aXZlSXRlbUluZGV4OiB0aGlzLmFjdGl2ZUluZGV4LCBhbmltYXRlOiB0aGlzLmFuaW1hdGUgfTtcbiAgICB0aGlzLnNldExpc3RlbmVycygpO1xuICAgIHRoaXMuc3dpcGVTdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZzogSUxpc3RlbmVyc0NvbmZpZyA9IHtcbiAgICAgIGhvc3RFbGVtZW50OiB0aGlzLmhvc3RFbGVtZW50LFxuICAgICAgdHJpZ2dlcjogdGhpcy5wYXVzZSB8fCBbXSxcbiAgICAgIGNhbGxiYWNrT2ZmOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgICAgIH0sXG4gICAgICBjYWxsYmFja09uOiAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5saXN0ZW5lcnNTZXJ2aWNlLnNldExpc3RlbmVycyhjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVyc1NlcnZpY2UuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHNldCB2aXNpYmxlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBwcml2YXRlIF92aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICBzZXRUaW1lcigpOiB2b2lkIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHRoaXMuYWN0aXZlSXRlbUludGVydmFsIHx8IDA7XG4gICAgdGhpcy5yZXNldFRpbWVyKCk7XG4gICAgaWYgKGludGVydmFsID4gMCkge1xuICAgICAgdGhpcy50aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuY2Fyb3VzZWxTdGF0ZS5kaXJlY3Rpb24odGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmNhcm91c2VsU3RhdGUuc3RhdGUgPSB7IGFjdGl2ZUl0ZW1JbmRleDogbmV4dEluZGV4IH07XG4gICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRUaW1lcigpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklkKTtcbiAgfVxuXG4gIHByaXZhdGUgY2Fyb3VzZWxTdGF0ZVN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5jYXJvdXNlbEluZGV4U3Vic2NyaXB0aW9uID0gdGhpcy5jYXJvdXNlbFNlcnZpY2UuY2Fyb3VzZWxJbmRleCQuc3Vic2NyaWJlKChuZXh0SXRlbSkgPT4ge1xuICAgICAgICBpZiAoJ2FjdGl2ZScgaW4gbmV4dEl0ZW0pIHtcbiAgICAgICAgICB0aGlzLml0ZW1DaGFuZ2UuZW1pdChuZXh0SXRlbS5hY3RpdmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbUludGVydmFsID0gdHlwZW9mIG5leHRJdGVtLmludGVydmFsID09PSAnbnVtYmVyJyAmJiBuZXh0SXRlbS5pbnRlcnZhbCA+IC0xID8gbmV4dEl0ZW0uaW50ZXJ2YWwgOiB0aGlzLmludGVydmFsO1xuICAgICAgICBjb25zdCBpc0xhc3RJdGVtID0gKChuZXh0SXRlbS5hY3RpdmUgPT09IG5leHRJdGVtLmxhc3RJdGVtSW5kZXgpICYmIHRoaXMuZGlyZWN0aW9uID09PSAnbmV4dCcpIHx8ICgobmV4dEl0ZW0uYWN0aXZlID09PSAwKSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ3ByZXYnKTtcbiAgICAgICAgIXRoaXMud3JhcCAmJiBpc0xhc3RJdGVtID8gdGhpcy5yZXNldFRpbWVyKCkgOiB0aGlzLnNldFRpbWVyKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJvdXNlbEluZGV4U3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJzZWN0aW9uU2VydmljZVN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5pbnRlcnNlY3RpbmdTdWJzY3JpcHRpb24gPSB0aGlzLmludGVyc2VjdGlvblNlcnZpY2UuaW50ZXJzZWN0aW5nJC5zdWJzY3JpYmUoaXNJbnRlcnNlY3RpbmcgPT4ge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBpc0ludGVyc2VjdGluZztcbiAgICAgICAgaXNJbnRlcnNlY3RpbmcgPyB0aGlzLnNldFRpbWVyKCkgOiB0aGlzLnJlc2V0VGltZXIoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVyc2VjdGluZ1N1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN3aXBlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b3VjaCAmJiBzdWJzY3JpYmUpIHtcbiAgICAgIGNvbnN0IGNhcm91c2VsRWxlbWVudCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IHRvdWNoU3RhcnQkID0gZnJvbUV2ZW50PFRvdWNoRXZlbnQ+KGNhcm91c2VsRWxlbWVudCwgJ3RvdWNoc3RhcnQnKTtcbiAgICAgIGNvbnN0IHRvdWNoRW5kJCA9IGZyb21FdmVudDxUb3VjaEV2ZW50PihjYXJvdXNlbEVsZW1lbnQsICd0b3VjaGVuZCcpO1xuICAgICAgY29uc3QgdG91Y2hNb3ZlJCA9IGZyb21FdmVudDxUb3VjaEV2ZW50PihjYXJvdXNlbEVsZW1lbnQsICd0b3VjaG1vdmUnKTtcbiAgICAgIHRoaXMuc3dpcGVTdWJzY3JpcHRpb24gPSB0b3VjaFN0YXJ0JC5waXBlKHppcFdpdGgodG91Y2hFbmQkLnBpcGUod2l0aExhdGVzdEZyb20odG91Y2hNb3ZlJCkpKSlcbiAgICAgICAgLnN1YnNjcmliZSgoW3RvdWNoc3RhcnQsIFt0b3VjaGVuZCwgdG91Y2htb3ZlXV0pID0+IHtcbiAgICAgICAgICB0b3VjaHN0YXJ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRvdWNobW92ZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBjb25zdCBkaXN0YW5jZVggPSB0b3VjaHN0YXJ0LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRvdWNobW92ZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPiAwLjMgKiBjYXJvdXNlbEVsZW1lbnQuY2xpZW50V2lkdGggJiYgdG91Y2hzdGFydC50aW1lU3RhbXAgPD0gdG91Y2htb3ZlLnRpbWVTdGFtcCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5jYXJvdXNlbFN0YXRlLmRpcmVjdGlvbihkaXN0YW5jZVggPiAwID8gJ25leHQnIDogJ3ByZXYnKTtcbiAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWxTdGF0ZS5zdGF0ZSA9IHsgYWN0aXZlSXRlbUluZGV4OiBuZXh0SW5kZXggfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN3aXBlU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19