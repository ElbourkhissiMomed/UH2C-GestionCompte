import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class FormCheckInputDirective {
    /**
     * Set component indeterminate state.
     * @type boolean
     */
    set indeterminate(value) {
        const indeterminate = coerceBooleanProperty(value);
        if (this._indeterminate !== indeterminate) {
            this._indeterminate = indeterminate;
            const htmlInputElement = this.hostElement.nativeElement;
            if (indeterminate) {
                this.renderer.setProperty(htmlInputElement, 'checked', false);
            }
            this.renderer.setProperty(htmlInputElement, 'indeterminate', indeterminate);
        }
    }
    ;
    get indeterminate() {
        return this._indeterminate;
    }
    get hostClasses() {
        return {
            'form-check-input': true,
            'is-valid': this.valid === true,
            'is-invalid': this.valid === false
        };
    }
    set checked(value) {
        const checked = coerceBooleanProperty(value);
        const htmlInputElement = this.hostElement?.nativeElement;
        if (htmlInputElement) {
            this.renderer.setProperty(htmlInputElement, 'checked', checked);
        }
    }
    get checked() {
        return this.hostElement?.nativeElement?.checked;
    }
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        /**
         * Specifies the type of component.
         * @type {'checkbox' | 'radio'}
         * @default 'checkbox'
         */
        this.type = 'checkbox';
        this._indeterminate = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormCheckInputDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: FormCheckInputDirective, isStandalone: true, selector: "input[cFormCheckInput]", inputs: { type: "type", indeterminate: "indeterminate", valid: "valid", checked: "checked" }, host: { properties: { "attr.type": "this.type", "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: FormCheckInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[cFormCheckInput]',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { type: [{
                type: HostBinding,
                args: ['attr.type']
            }, {
                type: Input
            }], indeterminate: [{
                type: Input
            }], valid: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], checked: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jaGVjay1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2Zvcm0vZm9ybS1jaGVjay9mb3JtLWNoZWNrLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU01RSxNQUFNLE9BQU8sdUJBQXVCO0lBYWxDOzs7T0FHRztJQUNILElBQ0ksYUFBYSxDQUFDLEtBQWM7UUFDOUIsTUFBTSxhQUFhLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLGFBQWEsRUFBRTtZQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztZQUNwQyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBaUMsQ0FBQztZQUM1RSxJQUFJLGFBQWEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQy9EO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFFRixJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQVVELElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUk7WUFDL0IsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSztTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQ0ksT0FBTyxDQUFDLEtBQWM7UUFDeEIsTUFBTSxPQUFPLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWlDLENBQUM7UUFDN0UsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUM7SUFDbEQsQ0FBQztJQUVELFlBQ1UsUUFBbUIsRUFDbkIsV0FBdUI7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQTdEakM7Ozs7V0FJRztRQUVNLFNBQUksR0FBMkIsVUFBVSxDQUFDO1FBdUIzQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQWlDM0IsQ0FBQzsrR0FuRU0sdUJBQXVCO21HQUF2Qix1QkFBdUI7OzRGQUF2Qix1QkFBdUI7a0JBSm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO3lIQVlVLElBQUk7c0JBRFosV0FBVzt1QkFBQyxXQUFXOztzQkFDdkIsS0FBSztnQkFPRixhQUFhO3NCQURoQixLQUFLO2dCQXVCRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBVWhCLE9BQU87c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbY0Zvcm1DaGVja0lucHV0XScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNoZWNrSW5wdXREaXJlY3RpdmUge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jaGVja2VkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pbmRldGVybWluYXRlOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAqIEB0eXBlIHsnY2hlY2tib3gnIHwgJ3JhZGlvJ31cbiAgICogQGRlZmF1bHQgJ2NoZWNrYm94J1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnR5cGUnKVxuICBASW5wdXQoKSB0eXBlOiAoJ2NoZWNrYm94JyB8ICdyYWRpbycpID0gJ2NoZWNrYm94JztcblxuICAvKipcbiAgICogU2V0IGNvbXBvbmVudCBpbmRldGVybWluYXRlIHN0YXRlLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgaW5kZXRlcm1pbmF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGluZGV0ZXJtaW5hdGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIGlmICh0aGlzLl9pbmRldGVybWluYXRlICE9PSBpbmRldGVybWluYXRlKSB7XG4gICAgICB0aGlzLl9pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICAgIGNvbnN0IGh0bWxJbnB1dEVsZW1lbnQgPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGlmIChpbmRldGVybWluYXRlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoaHRtbElucHV0RWxlbWVudCwgJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KGh0bWxJbnB1dEVsZW1lbnQsICdpbmRldGVybWluYXRlJywgaW5kZXRlcm1pbmF0ZSk7XG4gICAgfVxuICB9O1xuXG4gIGdldCBpbmRldGVybWluYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9pbmRldGVybWluYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZXQgY29tcG9uZW50IHZhbGlkYXRpb24gc3RhdGUgdG8gdmFsaWQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpIHZhbGlkPzogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdmb3JtLWNoZWNrLWlucHV0JzogdHJ1ZSxcbiAgICAgICdpcy12YWxpZCc6IHRoaXMudmFsaWQgPT09IHRydWUsXG4gICAgICAnaXMtaW52YWxpZCc6IHRoaXMudmFsaWQgPT09IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgY2hlY2tlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgY29uc3QgaHRtbElucHV0RWxlbWVudCA9IHRoaXMuaG9zdEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoaHRtbElucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShodG1sSW5wdXRFbGVtZW50LCAnY2hlY2tlZCcsIGNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhvc3RFbGVtZW50Py5uYXRpdmVFbGVtZW50Py5jaGVja2VkO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7IH1cblxufVxuIl19