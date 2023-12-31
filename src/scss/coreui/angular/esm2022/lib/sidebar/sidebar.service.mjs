import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class SidebarService {
    constructor() {
        this.sidebarState = new BehaviorSubject({});
        this.sidebarState$ = this.sidebarState.asObservable();
    }
    toggle(action) {
        this.sidebarState.next(action);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBaUJ2QyxNQUFNLE9BQU8sY0FBYztJQUt6QjtRQUhRLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUVsQyxDQUFDO0lBRWhCLE1BQU0sQ0FBQyxNQUFzQjtRQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVRVLGNBQWM7bUhBQWQsY0FBYyxjQUZiLE1BQU07OzRGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSAnLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJU2lkZWJhckFjdGlvbiB7XG4gIHVuZm9sZGFibGU/OiBib29sZWFuIHwgJ3RvZ2dsZSc7XG4gIHZpc2libGU/OiBib29sZWFuIHwgJ3RvZ2dsZSc7XG4gIHRvZ2dsZT86ICd2aXNpYmxlJyB8ICd1bmZvbGRhYmxlJztcbiAgbmFycm93PzogYm9vbGVhbjtcbiAgbW9iaWxlPzogYm9vbGVhbjtcbiAgc2lkZWJhcj86IFNpZGViYXJDb21wb25lbnQ7XG4gIGlkPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzaWRlYmFyU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElTaWRlYmFyQWN0aW9uPih7fSk7XG4gIHNpZGViYXJTdGF0ZSQgPSB0aGlzLnNpZGViYXJTdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdG9nZ2xlKGFjdGlvbjogSVNpZGViYXJBY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnNpZGViYXJTdGF0ZS5uZXh0KGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==