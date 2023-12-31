import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class TabService {
    constructor() {
        this.activeTabPaneIdx = new Subject();
        this.activeTabPaneIdx$ = this.activeTabPaneIdx.asObservable();
    }
    setActiveTabIdx(tabContentState) {
        this.activeTabPaneIdx.next(tabContentState);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RhYnMvdGFiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQVcvQixNQUFNLE9BQU8sVUFBVTtJQUtyQjtRQUhRLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDO1FBQzNELHNCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV6QyxDQUFDO0lBRWpCLGVBQWUsQ0FBQyxlQUFpQztRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7K0dBVFUsVUFBVTttSEFBVixVQUFVLGNBRlQsTUFBTTs7NEZBRVAsVUFBVTtrQkFIdEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUYWJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi90YWItY29udGVudC90YWItY29udGVudC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJDb250ZW50U3RhdGUge1xuICBhY3RpdmVJZHg6IG51bWJlcixcbiAgdGFiQ29udGVudDogVGFiQ29udGVudENvbXBvbmVudFxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUYWJTZXJ2aWNlIHtcblxuICBwcml2YXRlIGFjdGl2ZVRhYlBhbmVJZHggPSBuZXcgU3ViamVjdDxJVGFiQ29udGVudFN0YXRlPigpO1xuICBhY3RpdmVUYWJQYW5lSWR4JCA9IHRoaXMuYWN0aXZlVGFiUGFuZUlkeC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNldEFjdGl2ZVRhYklkeCh0YWJDb250ZW50U3RhdGU6IElUYWJDb250ZW50U3RhdGUpIHtcbiAgICB0aGlzLmFjdGl2ZVRhYlBhbmVJZHgubmV4dCh0YWJDb250ZW50U3RhdGUpO1xuICB9XG59XG4iXX0=