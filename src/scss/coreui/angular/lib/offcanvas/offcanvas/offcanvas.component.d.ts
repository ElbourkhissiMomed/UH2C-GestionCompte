import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { BooleanInput } from '@angular/cdk/coercion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BackdropService } from '../../backdrop/backdrop.service';
import { OffcanvasService } from '../offcanvas.service';
import * as i0 from "@angular/core";
export declare class OffcanvasComponent implements OnInit, OnDestroy {
    #private;
    private document;
    private platformId;
    private renderer;
    private hostElement;
    private offcanvasService;
    private backdropService;
    private breakpointObserver;
    constructor(document: Document, platformId: any, renderer: Renderer2, hostElement: ElementRef, offcanvasService: OffcanvasService, backdropService: BackdropService, breakpointObserver: BreakpointObserver);
    static ngAcceptInputType_scroll: BooleanInput;
    /**
     * Apply a backdrop on body while offcanvas is open.
     * @type boolean | 'static'
     * @default true
     */
    backdrop: boolean | 'static';
    /**
     * Closes the offcanvas when escape key is pressed [docs]
     * @type boolean
     * @default true
     */
    keyboard: boolean;
    /**
     * Components placement, there’s no default placement.
     * @type {'start' | 'end' | 'top' | 'bottom'}
     * @default 'start'
     */
    placement: string | 'start' | 'end' | 'top' | 'bottom';
    /**
     * Responsive offcanvas property hides content outside the viewport from a specified breakpoint and down.
     * @type boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
     * @default true
     * @since 4.3.10
     */
    responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    id: string;
    /**
     * Default role for offcanvas. [docs]
     * @type string
     * @default 'dialog'
     */
    role: string;
    /**
     * Set aria-modal html attr for offcanvas. [docs]
     * @type boolean
     * @default true
     */
    ariaModal: boolean;
    /**
     * Event triggered on visible change.
     */
    readonly visibleChange: EventEmitter<boolean>;
    get scroll(): boolean;
    /**
     * Allow body scrolling while offcanvas is visible.
     * @type boolean
     * @default false
     */
    set scroll(value: boolean);
    get visible(): boolean;
    /**
     * Toggle the visibility of offcanvas component.
     * @type boolean
     * @default false
     */
    set visible(value: boolean);
    get hostClasses(): any;
    get ariaHidden(): boolean | null;
    get tabIndex(): string | null;
    get animateTrigger(): string;
    get show(): boolean;
    set show(value: boolean);
    get responsiveBreakpoint(): string | false;
    animateStart(event: AnimationEvent): void;
    animateDone(event: AnimationEvent): void;
    onKeyDownHandler(event: KeyboardEvent): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setFocus(): void;
    private stateToggleSubscribe;
    private backdropClickSubscribe;
    private setBackdrop;
    private layoutChangeSubscribe;
    static ɵfac: i0.ɵɵFactoryDeclaration<OffcanvasComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OffcanvasComponent, "c-offcanvas", ["cOffcanvas"], { "backdrop": { "alias": "backdrop"; "required": false; }; "keyboard": { "alias": "keyboard"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "id": { "alias": "id"; "required": false; }; "role": { "alias": "role"; "required": false; }; "ariaModal": { "alias": "ariaModal"; "required": false; }; "scroll": { "alias": "scroll"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, { "visibleChange": "visibleChange"; }, never, ["*"], true, never>;
}
