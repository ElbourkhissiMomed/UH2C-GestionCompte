import { Component, HostBinding } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../tab.service";
export class TabPaneComponent {
    constructor(changeDetectorRef, tabService) {
        this.changeDetectorRef = changeDetectorRef;
        this.tabService = tabService;
        this._active = false;
        this.subscribeTabService();
    }
    set active(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._active !== newValue) {
            this._active = newValue;
            this.changeDetectorRef.markForCheck();
        }
    }
    get active() {
        return this._active;
    }
    get hostClasses() {
        return {
            'tab-pane': true,
            fade: true,
            show: this.active,
            active: this.active
        };
    }
    ngOnDestroy() {
        this.subscribeTabService(false);
    }
    subscribeTabService(subscribe = true) {
        if (subscribe) {
            this.tabServiceSubscription = this.tabService.activeTabPaneIdx$.subscribe((tabContentState) => {
                if (tabContentState.tabContent === this.tabContent) {
                    this.active = (tabContentState.activeIdx === this.tabPaneIdx);
                }
            });
        }
        else {
            this.tabServiceSubscription?.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabPaneComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TabService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: TabPaneComponent, isStandalone: true, selector: "c-tab-pane", host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cTabPane"], ngImport: i0, template: `
    <ng-content></ng-content>`, isInline: true, styles: [":host{display:block}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TabPaneComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-tab-pane', template: `
    <ng-content></ng-content>`, exportAs: 'cTabPane', standalone: true, styles: [":host{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TabService }]; }, propDecorators: { hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90YWJzL3RhYi1wYW5lL3RhYi1wYW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBRSxXQUFXLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQWM5RCxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCLFlBQ1UsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBRHRCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXFCeEIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQW5CL0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQU1ELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsTUFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFJRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsWUFBcUIsSUFBSTtRQUMzQyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWlDLEVBQUUsRUFBRTtnQkFDOUcsSUFBSSxlQUFlLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDL0Q7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDOytHQW5EVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixxSkFOakI7OEJBQ2tCOzs0RkFLakIsZ0JBQWdCO2tCQVI1QixTQUFTOytCQUNFLFlBQVksWUFDWjs4QkFDa0IsWUFFbEIsVUFBVSxjQUNSLElBQUk7aUlBOEJaLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUYWJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vdGFiLWNvbnRlbnQvdGFiLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IElUYWJDb250ZW50U3RhdGUsIFRhYlNlcnZpY2UgfSBmcm9tICcuLi90YWIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtdGFiLXBhbmUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdHlsZVVybHM6IFsnLi90YWItcGFuZS5jb21wb25lbnQuc2NzcyddLFxuICBleHBvcnRBczogJ2NUYWJQYW5lJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBUYWJQYW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHRhYlNlcnZpY2U6IFRhYlNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVUYWJTZXJ2aWNlKCk7XG4gIH1cblxuICBwdWJsaWMgdGFiUGFuZUlkeCE6IG51bWJlcjtcbiAgcHVibGljIHRhYkNvbnRlbnQhOiBUYWJDb250ZW50Q29tcG9uZW50O1xuICBwcml2YXRlIHRhYlNlcnZpY2VTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG5cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICBpZiAodGhpcy5fYWN0aXZlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICd0YWItcGFuZSc6IHRydWUsXG4gICAgICBmYWRlOiB0cnVlLFxuICAgICAgc2hvdzogdGhpcy5hY3RpdmUsXG4gICAgICBhY3RpdmU6IHRoaXMuYWN0aXZlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlVGFiU2VydmljZShmYWxzZSk7XG4gIH1cblxuICBzdWJzY3JpYmVUYWJTZXJ2aWNlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLnRhYlNlcnZpY2VTdWJzY3JpcHRpb24gPSB0aGlzLnRhYlNlcnZpY2UuYWN0aXZlVGFiUGFuZUlkeCQuc3Vic2NyaWJlKCh0YWJDb250ZW50U3RhdGU6IElUYWJDb250ZW50U3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHRhYkNvbnRlbnRTdGF0ZS50YWJDb250ZW50ID09PSB0aGlzLnRhYkNvbnRlbnQpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZSA9ICh0YWJDb250ZW50U3RhdGUuYWN0aXZlSWR4ID09PSB0aGlzLnRhYlBhbmVJZHgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJTZXJ2aWNlU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19