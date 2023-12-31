import { NgModule } from '@angular/core';
// CoreUI Breadcrumb Component
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbRouterComponent } from './breadcrumb-router/breadcrumb-router.component';
import { BreadcrumbRouterService } from './breadcrumb-router/breadcrumb-router.service';
import * as i0 from "@angular/core";
export class BreadcrumbModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: BreadcrumbModule, imports: [BreadcrumbComponent,
            BreadcrumbItemComponent,
            BreadcrumbRouterComponent], exports: [BreadcrumbComponent,
            BreadcrumbItemComponent,
            BreadcrumbRouterComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BreadcrumbModule, providers: [BreadcrumbRouterService], imports: [BreadcrumbItemComponent,
            BreadcrumbRouterComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        BreadcrumbComponent,
                        BreadcrumbItemComponent,
                        BreadcrumbRouterComponent
                    ],
                    exports: [
                        BreadcrumbComponent,
                        BreadcrumbItemComponent,
                        BreadcrumbRouterComponent
                    ],
                    providers: [BreadcrumbRouterService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6Qyw4QkFBOEI7QUFDOUIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7O0FBZXhGLE1BQU0sT0FBTyxnQkFBZ0I7K0dBQWhCLGdCQUFnQjtnSEFBaEIsZ0JBQWdCLFlBWHpCLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIseUJBQXlCLGFBR3pCLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIseUJBQXlCO2dIQUloQixnQkFBZ0IsYUFGaEIsQ0FBQyx1QkFBdUIsQ0FBQyxZQVJsQyx1QkFBdUI7WUFDdkIseUJBQXlCOzs0RkFTaEIsZ0JBQWdCO2tCQWI1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLHlCQUF5QjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQ29yZVVJIEJyZWFkY3J1bWIgQ29tcG9uZW50XG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IEJyZWFkY3J1bWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iLWl0ZW0vYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iUm91dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iLXJvdXRlci9icmVhZGNydW1iLXJvdXRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYlJvdXRlclNlcnZpY2UgfSBmcm9tICcuL2JyZWFkY3J1bWItcm91dGVyL2JyZWFkY3J1bWItcm91dGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICBCcmVhZGNydW1iSXRlbUNvbXBvbmVudCxcbiAgICBCcmVhZGNydW1iUm91dGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJJdGVtQ29tcG9uZW50LFxuICAgIEJyZWFkY3J1bWJSb3V0ZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbQnJlYWRjcnVtYlJvdXRlclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJNb2R1bGUge31cbiJdfQ==