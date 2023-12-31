import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CarouselService {
    constructor() {
        this.carouselIndex = new BehaviorSubject({});
        this.carouselIndex$ = this.carouselIndex.asObservable();
    }
    setIndex(index) {
        this.carouselIndex.next(index);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvY2Fyb3VzZWwvY2Fyb3VzZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBU3ZDLE1BQU0sT0FBTyxlQUFlO0lBSTFCO1FBSFEsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7UUFDaEUsbUJBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFFaEIsUUFBUSxDQUFDLEtBQXFCO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7K0dBUlUsZUFBZTttSEFBZixlQUFlOzs0RkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhcm91c2VsSW5kZXgge1xuICBhY3RpdmU/OiBudW1iZXI7XG4gIGludGVydmFsPzogbnVtYmVyO1xuICBsYXN0SXRlbUluZGV4PzogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjYXJvdXNlbEluZGV4ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJQ2Fyb3VzZWxJbmRleD4oe30pO1xuICBjYXJvdXNlbEluZGV4JCA9IHRoaXMuY2Fyb3VzZWxJbmRleC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2V0SW5kZXgoaW5kZXg6IElDYXJvdXNlbEluZGV4KTogdm9pZCB7XG4gICAgdGhpcy5jYXJvdXNlbEluZGV4Lm5leHQoaW5kZXgpO1xuICB9XG59XG4iXX0=