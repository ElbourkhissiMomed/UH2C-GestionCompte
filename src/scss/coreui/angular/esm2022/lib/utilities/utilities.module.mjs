import { NgModule } from '@angular/core';
import { BgColorDirective } from './bg-color.directive';
import { BorderDirective } from './border.directive';
import { RoundedDirective } from './rounded.directive';
import { TextColorDirective } from './text-color.directive';
import { AlignDirective } from './align.directive';
import * as i0 from "@angular/core";
export class UtilitiesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: UtilitiesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: UtilitiesModule, imports: [BgColorDirective,
            BorderDirective,
            RoundedDirective,
            TextColorDirective,
            AlignDirective], exports: [BgColorDirective,
            BorderDirective,
            RoundedDirective,
            TextColorDirective,
            AlignDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: UtilitiesModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: UtilitiesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        BgColorDirective,
                        BorderDirective,
                        RoundedDirective,
                        TextColorDirective,
                        AlignDirective
                    ],
                    exports: [
                        BgColorDirective,
                        BorderDirective,
                        RoundedDirective,
                        TextColorDirective,
                        AlignDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdXRpbGl0aWVzL3V0aWxpdGllcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQWtCbkQsTUFBTSxPQUFPLGVBQWU7K0dBQWYsZUFBZTtnSEFBZixlQUFlLFlBZHhCLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixjQUFjLGFBR2QsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGNBQWM7Z0hBR0wsZUFBZTs7NEZBQWYsZUFBZTtrQkFoQjNCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixjQUFjO3FCQUNmO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJnQ29sb3JEaXJlY3RpdmUgfSBmcm9tICcuL2JnLWNvbG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCb3JkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JvcmRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUm91bmRlZERpcmVjdGl2ZSB9IGZyb20gJy4vcm91bmRlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGV4dENvbG9yRGlyZWN0aXZlIH0gZnJvbSAnLi90ZXh0LWNvbG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBbGlnbkRpcmVjdGl2ZSB9IGZyb20gJy4vYWxpZ24uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJnQ29sb3JEaXJlY3RpdmUsXG4gICAgQm9yZGVyRGlyZWN0aXZlLFxuICAgIFJvdW5kZWREaXJlY3RpdmUsXG4gICAgVGV4dENvbG9yRGlyZWN0aXZlLFxuICAgIEFsaWduRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCZ0NvbG9yRGlyZWN0aXZlLFxuICAgIEJvcmRlckRpcmVjdGl2ZSxcbiAgICBSb3VuZGVkRGlyZWN0aXZlLFxuICAgIFRleHRDb2xvckRpcmVjdGl2ZSxcbiAgICBBbGlnbkRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFV0aWxpdGllc01vZHVsZSB7fVxuIl19