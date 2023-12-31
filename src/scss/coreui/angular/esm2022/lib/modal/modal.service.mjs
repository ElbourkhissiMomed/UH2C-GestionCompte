import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ModalService {
    constructor() {
        this.modalState = new Subject();
        this.modalState$ = this.modalState.asObservable();
    }
    toggle(action) {
        this.modalState.next(action);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbW9kYWwvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBWS9CLE1BQU0sT0FBTyxZQUFZO0lBS3ZCO1FBSFEsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTlCLENBQUM7SUFFaEIsTUFBTSxDQUFDLE1BQW9CO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7K0dBVFUsWUFBWTttSEFBWixZQUFZLGNBRlgsTUFBTTs7NEZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJTW9kYWxBY3Rpb24ge1xuICBzaG93PzogYm9vbGVhbiB8ICd0b2dnbGUnO1xuICBtb2RhbD86IE1vZGFsQ29tcG9uZW50O1xuICBpZD86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblxuICBwcml2YXRlIG1vZGFsU3RhdGUgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIG1vZGFsU3RhdGUkID0gdGhpcy5tb2RhbFN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICB0b2dnbGUoYWN0aW9uOiBJTW9kYWxBY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU3RhdGUubmV4dChhY3Rpb24pO1xuICB9XG59XG4iXX0=