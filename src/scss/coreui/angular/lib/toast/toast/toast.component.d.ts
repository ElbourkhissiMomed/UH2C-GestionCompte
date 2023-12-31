import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Colors } from '../../coreui.types';
import { ToasterService } from '../toaster/toaster.service';
import { TToasterPlacement } from '../toaster/toaster.component';
import * as i0 from "@angular/core";
type AnimateType = ('hide' | 'show');
export declare class ToastComponent implements OnInit, OnDestroy {
    hostElement: ElementRef;
    renderer: Renderer2;
    toasterService: ToasterService;
    changeDetectorRef: ChangeDetectorRef;
    static ngAcceptInputType_visible: BooleanInput;
    dynamic: boolean;
    placement: TToasterPlacement;
    constructor(hostElement: ElementRef, renderer: Renderer2, toasterService: ToasterService, changeDetectorRef: ChangeDetectorRef);
    /**
     * Auto hide the toast.
     * @type boolean
     */
    autohide: boolean;
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Delay hiding the toast (ms).
     * @type number
     */
    delay: number;
    /**
     * Apply fade transition to the toast.
     * @type boolean
     */
    fade: boolean;
    /**
     * Toggle the visibility of component.
     * @type boolean
     */
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    /**
     * @ignore
     */
    index?: number;
    /**
     * Event emitted on visibility change. [docs]
     * @type boolean
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * Event emitted on timer tick. [docs]
     * @type number
     */
    timer: EventEmitter<number>;
    private timerId;
    private clockId;
    private clockTimerId;
    private _clock;
    get clock(): number;
    set clock(value: number);
    get animationDisabled(): boolean;
    get animateType(): AnimateType;
    onMouseOver(): void;
    onMouseOut(): void;
    get hostClasses(): any;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setTimer(): void;
    clearTimer(): void;
    onClose(): void;
    setClock(): void;
    clearClock(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "c-toast", ["cToast"], { "autohide": { "alias": "autohide"; "required": false; }; "color": { "alias": "color"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "fade": { "alias": "fade"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, { "visibleChange": "visibleChange"; "timer": "timer"; }, never, ["*"], true, never>;
}
export {};
