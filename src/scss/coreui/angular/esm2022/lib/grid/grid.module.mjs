import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RowComponent } from './row.component';
import { ColComponent } from './col.component';
import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';
import { GutterDirective } from './gutter.directive';
import * as i0 from "@angular/core";
export class GridModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: GridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: GridModule, imports: [ColComponent,
            ColDirective,
            ContainerComponent,
            GutterDirective,
            RowComponent,
            RowDirective], exports: [ColComponent,
            ColDirective,
            ContainerComponent,
            GutterDirective,
            RowComponent,
            RowDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: GridModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: GridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ColComponent,
                        ColDirective,
                        ContainerComponent,
                        GutterDirective,
                        RowComponent,
                        RowDirective
                    ],
                    exports: [
                        ColComponent,
                        ColDirective,
                        ContainerComponent,
                        GutterDirective,
                        RowComponent,
                        RowDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2dyaWQvZ3JpZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQW9CckQsTUFBTSxPQUFPLFVBQVU7K0dBQVYsVUFBVTtnSEFBVixVQUFVLFlBaEJuQixZQUFZO1lBQ1osWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVksYUFHWixZQUFZO1lBQ1osWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsWUFBWTtZQUNaLFlBQVk7Z0hBR0gsVUFBVTs7NEZBQVYsVUFBVTtrQkFsQnRCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osWUFBWTtxQkFDYjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3dDb21wb25lbnQgfSBmcm9tICcuL3Jvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sQ29tcG9uZW50IH0gZnJvbSAnLi9jb2wuY29tcG9uZW50JztcbmltcG9ydCB7IFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2xEaXJlY3RpdmUgfSBmcm9tICcuL2NvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR3V0dGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9ndXR0ZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbENvbXBvbmVudCxcbiAgICBDb2xEaXJlY3RpdmUsXG4gICAgQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEd1dHRlckRpcmVjdGl2ZSxcbiAgICBSb3dDb21wb25lbnQsXG4gICAgUm93RGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb2xDb21wb25lbnQsXG4gICAgQ29sRGlyZWN0aXZlLFxuICAgIENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBHdXR0ZXJEaXJlY3RpdmUsXG4gICAgUm93Q29tcG9uZW50LFxuICAgIFJvd0RpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRNb2R1bGUge31cbiJdfQ==