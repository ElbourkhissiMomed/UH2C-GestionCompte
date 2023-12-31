import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class ToasterService {
    constructor() {
        this.toasterState = new BehaviorSubject({});
        this.toasterState$ = this.toasterState.asObservable();
    }
    setState(state) {
        this.toasterState.next({ ...state });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToasterService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToasterService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToasterService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90b2FzdC90b2FzdGVyL3RvYXN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBY3ZDLE1BQU0sT0FBTyxjQUFjO0lBS3pCO1FBSFEsaUJBQVksR0FBRyxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDLENBQUM7UUFDL0Qsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWxDLENBQUM7SUFFaEIsUUFBUSxDQUFDLEtBQXFCO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7K0dBVFUsY0FBYzttSEFBZCxjQUFjLGNBRmIsTUFBTTs7NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVFRvYXN0ZXJQbGFjZW1lbnQgfSBmcm9tICcuL3RvYXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vdG9hc3QvdG9hc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBJVG9hc3RlckFjdGlvbiB7XG4gIHBsYWNlbWVudD86IFRUb2FzdGVyUGxhY2VtZW50O1xuICB0b2FzdD86IFRvYXN0Q29tcG9uZW50O1xuICBzaG93PzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgdG9hc3RlclN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVG9hc3RlckFjdGlvbj4oe30pO1xuICB0b2FzdGVyU3RhdGUkID0gdGhpcy50b2FzdGVyU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldFN0YXRlKHN0YXRlOiBJVG9hc3RlckFjdGlvbik6IHZvaWQge1xuICAgIHRoaXMudG9hc3RlclN0YXRlLm5leHQoeyAuLi5zdGF0ZSB9KTtcbiAgfVxufVxuIl19