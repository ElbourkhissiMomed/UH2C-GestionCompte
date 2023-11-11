import { AnimationEvent } from '@angular/animations';
import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SidebarService } from '../sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { INavData } from './sidebar-nav';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavGroupService } from './sidebar-nav-group.service';
import * as i0 from "@angular/core";
export declare class SidebarNavGroupComponent implements OnInit, OnDestroy {
    private router;
    private renderer;
    private hostElement;
    helper: SidebarNavHelper;
    private sidebarNavGroupService;
    constructor(router: Router, renderer: Renderer2, hostElement: ElementRef, helper: SidebarNavHelper, sidebarNavGroupService: SidebarNavGroupService);
    item: any;
    dropdownMode: 'path' | 'none' | 'close';
    show?: boolean;
    get hostClasses(): any;
    sidebarNav: ElementRef;
    navigationEndObservable: Observable<NavigationEnd>;
    navSubscription: Subscription;
    navGroupSubscription: Subscription;
    open: boolean;
    navItems: INavData[];
    display: any;
    ngOnInit(): void;
    samePath(url: string): boolean;
    openGroup(open: boolean): void;
    toggleGroup($event: any): void;
    ngOnDestroy(): void;
    onAnimationStart($event: AnimationEvent): void;
    onAnimationDone($event: AnimationEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarNavGroupComponent, "c-sidebar-nav-group", never, { "item": { "alias": "item"; "required": false; }; "dropdownMode": { "alias": "dropdownMode"; "required": false; }; "show": { "alias": "show"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class SidebarNavComponent implements OnChanges {
    sidebar: SidebarComponent;
    helper: SidebarNavHelper;
    router: Router;
    private renderer;
    private hostElement;
    private sidebarService;
    constructor(sidebar: SidebarComponent, helper: SidebarNavHelper, router: Router, renderer: Renderer2, hostElement: ElementRef, sidebarService: SidebarService);
    navItems?: INavData[];
    dropdownMode: 'path' | 'none' | 'close';
    groupItems?: boolean;
    compact?: boolean;
    get hostClasses(): any;
    get sidebarNavGroupItemsClass(): boolean;
    role: string;
    navItemsArray: INavData[];
    ngOnChanges(changes: SimpleChanges): void;
    hideMobile(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavComponent, [{ optional: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarNavComponent, "c-sidebar-nav", never, { "navItems": { "alias": "navItems"; "required": false; }; "dropdownMode": { "alias": "dropdownMode"; "required": false; }; "groupItems": { "alias": "groupItems"; "required": false; }; "compact": { "alias": "compact"; "required": false; }; }, {}, never, ["*"], true, never>;
}
