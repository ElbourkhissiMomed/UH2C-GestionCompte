import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalDialogComponent {
    get hostClasses() {
        return {
            'modal-dialog': true,
            'modal-dialog-centered': this.alignment === 'center',
            'modal-fullscreen': this.fullscreen === true,
            [`modal-fullscreen-${this.fullscreen}-down`]: this.fullscreen,
            'modal-dialog-scrollable': this.scrollable,
            [`modal-${this.size}`]: this.size
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ModalDialogComponent, isStandalone: true, selector: "c-modal-dialog", inputs: { alignment: "alignment", fullscreen: "fullscreen", scrollable: "scrollable", size: "size" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-modal-dialog', template: '<ng-content></ng-content>', standalone: true, styles: [":host{display:block}:host.modal-dialog-centered{display:flex}\n"] }]
        }], propDecorators: { alignment: [{
                type: Input
            }], fullscreen: [{
                type: Input
            }], scrollable: [{
                type: Input
            }], size: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvbW9kYWwvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVE5RCxNQUFNLE9BQU8sb0JBQW9CO0lBcUIvQixJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsY0FBYyxFQUFFLElBQUk7WUFDcEIsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRO1lBQ3BELGtCQUFrQixFQUFFLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSTtZQUM1QyxDQUFDLG9CQUFvQixJQUFJLENBQUMsVUFBVSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUM3RCx5QkFBeUIsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMxQyxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDbEMsQ0FBQztJQUNKLENBQUM7K0dBL0JVLG9CQUFvQjttR0FBcEIsb0JBQW9CLHVPQUpyQiwyQkFBMkI7OzRGQUkxQixvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UsZ0JBQWdCLFlBQ2hCLDJCQUEyQixjQUV6QixJQUFJOzhCQU9QLFNBQVM7c0JBQWpCLEtBQUs7Z0JBS0csVUFBVTtzQkFBbEIsS0FBSztnQkFLRyxVQUFVO3NCQUFsQixLQUFLO2dCQUlHLElBQUk7c0JBQVosS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtbW9kYWwtZGlhbG9nJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxEaWFsb2dDb21wb25lbnQge1xuICAvKipcbiAgICogQWxpZ24gdGhlIG1vZGFsIGluIHRoZSBjZW50ZXIgb3IgdG9wIG9mIHRoZSBzY3JlZW4uXG4gICAqIEB0eXBlIHsndG9wJyB8ICdjZW50ZXInfVxuICAgKi9cbiAgQElucHV0KCkgYWxpZ25tZW50PzogJ3RvcCcgfCAnY2VudGVyJztcbiAgLyoqXG4gICAqIFNldCBtb2RhbCB0byBjb3ZlcnMgdGhlIGVudGlyZSB1c2VyIHZpZXdwb3J0LlxuICAgKiBAdHlwZSB7Ym9vbGVhbiB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJ31cbiAgICovXG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW4/OiBib29sZWFuIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuICAvKipcbiAgICogRG9lcyB0aGUgbW9kYWwgZGlhbG9nIGl0c2VsZiBzY3JvbGwsIG9yIGRvZXMgdGhlIHdob2xlIGRpYWxvZyBzY3JvbGwgd2l0aGluIHRoZSB3aW5kb3cuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIHNjcm9sbGFibGU/OiBib29sZWFuO1xuICAvKipcbiAgICogU2l6ZSB0aGUgY29tcG9uZW50IHNtYWxsLCBsYXJnZSwgb3IgZXh0cmEgbGFyZ2UuXG4gICAqL1xuICBASW5wdXQoKSBzaXplPzogJ3NtJyB8ICdsZycgfCAneGwnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ21vZGFsLWRpYWxvZyc6IHRydWUsXG4gICAgICAnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJzogdGhpcy5hbGlnbm1lbnQgPT09ICdjZW50ZXInLFxuICAgICAgJ21vZGFsLWZ1bGxzY3JlZW4nOiB0aGlzLmZ1bGxzY3JlZW4gPT09IHRydWUsXG4gICAgICBbYG1vZGFsLWZ1bGxzY3JlZW4tJHt0aGlzLmZ1bGxzY3JlZW59LWRvd25gXTogdGhpcy5mdWxsc2NyZWVuLFxuICAgICAgJ21vZGFsLWRpYWxvZy1zY3JvbGxhYmxlJzogdGhpcy5zY3JvbGxhYmxlLFxuICAgICAgW2Btb2RhbC0ke3RoaXMuc2l6ZX1gXTogdGhpcy5zaXplXG4gICAgfTtcbiAgfVxufVxuIl19