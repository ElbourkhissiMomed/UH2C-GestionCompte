import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Options } from '@popperjs/core';
import { Triggers } from '../coreui.types';
import { ListenersService } from '../services/listeners.service';
import { IntersectionService } from '../services';
import * as i0 from "@angular/core";
export declare class PopoverDirective implements OnChanges, OnDestroy, OnInit, AfterViewInit {
    private document;
    private renderer;
    private hostElement;
    private viewContainerRef;
    private listenersService;
    private changeDetectorRef;
    private intersectionService;
    /**
     * Content of popover
     * @type {string | TemplateRef}
     */
    content: string | TemplateRef<any>;
    /**
     * Optional popper Options object, takes precedence over cPopoverPlacement prop
     * @type Partial<Options>
     */
    set popperOptions(value: Partial<Options>);
    get popperOptions(): Partial<Options>;
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
     */
    placement: 'top' | 'bottom' | 'left' | 'right';
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     * @type {'hover' | 'focus' | 'click'}
     */
    trigger?: Triggers | Triggers[];
    /**
     * Toggle the visibility of popover component.
     */
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    get ariaDescribedBy(): string | null;
    private popover;
    private popoverId;
    private popoverRef;
    private popperInstance;
    private _popperOptions;
    private intersectingSubscription?;
    constructor(document: Document, renderer: Renderer2, hostElement: ElementRef, viewContainerRef: ViewContainerRef, listenersService: ListenersService, changeDetectorRef: ChangeDetectorRef, intersectionService: IntersectionService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    private setListeners;
    private clearListeners;
    private intersectionServiceSubscribe;
    private getUID;
    private createPopoverElement;
    private destroyPopoverElement;
    private addPopoverElement;
    private removePopoverElement;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PopoverDirective, "[cPopover]", ["cPopover"], { "content": { "alias": "cPopover"; "required": false; }; "popperOptions": { "alias": "cPopoverOptions"; "required": false; }; "placement": { "alias": "cPopoverPlacement"; "required": false; }; "trigger": { "alias": "cPopoverTrigger"; "required": false; }; "visible": { "alias": "cPopoverVisible"; "required": false; }; }, {}, never, never, true, never>;
}
