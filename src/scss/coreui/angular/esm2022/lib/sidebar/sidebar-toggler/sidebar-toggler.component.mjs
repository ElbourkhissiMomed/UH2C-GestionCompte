import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarTogglerComponent {
    constructor() {
        this.role = 'button';
        this.sidebarTogglerClass = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarTogglerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: SidebarTogglerComponent, isStandalone: true, selector: "c-sidebar-toggler", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.sidebar-toggler": "this.sidebarTogglerClass" } }, ngImport: i0, template: ``, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarTogglerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar-toggler',
                    template: ``,
                    standalone: true
                }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], sidebarTogglerClass: [{
                type: HostBinding,
                args: ['class.sidebar-toggler']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci10b2dnbGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLXRvZ2dsZXIvc2lkZWJhci10b2dnbGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzlELE1BQU0sT0FBTyx1QkFBdUI7SUFMcEM7UUFRVyxTQUFJLEdBQUcsUUFBUSxDQUFDO1FBRWEsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO0tBRWxFOytHQVBZLHVCQUF1QjttR0FBdkIsdUJBQXVCLGdOQUh4QixFQUFFOzs0RkFHRCx1QkFBdUI7a0JBTG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLEVBQUU7b0JBQ1osVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUlVLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFFZ0MsbUJBQW1CO3NCQUF4RCxXQUFXO3VCQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Mtc2lkZWJhci10b2dnbGVyJyxcbiAgdGVtcGxhdGU6IGBgLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJUb2dnbGVyQ29tcG9uZW50IHtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIEBJbnB1dCgpIHJvbGUgPSAnYnV0dG9uJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNpZGViYXItdG9nZ2xlcicpIHNpZGViYXJUb2dnbGVyQ2xhc3MgPSB0cnVlO1xuXG59XG4iXX0=