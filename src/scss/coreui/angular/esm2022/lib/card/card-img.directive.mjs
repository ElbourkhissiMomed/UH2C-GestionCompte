import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CardImgDirective {
    get hostClasses() {
        const suffix = !!this.orientation ? `-${this.orientation}` : '';
        return {
            [`card-img${suffix}`]: true
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CardImgDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: CardImgDirective, isStandalone: true, selector: "[cCardImg]", inputs: { orientation: ["cCardImg", "orientation"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CardImgDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCardImg]',
                    standalone: true
                }]
        }], propDecorators: { orientation: [{
                type: Input,
                args: ['cCardImg']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1pbWcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jYXJkL2NhcmQtaW1nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTlELE1BQU0sT0FBTyxnQkFBZ0I7SUFPM0IsSUFDSSxXQUFXO1FBQ2IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEUsT0FBTztZQUNMLENBQUMsV0FBVyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDNUIsQ0FBQztJQUNKLENBQUM7K0dBYlUsZ0JBQWdCO21HQUFoQixnQkFBZ0I7OzRGQUFoQixnQkFBZ0I7a0JBSjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFNb0IsV0FBVztzQkFBN0IsS0FBSzt1QkFBQyxVQUFVO2dCQUdiLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NDYXJkSW1nXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEltZ0RpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBPcHRpb25hbGx5IG9yaWVudGF0ZSB0aGUgaW1hZ2UgdG8gdGhlIHRvcCwgYm90dG9tLCBvciBtYWtlIGl0IG92ZXJsYWlkIGFjcm9zcyB0aGUgY2FyZC5cbiAgICogQHR5cGUgeyd0b3AgfCAnYm90dG9tJ31cbiAgICovXG4gIEBJbnB1dCgnY0NhcmRJbWcnKSBvcmllbnRhdGlvbj86ICd0b3AnIHwgJ2JvdHRvbSc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIGNvbnN0IHN1ZmZpeCA9ICEhdGhpcy5vcmllbnRhdGlvbiA/IGAtJHt0aGlzLm9yaWVudGF0aW9ufWAgOiAnJztcbiAgICByZXR1cm4ge1xuICAgICAgW2BjYXJkLWltZyR7c3VmZml4fWBdOiB0cnVlXG4gICAgfTtcbiAgfVxufVxuIl19