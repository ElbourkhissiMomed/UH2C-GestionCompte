import { NgModule } from '@angular/core';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';
import { TabService } from './tab.service';
import { TabContentRefDirective } from './tab-content-ref.directive';
import * as i0 from "@angular/core";
export class TabsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: TabsModule, imports: [TabContentComponent,
            TabContentRefDirective,
            TabPaneComponent], exports: [TabContentComponent,
            TabPaneComponent,
            TabContentRefDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabsModule, providers: [
            TabService
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        TabContentComponent,
                        TabContentRefDirective,
                        TabPaneComponent
                    ],
                    exports: [
                        TabContentComponent,
                        TabPaneComponent,
                        TabContentRefDirective
                    ],
                    providers: [
                        TabService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RhYnMvdGFicy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQWlCckUsTUFBTSxPQUFPLFVBQVU7K0dBQVYsVUFBVTtnSEFBVixVQUFVLFlBYm5CLG1CQUFtQjtZQUNuQixzQkFBc0I7WUFDdEIsZ0JBQWdCLGFBR2hCLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIsc0JBQXNCO2dIQU1iLFVBQVUsYUFKVjtZQUNULFVBQVU7U0FDWDs7NEZBRVUsVUFBVTtrQkFmdEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxVQUFVO3FCQUNYO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3RhYi1jb250ZW50L3RhYi1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJQYW5lQ29tcG9uZW50IH0gZnJvbSAnLi90YWItcGFuZS90YWItcGFuZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiU2VydmljZSB9IGZyb20gJy4vdGFiLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFiQ29udGVudFJlZkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLWNvbnRlbnQtcmVmLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBUYWJDb250ZW50Q29tcG9uZW50LFxuICAgIFRhYkNvbnRlbnRSZWZEaXJlY3RpdmUsXG4gICAgVGFiUGFuZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGFiQ29udGVudENvbXBvbmVudCxcbiAgICBUYWJQYW5lQ29tcG9uZW50LFxuICAgIFRhYkNvbnRlbnRSZWZEaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVGFiU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNNb2R1bGUge31cbiJdfQ==