import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FooterComponent {
    constructor() {
        /**
         * Default role for footer. [docs]
         * @type string
         * @default 'footer'
         */
        this.role = 'footer';
    }
    get getClasses() {
        return {
            footer: true,
            [`footer-${this.position}`]: !!this.position,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: FooterComponent, isStandalone: true, selector: "c-footer, [cFooter]", inputs: { position: "position", role: "role" }, host: { properties: { "attr.role": "this.role", "class": "this.getClasses" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-footer, [cFooter]',
                    template: `<ng-content></ng-content>`,
                    standalone: true
                }]
        }], propDecorators: { position: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], getClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVM5RCxNQUFNLE9BQU8sZUFBZTtJQUw1QjtRQVdFOzs7O1dBSUc7UUFFdUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztLQVMzQztJQVBDLElBQ0ksVUFBVTtRQUNaLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSTtZQUNaLENBQUMsVUFBVSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7U0FDN0MsQ0FBQztJQUNKLENBQUM7K0dBcEJVLGVBQWU7bUdBQWYsZUFBZSwrTUFIaEIsMkJBQTJCOzs0RkFHMUIsZUFBZTtrQkFMM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBTVUsUUFBUTtzQkFBaEIsS0FBSztnQkFPb0IsSUFBSTtzQkFEN0IsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxXQUFXO2dCQUdwQixVQUFVO3NCQURiLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBvc2l0aW9ucyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtZm9vdGVyLCBbY0Zvb3Rlcl0nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBQbGFjZSBmb290ZXIgaW4gbm9uLXN0YXRpYyBwb3NpdGlvbnMuIFtkb2NzXVxuICAgKiBAdHlwZSBQb3NpdGlvbnNcbiAgICovXG4gIEBJbnB1dCgpIHBvc2l0aW9uPzogUG9zaXRpb25zO1xuICAvKipcbiAgICogRGVmYXVsdCByb2xlIGZvciBmb290ZXIuIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ2Zvb3RlcidcbiAgICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcm9sZSA9ICdmb290ZXInO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgZ2V0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBmb290ZXI6IHRydWUsXG4gICAgICBbYGZvb3Rlci0ke3RoaXMucG9zaXRpb259YF06ICEhdGhpcy5wb3NpdGlvbixcbiAgICB9O1xuICB9XG59XG4iXX0=