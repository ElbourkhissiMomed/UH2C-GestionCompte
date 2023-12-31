import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarNavLinkPipe {
    transform(item) {
        const disabled = item?.attributes?.disabled;
        return {
            'nav-link': true,
            disabled,
            'btn-link': disabled,
            [`nav-link-${item.variant}`]: !!item.variant
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavLinkPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavLinkPipe, isStandalone: true, name: "cSidebarNavLink" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavLinkPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavLink',
                    standalone: true
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtbGluay5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LWxpbmsucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFNcEQsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixTQUFTLENBQUMsSUFBUztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztRQUU1QyxPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUk7WUFDaEIsUUFBUTtZQUNSLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87U0FDN0MsQ0FBQztJQUNKLENBQUM7K0dBWlUsa0JBQWtCOzZHQUFsQixrQkFBa0I7OzRGQUFsQixrQkFBa0I7a0JBSjlCLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjU2lkZWJhck5hdkxpbmsnLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybShpdGVtOiBhbnkpOiBhbnkge1xuXG4gICAgY29uc3QgZGlzYWJsZWQgPSBpdGVtPy5hdHRyaWJ1dGVzPy5kaXNhYmxlZDtcblxuICAgIHJldHVybiB7XG4gICAgICAnbmF2LWxpbmsnOiB0cnVlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAnYnRuLWxpbmsnOiBkaXNhYmxlZCxcbiAgICAgIFtgbmF2LWxpbmstJHtpdGVtLnZhcmlhbnR9YF06ICEhaXRlbS52YXJpYW50XG4gICAgfTtcbiAgfVxufVxuIl19