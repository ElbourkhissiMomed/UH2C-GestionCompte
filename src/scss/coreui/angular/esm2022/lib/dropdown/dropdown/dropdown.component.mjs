import { Component, ContentChild, Directive, ElementRef, EventEmitter, forwardRef, HostBinding, HostListener, Inject, Input, Optional, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { filter } from 'rxjs/operators';
import { createPopper } from '@popperjs/core';
import { DropdownMenuDirective } from '../dropdown-menu/dropdown-menu.directive';
import { DropdownService } from '../dropdown.service';
import * as i0 from "@angular/core";
import * as i1 from "../dropdown.service";
// lightweight injection token
export class DropdownToken {
}
export class DropdownToggleDirective {
    constructor(elementRef, dropdownService, dropdown) {
        this.elementRef = elementRef;
        this.dropdownService = dropdownService;
        this.dropdown = dropdown;
        /**
         * Disables the toggler.
         * @type boolean
         * @default false
         */
        this.disabled = false;
        /**
         * Enables pseudo element caret on toggler.
         * @type boolean
         */
        this.caret = true;
        this._split = false;
    }
    /**
     * Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret.
     * @type boolean
     */
    set split(value) {
        this._split = coerceBooleanProperty(value);
    }
    get split() {
        return this._split;
    }
    get hostClasses() {
        return {
            'dropdown-toggle': this.caret,
            'dropdown-toggle-split': this.split,
            disabled: this.disabled
        };
    }
    onClick($event) {
        $event.preventDefault();
        !this.disabled && this.dropdownService.toggle({ visible: 'toggle', dropdown: this.dropdown });
    }
    ngAfterViewInit() {
        if (this.dropdownComponent) {
            this.dropdown = this.dropdownComponent;
            this.dropdownService = this.dropdownComponent?.dropdownService;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownToggleDirective, deps: [{ token: i0.ElementRef }, { token: i1.DropdownService }, { token: DropdownToken, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: DropdownToggleDirective, isStandalone: true, selector: "[cDropdownToggle]", inputs: { dropdownComponent: "dropdownComponent", disabled: "disabled", caret: "caret", split: "split" }, host: { listeners: { "click": "onClick($event)" }, properties: { "class": "this.hostClasses" } }, providers: [{ provide: DropdownToken, useExisting: forwardRef(() => DropdownComponent) }], exportAs: ["cDropdownToggle"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownToggleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownToggle]',
                    providers: [{ provide: DropdownToken, useExisting: forwardRef(() => DropdownComponent) }],
                    exportAs: 'cDropdownToggle',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.DropdownService }, { type: DropdownToken, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { dropdownComponent: [{
                type: Input
            }], disabled: [{
                type: Input
            }], caret: [{
                type: Input
            }], split: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
export class DropdownComponent {
    constructor(document, elementRef, renderer, ngZone, changeDetectorRef, dropdownService) {
        this.document = document;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.dropdownService = dropdownService;
        this.autoClose = true;
        this._dark = false;
        /**
         * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
         * @type Placement
         */
        this.placement = 'bottom-start';
        this._popper = true;
        this._popperOptions = {
            placement: this.placement,
            modifiers: [],
            strategy: 'absolute'
        };
        /**
         * Set the dropdown variant to a btn-group, dropdown, input-group, and nav-item.
         */
        this.variant = 'dropdown';
        this._visible = false;
        this.visibleChange = new EventEmitter();
        this.dropdownContext = { $implicit: this.visible };
        this.activeTrap = false;
        this.listeners = [];
        this.dropdownStateSubscribe();
    }
    /**
     * Sets a darker color scheme to match a dark navbar.
     * @type boolean
     * @default false
     */
    set dark(value) {
        this._dark = coerceBooleanProperty(value);
    }
    ;
    get dark() {
        return this._dark;
    }
    /**
     * If you want to disable dynamic positioning set this property to `false`.
     * @type boolean
     * @default true
     */
    set popper(value) {
        this._popper = coerceBooleanProperty(value);
    }
    get popper() {
        return this._popper;
    }
    /**
     * Optional popper Options object, placement prop takes precedence over
     * @type Partial<Options>
     */
    set popperOptions(value) {
        this._popperOptions = { ...this._popperOptions, ...value };
    }
    ;
    get popperOptions() {
        let placement = this.placement;
        switch (this.direction) {
            case 'dropup': {
                placement = 'top-start';
                break;
            }
            case 'dropend': {
                placement = 'right-start';
                break;
            }
            case 'dropstart': {
                placement = 'left-start';
                break;
            }
            case 'center': {
                placement = 'bottom';
                break;
            }
            case 'dropup-center': {
                placement = 'top';
                break;
            }
        }
        if (this.alignment === 'end') {
            placement = 'bottom-end';
        }
        this._popperOptions = { ...this._popperOptions, placement: placement };
        return this._popperOptions;
    }
    /**
     * Toggle the visibility of dropdown menu component.
     * @type boolean
     * @default false
     */
    set visible(value) {
        const _value = coerceBooleanProperty(value);
        if (_value !== this._visible) {
            this.activeTrap = _value;
            this._visible = _value;
            _value ? this.createPopperInstance() : this.destroyPopperInstance();
            this.visibleChange.emit(_value);
        }
    }
    get visible() {
        return this._visible;
    }
    get hostClasses() {
        return {
            dropdown: (this.variant === 'dropdown' || this.variant === 'nav-item') &&
                !this.direction,
            [`${this.direction}`]: !!this.direction,
            [`${this.variant}`]: !!this.variant,
            'dropup': this.direction === 'dropup' || this.direction === 'dropup-center',
            show: this.visible
        };
    }
    // todo: find better solution
    get hostStyle() {
        return this.variant === 'input-group' ? { display: 'contents' } : {};
    }
    onHostClick($event) {
        this.clickedTarget = $event.target;
    }
    dropdownStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.dropdownStateSubscription =
                this.dropdownService.dropdownState$.pipe(filter((state) => {
                    return this === state.dropdown;
                })).subscribe((state) => {
                    if ('visible' in state) {
                        state?.visible === 'toggle'
                            ? this.toggleDropdown()
                            : (this.visible = state.visible);
                    }
                });
        }
        else {
            this.dropdownStateSubscription?.unsubscribe();
        }
    }
    toggleDropdown() {
        this.visible = !this.visible;
    }
    onClick(event) {
        if (!this._toggler?.elementRef.nativeElement.contains(event.target?.closest('[cDropdownToggle]'))) {
            this.toggleDropdown();
        }
    }
    ngAfterContentInit() {
        if (this.variant === 'nav-item') {
            this.renderer.addClass(this._toggler.elementRef.nativeElement, 'nav-link');
        }
    }
    ngOnInit() {
        this.setVisibleState(this.visible);
    }
    ngOnChanges(changes) {
        if (changes['visible'] && !changes['visible'].firstChange) {
            this.setVisibleState(changes['visible'].currentValue);
        }
    }
    ngOnDestroy() {
        this.clearListeners();
        this.dropdownStateSubscribe(false);
        this.destroyPopperInstance();
    }
    setVisibleState(value) {
        this.dropdownService.toggle({ visible: value, dropdown: this });
    }
    // todo: turn off popper in navbar-nav
    createPopperInstance() {
        if (this._toggler && this._menu) {
            this.ngZone.runOutsideAngular(() => {
                // workaround for popper position calculate (see also: dropdown-menu.component)
                this._menu.elementRef.nativeElement.style.visibility = 'hidden';
                this._menu.elementRef.nativeElement.style.display = 'block';
                if (this.popper) {
                    this.popperInstance = createPopper(this._toggler.elementRef.nativeElement, this._menu.elementRef.nativeElement, { ...this.popperOptions });
                }
                this.ngZone.run(() => {
                    this.setListeners();
                    this.changeDetectorRef.markForCheck();
                    this.changeDetectorRef.detectChanges();
                });
            });
        }
    }
    destroyPopperInstance() {
        this.clearListeners();
        this.popperInstance?.destroy();
        this.popperInstance = undefined;
        this.changeDetectorRef.markForCheck();
    }
    setListeners() {
        this.listeners.push(this.renderer.listen(this.document, 'click', (event) => {
            const target = event.target;
            if (this._menuElementRef?.nativeElement.contains(event.target)) {
                this.clickedTarget = target;
            }
            if (this._toggler?.elementRef.nativeElement.contains(event.target)) {
                return;
            }
            if (this.autoClose === true) {
                this.setVisibleState(false);
                return;
            }
            if (this.clickedTarget === target && this.autoClose === 'inside') {
                this.setVisibleState(false);
                return;
            }
            if (this.clickedTarget !== target && this.autoClose === 'outside') {
                this.setVisibleState(false);
                return;
            }
        }));
        this.listeners.push(this.renderer.listen(this.elementRef.nativeElement, 'keyup', (event) => {
            if (event.key === 'Escape' && this.autoClose !== false) {
                event.stopPropagation();
                this.setVisibleState(false);
                return;
            }
        }));
        this.listeners.push(this.renderer.listen(this.document, 'keyup', (event) => {
            if (event.key === 'Tab' && this.autoClose !== false && !this.elementRef.nativeElement.contains(event.target)) {
                this.setVisibleState(false);
                return;
            }
        }));
    }
    clearListeners() {
        this.listeners.forEach((unListen) => {
            unListen();
        });
        // @ts-ignore
        this.listeners.fill(undefined);
        this.listeners = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownComponent, deps: [{ token: DOCUMENT }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i1.DropdownService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: DropdownComponent, isStandalone: true, selector: "c-dropdown", inputs: { alignment: "alignment", autoClose: "autoClose", dark: "dark", direction: "direction", placement: "placement", popper: "popper", popperOptions: "popperOptions", variant: "variant", visible: "visible" }, outputs: { visibleChange: "visibleChange" }, host: { listeners: { "click": "onHostClick($event)" }, properties: { "class": "this.hostClasses", "style": "this.hostStyle" } }, providers: [DropdownService], queries: [{ propertyName: "_toggler", first: true, predicate: DropdownToggleDirective, descendants: true }, { propertyName: "_menu", first: true, predicate: DropdownMenuDirective, descendants: true }, { propertyName: "_menuElementRef", first: true, predicate: DropdownMenuDirective, descendants: true, read: ElementRef }], exportAs: ["cDropdown"], usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block;min-width:-moz-fit-content;min-width:fit-content}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host{direction:rtl}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-dropdown', template: '<ng-content></ng-content>', exportAs: 'cDropdown', providers: [DropdownService], standalone: true, styles: [":host-context(.dropdown,.dropup):not(.btn-group){display:block;min-width:-moz-fit-content;min-width:fit-content}:host-context(.dropstart,.dropend):not(.btn-group){display:inline-flex}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-right-radius:0;border-bottom-right-radius:0}:host-context(html:not([dir=rtl])) :host-context(.input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host{direction:rtl}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :first-child{border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:first-child::ng-deep :not(:first-child):not(.dropdown-menu):not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child{border-top-right-radius:0;border-bottom-right-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :first-child:not(:only-of-type){border-top-left-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl] .input-group) :host:last-child::ng-deep :not(:first-child):not(.dropdown-menu){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}\n"] }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.DropdownService }]; }, propDecorators: { alignment: [{
                type: Input
            }], autoClose: [{
                type: Input
            }], dark: [{
                type: Input
            }], direction: [{
                type: Input
            }], placement: [{
                type: Input
            }], popper: [{
                type: Input
            }], popperOptions: [{
                type: Input
            }], variant: [{
                type: Input
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], _toggler: [{
                type: ContentChild,
                args: [DropdownToggleDirective]
            }], _menu: [{
                type: ContentChild,
                args: [DropdownMenuDirective]
            }], _menuElementRef: [{
                type: ContentChild,
                args: [DropdownMenuDirective, { read: ElementRef }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], hostStyle: [{
                type: HostBinding,
                args: ['style']
            }], onHostClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9kcm9wZG93bi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUlMLFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFLTCxRQUFRLEVBQ1IsTUFBTSxFQUdQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxZQUFZLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFFdEQsOEJBQThCO0FBQzlCLE1BQU0sT0FBZ0IsYUFBYTtDQUFHO0FBUXRDLE1BQU0sT0FBTyx1QkFBdUI7SUFLbEMsWUFDUyxVQUFzQixFQUNyQixlQUFnQyxFQUNyQixRQUF3QjtRQUZwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQVU3Qzs7OztXQUlHO1FBQ00sYUFBUSxHQUFhLEtBQUssQ0FBQztRQUVwQzs7O1dBR0c7UUFDTSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBZWQsV0FBTSxHQUFHLEtBQUssQ0FBQztJQW5DcEIsQ0FB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QXFCLDJCQUFVLFVBQVUsMkVBeEo3QywyQkFBMkI7OzRGQU0xQixpQkFBaUI7a0JBUjdCLFNBQVM7K0JBQ0UsWUFBWSxZQUNaLDJCQUEyQixZQUUzQixXQUFXLGFBQ1YsQ0FBQyxlQUFlLENBQUMsY0FDaEIsSUFBSTs7MEJBUWIsTUFBTTsyQkFBQyxRQUFRO2dMQWNULFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUcsU0FBUztzQkFBakIsS0FBSztnQkFRRixJQUFJO3NCQURQLEtBQUs7Z0JBZUcsU0FBUztzQkFBakIsS0FBSztnQkFNRyxTQUFTO3NCQUFqQixLQUFLO2dCQVFGLE1BQU07c0JBRFQsS0FBSztnQkFnQkYsYUFBYTtzQkFEaEIsS0FBSztnQkE2Q0csT0FBTztzQkFBZixLQUFLO2dCQVFGLE9BQU87c0JBRFYsS0FBSztnQkFpQkksYUFBYTtzQkFBdEIsTUFBTTtnQkFHZ0MsUUFBUTtzQkFBOUMsWUFBWTt1QkFBQyx1QkFBdUI7Z0JBQ0EsS0FBSztzQkFBekMsWUFBWTt1QkFBQyxxQkFBcUI7Z0JBQ3dCLGVBQWU7c0JBQXpFLFlBQVk7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQVNyRCxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFlaEIsU0FBUztzQkFEWixXQUFXO3VCQUFDLE9BQU87Z0JBUVosV0FBVztzQkFEbEIsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBjcmVhdGVQb3BwZXIsIEluc3RhbmNlLCBPcHRpb25zLCBQbGFjZW1lbnQgfSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duTWVudURpcmVjdGl2ZSB9IGZyb20gJy4uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi4vZHJvcGRvd24uc2VydmljZSc7XG5cbi8vIGxpZ2h0d2VpZ2h0IGluamVjdGlvbiB0b2tlblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERyb3Bkb3duVG9rZW4ge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NEcm9wZG93blRvZ2dsZV0nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IERyb3Bkb3duVG9rZW4sIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duQ29tcG9uZW50KSB9XSxcbiAgZXhwb3J0QXM6ICdjRHJvcGRvd25Ub2dnbGUnLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3NwbGl0OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wb3BwZXI6IEJvb2xlYW5JbnB1dDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGRyb3Bkb3duU2VydmljZTogRHJvcGRvd25TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBkcm9wZG93bj86IERyb3Bkb3duVG9rZW5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGRpc2FibGVkIHN0YXRlIGZvciB0aGUgdG9nZ2xlci5cbiAgICogQHR5cGUgRHJvcGRvd25Db21wb25lbnQgfCB1bmRlZmluZWRcbiAgICogQGRlZmF1bHQgdW5kZWZpbmVkXG4gICAqL1xuICBASW5wdXQoKSBkcm9wZG93bkNvbXBvbmVudD86IERyb3Bkb3duQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgdG9nZ2xlci5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgcHNldWRvIGVsZW1lbnQgY2FyZXQgb24gdG9nZ2xlci5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgY2FyZXQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgc3BsaXQgYnV0dG9uIGRyb3Bkb3ducyB3aXRoIHZpcnR1YWxseSB0aGUgc2FtZSBtYXJrdXAgYXMgc2luZ2xlIGJ1dHRvbiBkcm9wZG93bnMsIGJ1dCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdGAgY2xhc3MgZm9yIHByb3BlciBzcGFjaW5nIGFyb3VuZCB0aGUgZHJvcGRvd24gY2FyZXQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBzcGxpdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NwbGl0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIGdldCBzcGxpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3BsaXQ7XG4gIH1cblxuICBwcml2YXRlIF9zcGxpdCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2Ryb3Bkb3duLXRvZ2dsZSc6IHRoaXMuY2FyZXQsXG4gICAgICAnZHJvcGRvd24tdG9nZ2xlLXNwbGl0JzogdGhpcy5zcGxpdCxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5kcm9wZG93blNlcnZpY2UudG9nZ2xlKHsgdmlzaWJsZTogJ3RvZ2dsZScsIGRyb3Bkb3duOiB0aGlzLmRyb3Bkb3duIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRyb3Bkb3duQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmRyb3Bkb3duID0gdGhpcy5kcm9wZG93bkNvbXBvbmVudDtcbiAgICAgIHRoaXMuZHJvcGRvd25TZXJ2aWNlID0gdGhpcy5kcm9wZG93bkNvbXBvbmVudD8uZHJvcGRvd25TZXJ2aWNlO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXSxcbiAgZXhwb3J0QXM6ICdjRHJvcGRvd24nLFxuICBwcm92aWRlcnM6IFtEcm9wZG93blNlcnZpY2VdLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rhcms6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Zpc2libGU6IEJvb2xlYW5JbnB1dDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIGRyb3Bkb3duU2VydmljZTogRHJvcGRvd25TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZHJvcGRvd25TdGF0ZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhbGlnbm1lbnQgb2YgZHJvcGRvd24gbWVudS5cbiAgICogQHR5cGUgeydzdGFydCcgfCAnZW5kJyB8IHsgeHM6ICdzdGFydCcgfCAnZW5kJyB9IHwgeyBzbTogJ3N0YXJ0JyB8ICdlbmQnIH0gfCB7IG1kOiAnc3RhcnQnIHwgJ2VuZCcgfSB8IHsgbGc6ICdzdGFydCcgfCAnZW5kJyB9IHwgeyB4bDogJ3N0YXJ0JyB8ICdlbmQnfSB8IHsgeHhsOiAnc3RhcnQnIHwgJ2VuZCd9fVxuICAgKi9cbiAgQElucHV0KCkgYWxpZ25tZW50Pzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGF1dG9DbG9zZTogYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnID0gdHJ1ZTtcblxuICAvKipcbiAgICogU2V0cyBhIGRhcmtlciBjb2xvciBzY2hlbWUgdG8gbWF0Y2ggYSBkYXJrIG5hdmJhci5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGRhcmsodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kYXJrID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfTtcblxuICBnZXQgZGFyaygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGFyaztcbiAgfVxuXG4gIHByaXZhdGUgX2RhcmsgPSBmYWxzZTtcblxuICAvKipcbiAgICogU2V0cyBhIHNwZWNpZmllZCAgZGlyZWN0aW9uIGFuZCBsb2NhdGlvbiBvZiB0aGUgZHJvcGRvd24gbWVudS5cbiAgICogQHR5cGUgJ2Ryb3B1cCcgfCAnZHJvcGVuZCcgfCAnZHJvcHN0YXJ0J1xuICAgKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uPzogJ2NlbnRlcicgfCAnZHJvcHVwJyB8ICdkcm9wdXAtY2VudGVyJyB8ICdkcm9wZW5kJyB8ICdkcm9wc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgdGhlIHBsYWNlbWVudCBvZiB5b3VyIGNvbXBvbmVudCBhZnRlciBQb3BwZXIuanMgaGFzIGFwcGxpZWQgYWxsIHRoZSBtb2RpZmllcnMgdGhhdCBtYXkgaGF2ZSBmbGlwcGVkIG9yIGFsdGVyZWQgdGhlIG9yaWdpbmFsbHkgcHJvdmlkZWQgcGxhY2VtZW50IHByb3BlcnR5LlxuICAgKiBAdHlwZSBQbGFjZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogUGxhY2VtZW50ID0gJ2JvdHRvbS1zdGFydCc7XG5cbiAgLyoqXG4gICAqIElmIHlvdSB3YW50IHRvIGRpc2FibGUgZHluYW1pYyBwb3NpdGlvbmluZyBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgZmFsc2VgLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwb3BwZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9wb3BwZXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHBvcHBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcG9wcGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfcG9wcGVyID0gdHJ1ZTtcblxuICAvKipcbiAgICogT3B0aW9uYWwgcG9wcGVyIE9wdGlvbnMgb2JqZWN0LCBwbGFjZW1lbnQgcHJvcCB0YWtlcyBwcmVjZWRlbmNlIG92ZXJcbiAgICogQHR5cGUgUGFydGlhbDxPcHRpb25zPlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBvcHBlck9wdGlvbnModmFsdWU6IFBhcnRpYWw8T3B0aW9ucz4pIHtcbiAgICB0aGlzLl9wb3BwZXJPcHRpb25zID0geyAuLi50aGlzLl9wb3BwZXJPcHRpb25zLCAuLi52YWx1ZSB9O1xuICB9O1xuXG4gIGdldCBwb3BwZXJPcHRpb25zKCk6IFBhcnRpYWw8T3B0aW9ucz4ge1xuICAgIGxldCBwbGFjZW1lbnQgPSB0aGlzLnBsYWNlbWVudDtcbiAgICBzd2l0Y2ggKHRoaXMuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdkcm9wdXAnOiB7XG4gICAgICAgIHBsYWNlbWVudCA9ICd0b3Atc3RhcnQnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2Ryb3BlbmQnOiB7XG4gICAgICAgIHBsYWNlbWVudCA9ICdyaWdodC1zdGFydCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZHJvcHN0YXJ0Jzoge1xuICAgICAgICBwbGFjZW1lbnQgPSAnbGVmdC1zdGFydCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnY2VudGVyJzoge1xuICAgICAgICBwbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdkcm9wdXAtY2VudGVyJzoge1xuICAgICAgICBwbGFjZW1lbnQgPSAndG9wJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmFsaWdubWVudCA9PT0gJ2VuZCcpIHtcbiAgICAgIHBsYWNlbWVudCA9ICdib3R0b20tZW5kJztcbiAgICB9XG4gICAgdGhpcy5fcG9wcGVyT3B0aW9ucyA9IHsgLi4udGhpcy5fcG9wcGVyT3B0aW9ucywgcGxhY2VtZW50OiBwbGFjZW1lbnQgfTtcbiAgICByZXR1cm4gdGhpcy5fcG9wcGVyT3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgX3BvcHBlck9wdGlvbnM6IFBhcnRpYWw8T3B0aW9ucz4gPSB7XG4gICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICBtb2RpZmllcnM6IFtdLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZHJvcGRvd24gdmFyaWFudCB0byBhIGJ0bi1ncm91cCwgZHJvcGRvd24sIGlucHV0LWdyb3VwLCBhbmQgbmF2LWl0ZW0uXG4gICAqL1xuICBASW5wdXQoKSB2YXJpYW50PzogJ2J0bi1ncm91cCcgfCAnZHJvcGRvd24nIHwgJ2lucHV0LWdyb3VwJyB8ICduYXYtaXRlbScgPSAnZHJvcGRvd24nO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgZHJvcGRvd24gbWVudSBjb21wb25lbnQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgX3ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICBpZiAoX3ZhbHVlICE9PSB0aGlzLl92aXNpYmxlKSB7XG4gICAgICB0aGlzLmFjdGl2ZVRyYXAgPSBfdmFsdWU7XG4gICAgICB0aGlzLl92aXNpYmxlID0gX3ZhbHVlO1xuICAgICAgX3ZhbHVlID8gdGhpcy5jcmVhdGVQb3BwZXJJbnN0YW5jZSgpIDogdGhpcy5kZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KF92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBwcml2YXRlIF92aXNpYmxlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBkcm9wZG93bkNvbnRleHQgPSB7ICRpbXBsaWNpdDogdGhpcy52aXNpYmxlIH07XG4gIEBDb250ZW50Q2hpbGQoRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmUpIF90b2dnbGVyITogRHJvcGRvd25Ub2dnbGVEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoRHJvcGRvd25NZW51RGlyZWN0aXZlKSBfbWVudSE6IERyb3Bkb3duTWVudURpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChEcm9wZG93bk1lbnVEaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBfbWVudUVsZW1lbnRSZWYhOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBhY3RpdmVUcmFwID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBkcm9wZG93blN0YXRlU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHBvcHBlckluc3RhbmNlITogSW5zdGFuY2UgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgbGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgZHJvcGRvd246XG4gICAgICAgICh0aGlzLnZhcmlhbnQgPT09ICdkcm9wZG93bicgfHwgdGhpcy52YXJpYW50ID09PSAnbmF2LWl0ZW0nKSAmJlxuICAgICAgICAhdGhpcy5kaXJlY3Rpb24sXG4gICAgICBbYCR7dGhpcy5kaXJlY3Rpb259YF06ICEhdGhpcy5kaXJlY3Rpb24sXG4gICAgICBbYCR7dGhpcy52YXJpYW50fWBdOiAhIXRoaXMudmFyaWFudCxcbiAgICAgICdkcm9wdXAnOiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2Ryb3B1cCcgfHwgdGhpcy5kaXJlY3Rpb24gPT09ICdkcm9wdXAtY2VudGVyJyxcbiAgICAgIHNob3c6IHRoaXMudmlzaWJsZVxuICAgIH07XG4gIH1cblxuICAvLyB0b2RvOiBmaW5kIGJldHRlciBzb2x1dGlvblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcbiAgZ2V0IGhvc3RTdHlsZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhbnQgPT09ICdpbnB1dC1ncm91cCcgPyB7IGRpc3BsYXk6ICdjb250ZW50cycgfSA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBjbGlja2VkVGFyZ2V0ITogSFRNTEVsZW1lbnQ7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwcml2YXRlIG9uSG9zdENsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xpY2tlZFRhcmdldCA9ICRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICBkcm9wZG93blN0YXRlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpcHRpb24gPVxuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5kcm9wZG93blN0YXRlJC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzID09PSBzdGF0ZS5kcm9wZG93bjtcbiAgICAgICAgICB9KVxuICAgICAgICApLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICBpZiAoJ3Zpc2libGUnIGluIHN0YXRlKSB7XG4gICAgICAgICAgICBzdGF0ZT8udmlzaWJsZSA9PT0gJ3RvZ2dsZSdcbiAgICAgICAgICAgID8gdGhpcy50b2dnbGVEcm9wZG93bigpXG4gICAgICAgICAgICA6ICh0aGlzLnZpc2libGUgPSBzdGF0ZS52aXNpYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fdG9nZ2xlcj8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldD8uY2xvc2VzdCgnW2NEcm9wZG93blRvZ2dsZV0nKSkpIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFyaWFudCA9PT0gJ25hdi1pdGVtJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl90b2dnbGVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ25hdi1saW5rJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUodGhpcy52aXNpYmxlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1sndmlzaWJsZSddICYmICFjaGFuZ2VzWyd2aXNpYmxlJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKGNoYW5nZXNbJ3Zpc2libGUnXS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpYmUoZmFsc2UpO1xuICAgIHRoaXMuZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG4gIH1cblxuICBzZXRWaXNpYmxlU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRyb3Bkb3duU2VydmljZS50b2dnbGUoeyB2aXNpYmxlOiB2YWx1ZSwgZHJvcGRvd246IHRoaXMgfSk7XG4gIH1cblxuICAvLyB0b2RvOiB0dXJuIG9mZiBwb3BwZXIgaW4gbmF2YmFyLW5hdlxuICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlciAmJiB0aGlzLl9tZW51KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIC8vIHdvcmthcm91bmQgZm9yIHBvcHBlciBwb3NpdGlvbiBjYWxjdWxhdGUgKHNlZSBhbHNvOiBkcm9wZG93bi1tZW51LmNvbXBvbmVudClcbiAgICAgICAgdGhpcy5fbWVudS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICB0aGlzLl9tZW51LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgaWYgKHRoaXMucG9wcGVyKSB7XG4gICAgICAgICAgdGhpcy5wb3BwZXJJbnN0YW5jZSA9IGNyZWF0ZVBvcHBlcihcbiAgICAgICAgICAgIHRoaXMuX3RvZ2dsZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5fbWVudS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB7IC4uLnRoaXMucG9wcGVyT3B0aW9ucyB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0TGlzdGVuZXJzKCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckxpc3RlbmVycygpO1xuICAgIHRoaXMucG9wcGVySW5zdGFuY2U/LmRlc3Ryb3koKTtcbiAgICB0aGlzLnBvcHBlckluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHNldExpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKFxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5kb2N1bWVudCwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuX21lbnVFbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrZWRUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3RvZ2dsZXI/LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9DbG9zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZFRhcmdldCA9PT0gdGFyZ2V0ICYmIHRoaXMuYXV0b0Nsb3NlID09PSAnaW5zaWRlJykge1xuICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZVN0YXRlKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZFRhcmdldCAhPT0gdGFyZ2V0ICYmIHRoaXMuYXV0b0Nsb3NlID09PSAnb3V0c2lkZScpIHtcbiAgICAgICAgICB0aGlzLnNldFZpc2libGVTdGF0ZShmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5hdXRvQ2xvc2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmRvY3VtZW50LCAna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicgJiYgdGhpcy5hdXRvQ2xvc2UgIT09IGZhbHNlICYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy5zZXRWaXNpYmxlU3RhdGUoZmFsc2UpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckxpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKCh1bkxpc3RlbikgPT4ge1xuICAgICAgdW5MaXN0ZW4oKTtcbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgdGhpcy5saXN0ZW5lcnMuZmlsbCh1bmRlZmluZWQpO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cbn1cbiJdfQ==