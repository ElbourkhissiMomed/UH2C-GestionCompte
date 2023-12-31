import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class HeaderBrandComponent {
    constructor() {
        /**
         * Default role for header-brand. [docs]
         * @type string
         * @default 'button'
         */
        this.role = 'button';
        this.headerBrandClass = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderBrandComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: HeaderBrandComponent, isStandalone: true, selector: "c-header-brand", inputs: { role: "role" }, host: { properties: { "attr.role": "this.role", "class.header-brand": "this.headerBrandClass" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HeaderBrandComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-header-brand',
                    template: `<ng-content></ng-content>`,
                    standalone: true
                }]
        }], propDecorators: { role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], headerBrandClass: [{
                type: HostBinding,
                args: ['class.header-brand']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLWJyYW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvaGVhZGVyL2hlYWRlci1icmFuZC9oZWFkZXItYnJhbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLG9CQUFvQjtJQUxqQztRQU1FOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsUUFBUSxDQUFDO1FBRVUscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0tBQzVEOytHQVZZLG9CQUFvQjttR0FBcEIsb0JBQW9CLHVNQUhyQiwyQkFBMkI7OzRGQUcxQixvQkFBb0I7a0JBTGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQVFVLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFFNkIsZ0JBQWdCO3NCQUFsRCxXQUFXO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtaGVhZGVyLWJyYW5kJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJCcmFuZENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHJvbGUgZm9yIGhlYWRlci1icmFuZC4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnYnV0dG9uJ1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKVxuICBASW5wdXQoKSByb2xlID0gJ2J1dHRvbic7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oZWFkZXItYnJhbmQnKSBoZWFkZXJCcmFuZENsYXNzID0gdHJ1ZTtcbn1cbiJdfQ==