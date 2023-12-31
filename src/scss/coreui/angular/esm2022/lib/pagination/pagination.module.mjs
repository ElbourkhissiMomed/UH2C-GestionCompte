import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { PageItemComponent } from './page-item/page-item.component';
import { PageItemDirective } from './page-item/page-item.directive';
import { PageLinkDirective } from './page-link/page-link.directive';
import * as i0 from "@angular/core";
export class PaginationModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: PaginationModule, imports: [PageItemComponent,
            PageItemDirective,
            PageLinkDirective,
            PaginationComponent], exports: [PageItemComponent,
            PageItemDirective,
            PageLinkDirective,
            PaginationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        PageItemComponent,
                        PageItemDirective,
                        PageLinkDirective,
                        PaginationComponent
                    ],
                    imports: [
                        PageItemComponent,
                        PageItemDirective,
                        PageLinkDirective,
                        PaginationComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFnQnBFLE1BQU0sT0FBTyxnQkFBZ0I7K0dBQWhCLGdCQUFnQjtnSEFBaEIsZ0JBQWdCLFlBTnpCLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLG1CQUFtQixhQVRuQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixtQkFBbUI7Z0hBU1YsZ0JBQWdCOzs0RkFBaEIsZ0JBQWdCO2tCQWQ1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3BCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3BhZ2UtaXRlbS9wYWdlLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9wYWdlLWl0ZW0vcGFnZS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQYWdlTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vcGFnZS1saW5rL3BhZ2UtbGluay5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbXG4gICAgUGFnZUl0ZW1Db21wb25lbnQsXG4gICAgUGFnZUl0ZW1EaXJlY3RpdmUsXG4gICAgUGFnZUxpbmtEaXJlY3RpdmUsXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgUGFnZUl0ZW1Db21wb25lbnQsXG4gICAgUGFnZUl0ZW1EaXJlY3RpdmUsXG4gICAgUGFnZUxpbmtEaXJlY3RpdmUsXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge31cbiJdfQ==