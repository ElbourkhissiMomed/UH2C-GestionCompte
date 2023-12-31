import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { CardBodyComponent, CardComponent } from '../../card';
import * as i0 from "@angular/core";
export class WidgetStatEComponent extends CardComponent {
    constructor() {
        super();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: WidgetStatEComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: WidgetStatEComponent, isStandalone: true, selector: "c-widget-stat-e", inputs: { title: "title", value: "value" }, exportAs: ["cWidgetStatE"], usesInheritance: true, ngImport: i0, template: "<c-card-body class=\"text-center\">\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">{{title}}</div>\n  <div *ngIf=\"!!value\" class=\"fs-6 fw-semibold py-3\">{{value}}</div>\n  <ng-content></ng-content>\n</c-card-body>\n", dependencies: [{ kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: WidgetStatEComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-e', exportAs: 'cWidgetStatE', standalone: true, imports: [CardBodyComponent, NgIf, NgClass], template: "<c-card-body class=\"text-center\">\n  <div *ngIf=\"!!title\" [ngClass]=\"titleClasses\">{{title}}</div>\n  <div *ngIf=\"!!value\" class=\"fs-6 fw-semibold py-3\">{{value}}</div>\n  <ng-content></ng-content>\n</c-card-body>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1lL3dpZGdldC1zdGF0LWUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtZS93aWRnZXQtc3RhdC1lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFTOUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFFckQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFhRCxJQUFJLFlBQVk7UUFDZCxPQUFPO1lBQ0wsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUN2QyxPQUFPLEVBQUUsSUFBSTtZQUNiLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUztTQUM3QyxDQUFDO0lBQ0osQ0FBQzsrR0F6QlUsb0JBQW9CO21HQUFwQixvQkFBb0IsMEtDWGpDLG1PQUtBLDRDRElZLGlCQUFpQix1RUFBRSxJQUFJLDZGQUFFLE9BQU87OzRGQUUvQixvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBRWpCLGNBQWMsY0FDWixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDOzBFQVlsQyxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDbGFzcywgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDYXJkQm9keUNvbXBvbmVudCwgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NhcmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXdpZGdldC1zdGF0LWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vd2lkZ2V0LXN0YXQtZS5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAnY1dpZGdldFN0YXRFJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NhcmRCb2R5Q29tcG9uZW50LCBOZ0lmLCBOZ0NsYXNzXVxufSlcbmV4cG9ydCBjbGFzcyBXaWRnZXRTdGF0RUNvbXBvbmVudCBleHRlbmRzIENhcmRDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIHdpZGdldCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBWYWx1ZSBmb3IgeW91ciB3aWRnZXQgdG8gZGlzcGxheVxuICAgKiBAdHlwZSBzdHJpbmcgfCBudW1iZXJcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIGdldCB0aXRsZUNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0ZXh0LW1lZGl1bS1lbXBoYXNpcyc6ICF0aGlzLnRleHRDb2xvcixcbiAgICAgICdzbWFsbCc6IHRydWUsXG4gICAgICAndGV4dC11cHBlcmNhc2UnOiB0cnVlLFxuICAgICAgJ2Z3LXNlbWlib2xkJzogdHJ1ZSxcbiAgICAgIFtgdGV4dC0ke3RoaXMudGV4dENvbG9yfWBdOiAhIXRoaXMudGV4dENvbG9yXG4gICAgfTtcbiAgfVxuXG59XG4iLCI8Yy1jYXJkLWJvZHkgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICA8ZGl2ICpuZ0lmPVwiISF0aXRsZVwiIFtuZ0NsYXNzXT1cInRpdGxlQ2xhc3Nlc1wiPnt7dGl0bGV9fTwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiISF2YWx1ZVwiIGNsYXNzPVwiZnMtNiBmdy1zZW1pYm9sZCBweS0zXCI+e3t2YWx1ZX19PC9kaXY+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYy1jYXJkLWJvZHk+XG4iXX0=