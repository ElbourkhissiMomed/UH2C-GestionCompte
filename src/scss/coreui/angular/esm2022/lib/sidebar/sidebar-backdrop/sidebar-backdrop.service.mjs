import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../sidebar.service";
export class SidebarBackdropService {
    constructor(document, 
    // private rendererFactory: RendererFactory2,
    sidebarService) {
        this.document = document;
        this.sidebarService = sidebarService;
        this.clickListener = () => { };
        // this.renderer = rendererFactory.createRenderer(null, null);
    }
    setBackdrop(sidebar) {
        const backdrop = this.document.getElementsByClassName('sidebar-backdrop');
        // console.log(`sidebar-${this.id}`, ' setBackdrop', backdrop);
        if (backdrop.length === 0) {
            this.backdrop = this.renderer.createElement('div');
            this.renderer.addClass(this.backdrop, 'sidebar-backdrop');
            this.renderer.appendChild(this.document.body, this.backdrop);
            this.clickListener = this.renderer.listen(this.backdrop, 'click', (e) => {
                // console.log(`sidebar-${this.id}`, ' backdrop click', e);
                this.sidebarService.toggle({ toggle: 'visible', sidebar });
            });
        }
        // console.log(this.backdrop, sidebar.sidebarState.mobile, sidebar.sidebarState.show);
        if (this.backdrop && sidebar.sidebarState.mobile && sidebar.sidebarState.visible) {
            this.renderer.addClass(this.backdrop, 'fade');
            this.renderer.addClass(this.backdrop, 'show');
            // this.renderer.removeClass(this.backdrop, 'd-none');
        }
        else {
            this.renderer.removeClass(this.backdrop, 'show');
            this.renderer.removeClass(this.backdrop, 'fade');
            // this.renderer.addClass(this.backdrop, 'd-none');
        }
    }
    clearBackdrop() {
        if (this.backdrop) {
            // clear backdrop click Listener
            this.clickListener();
            // this.renderer.listen(this.backdrop, 'click', (e): void => {} );
            this.renderer.removeChild(this.document.body, this.backdrop);
            // @ts-ignore
            this.backdrop = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarBackdropService, deps: [{ token: DOCUMENT }, { token: i1.SidebarService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarBackdropService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarBackdropService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.SidebarService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1iYWNrZHJvcC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItYmFja2Ryb3Avc2lkZWJhci1iYWNrZHJvcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBTzNDLE1BQU0sT0FBTyxzQkFBc0I7SUFNakMsWUFDNEIsUUFBa0I7SUFDNUMsNkNBQTZDO0lBQ3JDLGNBQThCO1FBRlosYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUVwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMaEMsa0JBQWEsR0FBRyxHQUFTLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFPckMsOERBQThEO0lBQ2hFLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBeUI7UUFDbkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFFLCtEQUErRDtRQUMvRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RFLDJEQUEyRDtnQkFDM0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELHNGQUFzRjtRQUN0RixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDaEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLHNEQUFzRDtTQUN2RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELG1EQUFtRDtTQUNwRDtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsa0VBQWtFO1lBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCxhQUFhO1lBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7U0FDM0I7SUFDSCxDQUFDOytHQS9DVSxzQkFBc0Isa0JBT3ZCLFFBQVE7bUhBUFAsc0JBQXNCLGNBRnJCLE1BQU07OzRGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQVFJLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaWRlYmFyU2VydmljZSB9IGZyb20gJy4uL3NpZGViYXIuc2VydmljZSc7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJCYWNrZHJvcFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgYmFja2Ryb3AhOiBIVE1MRWxlbWVudDtcbiAgcmVuZGVyZXIhOiBSZW5kZXJlcjI7XG4gIHByaXZhdGUgY2xpY2tMaXN0ZW5lciA9ICgpOiB2b2lkID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIC8vIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IFNpZGViYXJTZXJ2aWNlXG4gICkge1xuICAgIC8vIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICBzZXRCYWNrZHJvcChzaWRlYmFyOiBTaWRlYmFyQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgYmFja2Ryb3AgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXItYmFja2Ryb3AnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgc2lkZWJhci0ke3RoaXMuaWR9YCwgJyBzZXRCYWNrZHJvcCcsIGJhY2tkcm9wKTtcbiAgICBpZiAoYmFja2Ryb3AubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmJhY2tkcm9wID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5iYWNrZHJvcCwgJ3NpZGViYXItYmFja2Ryb3AnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCB0aGlzLmJhY2tkcm9wKTtcbiAgICAgIHRoaXMuY2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuYmFja2Ryb3AsICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBzaWRlYmFyLSR7dGhpcy5pZH1gLCAnIGJhY2tkcm9wIGNsaWNrJywgZSk7XG4gICAgICAgIHRoaXMuc2lkZWJhclNlcnZpY2UudG9nZ2xlKHsgdG9nZ2xlOiAndmlzaWJsZScsIHNpZGViYXIgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5iYWNrZHJvcCwgc2lkZWJhci5zaWRlYmFyU3RhdGUubW9iaWxlLCBzaWRlYmFyLnNpZGViYXJTdGF0ZS5zaG93KTtcbiAgICBpZiAodGhpcy5iYWNrZHJvcCAmJiBzaWRlYmFyLnNpZGViYXJTdGF0ZS5tb2JpbGUgJiYgc2lkZWJhci5zaWRlYmFyU3RhdGUudmlzaWJsZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJhY2tkcm9wLCAnZmFkZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmJhY2tkcm9wLCAnc2hvdycpO1xuICAgICAgLy8gdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmJhY2tkcm9wLCAnZC1ub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5iYWNrZHJvcCwgJ3Nob3cnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5iYWNrZHJvcCwgJ2ZhZGUnKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5iYWNrZHJvcCwgJ2Qtbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYmFja2Ryb3ApIHtcbiAgICAgIC8vIGNsZWFyIGJhY2tkcm9wIGNsaWNrIExpc3RlbmVyXG4gICAgICB0aGlzLmNsaWNrTGlzdGVuZXIoKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuYmFja2Ryb3AsICdjbGljaycsIChlKTogdm9pZCA9PiB7fSApO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuYmFja2Ryb3ApO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5iYWNrZHJvcCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxufVxuIl19