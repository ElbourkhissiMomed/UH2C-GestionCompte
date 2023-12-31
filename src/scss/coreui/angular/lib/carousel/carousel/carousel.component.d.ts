import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { IntersectionService } from '../../services/intersection.service';
import { ListenersService } from '../../services/listeners.service';
import { CarouselState } from '../carousel-state';
import { CarouselService } from '../carousel.service';
import { CarouselConfig } from '../carousel.config';
import { Triggers } from '../../coreui.types';
import * as i0 from "@angular/core";
export declare class CarouselComponent implements OnInit, OnDestroy, AfterContentInit {
    private config;
    private hostElement;
    private carouselService;
    private carouselState;
    private intersectionService;
    private listenersService;
    /**
     * Index of the active item.
     * @type number
     */
    activeIndex: number;
    /**
     * Carousel automatically starts cycle items.
     * @type boolean
     */
    animate: boolean;
    /**
     * Add darker controls, indicators, and captions.
     * @type boolean
     */
    dark?: boolean;
    /**
     * Carousel direction. [docs]
     * @type {'next' | 'prev'}
     */
    direction: 'next' | 'prev';
    /**
     * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
     * @type number
     * @default 0
     */
    interval: number;
    /**
     * Sets which event handlers you’d like provided to your pause prop. You can specify one trigger or an array of them.
     * @type {'hover' | 'focus' | 'click'}
     */
    pause: Triggers | Triggers[] | false;
    /**
     * Support left/right swipe interactions on touchscreen devices.
     * @type boolean
     * @default true
     */
    touch: boolean;
    /**
     * Set type of the transition.
     * @type {'slide' | 'crossfade'}
     * @default 'slide'
     */
    transition: 'slide' | 'crossfade';
    /**
     * Set whether the carousel should cycle continuously or have hard stops.
     * @type boolean
     * @default true
     */
    wrap: boolean;
    /**
     * Event emitted on carousel item change. [docs]
     * @type number
     */
    itemChange: EventEmitter<number>;
    get hostClasses(): any;
    private carouselIndexSubscription?;
    private timerId;
    private intersectingSubscription?;
    private activeItemInterval;
    private swipeSubscription?;
    constructor(config: CarouselConfig, hostElement: ElementRef, carouselService: CarouselService, carouselState: CarouselState, intersectionService: IntersectionService, listenersService: ListenersService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private setListeners;
    private clearListeners;
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    setTimer(): void;
    resetTimer(): void;
    private carouselStateSubscribe;
    private intersectionServiceSubscribe;
    private swipeSubscribe;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "c-carousel", never, { "activeIndex": { "alias": "activeIndex"; "required": false; }; "animate": { "alias": "animate"; "required": false; }; "dark": { "alias": "dark"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "interval": { "alias": "interval"; "required": false; }; "pause": { "alias": "pause"; "required": false; }; "touch": { "alias": "touch"; "required": false; }; "transition": { "alias": "transition"; "required": false; }; "wrap": { "alias": "wrap"; "required": false; }; }, { "itemChange": "itemChange"; }, never, ["*"], true, never>;
}
