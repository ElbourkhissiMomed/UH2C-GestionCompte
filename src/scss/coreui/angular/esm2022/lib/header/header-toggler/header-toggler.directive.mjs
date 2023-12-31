import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderTogglerDirective {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.headerToggler = true;
        /**
         * Default role for header-toggler. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
        /**
         * Default aria-label attr for header-toggler. [docs]
         * @type string
         * @default 'Toggle navigation'
         */
        this.ariaLabel = 'Toggle navigation';
    }
    addDefaultIcon() {
        const span = this.renderer.createElement('span');
        this.renderer.addClass(span, 'header-toggler-icon');
        this.renderer.appendChild(this.hostElement.nativeElement, span);
    }
    ngAfterContentInit() {
        this.hasContent = this.hostElement.nativeElement.childNodes.length > 0;
        if (!this.hasContent) {
            this.addDefaultIcon();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderTogglerDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: HeaderTogglerDirective, isStandalone: true, selector: "[cHeaderToggler]", inputs: { type: "type", ariaLabel: "ariaLabel" }, host: { properties: { "class.header-toggler": "this.headerToggler", "attr.type": "this.type", "attr.aria-label": "this.ariaLabel" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderTogglerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cHeaderToggler]',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { headerToggler: [{
                type: HostBinding,
                args: ['class.header-toggler']
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRvZ2dsZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9oZWFkZXIvaGVhZGVyLXRvZ2dsZXIvaGVhZGVyLXRvZ2dsZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBTXZHLE1BQU0sT0FBTyxzQkFBc0I7SUFvQmpDLFlBQ1UsUUFBbUIsRUFDbkIsV0FBdUI7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXBCSSxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUMxRDs7OztXQUlHO1FBRU0sU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUN6Qjs7OztXQUlHO1FBRU0sY0FBUyxHQUFHLG1CQUFtQixDQUFDO0lBT3JDLENBQUM7SUFFTCxjQUFjO1FBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7K0dBcENVLHNCQUFzQjttR0FBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt5SEFHc0MsYUFBYTtzQkFBakQsV0FBVzt1QkFBQyxzQkFBc0I7Z0JBTzFCLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFPRyxTQUFTO3NCQURqQixXQUFXO3VCQUFDLGlCQUFpQjs7c0JBQzdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjSGVhZGVyVG9nZ2xlcl0nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlclRvZ2dsZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhlYWRlci10b2dnbGVyJykgaGVhZGVyVG9nZ2xlciA9IHRydWU7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHJvbGUgZm9yIGhlYWRlci10b2dnbGVyLiBbZG9jc11cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZWZhdWx0ICdidXR0b24nXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIudHlwZScpXG4gIEBJbnB1dCgpIHR5cGUgPSAnYnV0dG9uJztcbiAgLyoqXG4gICAqIERlZmF1bHQgYXJpYS1sYWJlbCBhdHRyIGZvciBoZWFkZXItdG9nZ2xlci4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnVG9nZ2xlIG5hdmlnYXRpb24nXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1sYWJlbCcpXG4gIEBJbnB1dCgpIGFyaWFMYWJlbCA9ICdUb2dnbGUgbmF2aWdhdGlvbic7XG5cbiAgcHJpdmF0ZSBoYXNDb250ZW50ITogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApIHsgfVxuXG4gIGFkZERlZmF1bHRJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IHNwYW4gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNwYW4sICdoZWFkZXItdG9nZ2xlci1pY29uJyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHNwYW4pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaGFzQ29udGVudCA9IHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDA7XG4gICAgaWYgKCF0aGlzLmhhc0NvbnRlbnQpIHtcbiAgICAgIHRoaXMuYWRkRGVmYXVsdEljb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==