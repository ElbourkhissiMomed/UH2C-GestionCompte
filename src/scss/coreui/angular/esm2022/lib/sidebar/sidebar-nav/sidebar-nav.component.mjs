import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, forwardRef, HostBinding, Input, Optional, ViewChild } from '@angular/core';
import { NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavGroupService } from './sidebar-nav-group.service';
import { HtmlAttributesDirective } from '../../shared';
import { SidebarNavIconPipe } from './sidebar-nav-icon.pipe';
import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';
import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { SidebarNavLabelComponent } from './sidebar-nav-label.component';
import { SidebarNavTitleComponent } from './sidebar-nav-title.component';
import { SidebarNavDividerComponent } from './sidebar-nav-divider.component';
import { SidebarNavItemClassPipe } from './sidebar-nav-item-class.pipe';
import { IconDirective } from '@coreui/icons-angular';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./sidebar-nav.service";
import * as i3 from "./sidebar-nav-group.service";
import * as i4 from "../sidebar/sidebar.component";
import * as i5 from "../sidebar.service";
export class SidebarNavGroupComponent {
    constructor(router, renderer, hostElement, helper, sidebarNavGroupService) {
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.helper = helper;
        this.sidebarNavGroupService = sidebarNavGroupService;
        this.dropdownMode = 'path';
        this.navItems = [];
        this.display = { display: 'block' };
        this.navigationEndObservable = router.events.pipe(filter((event) => event instanceof NavigationEnd));
    }
    get hostClasses() {
        return {
            'nav-group': true,
            show: this.open
        };
    }
    ngOnInit() {
        this.navItems = [...this.item.children];
        this.navSubscription = this.navigationEndObservable.subscribe((event) => {
            if (this.dropdownMode !== 'none') {
                const samePath = this.samePath(event.url);
                this.openGroup(samePath);
            }
        });
        if (this.samePath(this.router.routerState.snapshot.url)) {
            this.openGroup(true);
        }
        this.navGroupSubscription = this.sidebarNavGroupService.sidebarNavGroupState$.subscribe(next => {
            if (this.dropdownMode === 'close' && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
                if (next.sidebarNavGroup.item.url.startsWith(this.item.url)) {
                    return;
                }
                if (this.samePath(this.router.routerState.snapshot.url)) {
                    this.openGroup(true);
                    return;
                }
                this.openGroup(false);
            }
        });
    }
    samePath(url) {
        // console.log('item:', this.item.name, this.item.url, 'url:', url);
        const itemArray = this.item.url?.split('/');
        const urlArray = url.split('/');
        return itemArray?.every((value, index) => {
            // console.log(value === urlArray[index], 'value:', value, 'index:', index, urlArray[index], url);
            return value === urlArray[index];
        });
    }
    openGroup(open) {
        this.open = open;
    }
    toggleGroup($event) {
        $event.preventDefault();
        this.openGroup(!this.open);
        if (this.open) {
            this.sidebarNavGroupService.toggle({ open: this.open, sidebarNavGroup: this });
        }
    }
    ngOnDestroy() {
        this.navSubscription?.unsubscribe();
    }
    onAnimationStart($event) {
        this.display = { display: 'block' };
        if ($event.toState === 'open') {
            const host = this.sidebarNav.nativeElement;
            this.renderer.setStyle(host, 'height', `${host['scrollHeight']}px`);
        }
    }
    onAnimationDone($event) {
        if ($event.toState === 'open') {
            const host = this.sidebarNav.nativeElement;
            this.renderer.setStyle(host, 'height', 'auto');
        }
        if ($event.toState === 'closed') {
            setTimeout(() => {
                this.display = null;
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavGroupComponent, deps: [{ token: i1.Router }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i2.SidebarNavHelper }, { token: i3.SidebarNavGroupService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: SidebarNavGroupComponent, isStandalone: true, selector: "c-sidebar-nav-group", inputs: { item: "item", dropdownMode: "dropdownMode", show: "show" }, host: { properties: { "class": "this.hostClasses" } }, providers: [SidebarNavHelper, SidebarNavGroupService], viewQueries: [{ propertyName: "sidebarNav", first: true, predicate: i0.forwardRef(function () { return SidebarNavComponent; }), descendants: true, read: ElementRef }], ngImport: i0, template: "<a (click)=\"toggleGroup($event)\"\n   [cHtmlAttr]=\"item.attributes\"\n   class=\"nav-link nav-group-toggle\"\n   href>\n  <ng-container *ngTemplateOutlet=\"iconTemplate ; context: {$implicit: item}\" />\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n<c-sidebar-nav\n  (@openClose.done)=\"onAnimationDone($event)\"\n  (@openClose.start)=\"onAnimationStart($event)\"\n  [@openClose]=\"open ? 'open' : 'closed'\"\n  [dropdownMode]=\"dropdownMode\"\n  [groupItems]=\"true\"\n  [navItems]=\"navItems\"\n  [ngStyle]=\"display\"\n/>\n\n<ng-template #iconTemplate let-item>\n  <i *ngIf=\"item?.icon\" [ngClass]=\"item | cSidebarNavIcon\"></i>\n  <ng-template [ngIf]=\"item?.iconComponent\">\n    <svg\n      [cIcon]=\"item.iconComponent?.content\"\n      [customClasses]=\"item | cSidebarNavIcon\"\n      [name]=\"item.iconComponent?.name\"\n    />\n  </ng-template>\n  <span *ngIf=\"!item?.icon && !item?.iconComponent\" [ngClass]=\"item | cSidebarNavIcon\"></span>\n</ng-template>\n", styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"], dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return HtmlAttributesDirective; }), selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "directive", type: i0.forwardRef(function () { return IconDirective; }), selector: "svg[cIcon]", inputs: ["cIcon", "size", "title", "customClasses", "width", "height", "name", "viewBox", "xmlns", "pointer-events", "role"], exportAs: ["cIcon"] }, { kind: "directive", type: i0.forwardRef(function () { return NgTemplateOutlet; }), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(function () { return NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(function () { return NgClass; }), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: i0.forwardRef(function () { return SidebarNavIconPipe; }), name: "cSidebarNavIcon" }, { kind: "pipe", type: i0.forwardRef(function () { return SidebarNavBadgePipe; }), name: "cSidebarNavBadge" }, { kind: "component", type: i0.forwardRef(function () { return SidebarNavComponent; }), selector: "c-sidebar-nav", inputs: ["navItems", "dropdownMode", "groupItems", "compact"] }, { kind: "directive", type: i0.forwardRef(function () { return NgStyle; }), selector: "[ngStyle]", inputs: ["ngStyle"] }], animations: [
            trigger('openClose', [
                state('open', style({
                    height: '*'
                })),
                state('closed', style({
                    height: '0px'
                })),
                transition('open <=> closed', [
                    animate('.15s ease')
                ])
            ])
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav-group', providers: [SidebarNavHelper, SidebarNavGroupService], standalone: true, imports: [
                        HtmlAttributesDirective,
                        IconDirective,
                        NgTemplateOutlet,
                        NgIf,
                        NgClass,
                        SidebarNavIconPipe,
                        SidebarNavBadgePipe,
                        forwardRef(() => SidebarNavComponent),
                        NgStyle
                    ], animations: [
                        trigger('openClose', [
                            state('open', style({
                                height: '*'
                            })),
                            state('closed', style({
                                height: '0px'
                            })),
                            transition('open <=> closed', [
                                animate('.15s ease')
                            ])
                        ])
                    ], template: "<a (click)=\"toggleGroup($event)\"\n   [cHtmlAttr]=\"item.attributes\"\n   class=\"nav-link nav-group-toggle\"\n   href>\n  <ng-container *ngTemplateOutlet=\"iconTemplate ; context: {$implicit: item}\" />\n  <ng-container>{{ item.name }}</ng-container>\n  <span *ngIf=\"helper.hasBadge(item)\" [ngClass]=\"item | cSidebarNavBadge\">{{ item.badge.text }}</span>\n</a>\n<c-sidebar-nav\n  (@openClose.done)=\"onAnimationDone($event)\"\n  (@openClose.start)=\"onAnimationStart($event)\"\n  [@openClose]=\"open ? 'open' : 'closed'\"\n  [dropdownMode]=\"dropdownMode\"\n  [groupItems]=\"true\"\n  [navItems]=\"navItems\"\n  [ngStyle]=\"display\"\n/>\n\n<ng-template #iconTemplate let-item>\n  <i *ngIf=\"item?.icon\" [ngClass]=\"item | cSidebarNavIcon\"></i>\n  <ng-template [ngIf]=\"item?.iconComponent\">\n    <svg\n      [cIcon]=\"item.iconComponent?.content\"\n      [customClasses]=\"item | cSidebarNavIcon\"\n      [name]=\"item.iconComponent?.name\"\n    />\n  </ng-template>\n  <span *ngIf=\"!item?.icon && !item?.iconComponent\" [ngClass]=\"item | cSidebarNavIcon\"></span>\n</ng-template>\n", styles: [".nav-group-toggle{cursor:pointer}.nav-group-items{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.SidebarNavHelper }, { type: i3.SidebarNavGroupService }]; }, propDecorators: { item: [{
                type: Input
            }], dropdownMode: [{
                type: Input
            }], show: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], sidebarNav: [{
                type: ViewChild,
                args: [forwardRef(() => SidebarNavComponent), { read: ElementRef }]
            }] } });
export class SidebarNavComponent {
    constructor(sidebar, helper, router, renderer, hostElement, sidebarService) {
        this.sidebar = sidebar;
        this.helper = helper;
        this.router = router;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.sidebarService = sidebarService;
        this.navItems = [];
        this.dropdownMode = 'path';
        this.role = 'nav';
        this.navItemsArray = [];
    }
    get hostClasses() {
        return {
            'sidebar-nav': !this.groupItems,
            compact: !this.groupItems && !!this.compact
        };
    }
    get sidebarNavGroupItemsClass() {
        return !!this.groupItems;
    }
    ngOnChanges(changes) {
        this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
    }
    hideMobile() {
        // todo: proper scrollIntoView() after NavigationEnd
        if (this.sidebar && this.sidebar.sidebarState.mobile) {
            this.sidebarService.toggle({ toggle: 'visible', sidebar: this.sidebar });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavComponent, deps: [{ token: i4.SidebarComponent, optional: true }, { token: i2.SidebarNavHelper }, { token: i1.Router }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i5.SidebarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: SidebarNavComponent, isStandalone: true, selector: "c-sidebar-nav", inputs: { navItems: "navItems", dropdownMode: "dropdownMode", groupItems: "groupItems", compact: "compact" }, host: { properties: { "class": "this.hostClasses", "class.nav-group-items": "this.sidebarNavGroupItemsClass", "attr.role": "this.role" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngFor=\"let item of navItemsArray\">\n  <ng-container [ngSwitch]=\"helper.itemType(item)\">\n    <c-sidebar-nav-group\n      #rla=\"routerLinkActive\"\n      *ngSwitchCase=\"'group'\"\n      [dropdownMode]=\"dropdownMode\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n      routerLinkActive=\"show\"\n    >\n    </c-sidebar-nav-group>\n    <c-sidebar-nav-divider\n      *ngSwitchCase=\"'divider'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-divider>\n    <c-sidebar-nav-title\n      *ngSwitchCase=\"'title'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-title>\n    <c-sidebar-nav-label\n      *ngSwitchCase=\"'label'\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-label>\n    <ng-container\n      *ngSwitchCase=\"'empty'\">\n    </ng-container>\n    <c-sidebar-nav-link\n      (linkClick)=\"hideMobile()\"\n      *ngSwitchDefault\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n    >\n    </c-sidebar-nav-link>\n  </ng-container>\n</ng-container>\n<ng-content></ng-content>\n", dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }, { kind: "component", type: SidebarNavLinkComponent, selector: "c-sidebar-nav-link", inputs: ["item"], outputs: ["linkClick"] }, { kind: "component", type: SidebarNavLabelComponent, selector: "c-sidebar-nav-label", inputs: ["item"] }, { kind: "component", type: SidebarNavTitleComponent, selector: "c-sidebar-nav-title", inputs: ["item"] }, { kind: "component", type: SidebarNavDividerComponent, selector: "c-sidebar-nav-divider", inputs: ["item"] }, { kind: "component", type: SidebarNavGroupComponent, selector: "c-sidebar-nav-group", inputs: ["item", "dropdownMode", "show"] }, { kind: "pipe", type: SidebarNavItemClassPipe, name: "cSidebarNavItemClass" }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-sidebar-nav', standalone: true, imports: [
                        NgForOf,
                        NgClass,
                        NgSwitch,
                        NgSwitchCase,
                        NgSwitchDefault,
                        HtmlAttributesDirective,
                        SidebarNavLinkComponent,
                        SidebarNavLabelComponent,
                        SidebarNavTitleComponent,
                        SidebarNavDividerComponent,
                        SidebarNavGroupComponent,
                        SidebarNavItemClassPipe,
                        RouterModule
                    ], template: "<ng-container *ngFor=\"let item of navItemsArray\">\n  <ng-container [ngSwitch]=\"helper.itemType(item)\">\n    <c-sidebar-nav-group\n      #rla=\"routerLinkActive\"\n      *ngSwitchCase=\"'group'\"\n      [dropdownMode]=\"dropdownMode\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n      [routerLinkActiveOptions]=\"{exact: true}\"\n      routerLinkActive=\"show\"\n    >\n    </c-sidebar-nav-group>\n    <c-sidebar-nav-divider\n      *ngSwitchCase=\"'divider'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-divider>\n    <c-sidebar-nav-title\n      *ngSwitchCase=\"'title'\"\n      [cHtmlAttr]=\"item.attributes ?? {}\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-title>\n    <c-sidebar-nav-label\n      *ngSwitchCase=\"'label'\"\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\">\n    </c-sidebar-nav-label>\n    <ng-container\n      *ngSwitchCase=\"'empty'\">\n    </ng-container>\n    <c-sidebar-nav-link\n      (linkClick)=\"hideMobile()\"\n      *ngSwitchDefault\n      [item]=\"item\"\n      [ngClass]=\"item | cSidebarNavItemClass\"\n    >\n    </c-sidebar-nav-link>\n  </ng-container>\n</ng-container>\n<ng-content></ng-content>\n" }]
        }], ctorParameters: function () { return [{ type: i4.SidebarComponent, decorators: [{
                    type: Optional
                }] }, { type: i2.SidebarNavHelper }, { type: i1.Router }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i5.SidebarService }]; }, propDecorators: { navItems: [{
                type: Input
            }], dropdownMode: [{
                type: Input
            }], groupItems: [{
                type: Input
            }], compact: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], sidebarNavGroupItemsClass: [{
                type: HostBinding,
                args: ['class.nav-group-items']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi1ncm91cC5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvc2lkZWJhci9zaWRlYmFyLW5hdi9zaWRlYmFyLW5hdi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFrQixLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsT0FBTyxFQUNQLE9BQU8sRUFDUCxJQUFJLEVBQ0osT0FBTyxFQUNQLFFBQVEsRUFDUixZQUFZLEVBQ1osZUFBZSxFQUNmLGdCQUFnQixFQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUlMLFFBQVEsRUFHUixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBVSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFF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QUNILENBQUM7K0dBMUNVLG1CQUFtQjttR0FBbkIsbUJBQW1CLHdWRS9NaEMsd3pDQTBDQSw0Q0ZzSkksT0FBTyxtSEFDUCxPQUFPLG9GQUNQLFFBQVEsNkVBQ1IsWUFBWSxxRkFDWixlQUFlLDhEQUNmLHVCQUF1Qix3R0FDdkIsdUJBQXVCLHlHQUN2Qix3QkFBd0Isa0ZBQ3hCLHdCQUF3QixrRkFDeEIsMEJBQTBCLG9GQTlIakIsd0JBQXdCLHFHQWdJakMsdUJBQXVCLDREQUN2QixZQUFZOzs0RkFHSCxtQkFBbUI7a0JBcEIvQixTQUFTOytCQUNFLGVBQWUsY0FFYixJQUFJLFdBQ1A7d0JBQ1AsT0FBTzt3QkFDUCxPQUFPO3dCQUNQLFFBQVE7d0JBQ1IsWUFBWTt3QkFDWixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3dCQUN2Qix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsWUFBWTtxQkFDYjs7MEJBS0UsUUFBUTs4S0FRRixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBU2hCLHlCQUF5QjtzQkFENUIsV0FBVzt1QkFBQyx1QkFBdUI7Z0JBS1YsSUFBSTtzQkFBN0IsV0FBVzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgTmdDbGFzcyxcbiAgTmdGb3JPZixcbiAgTmdJZixcbiAgTmdTdHlsZSxcbiAgTmdTd2l0Y2gsXG4gIE5nU3dpdGNoQ2FzZSxcbiAgTmdTd2l0Y2hEZWZhdWx0LFxuICBOZ1RlbXBsYXRlT3V0bGV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNpZGViYXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2lkZWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IElOYXZEYXRhIH0gZnJvbSAnLi9zaWRlYmFyLW5hdic7XG5pbXBvcnQgeyBTaWRlYmFyTmF2SGVscGVyIH0gZnJvbSAnLi9zaWRlYmFyLW5hdi5zZXJ2aWNlJztcbmltcG9ydCB7IFNpZGViYXJOYXZHcm91cFNlcnZpY2UgfSBmcm9tICcuL3NpZGViYXItbmF2LWdyb3VwLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkljb25QaXBlIH0gZnJvbSAnLi9zaWRlYmFyLW5hdi1pY29uLnBpcGUnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkJhZGdlUGlwZSB9IGZyb20gJy4vc2lkZWJhci1uYXYtYmFkZ2UucGlwZSc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2TGlua0NvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci1uYXYtbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi1sYWJlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZWJhck5hdkRpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXItbmF2LWRpdmlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGViYXJOYXZJdGVtQ2xhc3NQaXBlIH0gZnJvbSAnLi9zaWRlYmFyLW5hdi1pdGVtLWNsYXNzLnBpcGUnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSB9IGZyb20gJ0Bjb3JldWkvaWNvbnMtYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Mtc2lkZWJhci1uYXYtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLW5hdi1ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtTaWRlYmFyTmF2SGVscGVyLCBTaWRlYmFyTmF2R3JvdXBTZXJ2aWNlXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEh0bWxBdHRyaWJ1dGVzRGlyZWN0aXZlLFxuICAgIEljb25EaXJlY3RpdmUsXG4gICAgTmdUZW1wbGF0ZU91dGxldCxcbiAgICBOZ0lmLFxuICAgIE5nQ2xhc3MsXG4gICAgU2lkZWJhck5hdkljb25QaXBlLFxuICAgIFNpZGViYXJOYXZCYWRnZVBpcGUsXG4gICAgZm9yd2FyZFJlZigoKSA9PiBTaWRlYmFyTmF2Q29tcG9uZW50KSxcbiAgICBOZ1N0eWxlXG4gIF0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG4gICAgICBzdGF0ZSgnb3BlbicsIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAnKidcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJzBweCdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ29wZW4gPD0+IGNsb3NlZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnLjE1cyBlYXNlJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyLFxuICAgIHByaXZhdGUgc2lkZWJhck5hdkdyb3VwU2VydmljZTogU2lkZWJhck5hdkdyb3VwU2VydmljZVxuICApIHtcbiAgICB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlID0gcm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgKSBhcyBPYnNlcnZhYmxlPE5hdmlnYXRpb25FbmQ+O1xuICB9XG5cbiAgQElucHV0KCkgaXRlbTogYW55O1xuICBASW5wdXQoKSBkcm9wZG93bk1vZGU6ICdwYXRoJyB8ICdub25lJyB8ICdjbG9zZScgPSAncGF0aCc7XG4gIEBJbnB1dCgpIHNob3c/OiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25hdi1ncm91cCc6IHRydWUsXG4gICAgICBzaG93OiB0aGlzLm9wZW5cbiAgICB9O1xuICB9XG5cbiAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IFNpZGViYXJOYXZDb21wb25lbnQpLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc2lkZWJhck5hdiE6IEVsZW1lbnRSZWY7XG5cbiAgbmF2aWdhdGlvbkVuZE9ic2VydmFibGU6IE9ic2VydmFibGU8TmF2aWdhdGlvbkVuZD47XG4gIG5hdlN1YnNjcmlwdGlvbiE6IFN1YnNjcmlwdGlvbjtcbiAgbmF2R3JvdXBTdWJzY3JpcHRpb24hOiBTdWJzY3JpcHRpb247XG5cbiAgcHVibGljIG9wZW4hOiBib29sZWFuO1xuICBwdWJsaWMgbmF2SXRlbXM6IElOYXZEYXRhW10gPSBbXTtcbiAgcHVibGljIGRpc3BsYXk6IGFueSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgdGhpcy5uYXZJdGVtcyA9IFsuLi50aGlzLml0ZW0uY2hpbGRyZW5dO1xuXG4gICAgdGhpcy5uYXZTdWJzY3JpcHRpb24gPSB0aGlzLm5hdmlnYXRpb25FbmRPYnNlcnZhYmxlLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duTW9kZSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGNvbnN0IHNhbWVQYXRoID0gdGhpcy5zYW1lUGF0aChldmVudC51cmwpO1xuICAgICAgICB0aGlzLm9wZW5Hcm91cChzYW1lUGF0aCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zYW1lUGF0aCh0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmwpKSB7XG4gICAgICB0aGlzLm9wZW5Hcm91cCh0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hdkdyb3VwU3Vic2NyaXB0aW9uID0gdGhpcy5zaWRlYmFyTmF2R3JvdXBTZXJ2aWNlLnNpZGViYXJOYXZHcm91cFN0YXRlJC5zdWJzY3JpYmUobmV4dCA9PiB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bk1vZGUgPT09ICdjbG9zZScgJiYgbmV4dC5zaWRlYmFyTmF2R3JvdXAgJiYgbmV4dC5zaWRlYmFyTmF2R3JvdXAgIT09IHRoaXMpIHtcbiAgICAgICAgaWYgKG5leHQuc2lkZWJhck5hdkdyb3VwLml0ZW0udXJsLnN0YXJ0c1dpdGgodGhpcy5pdGVtLnVybCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2FtZVBhdGgodGhpcy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsKSkge1xuICAgICAgICAgIHRoaXMub3Blbkdyb3VwKHRydWUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW5Hcm91cChmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzYW1lUGF0aCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpdGVtOicsIHRoaXMuaXRlbS5uYW1lLCB0aGlzLml0ZW0udXJsLCAndXJsOicsIHVybCk7XG4gICAgY29uc3QgaXRlbUFycmF5ID0gdGhpcy5pdGVtLnVybD8uc3BsaXQoJy8nKTtcbiAgICBjb25zdCB1cmxBcnJheSA9IHVybC5zcGxpdCgnLycpO1xuICAgIHJldHVybiBpdGVtQXJyYXk/LmV2ZXJ5KCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSA9PT0gdXJsQXJyYXlbaW5kZXhdLCAndmFsdWU6JywgdmFsdWUsICdpbmRleDonLCBpbmRleCwgdXJsQXJyYXlbaW5kZXhdLCB1cmwpO1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB1cmxBcnJheVtpbmRleF07XG4gICAgfSk7XG4gIH1cblxuICBvcGVuR3JvdXAob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gIH1cblxuICB0b2dnbGVHcm91cCgkZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub3Blbkdyb3VwKCF0aGlzLm9wZW4pO1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuc2lkZWJhck5hdkdyb3VwU2VydmljZS50b2dnbGUoeyBvcGVuOiB0aGlzLm9wZW4sIHNpZGViYXJOYXZHcm91cDogdGhpcyB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdlN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uU3RhcnQoJGV2ZW50OiBBbmltYXRpb25FdmVudCkge1xuICAgIHRoaXMuZGlzcGxheSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9O1xuICAgIGlmICgkZXZlbnQudG9TdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICBjb25zdCBob3N0ID0gdGhpcy5zaWRlYmFyTmF2Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGhvc3QsICdoZWlnaHQnLCBgJHtob3N0WydzY3JvbGxIZWlnaHQnXX1weGApO1xuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRG9uZSgkZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XG4gICAgaWYgKCRldmVudC50b1N0YXRlID09PSAnb3BlbicpIHtcbiAgICAgIGNvbnN0IGhvc3QgPSB0aGlzLnNpZGViYXJOYXYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaG9zdCwgJ2hlaWdodCcsICdhdXRvJyk7XG4gICAgfVxuICAgIGlmICgkZXZlbnQudG9TdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Mtc2lkZWJhci1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdGb3JPZixcbiAgICBOZ0NsYXNzLFxuICAgIE5nU3dpdGNoLFxuICAgIE5nU3dpdGNoQ2FzZSxcbiAgICBOZ1N3aXRjaERlZmF1bHQsXG4gICAgSHRtbEF0dHJpYnV0ZXNEaXJlY3RpdmUsXG4gICAgU2lkZWJhck5hdkxpbmtDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkxhYmVsQ29tcG9uZW50LFxuICAgIFNpZGViYXJOYXZUaXRsZUNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2RGl2aWRlckNvbXBvbmVudCxcbiAgICBTaWRlYmFyTmF2R3JvdXBDb21wb25lbnQsXG4gICAgU2lkZWJhck5hdkl0ZW1DbGFzc1BpcGUsXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhck5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHNpZGViYXI6IFNpZGViYXJDb21wb25lbnQsXG4gICAgcHVibGljIGhlbHBlcjogU2lkZWJhck5hdkhlbHBlcixcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzaWRlYmFyU2VydmljZTogU2lkZWJhclNlcnZpY2VcbiAgKSB7IH1cblxuICBASW5wdXQoKSBuYXZJdGVtcz86IElOYXZEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgZHJvcGRvd25Nb2RlOiAncGF0aCcgfCAnbm9uZScgfCAnY2xvc2UnID0gJ3BhdGgnO1xuICBASW5wdXQoKSBncm91cEl0ZW1zPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY29tcGFjdD86IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnc2lkZWJhci1uYXYnOiAhdGhpcy5ncm91cEl0ZW1zLFxuICAgICAgY29tcGFjdDogIXRoaXMuZ3JvdXBJdGVtcyAmJiAhIXRoaXMuY29tcGFjdFxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5hdi1ncm91cC1pdGVtcycpXG4gIGdldCBzaWRlYmFyTmF2R3JvdXBJdGVtc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ3JvdXBJdGVtcztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICduYXYnO1xuXG4gIHB1YmxpYyBuYXZJdGVtc0FycmF5OiBJTmF2RGF0YVtdID0gW107XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm5hdkl0ZW1zQXJyYXkgPSBBcnJheS5pc0FycmF5KHRoaXMubmF2SXRlbXMpID8gdGhpcy5uYXZJdGVtcy5zbGljZSgpIDogW107XG4gIH1cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpOiB2b2lkIHtcbiAgICAvLyB0b2RvOiBwcm9wZXIgc2Nyb2xsSW50b1ZpZXcoKSBhZnRlciBOYXZpZ2F0aW9uRW5kXG4gICAgaWYgKHRoaXMuc2lkZWJhciAmJiB0aGlzLnNpZGViYXIuc2lkZWJhclN0YXRlLm1vYmlsZSkge1xuICAgICAgdGhpcy5zaWRlYmFyU2VydmljZS50b2dnbGUoeyB0b2dnbGU6ICd2aXNpYmxlJywgc2lkZWJhcjogdGhpcy5zaWRlYmFyIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiPGEgKGNsaWNrKT1cInRvZ2dsZUdyb3VwKCRldmVudClcIlxuICAgW2NIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIlxuICAgY2xhc3M9XCJuYXYtbGluayBuYXYtZ3JvdXAtdG9nZ2xlXCJcbiAgIGhyZWY+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpY29uVGVtcGxhdGUgOyBjb250ZXh0OiB7JGltcGxpY2l0OiBpdGVtfVwiIC8+XG4gIDxuZy1jb250YWluZXI+e3sgaXRlbS5uYW1lIH19PC9uZy1jb250YWluZXI+XG4gIDxzcGFuICpuZ0lmPVwiaGVscGVyLmhhc0JhZGdlKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGNTaWRlYmFyTmF2QmFkZ2VcIj57eyBpdGVtLmJhZGdlLnRleHQgfX08L3NwYW4+XG48L2E+XG48Yy1zaWRlYmFyLW5hdlxuICAoQG9wZW5DbG9zZS5kb25lKT1cIm9uQW5pbWF0aW9uRG9uZSgkZXZlbnQpXCJcbiAgKEBvcGVuQ2xvc2Uuc3RhcnQpPVwib25BbmltYXRpb25TdGFydCgkZXZlbnQpXCJcbiAgW0BvcGVuQ2xvc2VdPVwib3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnXCJcbiAgW2Ryb3Bkb3duTW9kZV09XCJkcm9wZG93bk1vZGVcIlxuICBbZ3JvdXBJdGVtc109XCJ0cnVlXCJcbiAgW25hdkl0ZW1zXT1cIm5hdkl0ZW1zXCJcbiAgW25nU3R5bGVdPVwiZGlzcGxheVwiXG4vPlxuXG48bmctdGVtcGxhdGUgI2ljb25UZW1wbGF0ZSBsZXQtaXRlbT5cbiAgPGkgKm5nSWY9XCJpdGVtPy5pY29uXCIgW25nQ2xhc3NdPVwiaXRlbSB8IGNTaWRlYmFyTmF2SWNvblwiPjwvaT5cbiAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cIml0ZW0/Lmljb25Db21wb25lbnRcIj5cbiAgICA8c3ZnXG4gICAgICBbY0ljb25dPVwiaXRlbS5pY29uQ29tcG9uZW50Py5jb250ZW50XCJcbiAgICAgIFtjdXN0b21DbGFzc2VzXT1cIml0ZW0gfCBjU2lkZWJhck5hdkljb25cIlxuICAgICAgW25hbWVdPVwiaXRlbS5pY29uQ29tcG9uZW50Py5uYW1lXCJcbiAgICAvPlxuICA8L25nLXRlbXBsYXRlPlxuICA8c3BhbiAqbmdJZj1cIiFpdGVtPy5pY29uICYmICFpdGVtPy5pY29uQ29tcG9uZW50XCIgW25nQ2xhc3NdPVwiaXRlbSB8IGNTaWRlYmFyTmF2SWNvblwiPjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG4iLCI8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5hdkl0ZW1zQXJyYXlcIj5cbiAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaGVscGVyLml0ZW1UeXBlKGl0ZW0pXCI+XG4gICAgPGMtc2lkZWJhci1uYXYtZ3JvdXBcbiAgICAgICNybGE9XCJyb3V0ZXJMaW5rQWN0aXZlXCJcbiAgICAgICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCJcbiAgICAgIFtkcm9wZG93bk1vZGVdPVwiZHJvcGRvd25Nb2RlXCJcbiAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGNTaWRlYmFyTmF2SXRlbUNsYXNzXCJcbiAgICAgIFtyb3V0ZXJMaW5rQWN0aXZlT3B0aW9uc109XCJ7ZXhhY3Q6IHRydWV9XCJcbiAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJzaG93XCJcbiAgICA+XG4gICAgPC9jLXNpZGViYXItbmF2LWdyb3VwPlxuICAgIDxjLXNpZGViYXItbmF2LWRpdmlkZXJcbiAgICAgICpuZ1N3aXRjaENhc2U9XCInZGl2aWRlcidcIlxuICAgICAgW2NIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXMgPz8ge31cIlxuICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICBbbmdDbGFzc109XCJpdGVtIHwgY1NpZGViYXJOYXZJdGVtQ2xhc3NcIj5cbiAgICA8L2Mtc2lkZWJhci1uYXYtZGl2aWRlcj5cbiAgICA8Yy1zaWRlYmFyLW5hdi10aXRsZVxuICAgICAgKm5nU3dpdGNoQ2FzZT1cIid0aXRsZSdcIlxuICAgICAgW2NIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXMgPz8ge31cIlxuICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICBbbmdDbGFzc109XCJpdGVtIHwgY1NpZGViYXJOYXZJdGVtQ2xhc3NcIj5cbiAgICA8L2Mtc2lkZWJhci1uYXYtdGl0bGU+XG4gICAgPGMtc2lkZWJhci1uYXYtbGFiZWxcbiAgICAgICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCJcbiAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGNTaWRlYmFyTmF2SXRlbUNsYXNzXCI+XG4gICAgPC9jLXNpZGViYXItbmF2LWxhYmVsPlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ1N3aXRjaENhc2U9XCInZW1wdHknXCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGMtc2lkZWJhci1uYXYtbGlua1xuICAgICAgKGxpbmtDbGljayk9XCJoaWRlTW9iaWxlKClcIlxuICAgICAgKm5nU3dpdGNoRGVmYXVsdFxuICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICBbbmdDbGFzc109XCJpdGVtIHwgY1NpZGViYXJOYXZJdGVtQ2xhc3NcIlxuICAgID5cbiAgICA8L2Mtc2lkZWJhci1uYXYtbGluaz5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiJdfQ==