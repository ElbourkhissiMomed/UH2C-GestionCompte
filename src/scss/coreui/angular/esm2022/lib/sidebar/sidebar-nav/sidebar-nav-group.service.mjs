import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class SidebarNavGroupService {
    constructor() {
        this.sidebarNavGroupState = new BehaviorSubject({});
        this.sidebarNavGroupState$ = this.sidebarNavGroupState.asObservable();
    }
    toggle(action) {
        this.sidebarNavGroupState.next(action);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavGroupService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavGroupService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavGroupService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtZ3JvdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFVdkMsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQztRQUVRLHlCQUFvQixHQUFHLElBQUksZUFBZSxDQUFpQixFQUFFLENBQUMsQ0FBQztRQUN2RSwwQkFBcUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFIakQsQ0FBQztJQUtqQixNQUFNLENBQUMsTUFBc0I7UUFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDOytHQVRVLHNCQUFzQjttSEFBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNpZGViYXJOYXZHcm91cENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJU2lkZWJhckFjdGlvbiB7XG4gIG9wZW4/OiBib29sZWFuO1xuICBzaWRlYmFyTmF2R3JvdXA/OiBTaWRlYmFyTmF2R3JvdXBDb21wb25lbnQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2R3JvdXBTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHByaXZhdGUgc2lkZWJhck5hdkdyb3VwU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElTaWRlYmFyQWN0aW9uPih7fSk7XG4gIHNpZGViYXJOYXZHcm91cFN0YXRlJCA9IHRoaXMuc2lkZWJhck5hdkdyb3VwU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgdG9nZ2xlKGFjdGlvbjogSVNpZGViYXJBY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnNpZGViYXJOYXZHcm91cFN0YXRlLm5leHQoYWN0aW9uKTtcbiAgfVxufVxuIl19