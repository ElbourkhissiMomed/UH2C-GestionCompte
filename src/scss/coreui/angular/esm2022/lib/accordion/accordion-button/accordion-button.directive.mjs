import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AccordionButtonDirective {
    constructor() {
        /**
        * Default type for cAccordionButton. [docs]
         * @type string
         * @default 'button'
         */
        this.type = 'button';
    }
    get hostClasses() {
        return {
            'accordion-button': true,
            collapsed: this.collapsed
        };
    }
    get ariaExpanded() {
        return !this.collapsed;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: AccordionButtonDirective, isStandalone: true, selector: "[cAccordionButton]", inputs: { collapsed: "collapsed", type: "type" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses", "attr.aria-expanded": "this.ariaExpanded" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cAccordionButton]',
                    standalone: true
                }]
        }], propDecorators: { collapsed: [{
                type: Input
            }], type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], ariaExpanded: [{
                type: HostBinding,
                args: ['attr.aria-expanded']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWJ1dHRvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24tYnV0dG9uL2FjY29yZGlvbi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNOUQsTUFBTSxPQUFPLHdCQUF3QjtJQUpyQztRQVlFOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsUUFBUSxDQUFDO0tBYTFCO0lBWEMsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUMsWUFBWTtRQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QixDQUFDOytHQTFCVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qjs7NEZBQXhCLHdCQUF3QjtrQkFKcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBT1UsU0FBUztzQkFBakIsS0FBSztnQkFRRyxJQUFJO3NCQURaLFdBQVc7dUJBQUMsV0FBVzs7c0JBQ3ZCLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBUW1CLFlBQVk7c0JBQWxELFdBQVc7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NBY2NvcmRpb25CdXR0b25dJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25CdXR0b25EaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGFjY29yZGlvbiBidXR0b24gY29sbGFwc2VkIHN0YXRlLiBVc2UgaW4gYWNjb3JkaW9uSGVhZGVyVGVtcGxhdGUuIFtkb2NzXVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBjb2xsYXBzZWQhOiBib29sZWFuO1xuXG4gIC8qKlxuICAqIERlZmF1bHQgdHlwZSBmb3IgY0FjY29yZGlvbkJ1dHRvbi4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVmYXVsdCAnYnV0dG9uJ1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnR5cGUnKVxuICBASW5wdXQoKSB0eXBlID0gJ2J1dHRvbic7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnYWNjb3JkaW9uLWJ1dHRvbic6IHRydWUsXG4gICAgICBjb2xsYXBzZWQ6IHRoaXMuY29sbGFwc2VkXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgZ2V0IGFyaWFFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuY29sbGFwc2VkO1xuICB9XG59XG4iXX0=