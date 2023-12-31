import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class NavbarBrandDirective {
    constructor() {
        this.navbarBrand = true;
        this.role = 'button';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarBrandDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: NavbarBrandDirective, isStandalone: true, selector: "[cNavbarBrand]", host: { properties: { "class.navbar-brand": "this.navbarBrand", "attr.role": "this.role" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: NavbarBrandDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cNavbarBrand]',
                    standalone: true
                }]
        }], propDecorators: { navbarBrand: [{
                type: HostBinding,
                args: ['class.navbar-brand']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLWJyYW5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbmF2YmFyL25hdmJhci1icmFuZC9uYXZiYXItYnJhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU12RCxNQUFNLE9BQU8sb0JBQW9CO0lBSmpDO1FBTXFDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLFNBQUksR0FBRyxRQUFRLENBQUM7S0FFM0M7K0dBTFksb0JBQW9CO21HQUFwQixvQkFBb0I7OzRGQUFwQixvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUdvQyxXQUFXO3NCQUE3QyxXQUFXO3VCQUFDLG9CQUFvQjtnQkFDUCxJQUFJO3NCQUE3QixXQUFXO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjTmF2YmFyQnJhbmRdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJCcmFuZERpcmVjdGl2ZSB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYXZiYXItYnJhbmQnKSBuYXZiYXJCcmFuZCA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICdidXR0b24nO1xuXG59XG4iXX0=