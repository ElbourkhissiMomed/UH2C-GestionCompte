import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class NavbarTogglerDirective {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.navbarToggler = true;
        /**
         * Default type for navbar-toggler. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
        /**
         * Default aria-label attr for navbar-toggler. [docs]
         * @type string
         * @default 'Toggle navigation'
         */
        this.ariaLabel = 'Toggle navigation';
    }
    handleClick() {
        this.collapseRef?.toggle(!this.collapseRef?.visible);
    }
    addDefaultIcon() {
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'navbar-toggler-icon');
        this.renderer.appendChild(this.hostElement.nativeElement, span);
    }
    ngAfterContentInit() {
        this.hasContent = this.hostElement.nativeElement.childNodes.length;
        if (!this.hasContent) {
            this.addDefaultIcon();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarTogglerDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: NavbarTogglerDirective, isStandalone: true, selector: "[cNavbarToggler]", inputs: { collapseRef: ["cNavbarToggler", "collapseRef"], type: "type", ariaLabel: "ariaLabel" }, host: { listeners: { "click": "handleClick($event)" }, properties: { "class.navbar-toggler": "this.navbarToggler", "attr.type": "this.type", "attr.aria-label": "this.ariaLabel" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarTogglerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavbarToggler]',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { collapseRef: [{
                type: Input,
                args: ['cNavbarToggler']
            }], navbarToggler: [{
                type: HostBinding,
                args: ['class.navbar-toggler']
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], ariaLabel: [{
                type: HostBinding,
                args: ['attr.aria-label']
            }, {
                type: Input
            }], handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLXRvZ2dsZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9uYXZiYXIvbmF2YmFyLXRvZ2dsZXIvbmF2YmFyLXRvZ2dsZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFjLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQU9ySCxNQUFNLE9BQU8sc0JBQXNCO0lBeUJqQyxZQUNVLFFBQW1CLEVBQ25CLFdBQXVCO1FBRHZCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFwQkksa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUQ7Ozs7V0FJRztRQUVNLFNBQUksR0FBRyxRQUFRLENBQUM7UUFDekI7Ozs7V0FJRztRQUVNLGNBQVMsR0FBRyxtQkFBbUIsQ0FBQztJQU9yQyxDQUFDO0lBR0wsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBaUIsQ0FBQztRQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOytHQTlDVSxzQkFBc0I7bUdBQXRCLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjtrQkFKbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7eUhBTzBCLFdBQVc7c0JBQW5DLEtBQUs7dUJBQUMsZ0JBQWdCO2dCQUNjLGFBQWE7c0JBQWpELFdBQVc7dUJBQUMsc0JBQXNCO2dCQU8xQixJQUFJO3NCQURaLFdBQVc7dUJBQUMsV0FBVzs7c0JBQ3ZCLEtBQUs7Z0JBT0csU0FBUztzQkFEakIsV0FBVzt1QkFBQyxpQkFBaUI7O3NCQUM3QixLQUFLO2dCQVVOLFdBQVc7c0JBRFYsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxhcHNlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY29sbGFwc2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY05hdmJhclRvZ2dsZXJdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJUb2dnbGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gbmF2YmFyIGNvbGxhcHNlIGVsZW1lbnQgKHZpYSAjIHRlbXBsYXRlIHZhcmlhYmxlKSAuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ2J1dHRvbidcbiAgICovXG4gIEBJbnB1dCgnY05hdmJhclRvZ2dsZXInKSBjb2xsYXBzZVJlZj86IENvbGxhcHNlRGlyZWN0aXZlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm5hdmJhci10b2dnbGVyJykgbmF2YmFyVG9nZ2xlciA9IHRydWU7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHR5cGUgZm9yIG5hdmJhci10b2dnbGVyLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdidXR0b24nXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudHlwZScpXG4gIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcbiAgLyoqXG4gICAqIERlZmF1bHQgYXJpYS1sYWJlbCBhdHRyIGZvciBuYXZiYXItdG9nZ2xlci4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnVG9nZ2xlIG5hdmlnYXRpb24nXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gIEBJbnB1dCgpIGFyaWFMYWJlbCA9ICdUb2dnbGUgbmF2aWdhdGlvbic7XG5cbiAgcHJpdmF0ZSBoYXNDb250ZW50ITogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5jb2xsYXBzZVJlZj8udG9nZ2xlKCF0aGlzLmNvbGxhcHNlUmVmPy52aXNpYmxlKTtcbiAgfVxuXG4gIGFkZERlZmF1bHRJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IHNwYW4gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNwYW4sICduYXZiYXItdG9nZ2xlci1pY29uJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHNwYW4pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaGFzQ29udGVudCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCBhcyBib29sZWFuO1xuICAgIGlmICghdGhpcy5oYXNDb250ZW50KSB7XG4gICAgICB0aGlzLmFkZERlZmF1bHRJY29uKCk7XG4gICAgfVxuICB9XG59XG4iXX0=