import { Component, HostBinding, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import * as i0 from "@angular/core";
export class PaginationComponent {
    constructor() {
        /**
         * Set the alignment of pagination components.
         * @values 'start', 'center', 'end'
         */
        this.align = '';
        /**
         * Default role for pagination. [docs]
         * @type string
         * @default 'navigation'
         */
        this.role = 'navigation';
    }
    get paginationClass() {
        return {
            pagination: true,
            [`pagination-${this.size}`]: !!this.size,
            [`justify-content-${this.align}`]: !!this.align
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: PaginationComponent, isStandalone: true, selector: "c-pagination", inputs: { align: "align", size: "size", role: "role" }, host: { properties: { "attr.role": "this.role" } }, ngImport: i0, template: "<ul [ngClass]=\"paginationClass\">\n  <ng-content></ng-content>\n</ul>\n", dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-pagination', standalone: true, imports: [NgClass], template: "<ul [ngClass]=\"paginationClass\">\n  <ng-content></ng-content>\n</ul>\n" }]
        }], propDecorators: { align: [{
                type: Input
            }], size: [{
                type: Input
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcGFnaW5hdGlvbi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFRMUMsTUFBTSxPQUFPLG1CQUFtQjtJQU5oQztRQVFFOzs7V0FHRztRQUNNLFVBQUssR0FBb0MsRUFBRSxDQUFDO1FBTXJEOzs7O1dBSUc7UUFFTSxTQUFJLEdBQUcsWUFBWSxDQUFDO0tBVTlCO0lBUkMsSUFBSSxlQUFlO1FBQ2pCLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSTtZQUNoQixDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3hDLENBQUMsbUJBQW1CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztTQUNoRCxDQUFDO0lBQ0osQ0FBQzsrR0ExQlUsbUJBQW1CO21HQUFuQixtQkFBbUIsb0xDVGhDLDBFQUdBLDRDRElZLE9BQU87OzRGQUVOLG1CQUFtQjtrQkFOL0IsU0FBUzsrQkFDRSxjQUFjLGNBRVosSUFBSSxXQUNQLENBQUMsT0FBTyxDQUFDOzhCQVFULEtBQUs7c0JBQWIsS0FBSztnQkFLRyxJQUFJO3NCQUFaLEtBQUs7Z0JBT0csSUFBSTtzQkFEWixXQUFXO3VCQUFDLFdBQVc7O3NCQUN2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IHtcblxuICAvKipcbiAgICogU2V0IHRoZSBhbGlnbm1lbnQgb2YgcGFnaW5hdGlvbiBjb21wb25lbnRzLlxuICAgKiBAdmFsdWVzICdzdGFydCcsICdjZW50ZXInLCAnZW5kJ1xuICAgKi9cbiAgQElucHV0KCkgYWxpZ246ICdzdGFydCcgfCAnY2VudGVyJyB8ICdlbmQnIHwgJycgPSAnJztcbiAgLyoqXG4gICAqIFNpemUgdGhlIGNvbXBvbmVudCBzbWFsbCBvciBsYXJnZS5cbiAgICogQHZhbHVlcyAnc20nLCAnbGcnXG4gICAqL1xuICBASW5wdXQoKSBzaXplPzogJ3NtJyB8ICdsZyc7XG4gIC8qKlxuICAgKiBEZWZhdWx0IHJvbGUgZm9yIHBhZ2luYXRpb24uIFtkb2NzXVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlZmF1bHQgJ25hdmlnYXRpb24nXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIEBJbnB1dCgpIHJvbGUgPSAnbmF2aWdhdGlvbic7XG5cbiAgZ2V0IHBhZ2luYXRpb25DbGFzcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgICAgW2BwYWdpbmF0aW9uLSR7dGhpcy5zaXplfWBdOiAhIXRoaXMuc2l6ZSxcbiAgICAgIFtganVzdGlmeS1jb250ZW50LSR7dGhpcy5hbGlnbn1gXTogISF0aGlzLmFsaWduXG4gICAgfTtcbiAgfVxuXG59XG4iLCI8dWwgW25nQ2xhc3NdPVwicGFnaW5hdGlvbkNsYXNzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvdWw+XG4iXX0=