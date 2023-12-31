import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./carousel.service";
export class CarouselState {
    constructor(carouselService) {
        this.carouselService = carouselService;
        this._state = {
            activeItemIndex: -1,
            animate: true,
            items: [],
            direction: 'next',
            transition: 'slide'
        };
    }
    get state() {
        return this._state;
    }
    set state(state) {
        const prevState = { ...this._state };
        const nextState = { ...this._state, ...state };
        this._state = nextState;
        if (prevState.activeItemIndex !== nextState.activeItemIndex) {
            const activeItemIndex = this.state.activeItemIndex || 0;
            const itemInterval = this.state.items && this.state.items[activeItemIndex]?.interval || -1;
            this.carouselService.setIndex({
                active: nextState.activeItemIndex,
                interval: itemInterval,
                lastItemIndex: (nextState.items?.length ?? 0) - 1
            });
        }
    }
    setItems(newItems) {
        if (newItems.length) {
            const itemsArray = newItems.toArray();
            itemsArray.forEach((item, i) => {
                item.index = i;
            });
            this.state = {
                items: itemsArray
            };
        }
        else {
            this.reset();
        }
    }
    setNextIndex(nextIndex) {
        this.carouselService.setIndex(nextIndex);
    }
    direction(direction = 'next') {
        this.state = { direction };
        const { activeItemIndex = -1, items } = this.state;
        const itemsCount = items?.length ?? 0;
        if (itemsCount > 0) {
            return direction === 'next' ?
                (activeItemIndex === itemsCount - 1 ? 0 : activeItemIndex + 1) :
                (activeItemIndex === 0 ? itemsCount - 1 : activeItemIndex - 1);
        }
        else {
            return 0;
        }
    }
    reset() {
        this.state = {
            activeItemIndex: -1,
            animate: true,
            items: [],
            direction: 'next',
            transition: 'slide'
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselState, deps: [{ token: i1.CarouselService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselState }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselState, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.CarouselService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtc3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Nhcm91c2VsL2Nhcm91c2VsLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQyxNQUFNLE9BQU8sYUFBYTtJQVN4QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFSNUMsV0FBTSxHQUFtQjtZQUMvQixlQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1lBQ2IsS0FBSyxFQUFFLEVBQUU7WUFDVCxTQUFTLEVBQUUsTUFBTTtZQUNqQixVQUFVLEVBQUUsT0FBTztTQUNwQixDQUFDO0lBRXFELENBQUM7SUFFeEQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ2IsTUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQyxNQUFNLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLElBQUksU0FBUyxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQzNELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQztZQUN4RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQzVCLE1BQU0sRUFBRSxTQUFTLENBQUMsZUFBZTtnQkFDakMsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7YUFDbEQsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQWE7UUFDcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25CLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN0QyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBMkIsRUFBRSxDQUFTLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNYLEtBQUssRUFBRSxVQUFVO2FBQ2xCLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQWM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFNBQVMsQ0FBQyxZQUE2QixNQUFNO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUMzQixNQUFNLEVBQUUsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkQsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQixDQUFDLGVBQWUsS0FBSyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDLGVBQWUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRTthQUFNO1lBQ0wsT0FBTyxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDbkIsT0FBTyxFQUFFLElBQUk7WUFDYixLQUFLLEVBQUUsRUFBRTtZQUNULFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFVBQVUsRUFBRSxPQUFPO1NBQ3BCLENBQUM7SUFDSixDQUFDOytHQXJFVSxhQUFhO21IQUFiLGFBQWE7OzRGQUFiLGFBQWE7a0JBRHpCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ2Fyb3VzZWxTdGF0ZSB9IGZyb20gJy4vY2Fyb3VzZWwtc3RhdGUudHlwZSc7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL2Nhcm91c2VsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1pdGVtL2Nhcm91c2VsLWl0ZW0uY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcm91c2VsU3RhdGUge1xuICBwcml2YXRlIF9zdGF0ZTogSUNhcm91c2VsU3RhdGUgPSB7XG4gICAgYWN0aXZlSXRlbUluZGV4OiAtMSxcbiAgICBhbmltYXRlOiB0cnVlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBkaXJlY3Rpb246ICduZXh0JyxcbiAgICB0cmFuc2l0aW9uOiAnc2xpZGUnXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJvdXNlbFNlcnZpY2U6IENhcm91c2VsU2VydmljZSkge31cblxuICBnZXQgc3RhdGUoKTogSUNhcm91c2VsU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuXG4gIHNldCBzdGF0ZShzdGF0ZSkge1xuICAgIGNvbnN0IHByZXZTdGF0ZSA9IHsgLi4udGhpcy5fc3RhdGUgfTtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7IC4uLnRoaXMuX3N0YXRlLCAuLi5zdGF0ZSB9O1xuICAgIHRoaXMuX3N0YXRlID0gbmV4dFN0YXRlO1xuICAgIGlmIChwcmV2U3RhdGUuYWN0aXZlSXRlbUluZGV4ICE9PSBuZXh0U3RhdGUuYWN0aXZlSXRlbUluZGV4KSB7XG4gICAgICBjb25zdCBhY3RpdmVJdGVtSW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUl0ZW1JbmRleCB8fCAwO1xuICAgICAgY29uc3QgaXRlbUludGVydmFsID0gdGhpcy5zdGF0ZS5pdGVtcyAmJiB0aGlzLnN0YXRlLml0ZW1zW2FjdGl2ZUl0ZW1JbmRleF0/LmludGVydmFsIHx8IC0xO1xuICAgICAgdGhpcy5jYXJvdXNlbFNlcnZpY2Uuc2V0SW5kZXgoe1xuICAgICAgICBhY3RpdmU6IG5leHRTdGF0ZS5hY3RpdmVJdGVtSW5kZXgsXG4gICAgICAgIGludGVydmFsOiBpdGVtSW50ZXJ2YWwsXG4gICAgICAgIGxhc3RJdGVtSW5kZXg6IChuZXh0U3RhdGUuaXRlbXM/Lmxlbmd0aCA/PyAwKSAtIDFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1zKG5ld0l0ZW1zOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAobmV3SXRlbXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBpdGVtc0FycmF5ID0gbmV3SXRlbXMudG9BcnJheSgpO1xuICAgICAgaXRlbXNBcnJheS5mb3JFYWNoKChpdGVtOiBDYXJvdXNlbEl0ZW1Db21wb25lbnQsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBpdGVtLmluZGV4ID0gaTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zQXJyYXlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzZXROZXh0SW5kZXgobmV4dEluZGV4OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNhcm91c2VsU2VydmljZS5zZXRJbmRleChuZXh0SW5kZXgpO1xuICB9XG5cbiAgZGlyZWN0aW9uKGRpcmVjdGlvbjogJ25leHQnIHwgJ3ByZXYnID0gJ25leHQnKTogbnVtYmVyIHtcbiAgICB0aGlzLnN0YXRlID0geyBkaXJlY3Rpb24gfTtcbiAgICBjb25zdCB7IGFjdGl2ZUl0ZW1JbmRleCA9IC0xLCBpdGVtcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpdGVtc0NvdW50ID0gaXRlbXM/Lmxlbmd0aCA/PyAwO1xuICAgIGlmIChpdGVtc0NvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ25leHQnID9cbiAgICAgICAgKGFjdGl2ZUl0ZW1JbmRleCA9PT0gaXRlbXNDb3VudCAtIDEgPyAwIDogYWN0aXZlSXRlbUluZGV4ICsgMSkgOlxuICAgICAgICAoYWN0aXZlSXRlbUluZGV4ID09PSAwID8gaXRlbXNDb3VudCAtIDEgOiBhY3RpdmVJdGVtSW5kZXggLSAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUl0ZW1JbmRleDogLTEsXG4gICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgZGlyZWN0aW9uOiAnbmV4dCcsXG4gICAgICB0cmFuc2l0aW9uOiAnc2xpZGUnXG4gICAgfTtcbiAgfVxufVxuIl19