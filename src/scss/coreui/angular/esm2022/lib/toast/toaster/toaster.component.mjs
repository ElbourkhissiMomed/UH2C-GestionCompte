import { Component, ContentChildren, DestroyRef, HostBinding, inject, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToasterHostDirective } from './toaster-host.directive';
import { ToastComponent } from '../toast/toast.component';
import * as i0 from "@angular/core";
import * as i1 from "./toaster.service";
export var ToasterPlacement;
(function (ToasterPlacement) {
    ToasterPlacement["Static"] = "static";
    ToasterPlacement["TopStart"] = "top-start";
    ToasterPlacement["TopCenter"] = "top-center";
    ToasterPlacement["TopEnd"] = "top-end";
    ToasterPlacement["MiddleStart"] = "middle-start";
    ToasterPlacement["MiddleCenter"] = "middle-center";
    ToasterPlacement["MiddleEnd"] = "middle-end";
    ToasterPlacement["BottomStart"] = "bottom-start";
    ToasterPlacement["BottomCenter"] = "bottom-center";
    ToasterPlacement["BottomEnd"] = "bottom-end";
})(ToasterPlacement || (ToasterPlacement = {}));
export class ToasterComponent {
    #destroyRef;
    constructor(hostElement, renderer, toasterService) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.toasterService = toasterService;
        this.#destroyRef = inject(DestroyRef);
        this.placements = Object.values(ToasterPlacement);
        this.toastsDynamic = [];
        /**
         * Toaster placement
         * @type TToasterPlacement
         */
        this.placement = ToasterPlacement.TopEnd;
        /**
         * Toaster position
         * @type (string | 'absolute' | 'fixed' | 'static')
         */
        this.position = 'absolute';
    }
    get hostClasses() {
        return {
            toaster: true,
            'toast-container': true,
            [`position-${this.position}`]: !!this.position,
            'top-0': this.placement.includes('top'),
            'top-50': this.placement.includes('middle'),
            'bottom-0': this.placement.includes('bottom'),
            'start-0': this.placement.includes('start'),
            'start-50': this.placement.includes('center'),
            'end-0': this.placement.includes('end'),
            'translate-middle-x': this.placement.includes('center') && !this.placement.includes('middle'),
            'translate-middle-y': this.placement.includes('middle') && !this.placement.includes('center'),
            'translate-middle': this.placement.includes('middle') && this.placement.includes('center')
        };
    }
    ngOnInit() {
        this.stateToasterSubscribe();
    }
    ngAfterContentChecked() {
        this.toasts = this.contentToasts;
    }
    addToast(toast, props, options) {
        const componentRef = this.toasterHost.viewContainerRef.createComponent(toast, options);
        this.toastsDynamic.push(componentRef);
        const index = this.toastsDynamic.indexOf(componentRef);
        for (const [key, value] of Object.entries(props)) {
            componentRef.instance[key] = value;
        }
        componentRef.instance['placement'] = this.placement;
        componentRef.instance['dynamic'] = true;
        componentRef.instance['index'] = index;
        componentRef.instance['visible'] = true;
        componentRef.instance['visibleChange'].emit(true);
        componentRef.changeDetectorRef?.detectChanges();
        return componentRef;
    }
    removeToast(state) {
        this.toastsDynamic?.forEach(item => {
            if (state.toast?.dynamic && (item.instance === state.toast)) {
                item.instance.visible = false;
                item.instance['visibleChange'].emit(false);
                item.destroy();
            }
        });
        this.toasts?.forEach(item => {
            if (state.toast && (item.element.nativeElement === state.toast.hostElement.nativeElement)) {
                if (!state.toast.dynamic) {
                    state.toast.visible = false;
                }
            }
        });
    }
    stateToasterSubscribe() {
        this.toasterService.toasterState$
            .pipe(takeUntilDestroyed(this.#destroyRef))
            .subscribe((state) => {
            if (state.show === false) {
                this.removeToast(state);
            }
            if (state.show === true && state.toast?.dynamic === undefined) {
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToasterComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ToasterService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ToasterComponent, isStandalone: true, selector: "c-toaster", inputs: { placement: "placement", position: "position" }, host: { properties: { "class": "this.hostClasses" } }, queries: [{ propertyName: "contentToasts", predicate: ToastComponent, read: ViewContainerRef }], viewQueries: [{ propertyName: "toasterHost", first: true, predicate: ToasterHostDirective, descendants: true, static: true }], exportAs: ["cToaster"], ngImport: i0, template: "<ng-template cToasterHost></ng-template>\n<ng-content cToasterHost></ng-content>\n", dependencies: [{ kind: "directive", type: ToasterHostDirective, selector: "[cToasterHost]", exportAs: ["cToasterHost"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToasterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toaster', exportAs: 'cToaster', standalone: true, imports: [ToasterHostDirective], template: "<ng-template cToasterHost></ng-template>\n<ng-content cToasterHost></ng-content>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ToasterService }]; }, propDecorators: { placement: [{
                type: Input
            }], position: [{
                type: Input
            }], toasterHost: [{
                type: ViewChild,
                args: [ToasterHostDirective, { static: true }]
            }], contentToasts: [{
                type: ContentChildren,
                args: [ToastComponent, { read: ViewContainerRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RvYXN0L3RvYXN0ZXIvdG9hc3Rlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3RvYXN0L3RvYXN0ZXIvdG9hc3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULGVBQWUsRUFDZixVQUFVLEVBRVYsV0FBVyxFQUNYLE1BQU0sRUFFTixLQUFLLEVBS0wsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQUUxRCxNQUFNLENBQU4sSUFBWSxnQkFXWDtBQVhELFdBQVksZ0JBQWdCO0lBQzFCLHFDQUFpQixDQUFBO0lBQ2pCLDBDQUFzQixDQUFBO0lBQ3RCLDRDQUF3QixDQUFBO0lBQ3hCLHNDQUFrQixDQUFBO0lBQ2xCLGdEQUE0QixDQUFBO0lBQzVCLGtEQUE4QixDQUFBO0lBQzlCLDRDQUF3QixDQUFBO0lBQ3hCLGdEQUE0QixDQUFBO0lBQzVCLGtEQUE4QixDQUFBO0lBQzlCLDRDQUF3QixDQUFBO0FBQzFCLENBQUMsRUFYVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBVzNCO0FBc0JELE1BQU0sT0FBTyxnQkFBZ0I7SUFFbEIsV0FBVyxDQUFzQjtJQUUxQyxZQUNVLFdBQXVCLEVBQ3ZCLFFBQW1CLEVBQ25CLGNBQThCO1FBRjlCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGFB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QUFFLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtZQUNELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLEtBQUssU0FBUyxFQUFFO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOytHQTFHVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixvTkEyQlYsY0FBYyxRQUFVLGdCQUFnQiwwRUFEOUMsb0JBQW9CLHNGQ25GakMsb0ZBRUEsNENEcURZLG9CQUFvQjs7NEZBRW5CLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDRSxXQUFXLFlBRVgsVUFBVSxjQUNSLElBQUksV0FDUCxDQUFDLG9CQUFvQixDQUFDO3NKQW9CdEIsU0FBUztzQkFBakIsS0FBSztnQkFNRyxRQUFRO3NCQUFoQixLQUFLO2dCQUU2QyxXQUFXO3NCQUE3RCxTQUFTO3VCQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDWSxhQUFhO3NCQUF6RSxlQUFlO3VCQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtnQkFHdkQsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBEZXN0cm95UmVmLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgaW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlUmVmLFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbmltcG9ydCB7IElUb2FzdGVyQWN0aW9uLCBUb2FzdGVyU2VydmljZSB9IGZyb20gJy4vdG9hc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRvYXN0ZXJIb3N0RGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdGVyLWhvc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vdG9hc3QvdG9hc3QuY29tcG9uZW50JztcblxuZXhwb3J0IGVudW0gVG9hc3RlclBsYWNlbWVudCB7XG4gIFN0YXRpYyA9ICdzdGF0aWMnLFxuICBUb3BTdGFydCA9ICd0b3Atc3RhcnQnLFxuICBUb3BDZW50ZXIgPSAndG9wLWNlbnRlcicsXG4gIFRvcEVuZCA9ICd0b3AtZW5kJyxcbiAgTWlkZGxlU3RhcnQgPSAnbWlkZGxlLXN0YXJ0JyxcbiAgTWlkZGxlQ2VudGVyID0gJ21pZGRsZS1jZW50ZXInLFxuICBNaWRkbGVFbmQgPSAnbWlkZGxlLWVuZCcsXG4gIEJvdHRvbVN0YXJ0ID0gJ2JvdHRvbS1zdGFydCcsXG4gIEJvdHRvbUNlbnRlciA9ICdib3R0b20tY2VudGVyJyxcbiAgQm90dG9tRW5kID0gJ2JvdHRvbS1lbmQnLFxufVxuXG5leHBvcnQgdHlwZSBUVG9hc3RlclBsYWNlbWVudCA9XG4gIHwgVG9hc3RlclBsYWNlbWVudC5TdGF0aWNcbiAgfCBUb2FzdGVyUGxhY2VtZW50LlRvcFN0YXJ0XG4gIHwgVG9hc3RlclBsYWNlbWVudC5Ub3BDZW50ZXJcbiAgfCBUb2FzdGVyUGxhY2VtZW50LlRvcEVuZFxuICB8IFRvYXN0ZXJQbGFjZW1lbnQuTWlkZGxlU3RhcnRcbiAgfCBUb2FzdGVyUGxhY2VtZW50Lk1pZGRsZUNlbnRlclxuICB8IFRvYXN0ZXJQbGFjZW1lbnQuTWlkZGxlRW5kXG4gIHwgVG9hc3RlclBsYWNlbWVudC5Cb3R0b21TdGFydFxuICB8IFRvYXN0ZXJQbGFjZW1lbnQuQm90dG9tQ2VudGVyXG4gIHwgVG9hc3RlclBsYWNlbWVudC5Cb3R0b21FbmRcbiAgfCBzdHJpbmc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtdG9hc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZXhwb3J0QXM6ICdjVG9hc3RlcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtUb2FzdGVySG9zdERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cbiAgcmVhZG9ubHkgI2Rlc3Ryb3lSZWYgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSB0b2FzdGVyU2VydmljZTogVG9hc3RlclNlcnZpY2VcbiAgKSB7IH1cblxuICBwbGFjZW1lbnRzID0gT2JqZWN0LnZhbHVlcyhUb2FzdGVyUGxhY2VtZW50KTtcbiAgdG9hc3RzITogUXVlcnlMaXN0PFZpZXdDb250YWluZXJSZWY+O1xuICB0b2FzdHNEeW5hbWljOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUb2FzdGVyIHBsYWNlbWVudFxuICAgKiBAdHlwZSBUVG9hc3RlclBsYWNlbWVudFxuICAgKi9cbiAgQElucHV0KCkgcGxhY2VtZW50OiBUVG9hc3RlclBsYWNlbWVudCA9IFRvYXN0ZXJQbGFjZW1lbnQuVG9wRW5kO1xuXG4gIC8qKlxuICAgKiBUb2FzdGVyIHBvc2l0aW9uXG4gICAqIEB0eXBlIChzdHJpbmcgfCAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGF0aWMnKVxuICAgKi9cbiAgQElucHV0KCkgcG9zaXRpb246IChzdHJpbmcgfCAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGF0aWMnKSA9ICdhYnNvbHV0ZSc7XG5cbiAgQFZpZXdDaGlsZChUb2FzdGVySG9zdERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgdG9hc3Rlckhvc3QhOiBUb2FzdGVySG9zdERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZHJlbihUb2FzdENvbXBvbmVudCwgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGNvbnRlbnRUb2FzdHMhOiBRdWVyeUxpc3Q8Vmlld0NvbnRhaW5lclJlZj47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB0b2FzdGVyOiB0cnVlLFxuICAgICAgJ3RvYXN0LWNvbnRhaW5lcic6IHRydWUsXG4gICAgICBbYHBvc2l0aW9uLSR7dGhpcy5wb3NpdGlvbn1gXTogISF0aGlzLnBvc2l0aW9uLFxuICAgICAgJ3RvcC0wJzogdGhpcy5wbGFjZW1lbnQuaW5jbHVkZXMoJ3RvcCcpLFxuICAgICAgJ3RvcC01MCc6IHRoaXMucGxhY2VtZW50LmluY2x1ZGVzKCdtaWRkbGUnKSxcbiAgICAgICdib3R0b20tMCc6IHRoaXMucGxhY2VtZW50LmluY2x1ZGVzKCdib3R0b20nKSxcbiAgICAgICdzdGFydC0wJzogdGhpcy5wbGFjZW1lbnQuaW5jbHVkZXMoJ3N0YXJ0JyksXG4gICAgICAnc3RhcnQtNTAnOiB0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnY2VudGVyJyksXG4gICAgICAnZW5kLTAnOiB0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnZW5kJyksXG4gICAgICAndHJhbnNsYXRlLW1pZGRsZS14JzogdGhpcy5wbGFjZW1lbnQuaW5jbHVkZXMoJ2NlbnRlcicpICYmICF0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnbWlkZGxlJyksXG4gICAgICAndHJhbnNsYXRlLW1pZGRsZS15JzogdGhpcy5wbGFjZW1lbnQuaW5jbHVkZXMoJ21pZGRsZScpICYmICF0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnY2VudGVyJyksXG4gICAgICAndHJhbnNsYXRlLW1pZGRsZSc6IHRoaXMucGxhY2VtZW50LmluY2x1ZGVzKCdtaWRkbGUnKSAmJiB0aGlzLnBsYWNlbWVudC5pbmNsdWRlcygnY2VudGVyJylcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZVRvYXN0ZXJTdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvYXN0cyA9IHRoaXMuY29udGVudFRvYXN0cztcbiAgfVxuXG4gIHB1YmxpYyBhZGRUb2FzdCh0b2FzdDogYW55LCBwcm9wczogYW55LCBvcHRpb25zPzoge1xuICAgIGluZGV4PzogbnVtYmVyO1xuICAgIGluamVjdG9yPzogSW5qZWN0b3I7XG4gICAgbmdNb2R1bGVSZWY/OiBOZ01vZHVsZVJlZjx1bmtub3duPjtcbiAgICBwcm9qZWN0YWJsZU5vZGVzPzogTm9kZVtdW107XG4gIH0pOiBDb21wb25lbnRSZWY8YW55PiB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiA9IHRoaXMudG9hc3Rlckhvc3Qudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQodG9hc3QsIG9wdGlvbnMpO1xuICAgIHRoaXMudG9hc3RzRHluYW1pYy5wdXNoKGNvbXBvbmVudFJlZik7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvYXN0c0R5bmFtaWMuaW5kZXhPZihjb21wb25lbnRSZWYpO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydwbGFjZW1lbnQnXSA9IHRoaXMucGxhY2VtZW50O1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsnZHluYW1pYyddID0gdHJ1ZTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2luZGV4J10gPSBpbmRleDtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ3Zpc2libGUnXSA9IHRydWU7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlWyd2aXNpYmxlQ2hhbmdlJ10uZW1pdCh0cnVlKTtcbiAgICBjb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWY/LmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gY29tcG9uZW50UmVmO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZVRvYXN0KHN0YXRlOiBJVG9hc3RlckFjdGlvbik6IHZvaWQge1xuICAgIHRoaXMudG9hc3RzRHluYW1pYz8uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChzdGF0ZS50b2FzdD8uZHluYW1pYyAmJiAoaXRlbS5pbnN0YW5jZSA9PT0gc3RhdGUudG9hc3QpKSB7XG4gICAgICAgIGl0ZW0uaW5zdGFuY2UudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBpdGVtLmluc3RhbmNlWyd2aXNpYmxlQ2hhbmdlJ10uZW1pdChmYWxzZSk7XG4gICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50b2FzdHM/LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoc3RhdGUudG9hc3QgJiYgKGl0ZW0uZWxlbWVudC5uYXRpdmVFbGVtZW50ID09PSBzdGF0ZS50b2FzdC5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICBpZiAoIXN0YXRlLnRvYXN0LmR5bmFtaWMpIHtcbiAgICAgICAgICBzdGF0ZS50b2FzdC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGVUb2FzdGVyU3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIHRoaXMudG9hc3RlclNlcnZpY2UudG9hc3RlclN0YXRlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLiNkZXN0cm95UmVmKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLnNob3cgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVUb2FzdChzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnNob3cgPT09IHRydWUgJiYgc3RhdGUudG9hc3Q/LmR5bmFtaWMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlIGNUb2FzdGVySG9zdD48L25nLXRlbXBsYXRlPlxuPG5nLWNvbnRlbnQgY1RvYXN0ZXJIb3N0PjwvbmctY29udGVudD5cbiJdfQ==