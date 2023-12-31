import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselCaptionComponent } from './carousel-caption/carousel-caption.component';
import { CarouselControlComponent } from './carousel-control/carousel-control.component';
import { CarouselIndicatorsComponent } from './carousel-indicators/carousel-indicators.component';
import { CarouselInnerComponent } from './carousel-inner/carousel-inner.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselService } from './carousel.service';
import { CarouselState } from './carousel-state';
import { CarouselConfig } from './carousel.config';
import * as i0 from "@angular/core";
export class CarouselModule {
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: CarouselModule, imports: [CarouselComponent,
            CarouselCaptionComponent,
            CarouselControlComponent,
            CarouselIndicatorsComponent,
            CarouselInnerComponent,
            CarouselItemComponent], exports: [CarouselComponent,
            CarouselCaptionComponent,
            CarouselControlComponent,
            CarouselIndicatorsComponent,
            CarouselInnerComponent,
            CarouselItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselModule, providers: [CarouselService, CarouselState, CarouselConfig] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CarouselComponent,
                        CarouselCaptionComponent,
                        CarouselControlComponent,
                        CarouselIndicatorsComponent,
                        CarouselInnerComponent,
                        CarouselItemComponent
                    ],
                    providers: [CarouselService, CarouselState, CarouselConfig],
                    exports: [
                        CarouselComponent,
                        CarouselCaptionComponent,
                        CarouselControlComponent,
                        CarouselIndicatorsComponent,
                        CarouselInnerComponent,
                        CarouselItemComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDbEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBcUJuRCxNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNyRCxDQUFDOytHQUhVLGNBQWM7Z0hBQWQsY0FBYyxZQWpCdkIsaUJBQWlCO1lBQ2pCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsMkJBQTJCO1lBQzNCLHNCQUFzQjtZQUN0QixxQkFBcUIsYUFJckIsaUJBQWlCO1lBQ2pCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsMkJBQTJCO1lBQzNCLHNCQUFzQjtZQUN0QixxQkFBcUI7Z0hBR1osY0FBYyxhQVZkLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7OzRGQVVoRCxjQUFjO2tCQW5CMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsMkJBQTJCO3dCQUMzQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjtxQkFDdEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7b0JBQzNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QiwyQkFBMkI7d0JBQzNCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3FCQUN0QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDYXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1jYXB0aW9uL2Nhcm91c2VsLWNhcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtY29udHJvbC9jYXJvdXNlbC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbEluZGljYXRvcnNDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLWluZGljYXRvcnMvY2Fyb3VzZWwtaW5kaWNhdG9ycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtaW5uZXIvY2Fyb3VzZWwtaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtaXRlbS9jYXJvdXNlbC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuL2Nhcm91c2VsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxTdGF0ZSB9IGZyb20gJy4vY2Fyb3VzZWwtc3RhdGUnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLmNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDYXJvdXNlbENvbXBvbmVudCxcbiAgICBDYXJvdXNlbENhcHRpb25Db21wb25lbnQsXG4gICAgQ2Fyb3VzZWxDb250cm9sQ29tcG9uZW50LFxuICAgIENhcm91c2VsSW5kaWNhdG9yc0NvbXBvbmVudCxcbiAgICBDYXJvdXNlbElubmVyQ29tcG9uZW50LFxuICAgIENhcm91c2VsSXRlbUNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtDYXJvdXNlbFNlcnZpY2UsIENhcm91c2VsU3RhdGUsIENhcm91c2VsQ29uZmlnXSxcbiAgZXhwb3J0czogW1xuICAgIENhcm91c2VsQ29tcG9uZW50LFxuICAgIENhcm91c2VsQ2FwdGlvbkNvbXBvbmVudCxcbiAgICBDYXJvdXNlbENvbnRyb2xDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxJbmRpY2F0b3JzQ29tcG9uZW50LFxuICAgIENhcm91c2VsSW5uZXJDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxJdGVtQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENhcm91c2VsTW9kdWxlPiB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IENhcm91c2VsTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdfQ==