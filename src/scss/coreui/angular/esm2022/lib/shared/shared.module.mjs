import { NgModule } from '@angular/core';
import { HtmlAttributesDirective } from './html-attr.directive';
import { TemplateIdDirective } from './template-id.directive';
import * as i0 from "@angular/core";
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: SharedModule, imports: [HtmlAttributesDirective,
            TemplateIdDirective], exports: [HtmlAttributesDirective,
            TemplateIdDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SharedModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        HtmlAttributesDirective,
                        TemplateIdDirective
                    ],
                    exports: [
                        HtmlAttributesDirective,
                        TemplateIdDirective
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBWTlELE1BQU0sT0FBTyxZQUFZO0lBRXZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDOytHQU5VLFlBQVk7Z0hBQVosWUFBWSxZQVJyQix1QkFBdUI7WUFDdkIsbUJBQW1CLGFBR25CLHVCQUF1QjtZQUN2QixtQkFBbUI7Z0hBR1YsWUFBWTs7NEZBQVosWUFBWTtrQkFWeEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3dCQUN2QixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLG1CQUFtQjtxQkFDcEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdG1sQXR0cmlidXRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vaHRtbC1hdHRyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZUlkRGlyZWN0aXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS1pZC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUsXG4gICAgVGVtcGxhdGVJZERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUsXG4gICAgVGVtcGxhdGVJZERpcmVjdGl2ZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2hhcmVkTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaGFyZWRNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=