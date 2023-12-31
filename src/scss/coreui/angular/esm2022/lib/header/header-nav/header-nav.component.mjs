import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderNavComponent {
    constructor() {
        /**
         * Default role for header-nav. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
        this.headerNavClass = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: HeaderNavComponent, isStandalone: true, selector: "c-header-nav", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.header-nav": "this.headerNavClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-header-nav', template: `<ng-content></ng-content>`, standalone: true }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], headerNavClass: [{
                type: HostBinding,
                args: ['class.header-nav']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2hlYWRlci9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFROUQsTUFBTSxPQUFPLGtCQUFrQjtJQU4vQjtRQU9FOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsWUFBWSxDQUFDO1FBRUksbUJBQWMsR0FBRyxJQUFJLENBQUM7S0FDeEQ7K0dBVlksa0JBQWtCO21HQUFsQixrQkFBa0IsaU1BSm5CLDJCQUEyQjs7NEZBSTFCLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxjQUFjLFlBQ2QsMkJBQTJCLGNBRXpCLElBQUk7OEJBU1AsSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLO2dCQUUyQixjQUFjO3NCQUE5QyxXQUFXO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtaGVhZGVyLW5hdicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci1uYXYuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJOYXZDb21wb25lbnQge1xuICAvKipcbiAgICogRGVmYXVsdCByb2xlIGZvciBoZWFkZXItbmF2LiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICduYXZpZ2F0aW9uJ1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBASW5wdXQoKSByb2xlID0gJ25hdmlnYXRpb24nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGVhZGVyLW5hdicpIGhlYWRlck5hdkNsYXNzID0gdHJ1ZTtcbn1cbiJdfQ==