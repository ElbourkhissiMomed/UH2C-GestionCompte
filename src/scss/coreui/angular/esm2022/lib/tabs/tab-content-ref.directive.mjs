import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "./tab.service";
export class TabContentRefDirective {
    constructor(changeDetectorRef, tabService) {
        this.changeDetectorRef = changeDetectorRef;
        this.tabService = tabService;
        this._active = false;
        this._disabled = false;
        /**
         * c-tab-pane index respectively
         * @type number
         */
        this.tabPaneIdx = -1;
        this.subscribeTabService();
    }
    /**
     * Set active state of tab content
     * @type boolean
     */
    set active(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._active !== newValue) {
            this._active = newValue;
            this.changeDetectorRef.detectChanges();
        }
    }
    get active() {
        return this._active;
    }
    /**
     * Set disabled state of tab content
     * @type boolean
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get disabled() {
        return this._disabled || this.tabPaneIdx >= this.tabContentRef?.panes?.length;
    }
    get hostClasses() {
        return {
            active: this.active,
            disabled: this.disabled
        };
    }
    get isDisabled() {
        return this.disabled || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get getTabindex() {
        return this.disabled ? '-1' : null;
    }
    ngOnChanges(changes) {
        if (changes['active']?.currentValue) {
            this.setActiveTabPane();
        }
    }
    toggleOpen($event) {
        $event.preventDefault();
        this.setActiveTabPane();
    }
    setActiveTabPane() {
        setTimeout(() => {
            if (this.tabPaneIdx < this.tabContentRef.panes.length) {
                this.active = true;
                this.tabService.setActiveTabIdx({ tabContent: this.tabContentRef, activeIdx: this.tabPaneIdx });
            }
            else {
                this.active = false;
            }
        });
    }
    ngOnDestroy() {
        this.subscribeTabService(false);
    }
    subscribeTabService(subscribe = true) {
        if (subscribe) {
            this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
                if (tabContentState.tabContent === this.tabContentRef) {
                    this.active = (tabContentState.activeIdx === this.tabPaneIdx);
                }
            });
        }
        else {
            this.tabServiceSubscription?.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabContentRefDirective, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TabService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: TabContentRefDirective, isStandalone: true, selector: "[cTabContent]", inputs: { tabContentRef: ["cTabContent", "tabContentRef"], active: "active", disabled: "disabled", tabPaneIdx: "tabPaneIdx" }, host: { listeners: { "click": "toggleOpen($event)" }, properties: { "class": "this.hostClasses", "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex" } }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabContentRefDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTabContent]',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TabService }]; }, propDecorators: { tabContentRef: [{
                type: Input,
                args: ['cTabContent']
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], tabPaneIdx: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], toggleOpen: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNvbnRlbnQtcmVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdGFicy90YWItY29udGVudC1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFTNUUsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUNVLGlCQUFvQyxFQUNwQyxVQUFzQjtRQUR0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUErQnhCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFlaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUxQjs7O1dBR0c7UUFDTSxlQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFsRHZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFXRDs7O09BR0c7SUFDSCxJQUNJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLE1BQU0sUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsSUFDSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFx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RGYsV0FBVzt1QkFBQyxlQUFlO2dCQU14QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsZUFBZTtnQkFZNUIsVUFBVTtzQkFEVCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUYWJTZXJ2aWNlIH0gZnJvbSAnLi90YWIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjVGFiQ29udGVudF0nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnRSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB0YWJTZXJ2aWNlOiBUYWJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaWJlVGFiU2VydmljZSgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHByaXZhdGUgdGFiU2VydmljZVN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogVGVtcGxhdGUgUmVmXG4gICAqIEB0eXBlIFRlbXBsYXRlUmVmXG4gICAqL1xuICBASW5wdXQoJ2NUYWJDb250ZW50JykgdGFiQ29udGVudFJlZiE6IGFueTtcblxuICAvKipcbiAgICogU2V0IGFjdGl2ZSBzdGF0ZSBvZiB0YWIgY29udGVudFxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIGlmICh0aGlzLl9hY3RpdmUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZWQgc3RhdGUgb2YgdGFiIGNvbnRlbnRcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCB8fCB0aGlzLnRhYlBhbmVJZHggPj0gdGhpcy50YWJDb250ZW50UmVmPy5wYW5lcz8ubGVuZ3RoO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogYy10YWItcGFuZSBpbmRleCByZXNwZWN0aXZlbHlcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKSB0YWJQYW5lSWR4ID0gLTE7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZSxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8IG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKVxuICBnZXQgYXR0ckRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gJycgOiBudWxsO1xuICB9O1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIGdldCBnZXRUYWJpbmRleCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICctMScgOiBudWxsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydhY3RpdmUnXT8uY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZVRhYlBhbmUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHRvZ2dsZU9wZW4oJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldEFjdGl2ZVRhYlBhbmUoKTtcbiAgfVxuXG4gIHNldEFjdGl2ZVRhYlBhbmUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50YWJQYW5lSWR4IDwgdGhpcy50YWJDb250ZW50UmVmLnBhbmVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFiU2VydmljZS5zZXRBY3RpdmVUYWJJZHgoeyB0YWJDb250ZW50OiB0aGlzLnRhYkNvbnRlbnRSZWYsIGFjdGl2ZUlkeDogdGhpcy50YWJQYW5lSWR4IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlVGFiU2VydmljZShmYWxzZSk7XG4gIH1cblxuICBzdWJzY3JpYmVUYWJTZXJ2aWNlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnRhYlNlcnZpY2VTdWJzY3JpcHRpb24gPSB0aGlzLnRhYlNlcnZpY2UuYWN0aXZlVGFiUGFuZUlkeCQuc3Vic2NyaWJlKCh0YWJDb250ZW50U3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHRhYkNvbnRlbnRTdGF0ZS50YWJDb250ZW50ID09PSB0aGlzLnRhYkNvbnRlbnRSZWYpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9ICh0YWJDb250ZW50U3RhdGUuYWN0aXZlSWR4ID09PSB0aGlzLnRhYlBhbmVJZHgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJTZXJ2aWNlU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19