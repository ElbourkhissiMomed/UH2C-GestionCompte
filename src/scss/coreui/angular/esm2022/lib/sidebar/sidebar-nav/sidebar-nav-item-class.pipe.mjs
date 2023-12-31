import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./sidebar-nav.service";
export class SidebarNavItemClassPipe {
    constructor(helper) {
        this.helper = helper;
    }
    // transform(item: any, ...args: any[]): any {
    transform(item, args) {
        const itemType = this.helper.itemType(item);
        let itemClass;
        if (['divider', 'title'].includes(itemType)) {
            itemClass = `nav-${itemType}`;
        }
        else if (itemType === 'group') {
            // itemClass = 'c-sidebar-nav-group' ;
            itemClass = '';
        }
        else {
            itemClass = 'nav-item';
        }
        return item.class ? `${itemClass} ${item.class}` : itemClass;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavItemClassPipe, deps: [{ token: i1.SidebarNavHelper }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavItemClassPipe, isStandalone: true, name: "cSidebarNavItemClass" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavItemClassPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavItemClass',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i1.SidebarNavHelper }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtaXRlbS1jbGFzcy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWl0ZW0tY2xhc3MucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBUXBELE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsWUFDUyxNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDO0lBRUosOENBQThDO0lBQzlDLFNBQVMsQ0FBQyxJQUFTLEVBQUUsSUFBWTtRQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNDLFNBQVMsR0FBRyxPQUFPLFFBQVEsRUFBRSxDQUFDO1NBQy9CO2FBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQy9CLHNDQUFzQztZQUN0QyxTQUFTLEdBQUcsRUFBRSxDQUFFO1NBQ2pCO2FBQU07WUFDTCxTQUFTLEdBQUcsVUFBVSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvRCxDQUFDOytHQW5CUSx1QkFBdUI7NkdBQXZCLHVCQUF1Qjs7NEZBQXZCLHVCQUF1QjtrQkFKbkMsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsc0JBQXNCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY1NpZGViYXJOYXZJdGVtQ2xhc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZJdGVtQ2xhc3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlclxuICApIHt9XG5cbiAgLy8gdHJhbnNmb3JtKGl0ZW06IGFueSwgLi4uYXJnczogYW55W10pOiBhbnkge1xuICB0cmFuc2Zvcm0oaXRlbTogYW55LCBhcmdzPzogYW55W10pOiBhbnkge1xuICAgICAgY29uc3QgaXRlbVR5cGUgPSB0aGlzLmhlbHBlci5pdGVtVHlwZShpdGVtKTtcbiAgICAgIGxldCBpdGVtQ2xhc3M7XG4gICAgICBpZiAoWydkaXZpZGVyJywgJ3RpdGxlJ10uaW5jbHVkZXMoaXRlbVR5cGUpKSB7XG4gICAgICAgIGl0ZW1DbGFzcyA9IGBuYXYtJHtpdGVtVHlwZX1gO1xuICAgICAgfSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAvLyBpdGVtQ2xhc3MgPSAnYy1zaWRlYmFyLW5hdi1ncm91cCcgO1xuICAgICAgICBpdGVtQ2xhc3MgPSAnJyA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtQ2xhc3MgPSAnbmF2LWl0ZW0nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW0uY2xhc3MgPyBgJHtpdGVtQ2xhc3N9ICR7aXRlbS5jbGFzc31gIDogaXRlbUNsYXNzO1xuICAgIH1cbn1cbiJdfQ==