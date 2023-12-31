import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../dropdown.service";
export class DropdownMenuDirective {
    constructor(elementRef, dropdownService) {
        this.elementRef = elementRef;
        this.dropdownService = dropdownService;
        /**
         * Toggle the visibility of dropdown menu component.
         */
        this.visible = false;
        /**
         * Sets a darker color scheme to match a dark navbar.
         * @type boolean
         */
        this.dark = false;
    }
    get hostClasses() {
        return {
            'dropdown-menu': true,
            'dropdown-menu-dark': this.dark,
            [`dropdown-menu-${this.alignment}`]: !!this.alignment,
            show: this.visible
        };
    }
    get hostStyles() {
        // workaround for popper position calculate (see also: dropdown.component)
        return {
            visibility: this.visible ? null : '',
            display: this.visible ? null : ''
        };
    }
    ngOnInit() {
        this.dropdownStateSubscribe();
    }
    ngOnDestroy() {
        this.dropdownStateSubscribe(false);
    }
    dropdownStateSubscribe(subscribe = true) {
        if (subscribe) {
            this.dropdownStateSubscription =
                this.dropdownService.dropdownState$.subscribe((state) => {
                    if ('visible' in state) {
                        this.visible =
                            state.visible === 'toggle' ? !this.visible : state.visible;
                    }
                });
        }
        else {
            this.dropdownStateSubscription?.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownMenuDirective, deps: [{ token: i0.ElementRef }, { token: i1.DropdownService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: DropdownMenuDirective, isStandalone: true, selector: "[cDropdownMenu]", inputs: { alignment: "alignment", visible: "visible", dark: ["dark", "dark", booleanAttribute] }, host: { properties: { "class": "this.hostClasses", "style": "this.hostStyles" } }, exportAs: ["cDropdownMenu"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: DropdownMenuDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cDropdownMenu]',
                    exportAs: 'cDropdownMenu',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.DropdownService }]; }, propDecorators: { alignment: [{
                type: Input
            }], visible: [{
                type: Input
            }], dark: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], hostStyles: [{
                type: HostBinding,
                args: ['style']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7O0FBUy9HLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFDUyxVQUFzQixFQUNyQixlQUFnQztRQURqQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVMxQzs7V0FFRztRQUNNLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFekI7OztXQUdHO1FBQ3FDLFNBQUksR0FBcUIsS0FBSyxDQUFDO0lBakJwRSxDQUFDO0lBcUJKLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSTtZQUNyQixvQkFBb0IsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUMvQixDQUFDLGlCQUFpQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDckQsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQsSUFDSSxVQUFVO1FBQ1osMEVBQTBFO1FBQzFFLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVPLHNCQUFzQixDQUFDLFlBQXFCLElBQUk7UUFDdEQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMseUJBQXlCO2dCQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDdEQsSUFBSSxTQUFTLElBQUksS0FBSyxFQUFFO3dCQUN0QixJQUFJLENBQUMsT0FBTzs0QkFDVixLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO3FCQUM5RDtnQkFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDTCxJQUFJLENBQUMseUJBQXlCLEVBQUUsV0FBVyxFQUFFLENBQUM7U0FDL0M7SUFDSCxDQUFDOytHQWpFVSxxQkFBcUI7bUdBQXJCLHFCQUFxQixnSUFzQlosZ0JBQWdCOzs0RkF0QnpCLHFCQUFxQjtrQkFMakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsZUFBZTtvQkFDekIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOytIQVlVLFNBQVM7c0JBQWpCLEtBQUs7Z0JBS0csT0FBTztzQkFBZixLQUFLO2dCQU1rQyxJQUFJO3NCQUEzQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUtsQyxXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTztnQkFXaEIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi4vZHJvcGRvd24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjRHJvcGRvd25NZW51XScsXG4gIGV4cG9ydEFzOiAnY0Ryb3Bkb3duTWVudScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZHJvcGRvd25TZXJ2aWNlOiBEcm9wZG93blNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgYWxpZ25tZW50IG9mIGRyb3Bkb3duIG1lbnUuXG4gICAqIEB0eXBlIHsnc3RhcnQnIHwgJ2VuZCcgfVxuICAgKi9cbiAgQElucHV0KCkgYWxpZ25tZW50PzogJ3N0YXJ0JyB8ICdlbmQnIHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgZHJvcGRvd24gbWVudSBjb21wb25lbnQuXG4gICAqL1xuICBASW5wdXQoKSB2aXNpYmxlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFNldHMgYSBkYXJrZXIgY29sb3Igc2NoZW1lIHRvIG1hdGNoIGEgZGFyayBuYXZiYXIuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBkYXJrOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBkcm9wZG93blN0YXRlU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ2Ryb3Bkb3duLW1lbnUnOiB0cnVlLFxuICAgICAgJ2Ryb3Bkb3duLW1lbnUtZGFyayc6IHRoaXMuZGFyayxcbiAgICAgIFtgZHJvcGRvd24tbWVudS0ke3RoaXMuYWxpZ25tZW50fWBdOiAhIXRoaXMuYWxpZ25tZW50LFxuICAgICAgc2hvdzogdGhpcy52aXNpYmxlXG4gICAgfTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUnKVxuICBnZXQgaG9zdFN0eWxlcygpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciBwb3BwZXIgcG9zaXRpb24gY2FsY3VsYXRlIChzZWUgYWxzbzogZHJvcGRvd24uY29tcG9uZW50KVxuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmlsaXR5OiB0aGlzLnZpc2libGUgPyBudWxsIDogJycsXG4gICAgICBkaXNwbGF5OiB0aGlzLnZpc2libGUgPyBudWxsIDogJydcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wZG93blN0YXRlU3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpYmUoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93blN0YXRlU3Vic2NyaWJlKHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpcHRpb24gPVxuICAgICAgICB0aGlzLmRyb3Bkb3duU2VydmljZS5kcm9wZG93blN0YXRlJC5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgaWYgKCd2aXNpYmxlJyBpbiBzdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlID1cbiAgICAgICAgICAgICAgc3RhdGUudmlzaWJsZSA9PT0gJ3RvZ2dsZScgPyAhdGhpcy52aXNpYmxlIDogc3RhdGUudmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyb3Bkb3duU3RhdGVTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=