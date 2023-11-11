import { booleanAttribute, Component, ContentChildren, HostBinding, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { CollapseDirective } from '../../collapse';
import { TemplateIdDirective } from '../../shared';
import { AccordionButtonDirective } from '../accordion-button/accordion-button.directive';
import * as i0 from "@angular/core";
import * as i1 from "../accordion.service";
let nextId = 0;
export class AccordionItemComponent {
    constructor(accordionService) {
        this.accordionService = accordionService;
        /**
         * Toggle an accordion item programmatically
         * @type boolean
         * @default false
         */
        this.visible = false;
        this.contentId = `accordion-item-${nextId++}`;
        this.itemContext = { $implicit: this.visible };
        this.templates = {};
    }
    set open(value) {
        console.warn('c-accordion-item "open" prop is deprecated, use "visible"  prop instead.');
        this.visible = value || this.visible;
    }
    get open() {
        return this.visible;
    }
    get hostClasses() {
        return {
            'accordion-item': true
        };
    }
    ngOnInit() {
        this.accordionService.addItem(this);
    }
    ngOnDestroy() {
        this.accordionService.removeItem(this);
    }
    toggleItem() {
        this.accordionService.toggleItem(this);
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionItemComponent, deps: [{ token: i1.AccordionService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: AccordionItemComponent, isStandalone: true, selector: "c-accordion-item", inputs: { visible: ["visible", "visible", booleanAttribute], open: "open" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cAccordionItem"], ngImport: i0, template: "<ng-container>\n  <div class=\"accordion-header\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext\"></ng-container>\n  </div>\n  <div class=\"accordion-collapse\" cCollapse [visible]=\"visible\" [attr.aria-expanded]=\"visible\" [id]=\"contentId\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #defaultAccordionHeaderTemplate>\n  <button cAccordionButton [collapsed]=\"!visible\" [attr.aria-controls]=\"contentId\" (click)=\"toggleItem()\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext\">\n    </ng-container>\n  </button>\n</ng-template>\n\n<ng-template #defaultAccordionHeaderContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #defaultAccordionBodyTemplate>\n  <div class=\"accordion-body\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext\">\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #defaultAccordionBodyContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"], dependencies: [{ kind: "directive", type: AccordionButtonDirective, selector: "[cAccordionButton]", inputs: ["collapsed", "type"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: CollapseDirective, selector: "[cCollapse]", inputs: ["animate", "horizontal", "visible", "navbar", "duration", "transition"], outputs: ["collapseChange"], exportAs: ["cCollapse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-accordion-item', exportAs: 'cAccordionItem', standalone: true, imports: [AccordionButtonDirective, NgTemplateOutlet, CollapseDirective], template: "<ng-container>\n  <div class=\"accordion-header\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionHeaderTemplate'] || defaultAccordionHeaderTemplate; context: itemContext\"></ng-container>\n  </div>\n  <div class=\"accordion-collapse\" cCollapse [visible]=\"visible\" [attr.aria-expanded]=\"visible\" [id]=\"contentId\">\n    <ng-container *ngTemplateOutlet=\"templates['accordionBodyTemplate'] || defaultAccordionBodyTemplate; context: itemContext\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #defaultAccordionHeaderTemplate>\n  <button cAccordionButton [collapsed]=\"!visible\" [attr.aria-controls]=\"contentId\" (click)=\"toggleItem()\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionHeader'] || defaultAccordionHeaderContentTemplate; context: itemContext\">\n    </ng-container>\n  </button>\n</ng-template>\n\n<ng-template #defaultAccordionHeaderContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #defaultAccordionBodyTemplate>\n  <div class=\"accordion-body\">\n    <ng-container\n      *ngTemplateOutlet=\"templates['accordionBody'] || defaultAccordionBodyContentTemplate; context: itemContext\">\n    </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #defaultAccordionBodyContentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: [":host{display:block;overflow:hidden}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.AccordionService }]; }, propDecorators: { visible: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], open: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFdBQVcsRUFDWCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFHMUYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBVWYsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUNVLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRzVDOzs7O1dBSUc7UUFDcUMsWUFBTyxHQUFxQixLQUFLLENBQUM7UUFtQjFFLGNBQVMsR0FBRyxrQkFBa0IsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUN6QyxnQkFBVyxHQUFHLEVBQUUsU0FBUyxFQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRCxjQUFTLEdBQVEsRUFBRSxDQUFDO0lBNUJoQixDQUFDO0lBU0wsSUFDSSxJQUFJLENBQUMsS0FBYztRQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLDBFQUEwRSxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQztJQUNKLENBQUM7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQTBCLEVBQUUsRUFBRTtZQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0FuRFUsc0JBQXNCO21HQUF0QixzQkFBc0IsOEZBV2IsZ0JBQWdCLG1JQXNCbkIsbUJBQW1CLDhFQzdEdEMsZ3pDQWdDQSxnR0ROWSx3QkFBd0IsOEZBQUUsZ0JBQWdCLG9KQUFFLGlCQUFpQjs7NEZBRTVELHNCQUFzQjtrQkFSbEMsU0FBUzsrQkFDRSxrQkFBa0IsWUFHbEIsZ0JBQWdCLGNBQ2QsSUFBSSxXQUNQLENBQUMsd0JBQXdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7dUdBYWhDLE9BQU87c0JBQTlDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBR2xDLElBQUk7c0JBRFAsS0FBSztnQkFXRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFVeUMsZ0JBQWdCO3NCQUE1RSxlQUFlO3VCQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29sbGFwc2VEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb2xsYXBzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZUlkRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IEFjY29yZGlvbkJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2FjY29yZGlvbi1idXR0b24vYWNjb3JkaW9uLWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL2FjY29yZGlvbi5zZXJ2aWNlJztcblxubGV0IG5leHRJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtYWNjb3JkaW9uLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24taXRlbS5jb21wb25lbnQuc2NzcyddLFxuICBleHBvcnRBczogJ2NBY2NvcmRpb25JdGVtJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0FjY29yZGlvbkJ1dHRvbkRpcmVjdGl2ZSwgTmdUZW1wbGF0ZU91dGxldCwgQ29sbGFwc2VEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY2NvcmRpb25TZXJ2aWNlOiBBY2NvcmRpb25TZXJ2aWNlXG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBhbiBhY2NvcmRpb24gaXRlbSBwcm9ncmFtbWF0aWNhbGx5XG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSB2aXNpYmxlOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG9wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zb2xlLndhcm4oJ2MtYWNjb3JkaW9uLWl0ZW0gXCJvcGVuXCIgcHJvcCBpcyBkZXByZWNhdGVkLCB1c2UgXCJ2aXNpYmxlXCIgIHByb3AgaW5zdGVhZC4nKTtcbiAgICB0aGlzLnZpc2libGUgPSB2YWx1ZSB8fCB0aGlzLnZpc2libGU7XG4gIH1cblxuICBnZXQgb3BlbigpIHtcbiAgICByZXR1cm4gPGJvb2xlYW4+dGhpcy52aXNpYmxlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnYWNjb3JkaW9uLWl0ZW0nOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGNvbnRlbnRJZCA9IGBhY2NvcmRpb24taXRlbS0ke25leHRJZCsrfWA7XG4gIGl0ZW1Db250ZXh0ID0geyAkaW1wbGljaXQ6IDxib29sZWFuPnRoaXMudmlzaWJsZSB9O1xuICB0ZW1wbGF0ZXM6IGFueSA9IHt9O1xuICBAQ29udGVudENoaWxkcmVuKFRlbXBsYXRlSWREaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgY29udGVudFRlbXBsYXRlcyE6IFF1ZXJ5TGlzdDxUZW1wbGF0ZUlkRGlyZWN0aXZlPjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UuYWRkSXRlbSh0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS5yZW1vdmVJdGVtKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlSXRlbSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UudG9nZ2xlSXRlbSh0aGlzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRlbnRUZW1wbGF0ZXMuZm9yRWFjaCgoY2hpbGQ6IFRlbXBsYXRlSWREaXJlY3RpdmUpID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVzW2NoaWxkLmlkXSA9IGNoaWxkLnRlbXBsYXRlUmVmO1xuICAgIH0pO1xuICB9XG59XG5cbiIsIjxuZy1jb250YWluZXI+XG4gIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snYWNjb3JkaW9uSGVhZGVyVGVtcGxhdGUnXSB8fCBkZWZhdWx0QWNjb3JkaW9uSGVhZGVyVGVtcGxhdGU7IGNvbnRleHQ6IGl0ZW1Db250ZXh0XCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlXCIgY0NvbGxhcHNlIFt2aXNpYmxlXT1cInZpc2libGVcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cInZpc2libGVcIiBbaWRdPVwiY29udGVudElkXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlc1snYWNjb3JkaW9uQm9keVRlbXBsYXRlJ10gfHwgZGVmYXVsdEFjY29yZGlvbkJvZHlUZW1wbGF0ZTsgY29udGV4dDogaXRlbUNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0QWNjb3JkaW9uSGVhZGVyVGVtcGxhdGU+XG4gIDxidXR0b24gY0FjY29yZGlvbkJ1dHRvbiBbY29sbGFwc2VkXT1cIiF2aXNpYmxlXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJjb250ZW50SWRcIiAoY2xpY2spPVwidG9nZ2xlSXRlbSgpXCI+XG4gICAgPG5nLWNvbnRhaW5lclxuICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXNbJ2FjY29yZGlvbkhlYWRlciddIHx8IGRlZmF1bHRBY2NvcmRpb25IZWFkZXJDb250ZW50VGVtcGxhdGU7IGNvbnRleHQ6IGl0ZW1Db250ZXh0XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvYnV0dG9uPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0QWNjb3JkaW9uSGVhZGVyQ29udGVudFRlbXBsYXRlPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRBY2NvcmRpb25Cb2R5VGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzWydhY2NvcmRpb25Cb2R5J10gfHwgZGVmYXVsdEFjY29yZGlvbkJvZHlDb250ZW50VGVtcGxhdGU7IGNvbnRleHQ6IGl0ZW1Db250ZXh0XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0QWNjb3JkaW9uQm9keUNvbnRlbnRUZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==