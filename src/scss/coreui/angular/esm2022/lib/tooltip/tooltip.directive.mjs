import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { createPopper } from '@popperjs/core';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ListenersService } from '../services/listeners.service';
import { IntersectionService } from '../services';
import * as i0 from "@angular/core";
import * as i1 from "../services/listeners.service";
import * as i2 from "../services";
export class TooltipDirective {
    /**
     * Optional popper Options object, takes precedence over cPopoverPlacement prop
     * @type Partial<Options>
     */
    set popperOptions(value) {
        this._popperOptions = { ...this._popperOptions, placement: this.placement, ...value };
    }
    ;
    get popperOptions() {
        return { placement: this.placement, ...this._popperOptions };
    }
    /**
     * Toggle the visibility of tooltip component.
     */
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    get ariaDescribedBy() {
        return this.tooltipId ? this.tooltipId : null;
    }
    constructor(document, renderer, hostElement, viewContainerRef, listenersService, changeDetectorRef, intersectionService) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.viewContainerRef = viewContainerRef;
        this.listenersService = listenersService;
        this.changeDetectorRef = changeDetectorRef;
        this.intersectionService = intersectionService;
        /**
         * Content of tooltip
         * @type {string | TemplateRef}
         */
        this.content = '';
        /**
         * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
         */
        this.placement = 'top';
        /**
         * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
         * @type {'hover' | 'focus' | 'click'}
         */
        this.trigger = 'hover';
        this._visible = false;
        this._popperOptions = {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 0]
                    }
                }
            ]
        };
    }
    ngAfterViewInit() {
        this.intersectionService.createIntersectionObserver(this.hostElement);
        this.intersectionServiceSubscribe();
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            changes['visible'].currentValue ? this.addTooltipElement() : this.removeTooltipElement();
        }
    }
    ngOnDestroy() {
        this.clearListeners();
        this.destroyTooltipElement();
        this.intersectionServiceSubscribe(false);
    }
    ngOnInit() {
        this.setListeners();
    }
    setListeners() {
        const config = {
            hostElement: this.hostElement,
            trigger: this.trigger,
            callbackToggle: () => {
                this.visible = !this.visible;
                this.visible ? this.addTooltipElement() : this.removeTooltipElement();
            },
            callbackOff: () => {
                this.visible = false;
                this.removeTooltipElement();
            },
            callbackOn: () => {
                this.visible = true;
                this.addTooltipElement();
            }
        };
        this.listenersService.setListeners(config);
    }
    clearListeners() {
        this.listenersService.clearListeners();
    }
    intersectionServiceSubscribe(subscribe = true) {
        if (subscribe) {
            this.intersectingSubscription = this.intersectionService.intersecting$
                .pipe(debounceTime(100))
                .subscribe(isIntersecting => {
                this.visible = isIntersecting ? this.visible : false;
                !this.visible && this.removeTooltipElement();
            });
        }
        else {
            this.intersectingSubscription?.unsubscribe();
        }
    }
    getUID(prefix) {
        let uid = prefix ?? 'random-id';
        do {
            uid = `${prefix}-${Math.floor(Math.random() * 1000000).toString(10)}`;
        } while (this.document.getElementById(uid));
        return uid;
    }
    createTooltipElement() {
        if (!this.tooltipRef) {
            this.tooltipRef = this.viewContainerRef.createComponent(TooltipComponent);
            // this.viewContainerRef.detach();
        }
    }
    destroyTooltipElement() {
        this.tooltip?.remove();
        this.tooltipRef?.destroy();
        // @ts-ignore
        this.tooltipRef = undefined;
        this.popperInstance?.destroy();
        this.viewContainerRef?.detach();
        this.viewContainerRef?.clear();
    }
    addTooltipElement() {
        if (!this.tooltipRef) {
            this.createTooltipElement();
        }
        this.tooltipId = this.getUID('tooltip');
        this.tooltipRef.instance.id = this.tooltipId;
        this.tooltipRef.instance.content = this.content;
        this.tooltip = this.tooltipRef.location.nativeElement;
        this.renderer.addClass(this.tooltip, 'd-none');
        this.renderer.addClass(this.tooltip, 'fade');
        this.popperInstance?.destroy();
        this.viewContainerRef.insert(this.tooltipRef.hostView);
        this.renderer.appendChild(this.document.body, this.tooltip);
        this.popperInstance = createPopper(this.hostElement.nativeElement, this.tooltip, { ...this.popperOptions });
        if (!this.visible) {
            this.removeTooltipElement();
            return;
        }
        this.renderer.removeClass(this.tooltip, 'd-none');
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.tooltipRef.instance.visible = this.visible;
            this.popperInstance.forceUpdate();
            this.changeDetectorRef.markForCheck();
        }, 100);
    }
    removeTooltipElement() {
        this.tooltipId = '';
        if (!this.tooltipRef) {
            return;
        }
        this.tooltipRef.instance.visible = false;
        this.tooltipRef.instance.id = undefined;
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.viewContainerRef?.detach();
        }, 300);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TooltipDirective, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i1.ListenersService }, { token: i0.ChangeDetectorRef }, { token: i2.IntersectionService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: TooltipDirective, isStandalone: true, selector: "[cTooltip]", inputs: { content: ["cTooltip", "content"], popperOptions: ["cTooltipOptions", "popperOptions"], placement: ["cTooltipPlacement", "placement"], trigger: ["cTooltipTrigger", "trigger"], visible: ["cTooltipVisible", "visible"] }, host: { properties: { "attr.aria-describedby": "this.ariaDescribedBy" } }, providers: [ListenersService, IntersectionService], exportAs: ["cTooltip"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cTooltip]',
                    exportAs: 'cTooltip',
                    providers: [ListenersService, IntersectionService],
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i1.ListenersService }, { type: i0.ChangeDetectorRef }, { type: i2.IntersectionService }]; }, propDecorators: { content: [{
                type: Input,
                args: ['cTooltip']
            }], popperOptions: [{
                type: Input,
                args: ['cTooltipOptions']
            }], placement: [{
                type: Input,
                args: ['cTooltipPlacement']
            }], trigger: [{
                type: Input,
                args: ['cTooltipTrigger']
            }], visible: [{
                type: Input,
                args: ['cTooltipVisible']
            }], ariaDescribedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3Rvb2x0aXAvdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUlMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFRTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZ0JBQWdCLENBQUM7QUFHakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQVFsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCOzs7T0FHRztJQUNILElBQ0ksYUFBYSxDQUFDLEtBQXVCO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUN4RixDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksYUFBYTtRQUNmLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBWUQ7O09BRUc7SUFDSCxJQUNJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFD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RTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNsQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDOytHQXBOVSxnQkFBZ0Isa0JBb0VqQixRQUFRO21HQXBFUCxnQkFBZ0Isd1dBSGhCLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7OzRGQUd2QyxnQkFBZ0I7a0JBTjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxVQUFVO29CQUNwQixTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQztvQkFDbEQsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzswQkFxRUksTUFBTTsyQkFBQyxRQUFROzZOQTlEQyxPQUFPO3NCQUF6QixLQUFLO3VCQUFDLFVBQVU7Z0JBT2IsYUFBYTtzQkFEaEIsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBWUksU0FBUztzQkFBcEMsS0FBSzt1QkFBQyxtQkFBbUI7Z0JBS0EsT0FBTztzQkFBaEMsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBTXBCLE9BQU87c0JBRFYsS0FBSzt1QkFBQyxpQkFBaUI7Z0JBV2tCLGVBQWU7c0JBQXhELFdBQVc7dUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY3JlYXRlUG9wcGVyLCBJbnN0YW5jZSwgT3B0aW9ucyB9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcblxuaW1wb3J0IHsgVHJpZ2dlcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJTGlzdGVuZXJzQ29uZmlnLCBMaXN0ZW5lcnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlzdGVuZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NUb29sdGlwXScsXG4gIGV4cG9ydEFzOiAnY1Rvb2x0aXAnLFxuICBwcm92aWRlcnM6IFtMaXN0ZW5lcnNTZXJ2aWNlLCBJbnRlcnNlY3Rpb25TZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgLyoqXG4gICAqIENvbnRlbnQgb2YgdG9vbHRpcFxuICAgKiBAdHlwZSB7c3RyaW5nIHwgVGVtcGxhdGVSZWZ9XG4gICAqL1xuICBASW5wdXQoJ2NUb29sdGlwJykgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiA9ICcnO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBwb3BwZXIgT3B0aW9ucyBvYmplY3QsIHRha2VzIHByZWNlZGVuY2Ugb3ZlciBjUG9wb3ZlclBsYWNlbWVudCBwcm9wXG4gICAqIEB0eXBlIFBhcnRpYWw8T3B0aW9ucz5cbiAgICovXG4gIEBJbnB1dCgnY1Rvb2x0aXBPcHRpb25zJylcbiAgc2V0IHBvcHBlck9wdGlvbnModmFsdWU6IFBhcnRpYWw8T3B0aW9ucz4pIHtcbiAgICB0aGlzLl9wb3BwZXJPcHRpb25zID0geyAuLi50aGlzLl9wb3BwZXJPcHRpb25zLCBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LCAuLi52YWx1ZSB9O1xuICB9O1xuXG4gIGdldCBwb3BwZXJPcHRpb25zKCk6IFBhcnRpYWw8T3B0aW9ucz4ge1xuICAgIHJldHVybiB7IHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsIC4uLnRoaXMuX3BvcHBlck9wdGlvbnMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgdGhlIHBsYWNlbWVudCBvZiB5b3VyIGNvbXBvbmVudCBhZnRlciBQb3BwZXIuanMgaGFzIGFwcGxpZWQgYWxsIHRoZSBtb2RpZmllcnMgdGhhdCBtYXkgaGF2ZSBmbGlwcGVkIG9yIGFsdGVyZWQgdGhlIG9yaWdpbmFsbHkgcHJvdmlkZWQgcGxhY2VtZW50IHByb3BlcnR5LlxuICAgKi9cbiAgQElucHV0KCdjVG9vbHRpcFBsYWNlbWVudCcpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAndG9wJztcbiAgLyoqXG4gICAqIFNldHMgd2hpY2ggZXZlbnQgaGFuZGxlcnMgeW914oCZZCBsaWtlIHByb3ZpZGVkIHRvIHlvdXIgdG9nZ2xlIHByb3AuIFlvdSBjYW4gc3BlY2lmeSBvbmUgdHJpZ2dlciBvciBhbiBhcnJheSBvZiB0aGVtLlxuICAgKiBAdHlwZSB7J2hvdmVyJyB8ICdmb2N1cycgfCAnY2xpY2snfVxuICAgKi9cbiAgQElucHV0KCdjVG9vbHRpcFRyaWdnZXInKSB0cmlnZ2VyOiBUcmlnZ2VycyB8IFRyaWdnZXJzW10gPSAnaG92ZXInO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdG9vbHRpcCBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoJ2NUb29sdGlwVmlzaWJsZScpXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBwcml2YXRlIF92aXNpYmxlID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBnZXQgYXJpYURlc2NyaWJlZEJ5KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnRvb2x0aXBJZCA/IHRoaXMudG9vbHRpcElkIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgdG9vbHRpcCE6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIHRvb2x0aXBJZCE6IHN0cmluZztcbiAgcHJpdmF0ZSB0b29sdGlwUmVmITogQ29tcG9uZW50UmVmPFRvb2x0aXBDb21wb25lbnQ+O1xuICBwcml2YXRlIHBvcHBlckluc3RhbmNlITogSW5zdGFuY2U7XG5cbiAgcHJpdmF0ZSBfcG9wcGVyT3B0aW9uczogUGFydGlhbDxPcHRpb25zPiA9IHtcbiAgICBtb2RpZmllcnM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IFswLCAwXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHByaXZhdGUgaW50ZXJzZWN0aW5nU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGxpc3RlbmVyc1NlcnZpY2U6IExpc3RlbmVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpbnRlcnNlY3Rpb25TZXJ2aWNlOiBJbnRlcnNlY3Rpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25TZXJ2aWNlLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuaG9zdEVsZW1lbnQpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uU2VydmljZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgIGNoYW5nZXNbJ3Zpc2libGUnXS5jdXJyZW50VmFsdWUgPyB0aGlzLmFkZFRvb2x0aXBFbGVtZW50KCkgOiB0aGlzLnJlbW92ZVRvb2x0aXBFbGVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIHRoaXMuZGVzdHJveVRvb2x0aXBFbGVtZW50KCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25TZXJ2aWNlU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWc6IElMaXN0ZW5lcnNDb25maWcgPSB7XG4gICAgICBob3N0RWxlbWVudDogdGhpcy5ob3N0RWxlbWVudCxcbiAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgIGNhbGxiYWNrVG9nZ2xlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gICAgICAgIHRoaXMudmlzaWJsZSA/IHRoaXMuYWRkVG9vbHRpcEVsZW1lbnQoKSA6IHRoaXMucmVtb3ZlVG9vbHRpcEVsZW1lbnQoKTtcbiAgICAgIH0sXG4gICAgICBjYWxsYmFja09mZjogKCkgPT4ge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1vdmVUb29sdGlwRWxlbWVudCgpO1xuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrT246ICgpID0+IHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGRUb29sdGlwRWxlbWVudCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5saXN0ZW5lcnNTZXJ2aWNlLnNldExpc3RlbmVycyhjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVyc1NlcnZpY2UuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJzZWN0aW9uU2VydmljZVN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5pbnRlcnNlY3RpbmdTdWJzY3JpcHRpb24gPSB0aGlzLmludGVyc2VjdGlvblNlcnZpY2UuaW50ZXJzZWN0aW5nJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoaXNJbnRlcnNlY3RpbmcgPT4ge1xuICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGlzSW50ZXJzZWN0aW5nID8gdGhpcy52aXNpYmxlIDogZmFsc2U7XG4gICAgICAgICAgIXRoaXMudmlzaWJsZSAmJiB0aGlzLnJlbW92ZVRvb2x0aXBFbGVtZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVyc2VjdGluZ1N1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVJRChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHVpZCA9IHByZWZpeCA/PyAncmFuZG9tLWlkJztcbiAgICBkbyB7XG4gICAgICB1aWQgPSBgJHtwcmVmaXh9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkudG9TdHJpbmcoMTApfWA7XG4gICAgfSB3aGlsZSAodGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1aWQpKTtcblxuICAgIHJldHVybiB1aWQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVRvb2x0aXBFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PFRvb2x0aXBDb21wb25lbnQ+KFRvb2x0aXBDb21wb25lbnQpO1xuICAgICAgLy8gdGhpcy52aWV3Q29udGFpbmVyUmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVRvb2x0aXBFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcD8ucmVtb3ZlKCk7XG4gICAgdGhpcy50b29sdGlwUmVmPy5kZXN0cm95KCk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMudG9vbHRpcFJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvcHBlckluc3RhbmNlPy5kZXN0cm95KCk7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmPy5kZXRhY2goKTtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWY/LmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFRvb2x0aXBFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLmNyZWF0ZVRvb2x0aXBFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgdGhpcy50b29sdGlwSWQgPSB0aGlzLmdldFVJRCgndG9vbHRpcCcpO1xuICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5pZCA9IHRoaXMudG9vbHRpcElkO1xuICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jb250ZW50ID0gdGhpcy5jb250ZW50O1xuXG4gICAgdGhpcy50b29sdGlwID0gdGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRvb2x0aXAsICdkLW5vbmUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudG9vbHRpcCwgJ2ZhZGUnKTtcblxuICAgIHRoaXMucG9wcGVySW5zdGFuY2U/LmRlc3Ryb3koKTtcblxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5pbnNlcnQodGhpcy50b29sdGlwUmVmLmhvc3RWaWV3KTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgdGhpcy50b29sdGlwKTtcblxuICAgIHRoaXMucG9wcGVySW5zdGFuY2UgPSBjcmVhdGVQb3BwZXIoXG4gICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnRvb2x0aXAsXG4gICAgICB7IC4uLnRoaXMucG9wcGVyT3B0aW9ucyB9XG4gICAgKTtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy5yZW1vdmVUb29sdGlwRWxlbWVudCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudG9vbHRpcCwgJ2Qtbm9uZScpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS52aXNpYmxlID0gdGhpcy52aXNpYmxlO1xuICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAxMDApO1xuXG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRvb2x0aXBFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcElkID0gJyc7XG4gICAgaWYgKCF0aGlzLnRvb2x0aXBSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuaWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZj8uZGV0YWNoKCk7XG4gICAgfSwgMzAwKTtcbiAgfVxufVxuIl19