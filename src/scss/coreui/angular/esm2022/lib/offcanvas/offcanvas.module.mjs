import { NgModule } from '@angular/core';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import { OffcanvasBodyComponent } from './offcanvas-body/offcanvas-body.component';
import { OffcanvasHeaderComponent } from './offcanvas-header/offcanvas-header.component';
import { OffcanvasTitleDirective } from './offcanvas-title/offcanvas-title.directive';
import { OffcanvasToggleDirective } from './offcanvas-toggle/offcanvas-toggle.directive';
import { OffcanvasService } from './offcanvas.service';
import { BackdropService } from '../backdrop/backdrop.service';
import * as i0 from "@angular/core";
export class OffcanvasModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasModule, imports: [OffcanvasBodyComponent,
            OffcanvasComponent,
            OffcanvasHeaderComponent,
            OffcanvasTitleDirective,
            OffcanvasToggleDirective], exports: [OffcanvasBodyComponent,
            OffcanvasComponent,
            OffcanvasHeaderComponent,
            OffcanvasTitleDirective,
            OffcanvasToggleDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasModule, providers: [
            OffcanvasService,
            BackdropService
        ], imports: [OffcanvasComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: OffcanvasModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        OffcanvasBodyComponent,
                        OffcanvasComponent,
                        OffcanvasHeaderComponent,
                        OffcanvasTitleDirective,
                        OffcanvasToggleDirective
                    ],
                    imports: [
                        OffcanvasBodyComponent,
                        OffcanvasComponent,
                        OffcanvasHeaderComponent,
                        OffcanvasTitleDirective,
                        OffcanvasToggleDirective
                    ],
                    providers: [
                        OffcanvasService,
                        BackdropService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmY2FudmFzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvb2ZmY2FudmFzL29mZmNhbnZhcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBc0IvRCxNQUFNLE9BQU8sZUFBZTsrR0FBZixlQUFlO2dIQUFmLGVBQWUsWUFYeEIsc0JBQXNCO1lBQ3RCLGtCQUFrQjtZQUNsQix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHdCQUF3QixhQVh4QixzQkFBc0I7WUFDdEIsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsd0JBQXdCO2dIQWNmLGVBQWUsYUFMZjtZQUNULGdCQUFnQjtZQUNoQixlQUFlO1NBQ2hCLFlBUkMsa0JBQWtCOzs0RkFVVCxlQUFlO2tCQXBCM0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2Qix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3QjtxQkFDekI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGdCQUFnQjt3QkFDaEIsZUFBZTtxQkFDaEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPZmZjYW52YXNDb21wb25lbnQgfSBmcm9tICcuL29mZmNhbnZhcy9vZmZjYW52YXMuY29tcG9uZW50JztcbmltcG9ydCB7IE9mZmNhbnZhc0JvZHlDb21wb25lbnQgfSBmcm9tICcuL29mZmNhbnZhcy1ib2R5L29mZmNhbnZhcy1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPZmZjYW52YXNIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL29mZmNhbnZhcy1oZWFkZXIvb2ZmY2FudmFzLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2ZmY2FudmFzVGl0bGVEaXJlY3RpdmUgfSBmcm9tICcuL29mZmNhbnZhcy10aXRsZS9vZmZjYW52YXMtdGl0bGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE9mZmNhbnZhc1RvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vb2ZmY2FudmFzLXRvZ2dsZS9vZmZjYW52YXMtdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPZmZjYW52YXNTZXJ2aWNlIH0gZnJvbSAnLi9vZmZjYW52YXMuc2VydmljZSc7XG5pbXBvcnQgeyBCYWNrZHJvcFNlcnZpY2UgfSBmcm9tICcuLi9iYWNrZHJvcC9iYWNrZHJvcC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW1xuICAgIE9mZmNhbnZhc0JvZHlDb21wb25lbnQsXG4gICAgT2ZmY2FudmFzQ29tcG9uZW50LFxuICAgIE9mZmNhbnZhc0hlYWRlckNvbXBvbmVudCxcbiAgICBPZmZjYW52YXNUaXRsZURpcmVjdGl2ZSxcbiAgICBPZmZjYW52YXNUb2dnbGVEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE9mZmNhbnZhc0JvZHlDb21wb25lbnQsXG4gICAgT2ZmY2FudmFzQ29tcG9uZW50LFxuICAgIE9mZmNhbnZhc0hlYWRlckNvbXBvbmVudCxcbiAgICBPZmZjYW52YXNUaXRsZURpcmVjdGl2ZSxcbiAgICBPZmZjYW52YXNUb2dnbGVEaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgT2ZmY2FudmFzU2VydmljZSxcbiAgICBCYWNrZHJvcFNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPZmZjYW52YXNNb2R1bGUge31cbiJdfQ==