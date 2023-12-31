import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgClass } from '@angular/common';
import * as i0 from "@angular/core";
export class PopoverComponent {
    constructor(renderer) {
        this.renderer = renderer;
        /**
         * Content of popover
         * @type {string | TemplateRef}
         */
        this.content = '';
        /**
         * Toggle the visibility of popover component.
         * @type boolean
         */
        this.visible = false;
        this.role = 'tooltip';
    }
    get hostClasses() {
        return {
            popover: true,
            fade: true,
            show: this.visible,
            'bs-popover-auto': true
        };
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.updateView(this.content);
        });
    }
    ngOnChanges(changes) {
        if (changes['content']) {
            setTimeout(() => {
                this.updateView(this.content);
            });
        }
    }
    ngOnDestroy() {
        this.clear();
    }
    clear() {
        this.viewContainerRef?.clear();
        if (!!this.textNode) {
            this.renderer.removeChild(this.textNode.parentNode, this.textNode);
        }
    }
    updateView(content) {
        this.clear();
        if (!content) {
            return;
        }
        if (content instanceof TemplateRef) {
            this.viewContainerRef.createEmbeddedView(content);
        }
        else {
            this.textNode = this.renderer.createText(content);
            const popoverBody = this.renderer.createElement('div');
            this.renderer.addClass(popoverBody, 'popover-body');
            this.renderer.appendChild(popoverBody, this.textNode);
            const element = this.viewContainerRef.element.nativeElement;
            this.renderer.appendChild(element.parentNode, popoverBody);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PopoverComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PopoverComponent, isStandalone: true, selector: "c-popover", inputs: { content: "content", visible: "visible", id: "id", role: "role" }, host: { properties: { "attr.id": "this.id", "attr.role": "this.role", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "viewContainerRef", first: true, predicate: ["popoverTemplate"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: "<ng-container>\n  <div [ngClass]=\"{'popover-arrow': !!content}\" data-popper-arrow></div>\n  <ng-container #popoverTemplate></ng-container>\n</ng-container>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-popover', standalone: true, imports: [NgClass], template: "<ng-container>\n  <div [ngClass]=\"{'popover-arrow': !!content}\" data-popper-arrow></div>\n  <ng-container #popoverTemplate></ng-container>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { content: [{
                type: Input
            }], visible: [{
                type: Input
            }], id: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.id']
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], viewContainerRef: [{
                type: ViewChild,
                args: ['popoverTemplate', { read: ViewContainerRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcG9wb3Zlci9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFRMUMsTUFBTSxPQUFPLGdCQUFnQjtJQWtCM0IsWUFDVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBakI3Qjs7O1dBR0c7UUFDTSxZQUFPLEdBQThCLEVBQUUsQ0FBQztRQUNqRDs7O1dBR0c7UUFDTSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRVUsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQU9oRCxDQUFDO0lBRUwsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtTQUN4QixDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVPLEtBQUs7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBRU8sVUFBVSxDQUFDLE9BQWtDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxJQUFJLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOytHQTNFVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQix3VkFlVyxnQkFBZ0Isa0RDcEN4RCxpS0FJQSw0Q0RlWSxPQUFPOzs0RkFFTixnQkFBZ0I7a0JBTjVCLFNBQVM7K0JBQ0UsV0FBVyxjQUVULElBQUksV0FDUCxDQUFDLE9BQU8sQ0FBQztnR0FRVCxPQUFPO3NCQUFmLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQUMyQixFQUFFO3NCQUFsQyxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLFNBQVM7Z0JBQ0ksSUFBSTtzQkFBdEMsS0FBSzs7c0JBQUksV0FBVzt1QkFBQyxXQUFXO2dCQUV5QixnQkFBZ0I7c0JBQXpFLFNBQVM7dUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBUXBELFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1wb3BvdmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdDbGFzc11cbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKipcbiAgICogQ29udGVudCBvZiBwb3BvdmVyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBUZW1wbGF0ZVJlZn1cbiAgICovXG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSAnJztcbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiBwb3BvdmVyIGNvbXBvbmVudC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgdmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKSBpZD86IHN0cmluZztcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ3Rvb2x0aXAnO1xuXG4gIEBWaWV3Q2hpbGQoJ3BvcG92ZXJUZW1wbGF0ZScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2aWV3Q29udGFpbmVyUmVmITogVmlld0NvbnRhaW5lclJlZjtcbiAgcHJpdmF0ZSB0ZXh0Tm9kZSE6IFRleHQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkgeyB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiB7IFtrbGFzczogc3RyaW5nXTogYW55OyB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9wb3ZlcjogdHJ1ZSxcbiAgICAgIGZhZGU6IHRydWUsXG4gICAgICBzaG93OiB0aGlzLnZpc2libGUsXG4gICAgICAnYnMtcG9wb3Zlci1hdXRvJzogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcodGhpcy5jb250ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snY29udGVudCddKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuY29udGVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZj8uY2xlYXIoKTtcbiAgICBpZiAoISF0aGlzLnRleHROb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMudGV4dE5vZGUucGFyZW50Tm9kZSwgdGhpcy50ZXh0Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWaWV3KGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRleHROb2RlID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KGNvbnRlbnQpO1xuICAgICAgY29uc3QgcG9wb3ZlckJvZHkgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhwb3BvdmVyQm9keSwgJ3BvcG92ZXItYm9keScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwb3BvdmVyQm9keSwgdGhpcy50ZXh0Tm9kZSk7XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlbGVtZW50LnBhcmVudE5vZGUsIHBvcG92ZXJCb2R5KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXI+XG4gIDxkaXYgW25nQ2xhc3NdPVwieydwb3BvdmVyLWFycm93JzogISFjb250ZW50fVwiIGRhdGEtcG9wcGVyLWFycm93PjwvZGl2PlxuICA8bmctY29udGFpbmVyICNwb3BvdmVyVGVtcGxhdGU+PC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==