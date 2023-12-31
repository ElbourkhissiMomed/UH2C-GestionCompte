import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarNavBadgePipe {
    transform(item, args) {
        const badge = item.badge;
        return {
            badge: true,
            'ms-auto': true,
            'badge-sm': !badge.size,
            [`badge-${badge.size}`]: !!badge.size,
            [`bg-${badge.color}`]: !!badge.color,
            [`${badge.class}`]: !!badge.class
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavBadgePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavBadgePipe, isStandalone: true, name: "cSidebarNavBadge" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavBadgePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'cSidebarNavBadge',
                    standalone: true
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtYmFkZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1iYWRnZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU1wRCxNQUFNLE9BQU8sbUJBQW1CO0lBRTlCLFNBQVMsQ0FBQyxJQUFTLEVBQUUsSUFBVTtRQUM3QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSTtZQUNYLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7WUFDdkIsQ0FBQyxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUNyQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3BDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUs7U0FDbEMsQ0FBQztJQUNKLENBQUM7K0dBWlUsbUJBQW1COzZHQUFuQixtQkFBbUI7OzRGQUFuQixtQkFBbUI7a0JBSi9CLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjU2lkZWJhck5hdkJhZGdlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2QmFkZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKGl0ZW06IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgY29uc3QgYmFkZ2UgPSBpdGVtLmJhZGdlO1xuICAgIHJldHVybiB7XG4gICAgICBiYWRnZTogdHJ1ZSxcbiAgICAgICdtcy1hdXRvJzogdHJ1ZSxcbiAgICAgICdiYWRnZS1zbSc6ICFiYWRnZS5zaXplLFxuICAgICAgW2BiYWRnZS0ke2JhZGdlLnNpemV9YF06ICEhYmFkZ2Uuc2l6ZSxcbiAgICAgIFtgYmctJHtiYWRnZS5jb2xvcn1gXTogISFiYWRnZS5jb2xvcixcbiAgICAgIFtgJHtiYWRnZS5jbGFzc31gXTogISFiYWRnZS5jbGFzc1xuICAgIH07XG4gIH1cblxufVxuIl19