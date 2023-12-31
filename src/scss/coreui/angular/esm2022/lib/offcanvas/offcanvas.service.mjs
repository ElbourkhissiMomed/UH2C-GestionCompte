import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class OffcanvasService {
    constructor() {
        this.offcanvasState = new Subject();
        this.offcanvasState$ = this.offcanvasState.asObservable();
    }
    toggle(action) {
        this.offcanvasState.next(action);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL29mZmNhbnZhcy9vZmZjYW52YXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBWS9CLE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0I7UUFIUSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDNUMsb0JBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXJDLENBQUM7SUFFakIsTUFBTSxDQUFDLE1BQXdCO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7K0dBVFUsZ0JBQWdCO21IQUFoQixnQkFBZ0IsY0FGZixNQUFNOzs0RkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT2ZmY2FudmFzQ29tcG9uZW50IH0gZnJvbSAnLi9vZmZjYW52YXMvb2ZmY2FudmFzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU9mZmNhbnZhc0FjdGlvbiB7XG4gIHNob3c/OiBib29sZWFuIHwgJ3RvZ2dsZSc7XG4gIG9mZmNhbnZhcz86IE9mZmNhbnZhc0NvbXBvbmVudDtcbiAgaWQ/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9mZmNhbnZhc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgb2ZmY2FudmFzU3RhdGUgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIG9mZmNhbnZhc1N0YXRlJCA9IHRoaXMub2ZmY2FudmFzU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB0b2dnbGUoYWN0aW9uOiBJT2ZmY2FudmFzQWN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vZmZjYW52YXNTdGF0ZS5uZXh0KGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==