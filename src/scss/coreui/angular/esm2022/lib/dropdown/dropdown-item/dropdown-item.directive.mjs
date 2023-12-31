import { Directive, HostBinding, HostListener, Input, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../dropdown.service";
import * as i2 from "../dropdown/dropdown.component";
export class DropdownItemDirective {
    constructor(dropdownService, dropdown) {
        this.dropdownService = dropdownService;
        this.dropdown = dropdown;
        /**
         * Configure dropdown-item close dropdown behavior.
         * @type boolean
         * @default true
         */
        this.autoClose = true;
        this._tabIndex = null;
    }
    get ariaCurrent() {
        return this.active ? 'true' : null;
    }
    get hostClasses() {
        return {
            'dropdown-item': true,
            active: this.active,
            disabled: this.disabled
        };
    }
    set tabIndex(value) {
        this._tabIndex = value;
    }
    get tabIndex() {
        return this.disabled ? '-1' : this._tabIndex;
    }
    get isDisabled() {
        return this.disabled || null;
    }
    onClick($event) {
        if (this.autoClose) {
            this.dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
        }
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            if (this.autoClose) {
                this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownItemDirective, deps: [{ token: i1.DropdownService }, { token: i2.DropdownComponent, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: DropdownItemDirective, isStandalone: true, selector: "[cDropdownItem]", inputs: { active: "active", autoClose: "autoClose", disabled: "disabled", tabIndex: "tabIndex" }, host: { listeners: { "click": "onClick($event)", "keyup": "onKeyUp($event)" }, properties: { "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses", "attr.tabindex": "this.tabIndex", "attr.aria-disabled": "this.isDisabled" } }, exportAs: ["cDropdownItem"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownItem]',
                    exportAs: 'cDropdownItem',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i1.DropdownService }, { type: i2.DropdownComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { active: [{
                type: Input
            }], autoClose: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], tabIndex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }, {
                type: Input
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onKeyUp: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24taXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLWl0ZW0vZHJvcGRvd24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTdEYsTUFBTSxPQUFPLHFCQUFxQjtJQW9CaEMsWUFDVSxlQUFnQyxFQUNyQixRQUE0QjtRQUR2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFmakQ7Ozs7V0FJRztRQUNNLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFvQzNCLGNBQVMsR0FBMkIsSUFBSSxDQUFDO0lBeEJqRCxDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUVJLFFBQVEsQ0FBQyxLQUE2QjtRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUdELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUdPLE9BQU8sQ0FBQyxNQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7SUFHTyxPQUFPLENBQUMsTUFBcUI7UUFDbkMsSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUU7U0FDRjtJQUNILENBQUM7K0dBckVVLHFCQUFxQjttR0FBckIscUJBQXFCOzs0RkFBckIscUJBQXFCO2tCQUxqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OzBCQXVCSSxRQUFROzRDQWhCRixNQUFNO3NCQUFkLEtBQUs7Z0JBTUcsU0FBUztzQkFBakIsS0FBSztnQkFNRyxRQUFRO3NCQUFoQixLQUFLO2dCQVNGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBTTVCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPO2dCQVdoQixRQUFRO3NCQUZYLFdBQVc7dUJBQUMsZUFBZTs7c0JBQzNCLEtBQUs7Z0JBVUYsVUFBVTtzQkFEYixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNekIsT0FBTztzQkFEZCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFRekIsT0FBTztzQkFEZCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuLi9kcm9wZG93bi5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NEcm9wZG93bkl0ZW1dJyxcbiAgZXhwb3J0QXM6ICdjRHJvcGRvd25JdGVtJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkl0ZW1EaXJlY3RpdmUge1xuICAvKipcbiAgICogU2V0IGFjdGl2ZSBzdGF0ZSB0byBhIGRyb3Bkb3duLWl0ZW0uXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmU/OiBib29sZWFuO1xuICAvKipcbiAgICogQ29uZmlndXJlIGRyb3Bkb3duLWl0ZW0gY2xvc2UgZHJvcGRvd24gYmVoYXZpb3IuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KCkgYXV0b0Nsb3NlOiBib29sZWFuID0gdHJ1ZTtcbiAgLyoqXG4gICAqIERpc2FibGVzIGEgZHJvcGRvd24taXRlbS5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCB1bmRlZmluZWRcbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkPzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRyb3Bkb3duU2VydmljZTogRHJvcGRvd25TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBkcm9wZG93bj86IERyb3Bkb3duQ29tcG9uZW50XG4gICkge1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtY3VycmVudCcpXG4gIGdldCBhcmlhQ3VycmVudCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmUgPyAndHJ1ZScgOiBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnZHJvcGRvd24taXRlbSc6IHRydWUsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgQElucHV0KClcbiAgc2V0IHRhYkluZGV4KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5fdGFiSW5kZXggPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGFiSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnLTEnIDogdGhpcy5fdGFiSW5kZXg7XG4gIH1cbiAgcHJpdmF0ZSBfdGFiSW5kZXg6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8IG51bGw7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHByaXZhdGUgb25DbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnRvZ2dsZSh7IHZpc2libGU6ICd0b2dnbGUnLCBkcm9wZG93bjogdGhpcy5kcm9wZG93biB9KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIHByaXZhdGUgb25LZXlVcCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKHRoaXMuYXV0b0Nsb3NlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlLnRvZ2dsZSh7IHZpc2libGU6IGZhbHNlLCBkcm9wZG93bjogdGhpcy5kcm9wZG93biB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==