import { Directive, HostBinding, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { createPopper } from '@popperjs/core';
import { PopoverComponent } from './popover/popover.component';
import { ListenersService } from '../services/listeners.service';
import { IntersectionService } from '../services';
import * as i0 from "@angular/core";
import * as i1 from "../services/listeners.service";
import * as i2 from "../services";
export class PopoverDirective {
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
     * Toggle the visibility of popover component.
     */
    set visible(value) {
        this._visible = value;
    }
    get visible() {
        return this._visible;
    }
    get ariaDescribedBy() {
        return this.popoverId ? this.popoverId : null;
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
         * Content of popover
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
                        offset: [0, 8]
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
            changes['visible'].currentValue ? this.addPopoverElement() : this.removePopoverElement();
        }
    }
    ngOnDestroy() {
        this.clearListeners();
        this.destroyPopoverElement();
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
                this.visible ? this.addPopoverElement() : this.removePopoverElement();
            },
            callbackOff: () => {
                this.visible = false;
                this.removePopoverElement();
            },
            callbackOn: () => {
                this.visible = true;
                this.addPopoverElement();
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
                !this.visible && this.removePopoverElement();
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
    createPopoverElement() {
        if (!this.popoverRef) {
            this.popoverRef = this.viewContainerRef.createComponent(PopoverComponent);
            // this.viewContainerRef.detach();
        }
    }
    destroyPopoverElement() {
        this.popover?.remove();
        this.popoverRef?.destroy();
        // @ts-ignore
        this.popoverRef = undefined;
        this.popperInstance?.destroy();
        this.viewContainerRef?.detach();
        this.viewContainerRef?.clear();
    }
    addPopoverElement() {
        if (!this.popoverRef) {
            this.createPopoverElement();
        }
        this.popoverRef.instance.content = this.content;
        this.popover = this.popoverRef.location.nativeElement;
        this.renderer.addClass(this.popover, 'd-none');
        this.renderer.addClass(this.popover, 'fade');
        this.popperInstance?.destroy();
        setTimeout(() => {
            this.popperInstance = createPopper(this.hostElement.nativeElement, this.popover, { ...this.popperOptions });
            this.viewContainerRef.insert(this.popoverRef.hostView);
            this.renderer.appendChild(this.document.body, this.popover);
            if (!this.visible) {
                this.removePopoverElement();
                return;
            }
            setTimeout(() => {
                this.popoverId = this.getUID('popover');
                this.popoverRef.instance.id = this.popoverId;
                if (!this.visible) {
                    this.removePopoverElement();
                    return;
                }
                this.renderer.removeClass(this.popover, 'd-none');
                this.popoverRef.instance.visible = this.visible;
                this.popperInstance.forceUpdate();
                this.changeDetectorRef.markForCheck();
            }, 100);
        });
    }
    removePopoverElement() {
        this.popoverId = '';
        if (!this.popoverRef) {
            return;
        }
        this.popoverRef.instance.visible = false;
        this.popoverRef.instance.id = undefined;
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            this.viewContainerRef.detach();
        }, 300);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PopoverDirective, deps: [{ token: DOCUMENT }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i1.ListenersService }, { token: i0.ChangeDetectorRef }, { token: i2.IntersectionService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PopoverDirective, isStandalone: true, selector: "[cPopover]", inputs: { content: ["cPopover", "content"], popperOptions: ["cPopoverOptions", "popperOptions"], placement: ["cPopoverPlacement", "placement"], trigger: ["cPopoverTrigger", "trigger"], visible: ["cPopoverVisible", "visible"] }, host: { properties: { "attr.aria-describedby": "this.ariaDescribedBy" } }, providers: [ListenersService, IntersectionService], exportAs: ["cPopover"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPopover]',
                    exportAs: 'cPopover',
                    providers: [ListenersService, IntersectionService],
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i1.ListenersService }, { type: i0.ChangeDetectorRef }, { type: i2.IntersectionService }]; }, propDecorators: { content: [{
                type: Input,
                args: ['cPopover']
            }], popperOptions: [{
                type: Input,
                args: ['cPopoverOptions']
            }], placement: [{
                type: Input,
                args: ['cPopoverPlacement']
            }], trigger: [{
                type: Input,
                args: ['cPopoverTrigger']
            }], visible: [{
                type: Input,
                args: ['cPopoverVisible']
            }], ariaDescribedBy: [{
                type: HostBinding,
                args: ['attr.aria-describedby']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUlMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFRTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZ0JBQWdCLENBQUM7QUFHakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQVFsRCxNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCOzs7T0FHRztJQUNILElBQ0ksYUFBYSxDQUFDLEtBQXVCO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUN4RixDQUFDO0lBQUEsQ0FBQztJQUVGLElBQUksYUFBYTtRQUNmLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBWUQ7O09BRUc7SUFDSCxJQUNJLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFD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LFFBQVEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7K0dBcE5VLGdCQUFnQixrQkFvRWpCLFFBQVE7bUdBcEVQLGdCQUFnQix3V0FIaEIsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQzs7NEZBR3ZDLGdCQUFnQjtrQkFONUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO29CQUNsRCxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OzBCQXFFSSxNQUFNOzJCQUFDLFFBQVE7Nk5BOURDLE9BQU87c0JBQXpCLEtBQUs7dUJBQUMsVUFBVTtnQkFPYixhQUFhO3NCQURoQixLQUFLO3VCQUFDLGlCQUFpQjtnQkFZSSxTQUFTO3NCQUFwQyxLQUFLO3VCQUFDLG1CQUFtQjtnQkFLQSxPQUFPO3NCQUFoQyxLQUFLO3VCQUFDLGlCQUFpQjtnQkFNcEIsT0FBTztzQkFEVixLQUFLO3VCQUFDLGlCQUFpQjtnQkFXa0IsZUFBZTtzQkFBeEQsV0FBVzt1QkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIsIEluc3RhbmNlLCBPcHRpb25zIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmlnZ2VycyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElMaXN0ZW5lcnNDb25maWcsIExpc3RlbmVyc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saXN0ZW5lcnMuc2VydmljZSc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY1BvcG92ZXJdJyxcbiAgZXhwb3J0QXM6ICdjUG9wb3ZlcicsXG4gIHByb3ZpZGVyczogW0xpc3RlbmVyc1NlcnZpY2UsIEludGVyc2VjdGlvblNlcnZpY2VdLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICAvKipcbiAgICogQ29udGVudCBvZiBwb3BvdmVyXG4gICAqIEB0eXBlIHtzdHJpbmcgfCBUZW1wbGF0ZVJlZn1cbiAgICovXG4gIEBJbnB1dCgnY1BvcG92ZXInKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+ID0gJyc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIHBvcHBlciBPcHRpb25zIG9iamVjdCwgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGNQb3BvdmVyUGxhY2VtZW50IHByb3BcbiAgICogQHR5cGUgUGFydGlhbDxPcHRpb25zPlxuICAgKi9cbiAgQElucHV0KCdjUG9wb3Zlck9wdGlvbnMnKVxuICBzZXQgcG9wcGVyT3B0aW9ucyh2YWx1ZTogUGFydGlhbDxPcHRpb25zPikge1xuICAgIHRoaXMuX3BvcHBlck9wdGlvbnMgPSB7IC4uLnRoaXMuX3BvcHBlck9wdGlvbnMsIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsIC4uLnZhbHVlIH07XG4gIH07XG5cbiAgZ2V0IHBvcHBlck9wdGlvbnMoKTogUGFydGlhbDxPcHRpb25zPiB7XG4gICAgcmV0dXJuIHsgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCwgLi4udGhpcy5fcG9wcGVyT3B0aW9ucyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyB0aGUgcGxhY2VtZW50IG9mIHlvdXIgY29tcG9uZW50IGFmdGVyIFBvcHBlci5qcyBoYXMgYXBwbGllZCBhbGwgdGhlIG1vZGlmaWVycyB0aGF0IG1heSBoYXZlIGZsaXBwZWQgb3IgYWx0ZXJlZCB0aGUgb3JpZ2luYWxseSBwcm92aWRlZCBwbGFjZW1lbnQgcHJvcGVydHkuXG4gICAqL1xuICBASW5wdXQoJ2NQb3BvdmVyUGxhY2VtZW50JykgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICd0b3AnO1xuICAvKipcbiAgICogU2V0cyB3aGljaCBldmVudCBoYW5kbGVycyB5b3XigJlkIGxpa2UgcHJvdmlkZWQgdG8geW91ciB0b2dnbGUgcHJvcC4gWW91IGNhbiBzcGVjaWZ5IG9uZSB0cmlnZ2VyIG9yIGFuIGFycmF5IG9mIHRoZW0uXG4gICAqIEB0eXBlIHsnaG92ZXInIHwgJ2ZvY3VzJyB8ICdjbGljayd9XG4gICAqL1xuICBASW5wdXQoJ2NQb3BvdmVyVHJpZ2dlcicpIHRyaWdnZXI/OiBUcmlnZ2VycyB8IFRyaWdnZXJzW10gPSAnaG92ZXInO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgcG9wb3ZlciBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoJ2NQb3BvdmVyVmlzaWJsZScpXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBwcml2YXRlIF92aXNpYmxlID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBnZXQgYXJpYURlc2NyaWJlZEJ5KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnBvcG92ZXJJZCA/IHRoaXMucG9wb3ZlcklkIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgcG9wb3ZlciE6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIHBvcG92ZXJJZCE6IHN0cmluZztcbiAgcHJpdmF0ZSBwb3BvdmVyUmVmITogQ29tcG9uZW50UmVmPFBvcG92ZXJDb21wb25lbnQ+O1xuICBwcml2YXRlIHBvcHBlckluc3RhbmNlITogSW5zdGFuY2U7XG5cbiAgcHJpdmF0ZSBfcG9wcGVyT3B0aW9uczogUGFydGlhbDxPcHRpb25zPiA9IHtcbiAgICBtb2RpZmllcnM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IFswLCA4XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHByaXZhdGUgaW50ZXJzZWN0aW5nU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGxpc3RlbmVyc1NlcnZpY2U6IExpc3RlbmVyc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpbnRlcnNlY3Rpb25TZXJ2aWNlOiBJbnRlcnNlY3Rpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25TZXJ2aWNlLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMuaG9zdEVsZW1lbnQpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uU2VydmljZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgIGNoYW5nZXNbJ3Zpc2libGUnXS5jdXJyZW50VmFsdWUgPyB0aGlzLmFkZFBvcG92ZXJFbGVtZW50KCkgOiB0aGlzLnJlbW92ZVBvcG92ZXJFbGVtZW50KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIHRoaXMuZGVzdHJveVBvcG92ZXJFbGVtZW50KCk7XG4gICAgdGhpcy5pbnRlcnNlY3Rpb25TZXJ2aWNlU3Vic2NyaWJlKGZhbHNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XG4gIH1cblxuICBwcml2YXRlIHNldExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWc6IElMaXN0ZW5lcnNDb25maWcgPSB7XG4gICAgICBob3N0RWxlbWVudDogdGhpcy5ob3N0RWxlbWVudCxcbiAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgIGNhbGxiYWNrVG9nZ2xlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gICAgICAgIHRoaXMudmlzaWJsZSA/IHRoaXMuYWRkUG9wb3ZlckVsZW1lbnQoKSA6IHRoaXMucmVtb3ZlUG9wb3ZlckVsZW1lbnQoKTtcbiAgICAgIH0sXG4gICAgICBjYWxsYmFja09mZjogKCkgPT4ge1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1vdmVQb3BvdmVyRWxlbWVudCgpO1xuICAgICAgfSxcbiAgICAgIGNhbGxiYWNrT246ICgpID0+IHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGRQb3BvdmVyRWxlbWVudCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5saXN0ZW5lcnNTZXJ2aWNlLnNldExpc3RlbmVycyhjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVyc1NlcnZpY2UuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW50ZXJzZWN0aW9uU2VydmljZVN1YnNjcmliZShzdWJzY3JpYmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKHN1YnNjcmliZSkge1xuICAgICAgdGhpcy5pbnRlcnNlY3RpbmdTdWJzY3JpcHRpb24gPSB0aGlzLmludGVyc2VjdGlvblNlcnZpY2UuaW50ZXJzZWN0aW5nJFxuICAgICAgICAucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoaXNJbnRlcnNlY3RpbmcgPT4ge1xuICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGlzSW50ZXJzZWN0aW5nID8gdGhpcy52aXNpYmxlIDogZmFsc2U7XG4gICAgICAgICAgIXRoaXMudmlzaWJsZSAmJiB0aGlzLnJlbW92ZVBvcG92ZXJFbGVtZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludGVyc2VjdGluZ1N1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVJRChwcmVmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHVpZCA9IHByZWZpeCA/PyAncmFuZG9tLWlkJztcbiAgICBkbyB7XG4gICAgICB1aWQgPSBgJHtwcmVmaXh9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCkudG9TdHJpbmcoMTApfWA7XG4gICAgfSB3aGlsZSAodGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1aWQpKTtcblxuICAgIHJldHVybiB1aWQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvcG92ZXJFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyUmVmKSB7XG4gICAgICB0aGlzLnBvcG92ZXJSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PFBvcG92ZXJDb21wb25lbnQ+KFBvcG92ZXJDb21wb25lbnQpO1xuICAgICAgLy8gdGhpcy52aWV3Q29udGFpbmVyUmVmLmRldGFjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveVBvcG92ZXJFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMucG9wb3Zlcj8ucmVtb3ZlKCk7XG4gICAgdGhpcy5wb3BvdmVyUmVmPy5kZXN0cm95KCk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHRoaXMucG9wb3ZlclJlZiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBvcHBlckluc3RhbmNlPy5kZXN0cm95KCk7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyUmVmPy5kZXRhY2goKTtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWY/LmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFBvcG92ZXJFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wb3BvdmVyUmVmKSB7XG4gICAgICB0aGlzLmNyZWF0ZVBvcG92ZXJFbGVtZW50KCk7XG4gICAgfVxuICAgIHRoaXMucG9wb3ZlclJlZi5pbnN0YW5jZS5jb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgIHRoaXMucG9wb3ZlciA9IHRoaXMucG9wb3ZlclJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wb3BvdmVyLCAnZC1ub25lJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnBvcG92ZXIsICdmYWRlJyk7XG5cbiAgICB0aGlzLnBvcHBlckluc3RhbmNlPy5kZXN0cm95KCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UgPSBjcmVhdGVQb3BwZXIoXG4gICAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5wb3BvdmVyLFxuICAgICAgICB7IC4uLnRoaXMucG9wcGVyT3B0aW9ucyB9XG4gICAgICApO1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyUmVmLmluc2VydCh0aGlzLnBvcG92ZXJSZWYuaG9zdFZpZXcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMucG9wb3Zlcik7XG4gICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLnJlbW92ZVBvcG92ZXJFbGVtZW50KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnBvcG92ZXJJZCA9IHRoaXMuZ2V0VUlEKCdwb3BvdmVyJyk7XG4gICAgICAgIHRoaXMucG9wb3ZlclJlZi5pbnN0YW5jZS5pZCA9IHRoaXMucG9wb3ZlcklkO1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlUG9wb3ZlckVsZW1lbnQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnBvcG92ZXIsICdkLW5vbmUnKTtcbiAgICAgICAgdGhpcy5wb3BvdmVyUmVmLmluc3RhbmNlLnZpc2libGUgPSB0aGlzLnZpc2libGU7XG4gICAgICAgIHRoaXMucG9wcGVySW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVBvcG92ZXJFbGVtZW50KCk6IHZvaWQge1xuICAgIHRoaXMucG9wb3ZlcklkID0gJyc7XG4gICAgaWYgKCF0aGlzLnBvcG92ZXJSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wb3BvdmVyUmVmLmluc3RhbmNlLnZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLnBvcG92ZXJSZWYuaW5zdGFuY2UuaWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5kZXRhY2goKTtcbiAgICB9LCAzMDApO1xuICB9XG59XG4iXX0=