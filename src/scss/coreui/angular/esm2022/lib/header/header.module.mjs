import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { HeaderDividerComponent } from './header-divider/header-divider.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderTextComponent } from './header-text/header-text.component';
import { HeaderTogglerDirective } from './header-toggler/header-toggler.directive';
import * as i0 from "@angular/core";
export class HeaderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: HeaderModule, imports: [HeaderComponent,
            HeaderBrandComponent,
            HeaderDividerComponent,
            HeaderNavComponent,
            HeaderTextComponent,
            HeaderTogglerDirective], exports: [HeaderComponent,
            HeaderBrandComponent,
            HeaderDividerComponent,
            HeaderNavComponent,
            HeaderTextComponent,
            HeaderTogglerDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        HeaderComponent,
                        HeaderBrandComponent,
                        HeaderDividerComponent,
                        HeaderNavComponent,
                        HeaderTextComponent,
                        HeaderTogglerDirective
                    ],
                    exports: [
                        HeaderComponent,
                        HeaderBrandComponent,
                        HeaderDividerComponent,
                        HeaderNavComponent,
                        HeaderTextComponent,
                        HeaderTogglerDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvaGVhZGVyL2hlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBb0JuRixNQUFNLE9BQU8sWUFBWTsrR0FBWixZQUFZO2dIQUFaLFlBQVksWUFoQnJCLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsc0JBQXNCO1lBQ3RCLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsc0JBQXNCLGFBR3RCLGVBQWU7WUFDZixvQkFBb0I7WUFDcEIsc0JBQXNCO1lBQ3RCLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsc0JBQXNCO2dIQUdiLFlBQVk7OzRGQUFaLFlBQVk7a0JBbEJ4QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHNCQUFzQjtxQkFDdkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckJyYW5kQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXItYnJhbmQvaGVhZGVyLWJyYW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJEaXZpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXItZGl2aWRlci9oZWFkZXItZGl2aWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlclRleHRDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci10ZXh0L2hlYWRlci10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJUb2dnbGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9oZWFkZXItdG9nZ2xlci9oZWFkZXItdG9nZ2xlci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEhlYWRlckJyYW5kQ29tcG9uZW50LFxuICAgIEhlYWRlckRpdmlkZXJDb21wb25lbnQsXG4gICAgSGVhZGVyTmF2Q29tcG9uZW50LFxuICAgIEhlYWRlclRleHRDb21wb25lbnQsXG4gICAgSGVhZGVyVG9nZ2xlckRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEhlYWRlckJyYW5kQ29tcG9uZW50LFxuICAgIEhlYWRlckRpdmlkZXJDb21wb25lbnQsXG4gICAgSGVhZGVyTmF2Q29tcG9uZW50LFxuICAgIEhlYWRlclRleHRDb21wb25lbnQsXG4gICAgSGVhZGVyVG9nZ2xlckRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZHVsZSB7fVxuIl19