import { booleanAttribute, Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NavbarNavComponent {
    constructor() {
        /**
         * Enable vertical scrolling of a collapsed navbar toggleable contents.
         * @type boolean
         */
        this.scroll = false;
    }
    get hostClasses() {
        return {
            'navbar-nav': true,
            'navbar-nav-scroll': this.scroll
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: NavbarNavComponent, isStandalone: true, selector: "c-navbar-nav", inputs: { scroll: ["scroll", "scroll", booleanAttribute] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarNavComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-navbar-nav',
                    template: '<ng-content></ng-content>',
                    standalone: true
                }]
        }], propDecorators: { scroll: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL25hdmJhci9uYXZiYXItbmF2L25hdmJhci1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPaEYsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU9FOzs7V0FHRztRQUNxQyxXQUFNLEdBQXFCLEtBQUssQ0FBQztLQVUxRTtJQVJDLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQixtQkFBbUIsRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNqQyxDQUFDO0lBQ0osQ0FBQzsrR0FkVSxrQkFBa0I7bUdBQWxCLGtCQUFrQix1RkFNVCxnQkFBZ0Isb0ZBVDFCLDJCQUEyQjs7NEZBRzFCLGtCQUFrQjtrQkFMOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQU95QyxNQUFNO3NCQUE3QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUdsQyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtbmF2YmFyLW5hdicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFyTmF2Q29tcG9uZW50IHtcblxuICAvKipcbiAgICogRW5hYmxlIHZlcnRpY2FsIHNjcm9sbGluZyBvZiBhIGNvbGxhcHNlZCBuYXZiYXIgdG9nZ2xlYWJsZSBjb250ZW50cy5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHNjcm9sbDogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25hdmJhci1uYXYnOiB0cnVlLFxuICAgICAgJ25hdmJhci1uYXYtc2Nyb2xsJzogdGhpcy5zY3JvbGxcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==