import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderTextComponent {
    constructor() {
        this.headerTextClass = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: HeaderTextComponent, isStandalone: true, selector: "c-header-text, [cHeaderText]", host: { properties: { "class.header-text": "this.headerTextClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderTextComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-header-text, [cHeaderText]',
                    template: `<ng-content></ng-content>`,
                    standalone: true
                }]
        }], propDecorators: { headerTextClass: [{
                type: HostBinding,
                args: ['class.header-text']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9oZWFkZXIvaGVhZGVyLXRleHQvaGVhZGVyLXRleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU92RCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBTW9DLG9CQUFlLEdBQUcsSUFBSSxDQUFDO0tBQzFEOytHQUZZLG1CQUFtQjttR0FBbkIsbUJBQW1CLCtKQUhwQiwyQkFBMkI7OzRGQUcxQixtQkFBbUI7a0JBTC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUVtQyxlQUFlO3NCQUFoRCxXQUFXO3VCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1oZWFkZXItdGV4dCwgW2NIZWFkZXJUZXh0XScsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyVGV4dENvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGVhZGVyLXRleHQnKSBoZWFkZXJUZXh0Q2xhc3MgPSB0cnVlO1xufVxuIl19