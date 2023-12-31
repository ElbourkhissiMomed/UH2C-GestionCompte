import { booleanAttribute, Component, ContentChildren, HostBinding, Input } from '@angular/core';
import { CardBodyComponent, CardComponent } from '../../card';
import { TemplateIdDirective } from '../../shared';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
export class WidgetStatCComponent extends CardComponent {
    constructor() {
        super();
        /**
         * Invert colors from their default dark shade.
         * @type boolean
         */
        this.inverse = false;
        this.templates = {};
    }
    get hostExtendedClass() {
        return {
            'high-emphasis-inverse': this.inverse
        };
    }
    get iconClasses() {
        return {
            'mb-4': !this.textColor,
            'text-end': true,
            'text-medium-emphasis': !this.inverse,
            'text-medium-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor
        };
    }
    get titleClasses() {
        return {
            'text-medium-emphasis': !this.inverse,
            'text-medium-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor
        };
    }
    get valueClasses() {
        return {
            'fs-4': !this.textColor,
            'fw-semibold': true,
            'text-high-emphasis': !this.inverse,
            'text-high-emphasis-inverse': this.inverse,
            [`text-${this.textColor}`]: !!this.textColor
        };
    }
    ngAfterContentInit() {
        this.contentTemplates.forEach((child) => {
            this.templates[child.id] = child.templateRef;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: WidgetStatCComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: WidgetStatCComponent, isStandalone: true, selector: "c-widget-stat-c", inputs: { icon: "icon", title: "title", value: "value", inverse: ["inverse", "inverse", booleanAttribute] }, host: { properties: { "class": "this.hostExtendedClass" } }, queries: [{ propertyName: "contentTemplates", predicate: TemplateIdDirective, descendants: true }], exportAs: ["cWidgetStatC"], usesInheritance: true, ngImport: i0, template: "<c-card-body>\n  <div *ngIf=\"icon || templates?.widgetIconTemplate\" [ngClass]=\"iconClasses\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n  </div>\n  <div *ngIf=\"!!value\" [ngClass]=\"valueClasses\">\n    {{value}}\n  </div>\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">\n    {{title}}\n  </div>\n  <ng-container *ngIf=\"templates?.widgetProgressTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetProgressTemplate || defaultWidgetProgressTemplate\"></ng-container>\n  </ng-container>\n</c-card-body>\n\n<ng-template #defaultWidgetIconTemplate>\n  {{icon}}\n</ng-template>\n\n<ng-template #defaultWidgetProgressTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", dependencies: [{ kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: WidgetStatCComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-c', exportAs: 'cWidgetStatC', standalone: true, imports: [CardBodyComponent, NgIf, NgClass, NgTemplateOutlet], template: "<c-card-body>\n  <div *ngIf=\"icon || templates?.widgetIconTemplate\" [ngClass]=\"iconClasses\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetIconTemplate || defaultWidgetIconTemplate\"></ng-container>\n  </div>\n  <div *ngIf=\"!!value\" [ngClass]=\"valueClasses\">\n    {{value}}\n  </div>\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">\n    {{title}}\n  </div>\n  <ng-container *ngIf=\"templates?.widgetProgressTemplate\">\n    <ng-container *ngTemplateOutlet=\"templates?.widgetProgressTemplate || defaultWidgetProgressTemplate\"></ng-container>\n  </ng-container>\n</c-card-body>\n\n<ng-template #defaultWidgetIconTemplate>\n  {{icon}}\n</ng-template>\n\n<ng-template #defaultWidgetProgressTemplate>\n  <ng-content></ng-content>\n</ng-template>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { icon: [{
                type: Input
            }], title: [{
                type: Input
            }], value: [{
                type: Input
            }], inverse: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], contentTemplates: [{
                type: ContentChildren,
                args: [TemplateIdDirective, { descendants: true }]
            }], hostExtendedClass: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1jL3dpZGdldC1zdGF0LWMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtYy93aWRnZXQtc3RhdC1jLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULGVBQWUsRUFDZixXQUFXLEVBQ1gsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBU2xFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBRXJEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFtQlY7OztXQUdHO1FBQ3FDLFlBQU8sR0FBcUIsS0FBSyxDQUFDO1FBRTFFLGNBQVMsR0FBUSxFQUFFLENBQUM7SUF4QnBCLENBQUM7SUEyQkQsSUFDSSxpQkFBaUI7UUFDbkIsT0FBTztZQUNMLHVCQUF1QixFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTztZQUNMLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLHNCQUFzQixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU87WUFDckMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDNUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM3QyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU87WUFDTCxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3JDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxPQUFPO1lBQzVDLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7U0FDN0MsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPO1lBQ0wsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDdkIsYUFBYSxFQUFFLElBQUk7WUFDbkIsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNuQyw0QkFBNEIsRUFBRSxJQUFJLENBQUMsT0FBTztZQUMxQyxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTO1NBQzdDLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUEwQixFQUFFLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBdEVVLG9CQUFvQjttR0FBcEIsb0JBQW9CLDJJQTBCWCxnQkFBZ0IsMkhBR25CLG1CQUFtQixtR0NsRHRDLGt3QkFzQkEsNENESFksaUJBQWlCLHVFQUFFLElBQUksNkZBQUUsT0FBTyxvRkFBRSxnQkFBZ0I7OzRGQUVqRCxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBRWpCLGNBQWMsY0FDWixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixDQUFDOzBFQVlwRCxJQUFJO3NCQUFaLEtBQUs7Z0JBS0csS0FBSztzQkFBYixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFNa0MsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFHdUIsZ0JBQWdCO3NCQUE1RSxlQUFlO3VCQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkFHdkQsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBib29sZWFuQXR0cmlidXRlLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBRdWVyeUxpc3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhcmRCb2R5Q29tcG9uZW50LCBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY2FyZCc7XG5pbXBvcnQgeyBUZW1wbGF0ZUlkRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IE5nQ2xhc3MsIE5nSWYsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXdpZGdldC1zdGF0LWMnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2lkZ2V0LXN0YXQtYy5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAnY1dpZGdldFN0YXRDJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NhcmRCb2R5Q29tcG9uZW50LCBOZ0lmLCBOZ0NsYXNzLCBOZ1RlbXBsYXRlT3V0bGV0XVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRTdGF0Q0NvbXBvbmVudCBleHRlbmRzIENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEljb24gZm9yIHlvdXIgY29tcG9uZW50LlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaXRsZSBvZiB0aGUgd2lkZ2V0IHRvIGRpc3BsYXlcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqL1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFZhbHVlIGZvciB5b3VyIHdpZGdldCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEludmVydCBjb2xvcnMgZnJvbSB0aGVpciBkZWZhdWx0IGRhcmsgc2hhZGUuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBpbnZlcnNlOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgdGVtcGxhdGVzOiBhbnkgPSB7fTtcbiAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZUlkRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGNvbnRlbnRUZW1wbGF0ZXMhOiBRdWVyeUxpc3Q8VGVtcGxhdGVJZERpcmVjdGl2ZT47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0RXh0ZW5kZWRDbGFzcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2hpZ2gtZW1waGFzaXMtaW52ZXJzZSc6IHRoaXMuaW52ZXJzZVxuICAgIH07XG4gIH1cblxuICBnZXQgaWNvbkNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdtYi00JzogIXRoaXMudGV4dENvbG9yLFxuICAgICAgJ3RleHQtZW5kJzogdHJ1ZSxcbiAgICAgICd0ZXh0LW1lZGl1bS1lbXBoYXNpcyc6ICF0aGlzLmludmVyc2UsXG4gICAgICAndGV4dC1tZWRpdW0tZW1waGFzaXMtaW52ZXJzZSc6IHRoaXMuaW52ZXJzZSxcbiAgICAgIFtgdGV4dC0ke3RoaXMudGV4dENvbG9yfWBdOiAhIXRoaXMudGV4dENvbG9yXG4gICAgfTtcbiAgfVxuXG4gIGdldCB0aXRsZUNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0ZXh0LW1lZGl1bS1lbXBoYXNpcyc6ICF0aGlzLmludmVyc2UsXG4gICAgICAndGV4dC1tZWRpdW0tZW1waGFzaXMtaW52ZXJzZSc6IHRoaXMuaW52ZXJzZSxcbiAgICAgIFtgdGV4dC0ke3RoaXMudGV4dENvbG9yfWBdOiAhIXRoaXMudGV4dENvbG9yXG4gICAgfTtcbiAgfVxuXG4gIGdldCB2YWx1ZUNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmcy00JzogIXRoaXMudGV4dENvbG9yLFxuICAgICAgJ2Z3LXNlbWlib2xkJzogdHJ1ZSxcbiAgICAgICd0ZXh0LWhpZ2gtZW1waGFzaXMnOiAhdGhpcy5pbnZlcnNlLFxuICAgICAgJ3RleHQtaGlnaC1lbXBoYXNpcy1pbnZlcnNlJzogdGhpcy5pbnZlcnNlLFxuICAgICAgW2B0ZXh0LSR7dGhpcy50ZXh0Q29sb3J9YF06ICEhdGhpcy50ZXh0Q29sb3JcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVudFRlbXBsYXRlcy5mb3JFYWNoKChjaGlsZDogVGVtcGxhdGVJZERpcmVjdGl2ZSkgPT4ge1xuICAgICAgdGhpcy50ZW1wbGF0ZXNbY2hpbGQuaWRdID0gY2hpbGQudGVtcGxhdGVSZWY7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxjLWNhcmQtYm9keT5cbiAgPGRpdiAqbmdJZj1cImljb24gfHwgdGVtcGxhdGVzPy53aWRnZXRJY29uVGVtcGxhdGVcIiBbbmdDbGFzc109XCJpY29uQ2xhc3Nlc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZXM/LndpZGdldEljb25UZW1wbGF0ZSB8fCBkZWZhdWx0V2lkZ2V0SWNvblRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiISF2YWx1ZVwiIFtuZ0NsYXNzXT1cInZhbHVlQ2xhc3Nlc1wiPlxuICAgIHt7dmFsdWV9fVxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiEhdGl0bGVcIiBbbmdDbGFzc109XCJ0aXRsZUNsYXNzZXNcIj5cbiAgICB7e3RpdGxlfX1cbiAgPC9kaXY+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZW1wbGF0ZXM/LndpZGdldFByb2dyZXNzVGVtcGxhdGVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVzPy53aWRnZXRQcm9ncmVzc1RlbXBsYXRlIHx8IGRlZmF1bHRXaWRnZXRQcm9ncmVzc1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9jLWNhcmQtYm9keT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0V2lkZ2V0SWNvblRlbXBsYXRlPlxuICB7e2ljb259fVxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0V2lkZ2V0UHJvZ3Jlc3NUZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==