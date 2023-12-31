import { booleanAttribute, Component, ContentChildren, HostBinding, Input } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { TemplateIdDirective } from '../../shared';
import { CardBodyComponent, CardFooterComponent } from '../../card';
import * as i0 from "@angular/core";
export class WidgetStatFComponent {
    constructor() {
        /**
         * Set padding of your component.
         * @type boolean
         */
        this.padding = false;
        this.templates = {};
    }
    get hostClasses() {
        return {
            card: true
        };
    }
    get cardBodyClasses() {
        return {
            'd-flex': true,
            'align-items-center': true,
            'p-0': !this.padding
        };
    }
    get iconClasses() {
        return {
            'me-3': !this.textColor,
            'text-white': true,
            [`bg-${this.color}`]: !!this.color,
            'p-3': this.padding,
            'p-4': !this.padding
        };
    }
    get titleClasses() {
        return {
            'text-medium-emphasis': !this.textColor,
            'small': true,
            'text-uppercase': true,
            'fw-semibold': true,
            [`text-${this.textColor}`]: !!this.textColor
        };
    }
    get valueClasses() {
        return {
            'fs-6': !this.textColor,
            'fw-semibold': true,
            [`text-${this.textColor}`]: !!this.textColor
        };
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: WidgetStatFComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: WidgetStatFComponent, isStandalone: true, selector: "c-widget-stat-f", inputs: { color: "color", textColor: "textColor", footer: "footer", icon: "icon", padding: ["padding", "padding", booleanAttribute], title: "title", value: "value" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cWidgetStatB"], ngImport: i0, template: "<ng-container>\n  <c-card-body [ngClass]=\"cardBodyClasses\">\n    <div [ngClass]=\"iconClasses\">\n      <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n    </div>\n    <div>\n      <div [ngClass]=\"valueClasses\">{{value}}</div>\n      <div [ngClass]=\"titleClasses\">{{title}}</div>\n    </div>\n  </c-card-body>\n  <c-card-footer *ngIf=\"footer || templates?.widgetFooterTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetFooterTemplate || defaultFooterIconTemplate\"></ng-container>\n  </c-card-footer>\n</ng-container>\n\n<ng-template #defaultWidgetIconTemplate>\n  <span>{{icon}}</span>\n</ng-template>\n\n<ng-template #defaultFooterIconTemplate>\n  <span>{{footer}}</span>\n</ng-template>\n", dependencies: [{ kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }, { kind: "component", type: CardFooterComponent, selector: "c-card-footer, [c-card-footer]" }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: WidgetStatFComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-f', exportAs: 'cWidgetStatB', standalone: true, imports: [CardBodyComponent, CardFooterComponent, NgClass, NgTemplateOutlet, NgIf], template: "<ng-container>\n  <c-card-body [ngClass]=\"cardBodyClasses\">\n    <div [ngClass]=\"iconClasses\">\n      <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n    </div>\n    <div>\n      <div [ngClass]=\"valueClasses\">{{value}}</div>\n      <div [ngClass]=\"titleClasses\">{{title}}</div>\n    </div>\n  </c-card-body>\n  <c-card-footer *ngIf=\"footer || templates?.widgetFooterTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetFooterTemplate || defaultFooterIconTemplate\"></ng-container>\n  </c-card-footer>\n</ng-container>\n\n<ng-template #defaultWidgetIconTemplate>\n  <span>{{icon}}</span>\n</ng-template>\n\n<ng-template #defaultFooterIconTemplate>\n  <span>{{footer}}</span>\n</ng-template>\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], footer: [{
                type: Input
            }], icon: [{
                type: Input
            }], padding: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], title: [{
                type: Input
            }], value: [{
                type: Input
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtZi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1mL3dpZGdldC1zdGF0LWYuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtZi93aWRnZXQtc3RhdC1mLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULGVBQWUsRUFDZixXQUFXLEVBQ1gsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFTcEUsTUFBTSxPQUFPLG9CQUFvQjtJQVBqQztRQWlDRTs7O1dBR0c7UUFDcUMsWUFBTyxHQUFxQixLQUFLLENBQUM7UUFjMUUsY0FBUyxHQUFRLEVBQUUsQ0FBQztLQW1EckI7SUFoREMsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJO1lBQ2Qsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTztTQUNyQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU87WUFDTCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2xDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTztZQUNuQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTztTQUNyQixDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU87WUFDTCxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3ZDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixhQUFhLEVBQUUsSUFBSTtZQUNuQixDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO1NBQzdDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTztZQUNMLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3ZCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDN0MsQ0FBQztJQUNKLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQTBCLEVBQUUsRUFBRTtZQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0E5RlUsb0JBQW9CO21HQUFwQixvQkFBb0IscUtBOEJYLGdCQUFnQixxSkFlbkIsbUJBQW1CLDRFQ25FdEMsNndCQXNCQSw0Q0RGWSxpQkFBaUIsdUVBQUUsbUJBQW1CLDJFQUFFLE9BQU8sb0ZBQUUsZ0JBQWdCLG9KQUFFLElBQUk7OzRGQUV0RSxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBRWpCLGNBQWMsY0FDWixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDOzhCQVF6RSxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsU0FBUztzQkFBakIsS0FBSztnQkFNRyxNQUFNO3NCQUFkLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU1rQyxPQUFPO3NCQUE5QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU03QixLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsS0FBSztzQkFBYixLQUFLO2dCQUd1RCxnQkFBZ0I7c0JBQTVFLGVBQWU7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQUd2RCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MsIE5nSWYsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi8uLi9jb3JldWkudHlwZXMnO1xuaW1wb3J0IHsgVGVtcGxhdGVJZERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBDYXJkQm9keUNvbXBvbmVudCwgQ2FyZEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NhcmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXdpZGdldC1zdGF0LWYnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2lkZ2V0LXN0YXQtZi5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAnY1dpZGdldFN0YXRCJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NhcmRCb2R5Q29tcG9uZW50LCBDYXJkRm9vdGVyQ29tcG9uZW50LCBOZ0NsYXNzLCBOZ1RlbXBsYXRlT3V0bGV0LCBOZ0lmXVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRTdGF0RkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcj86IENvbG9ycztcblxuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dC1jb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0Q29sb3I/OiBDb2xvcnMgfCAnd2hpdGUnIHwgJ211dGVkJztcblxuICAvKipcbiAgICogRm9vdGVyIGZvciB5b3VyIHdpZGdldFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIGZvb3Rlcj86IHN0cmluZztcblxuICAvKipcbiAgICogSWNvbiBmb3IgeW91ciB3aWRnZXRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSBpY29uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgcGFkZGluZyBvZiB5b3VyIGNvbXBvbmVudC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHBhZGRpbmc6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIHdpZGdldCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFZhbHVlIGZvciB5b3VyIHdpZGdldCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgdGVtcGxhdGVzOiBhbnkgPSB7fTtcbiAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZUlkRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGNvbnRlbnRUZW1wbGF0ZXMhOiBRdWVyeUxpc3Q8VGVtcGxhdGVJZERpcmVjdGl2ZT47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FyZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBnZXQgY2FyZEJvZHlDbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnZC1mbGV4JzogdHJ1ZSxcbiAgICAgICdhbGlnbi1pdGVtcy1jZW50ZXInOiB0cnVlLFxuICAgICAgJ3AtMCc6ICF0aGlzLnBhZGRpbmdcbiAgICB9O1xuICB9XG5cbiAgZ2V0IGljb25DbGFzc2VzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnbWUtMyc6ICF0aGlzLnRleHRDb2xvcixcbiAgICAgICd0ZXh0LXdoaXRlJzogdHJ1ZSxcbiAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IsXG4gICAgICAncC0zJzogdGhpcy5wYWRkaW5nLFxuICAgICAgJ3AtNCc6ICF0aGlzLnBhZGRpbmdcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHRpdGxlQ2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3RleHQtbWVkaXVtLWVtcGhhc2lzJzogIXRoaXMudGV4dENvbG9yLFxuICAgICAgJ3NtYWxsJzogdHJ1ZSxcbiAgICAgICd0ZXh0LXVwcGVyY2FzZSc6IHRydWUsXG4gICAgICAnZnctc2VtaWJvbGQnOiB0cnVlLFxuICAgICAgW2B0ZXh0LSR7dGhpcy50ZXh0Q29sb3J9YF06ICEhdGhpcy50ZXh0Q29sb3JcbiAgICB9O1xuICB9XG5cbiAgZ2V0IHZhbHVlQ2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2ZzLTYnOiAhdGhpcy50ZXh0Q29sb3IsXG4gICAgICAnZnctc2VtaWJvbGQnOiB0cnVlLFxuICAgICAgW2B0ZXh0LSR7dGhpcy50ZXh0Q29sb3J9YF06ICEhdGhpcy50ZXh0Q29sb3JcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVudFRlbXBsYXRlcy5mb3JFYWNoKChjaGlsZDogVGVtcGxhdGVJZERpcmVjdGl2ZSkgPT4ge1xuICAgICAgdGhpcy50ZW1wbGF0ZXNbY2hpbGQuaWRdID0gY2hpbGQudGVtcGxhdGVSZWY7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXI+XG4gIDxjLWNhcmQtYm9keSBbbmdDbGFzc109XCJjYXJkQm9keUNsYXNzZXNcIj5cbiAgICA8ZGl2IFtuZ0NsYXNzXT1cImljb25DbGFzc2VzXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzPy53aWRnZXRJY29uVGVtcGxhdGUgfHwgZGVmYXVsdFdpZGdldEljb25UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IFtuZ0NsYXNzXT1cInZhbHVlQ2xhc3Nlc1wiPnt7dmFsdWV9fTwvZGl2PlxuICAgICAgPGRpdiBbbmdDbGFzc109XCJ0aXRsZUNsYXNzZXNcIj57e3RpdGxlfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9jLWNhcmQtYm9keT5cbiAgPGMtY2FyZC1mb290ZXIgKm5nSWY9XCJmb290ZXIgfHwgdGVtcGxhdGVzPy53aWRnZXRGb290ZXJUZW1wbGF0ZVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXM/LndpZGdldEZvb3RlclRlbXBsYXRlIHx8IGRlZmF1bHRGb290ZXJJY29uVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9jLWNhcmQtZm9vdGVyPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFdpZGdldEljb25UZW1wbGF0ZT5cbiAgPHNwYW4+e3tpY29ufX08L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGb290ZXJJY29uVGVtcGxhdGU+XG4gIDxzcGFuPnt7Zm9vdGVyfX08L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuIl19