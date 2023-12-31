import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DropdownService {
    constructor() {
        this.dropdownState = new BehaviorSubject({});
        this.dropdownState$ = this.dropdownState.asObservable();
    }
    toggle(state) {
        this.dropdownState.next(state);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZHJvcGRvd24vZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBUXZDLE1BQU0sT0FBTyxlQUFlO0lBSzFCO1FBSFEsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNyRCxtQkFBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFHbkQsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFxQjtRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOytHQVZVLGVBQWU7bUhBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEcm9wZG93blN0YXRlIHtcbiAgdmlzaWJsZT86IGJvb2xlYW4gfCAndG9nZ2xlJztcbiAgZHJvcGRvd24/OiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcm9wZG93blNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZHJvcGRvd25TdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSk7XG4gIGRyb3Bkb3duU3RhdGUkID0gdGhpcy5kcm9wZG93blN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgdG9nZ2xlKHN0YXRlOiBJRHJvcGRvd25TdGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcGRvd25TdGF0ZS5uZXh0KHN0YXRlKTtcbiAgfVxufVxuIl19