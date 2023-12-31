import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NavLinkDirective {
    constructor() {
        /**
         * Sets .nav-link class to the host. [docs]
         * @type boolean
         * @default true
         */
        this.cNavLink = true;
        /**
         * Set disabled attr for the host element. [docs]
         * @type boolean
         */
        this.disabled = false;
    }
    get ariaCurrent() {
        return this.active ? 'page' : null;
    }
    get isDisabled() {
        return this.disabled || null;
    }
    get attrDisabled() {
        return this.disabled ? '' : null;
    }
    ;
    get getTabindex() {
        return this.disabled ? '-1' : null;
    }
    get getCursorStyle() {
        return this.disabled ? null : 'pointer';
    }
    get hostClasses() {
        return {
            'nav-link': this.cNavLink,
            disabled: this.disabled,
            active: this.active
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavLinkDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: NavLinkDirective, isStandalone: true, selector: "[cNavLink]", inputs: { cNavLink: ["cNavLink", "cNavLink", booleanAttribute], active: "active", disabled: ["disabled", "disabled", booleanAttribute] }, host: { properties: { "attr.aria-current": "this.ariaCurrent", "attr.aria-disabled": "this.isDisabled", "attr.disabled": "this.attrDisabled", "attr.tabindex": "this.getTabindex", "style.cursor": "this.getCursorStyle", "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavLinkDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavLink]',
                    standalone: true
                }]
        }], propDecorators: { cNavLink: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], isDisabled: [{
                type: HostBinding,
                args: ['attr.aria-disabled']
            }], attrDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }], getTabindex: [{
                type: HostBinding,
                args: ['attr.tabindex']
            }], getCursorStyle: [{
                type: HostBinding,
                args: ['style.cursor']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9uYXYvbmF2LWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNaEYsTUFBTSxPQUFPLGdCQUFnQjtJQUo3QjtRQU1FOzs7O1dBSUc7UUFDcUMsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFPMUU7OztXQUdHO1FBQ3FDLGFBQVEsR0FBcUIsS0FBSyxDQUFDO0tBbUM1RTtJQWpDQyxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUNJLFVBQVU7UUFDWixPQUFnQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBQUEsQ0FBQztJQUVGLElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVELElBQ0ksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7K0dBcERVLGdCQUFnQjttR0FBaEIsZ0JBQWdCLDJGQU9QLGdCQUFnQix3REFXaEIsZ0JBQWdCOzs0RkFsQnpCLGdCQUFnQjtrQkFKNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQVF5QyxRQUFRO3NCQUEvQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU03QixNQUFNO3NCQUFkLEtBQUs7Z0JBS2tDLFFBQVE7c0JBQS9DLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBR2xDLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxtQkFBbUI7Z0JBTTVCLFVBQVU7c0JBRGIsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBTTdCLFlBQVk7c0JBRGYsV0FBVzt1QkFBQyxlQUFlO2dCQU14QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsZUFBZTtnQkFNeEIsY0FBYztzQkFEakIsV0FBVzt1QkFBQyxjQUFjO2dCQU12QixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5BdHRyaWJ1dGUsIERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjTmF2TGlua10nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIE5hdkxpbmtEaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBTZXRzIC5uYXYtbGluayBjbGFzcyB0byB0aGUgaG9zdC4gW2RvY3NdXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGNOYXZMaW5rOiBzdHJpbmcgfCBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBhY3RpdmUgc3RhdGUgZm9yIHRoZSBjb21wb25lbnQuIFtkb2NzXVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmU/OiBib29sZWFuO1xuICAvKipcbiAgICogU2V0IGRpc2FibGVkIGF0dHIgZm9yIHRoZSBob3N0IGVsZW1lbnQuIFtkb2NzXVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgZGlzYWJsZWQ6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1jdXJyZW50JylcbiAgZ2V0IGFyaWFDdXJyZW50KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZSA/ICdwYWdlJyA6IG51bGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICByZXR1cm4gPGJvb2xlYW4+dGhpcy5kaXNhYmxlZCB8fCBudWxsO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRpc2FibGVkJylcbiAgZ2V0IGF0dHJEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCA/ICcnIDogbnVsbDtcbiAgfTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxuICBnZXQgZ2V0VGFiaW5kZXgoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnLTEnIDogbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuY3Vyc29yJylcbiAgZ2V0IGdldEN1cnNvclN0eWxlKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkID8gbnVsbCA6ICdwb2ludGVyJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25hdi1saW5rJzogdGhpcy5jTmF2TGluayxcbiAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgYWN0aXZlOiB0aGlzLmFjdGl2ZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==