import { Directive, HostBinding, HostListener, Input, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../dropdown.service";
import * as i2 from "../dropdown/dropdown.component";
export class DropdownCloseDirective {
    constructor(dropdownService, dropdown) {
        this.dropdownService = dropdownService;
        this.dropdown = dropdown;
        this._tabIndex = null;
    }
    ngAfterViewInit() {
        if (this.dropdownComponent) {
            this.dropdown = this.dropdownComponent;
            this.dropdownService = this.dropdownComponent?.dropdownService;
        }
    }
    get hostClasses() {
        return {
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
        !this.disabled && this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
    }
    onKeyUp($event) {
        if ($event.key === 'Enter') {
            !this.disabled && this.dropdownService.toggle({ visible: false, dropdown: this.dropdown });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownCloseDirective, deps: [{ token: i1.DropdownService }, { token: i2.DropdownComponent, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: DropdownCloseDirective, isStandalone: true, selector: "[cDropdownClose]", inputs: { disabled: "disabled", dropdownComponent: "dropdownComponent", tabIndex: "tabIndex" }, host: { listeners: { "click": "onClick($event)", "keyup": "onKeyUp($event)" }, properties: { "class": "this.hostClasses", "attr.tabindex": "this.tabIndex", "attr.aria-disabled": "this.isDisabled" } }, exportAs: ["cDropdownClose"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownCloseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownClose]',
                    exportAs: 'cDropdownClose',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i1.DropdownService }, { type: i2.DropdownComponent, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { disabled: [{
                type: Input
            }], dropdownComponent: [{
                type: Input
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY2xvc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9kcm9wZG93bi9kcm9wZG93bi1jbG9zZS9kcm9wZG93bi1jbG9zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBU3JHLE1BQU0sT0FBTyxzQkFBc0I7SUFFakMsWUFDVSxlQUFnQyxFQUNyQixRQUE0QjtRQUR2QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFrQ3pDLGNBQVMsR0FBMkIsSUFBSSxDQUFDO0lBakM3QyxDQUFDO0lBV0wsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFFSSxRQUFRLENBQUMsS0FBNkI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFHRCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFHTyxPQUFPLENBQUMsTUFBa0I7UUFDaEMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUdPLE9BQU8sQ0FBQyxNQUFxQjtRQUNuQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQzFCLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQzsrR0F2RFUsc0JBQXNCO21HQUF0QixzQkFBc0I7OzRGQUF0QixzQkFBc0I7a0JBTGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFLSSxRQUFROzRDQVFGLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsaUJBQWlCO3NCQUF6QixLQUFLO2dCQVVGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPO2dCQVNoQixRQUFRO3NCQUZYLFdBQVc7dUJBQUMsZUFBZTs7c0JBQzNCLEtBQUs7Z0JBVUYsVUFBVTtzQkFEYixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNekIsT0FBTztzQkFEZCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFNekIsT0FBTztzQkFEZCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuLi9kcm9wZG93bi5zZXJ2aWNlJztcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NEcm9wZG93bkNsb3NlXScsXG4gIGV4cG9ydEFzOiAnY0Ryb3Bkb3duQ2xvc2UnLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ2xvc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRyb3Bkb3duU2VydmljZTogRHJvcGRvd25TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBkcm9wZG93bj86IERyb3Bkb3duQ29tcG9uZW50XG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGEgZHJvcGRvd24tY2xvc2UgZGlyZWN0aXZlLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGRyb3Bkb3duQ29tcG9uZW50PzogRHJvcGRvd25Db21wb25lbnQ7XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmRyb3Bkb3duID0gdGhpcy5kcm9wZG93bkNvbXBvbmVudDtcbiAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gdGhpcy5kcm9wZG93bkNvbXBvbmVudD8uZHJvcGRvd25TZXJ2aWNlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnRhYmluZGV4JylcbiAgQElucHV0KClcbiAgc2V0IHRhYkluZGV4KHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5fdGFiSW5kZXggPSB2YWx1ZTtcbiAgfVxuICBnZXQgdGFiSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnLTEnIDogdGhpcy5fdGFiSW5kZXg7XG4gIH1cbiAgcHJpdmF0ZSBfdGFiSW5kZXg6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8IG51bGw7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHByaXZhdGUgb25DbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmRyb3Bkb3duU2VydmljZS50b2dnbGUoeyB2aXNpYmxlOiBmYWxzZSwgZHJvcGRvd246IHRoaXMuZHJvcGRvd24gfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXG4gIHByaXZhdGUgb25LZXlVcCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5kcm9wZG93blNlcnZpY2UudG9nZ2xlKHsgdmlzaWJsZTogZmFsc2UsIGRyb3Bkb3duOiB0aGlzLmRyb3Bkb3duIH0pO1xuICAgIH1cbiAgfVxufVxuIl19