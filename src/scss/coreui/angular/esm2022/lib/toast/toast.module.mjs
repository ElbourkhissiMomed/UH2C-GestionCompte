import { NgModule } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ToastHeaderComponent } from './toast-header/toast-header.component';
import { ToastBodyComponent } from './toast-body/toast-body.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ToasterService } from './toaster/toaster.service';
import { ToasterHostDirective } from './toaster/toaster-host.directive';
import { ToastCloseDirective } from './toast-close.directive';
import * as i0 from "@angular/core";
export class ToastModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: ToastModule, imports: [ToastBodyComponent,
            ToastComponent,
            ToastCloseDirective,
            ToastHeaderComponent,
            ToasterComponent,
            ToasterHostDirective], exports: [ToastBodyComponent,
            ToastComponent,
            ToastCloseDirective,
            ToastHeaderComponent,
            ToasterComponent,
            ToasterHostDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastModule, providers: [ToasterService] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ToastBodyComponent,
                        ToastComponent,
                        ToastCloseDirective,
                        ToastHeaderComponent,
                        ToasterComponent,
                        ToasterHostDirective
                    ],
                    providers: [ToasterService],
                    exports: [
                        ToastBodyComponent,
                        ToastComponent,
                        ToastCloseDirective,
                        ToastHeaderComponent,
                        ToasterComponent,
                        ToasterHostDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90b2FzdC90b2FzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQXFCOUQsTUFBTSxPQUFPLFdBQVc7K0dBQVgsV0FBVztnSEFBWCxXQUFXLFlBakJwQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQixhQUlwQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLG1CQUFtQjtZQUNuQixvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG9CQUFvQjtnSEFHWCxXQUFXLGFBVlgsQ0FBQyxjQUFjLENBQUM7OzRGQVVoQixXQUFXO2tCQW5CdkIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMzQixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjtxQkFDckI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0L3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QtaGVhZGVyL3RvYXN0LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9hc3RCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC1ib2R5L3RvYXN0LWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0ZXIvdG9hc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ZXIvdG9hc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0ZXJIb3N0RGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdGVyL3RvYXN0ZXItaG9zdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG9hc3RDbG9zZURpcmVjdGl2ZSB9IGZyb20gJy4vdG9hc3QtY2xvc2UuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFRvYXN0Qm9keUNvbXBvbmVudCxcbiAgICBUb2FzdENvbXBvbmVudCxcbiAgICBUb2FzdENsb3NlRGlyZWN0aXZlLFxuICAgIFRvYXN0SGVhZGVyQ29tcG9uZW50LFxuICAgIFRvYXN0ZXJDb21wb25lbnQsXG4gICAgVG9hc3Rlckhvc3REaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVG9hc3RlclNlcnZpY2VdLFxuICBleHBvcnRzOiBbXG4gICAgVG9hc3RCb2R5Q29tcG9uZW50LFxuICAgIFRvYXN0Q29tcG9uZW50LFxuICAgIFRvYXN0Q2xvc2VEaXJlY3RpdmUsXG4gICAgVG9hc3RIZWFkZXJDb21wb25lbnQsXG4gICAgVG9hc3RlckNvbXBvbmVudCxcbiAgICBUb2FzdGVySG9zdERpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0TW9kdWxlIHtcbn1cbiJdfQ==