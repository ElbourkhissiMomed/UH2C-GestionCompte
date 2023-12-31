import { NgModule } from '@angular/core';
import { DropdownComponent, DropdownToggleDirective } from './dropdown/dropdown.component';
import { DropdownDividerDirective } from './dropdown-divider/dropdown-divider.directive';
import { DropdownHeaderDirective } from './dropdown-header/dropdown-header.directive';
import { DropdownItemDirective } from './dropdown-item/dropdown-item.directive';
import { DropdownItemPlainDirective } from './dropdown-item/dropdown-item-plain.directive';
import { DropdownMenuDirective } from './dropdown-menu/dropdown-menu.directive';
import { DropdownService } from './dropdown.service';
import { DropdownCloseDirective } from './dropdown-close/dropdown-close.directive';
import * as i0 from "@angular/core";
export class DropdownModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: DropdownModule, imports: [DropdownComponent,
            DropdownCloseDirective,
            DropdownDividerDirective,
            DropdownHeaderDirective,
            DropdownItemDirective,
            DropdownItemPlainDirective,
            DropdownMenuDirective,
            DropdownToggleDirective], exports: [DropdownComponent,
            DropdownCloseDirective,
            DropdownDividerDirective,
            DropdownHeaderDirective,
            DropdownItemDirective,
            DropdownItemPlainDirective,
            DropdownMenuDirective,
            DropdownToggleDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownModule, providers: [DropdownService] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        DropdownComponent,
                        DropdownCloseDirective,
                        DropdownDividerDirective,
                        DropdownHeaderDirective,
                        DropdownItemDirective,
                        DropdownItemPlainDirective,
                        DropdownMenuDirective,
                        DropdownToggleDirective
                    ],
                    exports: [
                        DropdownComponent,
                        DropdownCloseDirective,
                        DropdownDividerDirective,
                        DropdownHeaderDirective,
                        DropdownItemDirective,
                        DropdownItemPlainDirective,
                        DropdownMenuDirective,
                        DropdownToggleDirective
                    ],
                    providers: [DropdownService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7O0FBeUJuRixNQUFNLE9BQU8sY0FBYzsrR0FBZCxjQUFjO2dIQUFkLGNBQWMsWUFyQnZCLGlCQUFpQjtZQUNqQixzQkFBc0I7WUFDdEIsd0JBQXdCO1lBQ3hCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsMEJBQTBCO1lBQzFCLHFCQUFxQjtZQUNyQix1QkFBdUIsYUFHdkIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtZQUNyQiwwQkFBMEI7WUFDMUIscUJBQXFCO1lBQ3JCLHVCQUF1QjtnSEFJZCxjQUFjLGFBRmQsQ0FBQyxlQUFlLENBQUM7OzRGQUVqQixjQUFjO2tCQXZCMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIscUJBQXFCO3dCQUNyQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjt3QkFDckIsMEJBQTBCO3dCQUMxQixxQkFBcUI7d0JBQ3JCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCwgRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkRpdmlkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLWRpdmlkZXIvZHJvcGRvd24tZGl2aWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcGRvd25IZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLWhlYWRlci9kcm9wZG93bi1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERyb3Bkb3duSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24taXRlbS9kcm9wZG93bi1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wZG93bkl0ZW1QbGFpbkRpcmVjdGl2ZSB9IGZyb20gJy4vZHJvcGRvd24taXRlbS9kcm9wZG93bi1pdGVtLXBsYWluLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9kcm9wZG93bi5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3Bkb3duQ2xvc2VEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3Bkb3duLWNsb3NlL2Ryb3Bkb3duLWNsb3NlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcbiAgICBEcm9wZG93bkNsb3NlRGlyZWN0aXZlLFxuICAgIERyb3Bkb3duRGl2aWRlckRpcmVjdGl2ZSxcbiAgICBEcm9wZG93bkhlYWRlckRpcmVjdGl2ZSxcbiAgICBEcm9wZG93bkl0ZW1EaXJlY3RpdmUsXG4gICAgRHJvcGRvd25JdGVtUGxhaW5EaXJlY3RpdmUsXG4gICAgRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICAgIERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcbiAgICBEcm9wZG93bkNsb3NlRGlyZWN0aXZlLFxuICAgIERyb3Bkb3duRGl2aWRlckRpcmVjdGl2ZSxcbiAgICBEcm9wZG93bkhlYWRlckRpcmVjdGl2ZSxcbiAgICBEcm9wZG93bkl0ZW1EaXJlY3RpdmUsXG4gICAgRHJvcGRvd25JdGVtUGxhaW5EaXJlY3RpdmUsXG4gICAgRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICAgIERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogW0Ryb3Bkb3duU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Nb2R1bGUge31cbiJdfQ==