import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { CardBodyComponent, CardComponent } from '../../card';
import * as i0 from "@angular/core";
export class WidgetStatBComponent extends CardComponent {
    constructor() {
        super();
        /**
         * Invert colors from their default dark shade.
         * @type boolean
         */
        this.inverse = false;
    }
    get hostClasses() {
        return {
            'card': true,
            [`bg-${this.color}`]: !!this.color,
            [`text-${this.textColor}`]: !!this.textColor,
            'text-high-emphasis-inverse': !!this.color
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: WidgetStatBComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: WidgetStatBComponent, isStandalone: true, selector: "c-widget-stat-b", inputs: { color: "color", textColor: "textColor", title: "title", text: "text", value: "value", inverse: ["inverse", "inverse", booleanAttribute] }, host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cWidgetStatB"], usesInheritance: true, ngImport: i0, template: "<c-card-body>\n  <div *ngIf=\"!!value\" class=\"fs-4 fw-semibold\">{{value}}</div>\n  <div *ngIf=\"!!title\">{{title}}</div>\n  <ng-content></ng-content>\n  <small *ngIf=\"text\" [ngClass]=\"inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'\">\n    {{text}}\n  </small>\n</c-card-body>\n", dependencies: [{ kind: "component", type: CardBodyComponent, selector: "c-card-body, [c-card-body]" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: WidgetStatBComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-widget-stat-b', exportAs: 'cWidgetStatB', standalone: true, imports: [CardBodyComponent, NgIf, NgClass], template: "<c-card-body>\n  <div *ngIf=\"!!value\" class=\"fs-4 fw-semibold\">{{value}}</div>\n  <div *ngIf=\"!!title\">{{title}}</div>\n  <ng-content></ng-content>\n  <small *ngIf=\"text\" [ngClass]=\"inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis'\">\n    {{text}}\n  </small>\n</c-card-body>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { color: [{
                type: Input
            }], textColor: [{
                type: Input
            }], title: [{
                type: Input
            }], text: [{
                type: Input
            }], value: [{
                type: Input
            }], inverse: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LXN0YXQtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3dpZGdldC93aWRnZXQtc3RhdC1iL3dpZGdldC1zdGF0LWIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi93aWRnZXQvd2lkZ2V0LXN0YXQtYi93aWRnZXQtc3RhdC1iLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBUzlELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBRXJEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUE2QlY7OztXQUdHO1FBQ3FDLFlBQU8sR0FBcUIsS0FBSyxDQUFDO0lBaEMxRSxDQUFDO0lBa0NELElBQ2EsV0FBVztRQUN0QixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUk7WUFDWixDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2xDLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDNUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLO1NBQzNDLENBQUM7SUFDSixDQUFDOytHQTlDVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixtTEFvQ1gsZ0JBQWdCLHVJQ2pEdEMsaVRBUUEsNENER1ksaUJBQWlCLHVFQUFFLElBQUksNkZBQUUsT0FBTzs7NEZBRS9CLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxpQkFBaUIsWUFFakIsY0FBYyxjQUNaLElBQUksV0FDUCxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7MEVBWXpCLEtBQUs7c0JBQXRCLEtBQUs7Z0JBS1ksU0FBUztzQkFBMUIsS0FBSztnQkFLRyxLQUFLO3NCQUFiLEtBQUs7Z0JBS0csSUFBSTtzQkFBWixLQUFLO2dCQUtHLEtBQUs7c0JBQWIsS0FBSztnQkFNa0MsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFHekIsV0FBVztzQkFEdkIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MsIE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi8uLi9jb3JldWkudHlwZXMnO1xuaW1wb3J0IHsgQ2FyZEJvZHlDb21wb25lbnQsIENhcmRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy13aWRnZXQtc3RhdC1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpZGdldC1zdGF0LWIuY29tcG9uZW50Lmh0bWwnLFxuICBleHBvcnRBczogJ2NXaWRnZXRTdGF0QicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDYXJkQm9keUNvbXBvbmVudCwgTmdJZiwgTmdDbGFzc11cbn0pXG5leHBvcnQgY2xhc3MgV2lkZ2V0U3RhdEJDb21wb25lbnQgZXh0ZW5kcyBDYXJkQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yIGNvbnRleHQgb2YgdGhlIGNvbXBvbmVudCB0byBvbmUgb2YgQ29yZVVJ4oCZcyB0aGVtZWQgY29sb3JzLlxuICAgKiBAdHlwZSBDb2xvcnNcbiAgICovXG4gIEBJbnB1dCgpIG92ZXJyaWRlIGNvbG9yPzogQ29sb3JzO1xuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dC1jb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBvdmVycmlkZSB0ZXh0Q29sb3I/OiBDb2xvcnMgfCAnd2hpdGUnIHwgJ211dGVkJztcbiAgLyoqXG4gICAqIFRpdGxlIG9mIHRoZSB3aWRnZXQgdG8gZGlzcGxheVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogSGVscGVyIHRleHQgZm9yIHlvdXIgd2lkZ2V0LlxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHRleHQ/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBWYWx1ZSBmb3IgeW91ciB3aWRnZXQgdG8gZGlzcGxheVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICovXG4gIEBJbnB1dCgpIHZhbHVlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbnZlcnQgY29sb3JzIGZyb20gdGhlaXIgZGVmYXVsdCBkYXJrIHNoYWRlLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgaW52ZXJzZTogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBvdmVycmlkZSBnZXQgaG9zdENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdjYXJkJzogdHJ1ZSxcbiAgICAgIFtgYmctJHt0aGlzLmNvbG9yfWBdOiAhIXRoaXMuY29sb3IsXG4gICAgICBbYHRleHQtJHt0aGlzLnRleHRDb2xvcn1gXTogISF0aGlzLnRleHRDb2xvcixcbiAgICAgICd0ZXh0LWhpZ2gtZW1waGFzaXMtaW52ZXJzZSc6ICEhdGhpcy5jb2xvclxuICAgIH07XG4gIH1cblxufVxuIiwiPGMtY2FyZC1ib2R5PlxuICA8ZGl2ICpuZ0lmPVwiISF2YWx1ZVwiIGNsYXNzPVwiZnMtNCBmdy1zZW1pYm9sZFwiPnt7dmFsdWV9fTwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwiISF0aXRsZVwiPnt7dGl0bGV9fTwvZGl2PlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDxzbWFsbCAqbmdJZj1cInRleHRcIiBbbmdDbGFzc109XCJpbnZlcnNlID8gJ3RleHQtbWVkaXVtLWVtcGhhc2lzLWludmVyc2UnIDogJ3RleHQtbWVkaXVtLWVtcGhhc2lzJ1wiPlxuICAgIHt7dGV4dH19XG4gIDwvc21hbGw+XG48L2MtY2FyZC1ib2R5PlxuIl19