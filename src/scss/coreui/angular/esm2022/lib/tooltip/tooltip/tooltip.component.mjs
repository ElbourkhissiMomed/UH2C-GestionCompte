import { Component, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class TooltipComponent {
    constructor(renderer) {
        this.renderer = renderer;
        /**
         * Content of tooltip
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
            tooltip: true,
            fade: true,
            show: this.visible,
            'bs-tooltip-auto': true
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
            const element = this.viewContainerRef.element.nativeElement;
            this.renderer.appendChild(element.parentNode, this.textNode);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TooltipComponent, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: TooltipComponent, isStandalone: true, selector: "c-tooltip", inputs: { content: "content", visible: "visible", id: "id", role: "role" }, host: { properties: { "attr.id": "this.id", "attr.role": "this.role", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "viewContainerRef", first: true, predicate: ["tooltipTemplate"], descendants: true, read: ViewContainerRef }], usesOnChanges: true, ngImport: i0, template: "<ng-container>\n  <div class=\"tooltip-arrow\" data-popper-arrow></div>\n  <div class=\"tooltip-inner\">\n    <ng-container #tooltipTemplate></ng-container>\n  </div>\n</ng-container>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-tooltip', standalone: true, template: "<ng-container>\n  <div class=\"tooltip-arrow\" data-popper-arrow></div>\n  <div class=\"tooltip-inner\">\n    <ng-container #tooltipTemplate></ng-container>\n  </div>\n</ng-container>\n" }]
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
                args: ['tooltipTemplate', { read: ViewContainerRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3Rvb2x0aXAvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdG9vbHRpcC90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDOztBQU92QixNQUFNLE9BQU8sZ0JBQWdCO0lBa0IzQixZQUNVLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFqQjdCOzs7V0FHRztRQUNNLFlBQU8sR0FBOEIsRUFBRSxDQUFDO1FBQ2pEOzs7V0FHRztRQUNNLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFVSxTQUFJLEdBQUcsU0FBUyxDQUFDO0lBT2hELENBQUM7SUFFTCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTztZQUNsQixpQkFBaUIsRUFBRSxJQUFJO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU8sS0FBSztRQUNYLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFFTyxVQUFVLENBQUMsT0FBa0M7UUFDbkQsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU87U0FDUjtRQUVELElBQUksT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOytHQXhFVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQix3VkFlVyxnQkFBZ0Isa0RDbEN4RCwyTEFNQTs7NEZEYWEsZ0JBQWdCO2tCQUw1QixTQUFTOytCQUNFLFdBQVcsY0FFVCxJQUFJO2dHQVFQLE9BQU87c0JBQWYsS0FBSztnQkFLRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQzJCLEVBQUU7c0JBQWxDLEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsU0FBUztnQkFDSSxJQUFJO3NCQUF0QyxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLFdBQVc7Z0JBRXlCLGdCQUFnQjtzQkFBekUsU0FBUzt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtnQkFRcEQsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLyoqXG4gICAqIENvbnRlbnQgb2YgdG9vbHRpcFxuICAgKiBAdHlwZSB7c3RyaW5nIHwgVGVtcGxhdGVSZWZ9XG4gICAqL1xuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJyc7XG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgcG9wb3ZlciBjb21wb25lbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIHZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJykgaWQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICd0b29sdGlwJztcblxuICBAVmlld0NoaWxkKCd0b29sdGlwVGVtcGxhdGUnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmlld0NvbnRhaW5lclJlZiE6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgdGV4dE5vZGUhOiBUZXh0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogeyBba2xhc3M6IHN0cmluZ106IGFueTsgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICBmYWRlOiB0cnVlLFxuICAgICAgc2hvdzogdGhpcy52aXNpYmxlLFxuICAgICAgJ2JzLXRvb2x0aXAtYXV0byc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVWaWV3KHRoaXMuY29udGVudCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2NvbnRlbnQnXSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldyh0aGlzLmNvbnRlbnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWY/LmNsZWFyKCk7XG4gICAgaWYgKCEhdGhpcy50ZXh0Tm9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnRleHROb2RlLnBhcmVudE5vZGUsIHRoaXMudGV4dE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcigpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyhjb250ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXh0Tm9kZSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChjb250ZW50KTtcblxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGVsZW1lbnQucGFyZW50Tm9kZSwgdGhpcy50ZXh0Tm9kZSk7XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGFpbmVyPlxuICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiIGRhdGEtcG9wcGVyLWFycm93PjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPlxuICAgIDxuZy1jb250YWluZXIgI3Rvb2x0aXBUZW1wbGF0ZT48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==