import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionButtonDirective } from './accordion-button/accordion-button.directive';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionService } from './accordion.service';
import * as i0 from "@angular/core";
export class AccordionModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: AccordionModule, imports: [AccordionButtonDirective,
            AccordionComponent,
            AccordionItemComponent], exports: [AccordionComponent,
            AccordionButtonDirective,
            AccordionItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionModule, providers: [
            AccordionService
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        AccordionButtonDirective,
                        AccordionComponent,
                        AccordionItemComponent
                    ],
                    exports: [
                        AccordionComponent,
                        AccordionButtonDirective,
                        AccordionItemComponent
                    ],
                    providers: [
                        AccordionService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYWNjb3JkaW9uL2FjY29yZGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFpQnZELE1BQU0sT0FBTyxlQUFlOytHQUFmLGVBQWU7Z0hBQWYsZUFBZSxZQWJ4Qix3QkFBd0I7WUFDeEIsa0JBQWtCO1lBQ2xCLHNCQUFzQixhQUd0QixrQkFBa0I7WUFDbEIsd0JBQXdCO1lBQ3hCLHNCQUFzQjtnSEFNYixlQUFlLGFBSmY7WUFDVCxnQkFBZ0I7U0FDakI7OzRGQUVVLGVBQWU7a0JBZjNCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLHdCQUF3Qjt3QkFDeEIsa0JBQWtCO3dCQUNsQixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsZ0JBQWdCO3FCQUNqQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvbkJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vYWNjb3JkaW9uLWJ1dHRvbi9hY2NvcmRpb24tYnV0dG9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24taXRlbS9hY2NvcmRpb24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4vYWNjb3JkaW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQWNjb3JkaW9uQnV0dG9uRGlyZWN0aXZlLFxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBBY2NvcmRpb25JdGVtQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBY2NvcmRpb25Db21wb25lbnQsXG4gICAgQWNjb3JkaW9uQnV0dG9uRGlyZWN0aXZlLFxuICAgIEFjY29yZGlvbkl0ZW1Db21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQWNjb3JkaW9uU2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbk1vZHVsZSB7XG59XG4iXX0=