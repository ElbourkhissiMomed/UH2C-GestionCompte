import { Directive, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { BreakpointInfix } from '../coreui.types';
import * as i0 from "@angular/core";
export class ColDirective {
    constructor() {
        this._xs = false;
        this._sm = false;
        this._md = false;
        this._lg = false;
        this._xl = false;
        this._xxl = false;
    }
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     * @type { 'auto' | number |  boolean }
     */
    set cCol(value) {
        this.xs = this.xs || this.coerceInput(value);
    }
    set xs(value) {
        this._xs = this.coerceInput(value);
    }
    get xs() {
        return this._xs;
    }
    /**
     * The number of columns/offset/order on small devices (<768px).
     * @type { 'auto' | number |  boolean }
     */
    set sm(value) {
        this._sm = this.coerceInput(value);
    }
    get sm() {
        return this._sm;
    }
    /**
     * The number of columns/offset/order on medium devices (<992px).
     * @type { 'auto' | number |  boolean }
     */
    set md(value) {
        this._md = this.coerceInput(value);
    }
    get md() {
        return this._md;
    }
    /**
     * The number of columns/offset/order on large devices (<1200px).
     * @type { 'auto' | number |  boolean }
     */
    set lg(value) {
        this._lg = this.coerceInput(value);
    }
    get lg() {
        return this._lg;
    }
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     * @type { 'auto' | number |  boolean }
     */
    set xl(value) {
        this._xl = this.coerceInput(value);
    }
    get xl() {
        return this._xl;
    }
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     * @type { 'auto' | number |  boolean }
     */
    set xxl(value) {
        this._xxl = this.coerceInput(value);
    }
    get xxl() {
        return this._xxl;
    }
    get hostClasses() {
        const classes = {
            col: true
        };
        Object.keys(BreakpointInfix).forEach((breakpoint) => {
            // @ts-ignore
            const value = this[breakpoint];
            const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
            classes[`col${infix}`] = value === true;
            classes[`col${infix}-${value}`] = (typeof value === 'number') || (typeof value === 'string');
        });
        if (typeof this.offset === 'object') {
            const offset = { ...this.offset };
            Object.entries(offset).forEach((entry) => {
                const [breakpoint, value] = [...entry];
                const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
                classes[`offset${infix}-${value}`] = value >= 0 && value <= 11;
            });
        }
        else {
            classes[`offset-${this.offset}`] = (typeof this.offset === 'number') && this.offset > 0 && this.offset <= 11;
        }
        if (typeof this.order === 'object') {
            const order = { ...this.order };
            Object.entries(order).forEach((entry) => {
                const [breakpoint, value] = [...entry];
                const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;
                classes[`order${infix}-${value}`] = value;
            });
        }
        else {
            classes[`order-${this.order}`] = !!this.order;
        }
        // if there is no 'col' class, add one
        classes.col = (!Object.entries(classes).filter(i => i[0].startsWith('col-') && i[1]).length) || this.xs === true;
        return classes;
    }
    coerceInput(value) {
        if (value === 'auto') {
            return value;
        }
        if (value === '' || value === undefined || value === null) {
            return coerceBooleanProperty(value);
        }
        if (typeof value === 'boolean') {
            return value;
        }
        return coerceNumberProperty(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ColDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: ColDirective, isStandalone: true, selector: "[cCol]", inputs: { cCol: "cCol", xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl", xxl: "xxl", offset: "offset", order: "order" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ColDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCol]',
                    standalone: true
                }]
        }], propDecorators: { cCol: [{
                type: Input
            }], xs: [{
                type: Input
            }], sm: [{
                type: Input
            }], md: [{
                type: Input
            }], lg: [{
                type: Input
            }], xl: [{
                type: Input
            }], xxl: [{
                type: Input
            }], offset: [{
                type: Input
            }], order: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZ3JpZC9jb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLG9CQUFvQixFQUFlLE1BQU0sdUJBQXVCLENBQUM7QUFHL0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQU1sRCxNQUFNLE9BQU8sWUFBWTtJQUp6QjtRQTZCVSxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxRQUFHLEdBQWlDLEtBQUssQ0FBQztRQWExQyxTQUFJLEdBQWlDLEtBQUssQ0FBQztLQTJEcEQ7SUEzSUM7OztPQUdHO0lBQ0gsSUFDSSxJQUFJLENBQUMsS0FBbUM7UUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELElBQ0ksRUFBRSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsSUFDSSxFQUFFLENBQUMsS0FBSztRQUNWLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJ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SyxFQUFFLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3pELE9BQU8scUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM5QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOytHQXBKVSxZQUFZO21HQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBSnhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFnQkssSUFBSTtzQkFEUCxLQUFLO2dCQUtGLEVBQUU7c0JBREwsS0FBSztnQkFjRixFQUFFO3NCQURMLEtBQUs7Z0JBY0YsRUFBRTtzQkFETCxLQUFLO2dCQWNGLEVBQUU7c0JBREwsS0FBSztnQkFjRixFQUFFO3NCQURMLEtBQUs7Z0JBY0YsR0FBRztzQkFETixLQUFLO2dCQVNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHksIGNvZXJjZU51bWJlclByb3BlcnR5LCBOdW1iZXJJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5cbmltcG9ydCB7IENvbE9yZGVyLCBJQ29sIH0gZnJvbSAnLi9jb2wudHlwZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50SW5maXggfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0NvbF0nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIENvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIElDb2wge1xuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jQ29sOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfeHM6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCk7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zbTogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21kOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGc6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCk7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV94bDogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KTtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3h4bDogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zL29mZnNldC9vcmRlciBvbiBleHRyYSBzbWFsbCBkZXZpY2VzICg8NTc2cHgpLlxuICAgKiBAdHlwZSB7ICdhdXRvJyB8IG51bWJlciB8ICBib29sZWFuIH1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBjQ29sKHZhbHVlOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpKSB7XG4gICAgdGhpcy54cyA9IHRoaXMueHMgfHwgdGhpcy5jb2VyY2VJbnB1dCh2YWx1ZSk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHhzKHZhbHVlKSB7XG4gICAgdGhpcy5feHMgPSB0aGlzLmNvZXJjZUlucHV0KHZhbHVlKTtcbiAgfVxuICBnZXQgeHMoKTogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3hzO1xuICB9XG4gIHByaXZhdGUgX3hzOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucy9vZmZzZXQvb3JkZXIgb24gc21hbGwgZGV2aWNlcyAoPDc2OHB4KS5cbiAgICogQHR5cGUgeyAnYXV0bycgfCBudW1iZXIgfCAgYm9vbGVhbiB9XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgc20odmFsdWUpIHtcbiAgICB0aGlzLl9zbSA9IHRoaXMuY29lcmNlSW5wdXQodmFsdWUpO1xuICB9XG4gIGdldCBzbSgpOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5fc207XG4gIH1cbiAgcHJpdmF0ZSBfc206IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zL29mZnNldC9vcmRlciBvbiBtZWRpdW0gZGV2aWNlcyAoPDk5MnB4KS5cbiAgICogQHR5cGUgeyAnYXV0bycgfCBudW1iZXIgfCAgYm9vbGVhbiB9XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbWQodmFsdWUpIHtcbiAgICB0aGlzLl9tZCA9IHRoaXMuY29lcmNlSW5wdXQodmFsdWUpO1xuICB9XG4gIGdldCBtZCgpOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5fbWQ7XG4gIH1cbiAgcHJpdmF0ZSBfbWQ6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zL29mZnNldC9vcmRlciBvbiBsYXJnZSBkZXZpY2VzICg8MTIwMHB4KS5cbiAgICogQHR5cGUgeyAnYXV0bycgfCBudW1iZXIgfCAgYm9vbGVhbiB9XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbGcodmFsdWUpIHtcbiAgICB0aGlzLl9sZyA9IHRoaXMuY29lcmNlSW5wdXQodmFsdWUpO1xuICB9XG4gIGdldCBsZygpOiAoQm9vbGVhbklucHV0IHwgTnVtYmVySW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5fbGc7XG4gIH1cbiAgcHJpdmF0ZSBfbGc6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zL29mZnNldC9vcmRlciBvbiBYLUxhcmdlIGRldmljZXMgKDwxNDAwcHgpLlxuICAgKiBAdHlwZSB7ICdhdXRvJyB8IG51bWJlciB8ICBib29sZWFuIH1cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCB4bCh2YWx1ZSkge1xuICAgIHRoaXMuX3hsID0gdGhpcy5jb2VyY2VJbnB1dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHhsKCk6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkge1xuICAgIHJldHVybiB0aGlzLl94bDtcbiAgfVxuICBwcml2YXRlIF94bDogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIFhYLUxhcmdlIGRldmljZXMgKOKJpTE0MDBweCkuXG4gICAqIEB0eXBlIHsgJ2F1dG8nIHwgbnVtYmVyIHwgIGJvb2xlYW4gfVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHh4bCh2YWx1ZSkge1xuICAgIHRoaXMuX3h4bCA9IHRoaXMuY29lcmNlSW5wdXQodmFsdWUpO1xuICB9XG4gIGdldCB4eGwoKTogKEJvb2xlYW5JbnB1dCB8IE51bWJlcklucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuX3h4bDtcbiAgfVxuICBwcml2YXRlIF94eGw6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkgPSBmYWxzZTtcblxuICBASW5wdXQoKSBvZmZzZXQ/OiAobnVtYmVyIHwgeyAneHMnPzogbnVtYmVyLCBzbT86IG51bWJlciwgbWQ/OiBudW1iZXIsIGxnPzogbnVtYmVyLCB4bD86IG51bWJlciwgeHhsPzogbnVtYmVyIH0pO1xuICBASW5wdXQoKSBvcmRlcj86IChDb2xPcmRlciB8IHsgeHM/OiBDb2xPcmRlciwgc20/OiBDb2xPcmRlciwgbWQ/OiBDb2xPcmRlciwgbGc/OiBDb2xPcmRlciwgeGw/OiBDb2xPcmRlciwgeHhsPzogQ29sT3JkZXIgfSk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuXG4gICAgY29uc3QgY2xhc3NlczogYW55ID0ge1xuICAgICAgY29sOiB0cnVlXG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKEJyZWFrcG9pbnRJbmZpeCkuZm9yRWFjaCgoYnJlYWtwb2ludCkgPT4ge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW4gPSB0aGlzW2JyZWFrcG9pbnRdO1xuICAgICAgY29uc3QgaW5maXggPSBicmVha3BvaW50ID09PSAneHMnID8gJycgOiBgLSR7YnJlYWtwb2ludH1gO1xuICAgICAgY2xhc3Nlc1tgY29sJHtpbmZpeH1gXSA9IHZhbHVlID09PSB0cnVlO1xuICAgICAgY2xhc3Nlc1tgY29sJHtpbmZpeH0tJHt2YWx1ZX1gXSA9ICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyk7XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub2Zmc2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geyAuLi50aGlzLm9mZnNldCB9O1xuICAgICAgT2JqZWN0LmVudHJpZXMob2Zmc2V0KS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCBbYnJlYWtwb2ludCwgdmFsdWVdID0gWy4uLmVudHJ5XTtcbiAgICAgICAgY29uc3QgaW5maXggPSBicmVha3BvaW50ID09PSAneHMnID8gJycgOiBgLSR7YnJlYWtwb2ludH1gO1xuICAgICAgICBjbGFzc2VzW2BvZmZzZXQke2luZml4fS0ke3ZhbHVlfWBdID0gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxMTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc2VzW2BvZmZzZXQtJHt0aGlzLm9mZnNldH1gXSA9ICh0eXBlb2YgdGhpcy5vZmZzZXQgPT09ICdudW1iZXInKSAmJiB0aGlzLm9mZnNldCA+IDAgJiYgdGhpcy5vZmZzZXQgPD0gMTE7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9yZGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgb3JkZXIgPSB7IC4uLnRoaXMub3JkZXIgfTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKG9yZGVyKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCBbYnJlYWtwb2ludCwgdmFsdWVdID0gWy4uLmVudHJ5XTtcbiAgICAgICAgY29uc3QgaW5maXggPSBicmVha3BvaW50ID09PSAneHMnID8gJycgOiBgLSR7YnJlYWtwb2ludH1gO1xuICAgICAgICBjbGFzc2VzW2BvcmRlciR7aW5maXh9LSR7dmFsdWV9YF0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc2VzW2BvcmRlci0ke3RoaXMub3JkZXJ9YF0gPSAhIXRoaXMub3JkZXI7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gJ2NvbCcgY2xhc3MsIGFkZCBvbmVcbiAgICBjbGFzc2VzLmNvbCA9ICghT2JqZWN0LmVudHJpZXMoY2xhc3NlcykuZmlsdGVyKGkgPT4gaVswXS5zdGFydHNXaXRoKCdjb2wtJykgJiYgaVsxXSkubGVuZ3RoKSB8fCB0aGlzLnhzID09PSB0cnVlO1xuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgY29lcmNlSW5wdXQodmFsdWU6IChCb29sZWFuSW5wdXQgfCBOdW1iZXJJbnB1dCkpIHtcbiAgICBpZiAodmFsdWUgPT09ICdhdXRvJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgfVxufVxuIl19