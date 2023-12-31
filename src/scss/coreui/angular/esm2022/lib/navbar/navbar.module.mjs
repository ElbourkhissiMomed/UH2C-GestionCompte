import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { NavbarBrandDirective } from './navbar-brand/navbar-brand.directive';
import { NavbarNavComponent } from './navbar-nav/navbar-nav.component';
import { NavbarTextComponent } from './navbar-text/navbar-text.component';
import { NavbarTogglerDirective } from './navbar-toggler/navbar-toggler.directive';
import * as i0 from "@angular/core";
export class NavbarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: NavbarModule, imports: [NavbarBrandDirective,
            NavbarComponent,
            NavbarNavComponent,
            NavbarTextComponent,
            NavbarTogglerDirective], exports: [NavbarBrandDirective,
            NavbarComponent,
            NavbarNavComponent,
            NavbarTextComponent,
            NavbarTogglerDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        NavbarBrandDirective,
                        NavbarComponent,
                        NavbarNavComponent,
                        NavbarTextComponent,
                        NavbarTogglerDirective
                    ],
                    imports: [
                        NavbarBrandDirective,
                        NavbarComponent,
                        NavbarNavComponent,
                        NavbarTextComponent,
                        NavbarTogglerDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbmF2YmFyL25hdmJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBa0JuRixNQUFNLE9BQU8sWUFBWTsrR0FBWixZQUFZO2dIQUFaLFlBQVksWUFQckIsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLHNCQUFzQixhQVh0QixvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsc0JBQXNCO2dIQVViLFlBQVk7OzRGQUFaLFlBQVk7a0JBaEJ4QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3FCQUN2QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJCcmFuZERpcmVjdGl2ZSB9IGZyb20gJy4vbmF2YmFyLWJyYW5kL25hdmJhci1icmFuZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmF2YmFyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXItbmF2L25hdmJhci1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmJhclRleHRDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci10ZXh0L25hdmJhci10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJUb2dnbGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9uYXZiYXItdG9nZ2xlci9uYXZiYXItdG9nZ2xlci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbXG4gICAgTmF2YmFyQnJhbmREaXJlY3RpdmUsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIE5hdmJhck5hdkNvbXBvbmVudCxcbiAgICBOYXZiYXJUZXh0Q29tcG9uZW50LFxuICAgIE5hdmJhclRvZ2dsZXJEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5hdmJhckJyYW5kRGlyZWN0aXZlLFxuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICBOYXZiYXJOYXZDb21wb25lbnQsXG4gICAgTmF2YmFyVGV4dENvbXBvbmVudCxcbiAgICBOYXZiYXJUb2dnbGVyRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyTW9kdWxlIHt9XG4iXX0=