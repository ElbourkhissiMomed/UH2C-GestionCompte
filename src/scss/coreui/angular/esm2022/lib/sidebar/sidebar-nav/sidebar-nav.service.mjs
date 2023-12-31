import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarNavService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavService, decorators: [{
            type: Injectable
        }] });
export class SidebarNavHelper {
    constructor() {
        this.hasBadge = (item) => Boolean(item.badge);
        this.hasIcon = (item) => Boolean(item.icon) || item.icon === '';
        this.hasIconComponent = (item) => Boolean(item.iconComponent);
    }
    itemType(item) {
        if (item.divider) {
            return 'divider';
        }
        else if (item.title) {
            return 'title';
        }
        else if (item.children && item.children.length > 0) {
            return 'group';
        }
        else if (item.label) {
            return 'label';
        }
        else if (!Object.keys(item).length) {
            return 'empty';
        }
        else {
            return 'link';
        }
    }
    isActive(router, item) {
        return router.isActive(item.url, false);
    }
    getIconClass(item) {
        const classes = {
            'nav-icon': true
        };
        const icon = item.icon;
        // @ts-ignore
        classes[icon] = this.hasIcon(item);
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavHelper, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavHelper }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavHelper, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBZ0IsaUJBQWlCOytHQUFqQixpQkFBaUI7bUhBQWpCLGlCQUFpQjs7NEZBQWpCLGlCQUFpQjtrQkFEdEMsVUFBVTs7QUFTWCxNQUFNLE9BQU8sZ0JBQWdCO0lBRDdCO1FBdUJTLGFBQVEsR0FBRyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxZQUFPLEdBQUcsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7UUFDckUscUJBQWdCLEdBQUcsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FXM0U7SUFqQ0MsUUFBUSxDQUFDLElBQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRztZQUNyRCxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNwQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtJQUNILENBQUM7SUFFTSxRQUFRLENBQUMsTUFBVyxFQUFFLElBQWM7UUFDekMsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQU1NLFlBQVksQ0FBQyxJQUFjO1FBQ2hDLE1BQU0sT0FBTyxHQUFHO1lBQ2QsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsYUFBYTtRQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7K0dBbENVLGdCQUFnQjttSEFBaEIsZ0JBQWdCOzs0RkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJTmF2RGF0YSB9IGZyb20gJy4vc2lkZWJhci1uYXYnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2lkZWJhck5hdlNlcnZpY2Uge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNpZGViYXItbmF2IGl0ZW1zIGNvbmZpZyBOYXZEYXRhXG4gICAqL1xuICBhYnN0cmFjdCBnZXRTaWRlYmFyTmF2SXRlbXNDb25maWcoKTogSU5hdkRhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpZGViYXJOYXZIZWxwZXIge1xuXG4gIGl0ZW1UeXBlKGl0ZW06IElOYXZEYXRhKTogc3RyaW5nIHtcbiAgICBpZiAoaXRlbS5kaXZpZGVyKSB7XG4gICAgICByZXR1cm4gJ2RpdmlkZXInO1xuICAgIH0gZWxzZSBpZiAoaXRlbS50aXRsZSkge1xuICAgICAgcmV0dXJuICd0aXRsZSc7XG4gICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCApIHtcbiAgICAgIHJldHVybiAnZ3JvdXAnO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5sYWJlbCkge1xuICAgICAgcmV0dXJuICdsYWJlbCc7XG4gICAgfSBlbHNlIGlmICghT2JqZWN0LmtleXMoaXRlbSkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ2VtcHR5JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdsaW5rJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmUocm91dGVyOiBhbnksIGl0ZW06IElOYXZEYXRhKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHJvdXRlci5pc0FjdGl2ZShpdGVtLnVybCwgZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGhhc0JhZGdlID0gKGl0ZW06IElOYXZEYXRhKSA9PiBCb29sZWFuKGl0ZW0uYmFkZ2UpO1xuICBwdWJsaWMgaGFzSWNvbiA9IChpdGVtOiBJTmF2RGF0YSkgPT4gQm9vbGVhbihpdGVtLmljb24pIHx8IGl0ZW0uaWNvbiA9PT0gJyc7XG4gIHB1YmxpYyBoYXNJY29uQ29tcG9uZW50ID0gKGl0ZW06IElOYXZEYXRhKSA9PiBCb29sZWFuKGl0ZW0uaWNvbkNvbXBvbmVudCk7XG5cbiAgcHVibGljIGdldEljb25DbGFzcyhpdGVtOiBJTmF2RGF0YSk6IGFueSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICduYXYtaWNvbic6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IGljb24gPSBpdGVtLmljb247XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNsYXNzZXNbaWNvbl0gPSB0aGlzLmhhc0ljb24oaXRlbSk7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn1cbiJdfQ==