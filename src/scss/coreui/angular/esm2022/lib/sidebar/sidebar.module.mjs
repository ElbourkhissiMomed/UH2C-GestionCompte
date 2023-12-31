import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar.service';
import { SidebarBrandComponent } from './sidebar-brand/sidebar-brand.component';
import { SidebarToggleDirective } from './sidebar-toggle/sidebar-toggle.directive';
import { SidebarTogglerComponent } from './sidebar-toggler/sidebar-toggler.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarNavGroupService } from './sidebar-nav/sidebar-nav-group.service';
import { SidebarNavBadgePipe, SidebarNavComponent, SidebarNavDividerComponent, SidebarNavGroupComponent, SidebarNavHelper, SidebarNavIconPipe, SidebarNavItemClassPipe, SidebarNavLabelComponent, SidebarNavLinkComponent, SidebarNavLinkContentComponent, SidebarNavLinkPipe, SidebarNavTitleComponent } from './sidebar-nav';
import * as i0 from "@angular/core";
export class SidebarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: SidebarModule, imports: [SidebarComponent,
            SidebarBrandComponent,
            SidebarFooterComponent,
            SidebarHeaderComponent,
            SidebarNavComponent,
            SidebarNavBadgePipe,
            SidebarNavDividerComponent,
            SidebarNavGroupComponent,
            SidebarNavIconPipe,
            SidebarNavItemClassPipe,
            SidebarNavLabelComponent,
            SidebarNavLinkComponent,
            SidebarNavLinkContentComponent,
            SidebarNavLinkPipe,
            SidebarNavTitleComponent,
            SidebarToggleDirective,
            SidebarTogglerComponent], exports: [SidebarComponent,
            SidebarToggleDirective,
            SidebarTogglerComponent,
            SidebarBrandComponent,
            SidebarNavComponent,
            SidebarHeaderComponent,
            SidebarFooterComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarModule, providers: [
            SidebarService,
            SidebarNavHelper,
            SidebarNavGroupService
        ], imports: [SidebarNavComponent,
            SidebarNavGroupComponent,
            SidebarNavLinkComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        SidebarComponent,
                        SidebarBrandComponent,
                        SidebarFooterComponent,
                        SidebarHeaderComponent,
                        SidebarNavComponent,
                        SidebarNavBadgePipe,
                        SidebarNavDividerComponent,
                        SidebarNavGroupComponent,
                        SidebarNavIconPipe,
                        SidebarNavItemClassPipe,
                        SidebarNavLabelComponent,
                        SidebarNavLinkComponent,
                        SidebarNavLinkContentComponent,
                        SidebarNavLinkPipe,
                        SidebarNavTitleComponent,
                        SidebarToggleDirective,
                        SidebarTogglerComponent
                    ],
                    exports: [
                        SidebarComponent,
                        SidebarToggleDirective,
                        SidebarTogglerComponent,
                        SidebarBrandComponent,
                        SidebarNavComponent,
                        SidebarHeaderComponent,
                        SidebarFooterComponent
                    ],
                    providers: [
                        SidebarService,
                        SidebarNavHelper,
                        SidebarNavGroupService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NpZGViYXIvc2lkZWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFakYsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsMEJBQTBCLEVBQzFCLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsdUJBQXVCLEVBQ3ZCLDhCQUE4QixFQUM5QixrQkFBa0IsRUFDbEIsd0JBQXdCLEVBQ3pCLE1BQU0sZUFBZSxDQUFDOztBQXFDdkIsTUFBTSxPQUFPLGFBQWE7K0dBQWIsYUFBYTtnSEFBYixhQUFhLFlBakN0QixnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFDMUIsd0JBQXdCO1lBQ3hCLGtCQUFrQjtZQUNsQix1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2Qiw4QkFBOEI7WUFDOUIsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsdUJBQXVCLGFBR3ZCLGdCQUFnQjtZQUNoQixzQkFBc0I7WUFDdEIsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtZQUNyQixtQkFBbUI7WUFDbkIsc0JBQXNCO1lBQ3RCLHNCQUFzQjtnSEFRYixhQUFhLGFBTmI7WUFDVCxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLHNCQUFzQjtTQUN2QixZQTNCQyxtQkFBbUI7WUFHbkIsd0JBQXdCO1lBSXhCLHVCQUF1Qjs7NEZBc0JkLGFBQWE7a0JBbkN6QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQiwwQkFBMEI7d0JBQzFCLHdCQUF3Qjt3QkFDeEIsa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2Qiw4QkFBOEI7d0JBQzlCLGtCQUFrQjt3QkFDbEIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixzQkFBc0I7cUJBQ3ZCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4vc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZGViYXJCcmFuZENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1icmFuZC9zaWRlYmFyLWJyYW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9zaWRlYmFyLXRvZ2dsZS9zaWRlYmFyLXRvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2lkZWJhclRvZ2dsZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItdG9nZ2xlci9zaWRlYmFyLXRvZ2dsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItaGVhZGVyL3NpZGViYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlYmFyRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLWZvb3Rlci9zaWRlYmFyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkdyb3VwU2VydmljZSB9IGZyb20gJy4vc2lkZWJhci1uYXYvc2lkZWJhci1uYXYtZ3JvdXAuc2VydmljZSc7XG5cbmltcG9ydCB7XG4gIFNpZGViYXJOYXZCYWRnZVBpcGUsXG4gIFNpZGViYXJOYXZDb21wb25lbnQsXG4gIFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxuICBTaWRlYmFyTmF2R3JvdXBDb21wb25lbnQsXG4gIFNpZGViYXJOYXZIZWxwZXIsXG4gIFNpZGViYXJOYXZJY29uUGlwZSxcbiAgU2lkZWJhck5hdkl0ZW1DbGFzc1BpcGUsXG4gIFNpZGViYXJOYXZMYWJlbENvbXBvbmVudCxcbiAgU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gIFNpZGViYXJOYXZMaW5rQ29udGVudENvbXBvbmVudCxcbiAgU2lkZWJhck5hdkxpbmtQaXBlLFxuICBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnRcbn0gZnJvbSAnLi9zaWRlYmFyLW5hdic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTaWRlYmFyQ29tcG9uZW50LFxuICAgIFNpZGViYXJCcmFuZENvbXBvbmVudCxcbiAgICBTaWRlYmFyRm9vdGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJIZWFkZXJDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2QmFkZ2VQaXBlLFxuICAgIFNpZGViYXJOYXZEaXZpZGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZHcm91cENvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2SWNvblBpcGUsXG4gICAgU2lkZWJhck5hdkl0ZW1DbGFzc1BpcGUsXG4gICAgU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZMaW5rQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZMaW5rQ29udGVudENvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2TGlua1BpcGUsXG4gICAgU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50LFxuICAgIFNpZGViYXJUb2dnbGVEaXJlY3RpdmUsXG4gICAgU2lkZWJhclRvZ2dsZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNpZGViYXJDb21wb25lbnQsXG4gICAgU2lkZWJhclRvZ2dsZURpcmVjdGl2ZSxcbiAgICBTaWRlYmFyVG9nZ2xlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyQnJhbmRDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkNvbXBvbmVudCxcbiAgICBTaWRlYmFySGVhZGVyQ29tcG9uZW50LFxuICAgIFNpZGViYXJGb290ZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2lkZWJhclNlcnZpY2UsXG4gICAgU2lkZWJhck5hdkhlbHBlcixcbiAgICBTaWRlYmFyTmF2R3JvdXBTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck1vZHVsZSB7fVxuIl19