import { Directive, HostBinding, Input } from '@angular/core';
import { BreakpointInfix } from '../coreui.types';
import * as i0 from "@angular/core";
export class RowDirective {
    get hostClasses() {
        const cols = this.xs;
        const classes = {
            row: true,
            [`row-cols-${cols}`]: !!cols,
        };
        Object.keys(BreakpointInfix).forEach(breakpoint => {
            // @ts-ignore
            const value = this[breakpoint];
            if ((typeof value === 'number') || (typeof value === 'string')) {
                const infix = breakpoint === 'xs' ? '' : breakpoint;
                classes[`row-cols-${infix}-${value}`] = !!value;
            }
        });
        return classes;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: RowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: RowDirective, isStandalone: true, selector: "[cRow]", inputs: { xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl", xxl: "xxl" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: RowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cRow]',
                    standalone: true
                }]
        }], propDecorators: { xs: [{
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
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZ3JpZC9yb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBT2xELE1BQU0sT0FBTyxZQUFZO0lBZ0N2QixJQUNJLFdBQVc7UUFFYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXJCLE1BQU0sT0FBTyxHQUFRO1lBQ25CLEdBQUcsRUFBRSxJQUFJO1lBQ1QsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUk7U0FDN0IsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2hELGFBQWE7WUFDYixNQUFNLEtBQUssR0FBUSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUU7Z0JBQzlELE1BQU0sS0FBSyxHQUFXLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2dCQUM1RCxPQUFPLENBQUMsWUFBWSxLQUFLLElBQUksS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOytHQXBEVSxZQUFZO21HQUFaLFlBQVk7OzRGQUFaLFlBQVk7a0JBSnhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFNVSxFQUFFO3NCQUFWLEtBQUs7Z0JBS0csRUFBRTtzQkFBVixLQUFLO2dCQUtHLEVBQUU7c0JBQVYsS0FBSztnQkFLRyxFQUFFO3NCQUFWLEtBQUs7Z0JBS0csRUFBRTtzQkFBVixLQUFLO2dCQUtHLEdBQUc7c0JBQVgsS0FBSztnQkFHRixXQUFXO3NCQURkLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJyZWFrcG9pbnRJbmZpeCB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5pbXBvcnQgeyBJUm93LCBOdW1iZXJPZkNvbHVtbnMgfSBmcm9tICcuL3Jvdy50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NSb3ddJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBSb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBJUm93IHtcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucy9vZmZzZXQvb3JkZXIgb24gZXh0cmEgc21hbGwgZGV2aWNlcyAoPDU3NnB4KS5cbiAgICogQHR5cGUge3sgY29sczogJ2F1dG8nIHwgbnVtYmVyIH1cbiAgICovXG4gIEBJbnB1dCgpIHhzPzogTnVtYmVyT2ZDb2x1bW5zO1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjb2x1bW5zL29mZnNldC9vcmRlciBvbiBzbWFsbCBkZXZpY2VzICg8NzY4cHgpLlxuICAgKiBAdHlwZSB7eyBjb2xzOiAnYXV0bycgfCBudW1iZXIgfVxuICAgKi9cbiAgQElucHV0KCkgc20/OiBOdW1iZXJPZkNvbHVtbnM7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIG1lZGl1bSBkZXZpY2VzICg8OTkycHgpLlxuICAgKiBAdHlwZSB7eyBjb2xzOiAnYXV0bycgfCBudW1iZXIgfVxuICAgKi9cbiAgQElucHV0KCkgbWQ/OiBOdW1iZXJPZkNvbHVtbnM7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIGxhcmdlIGRldmljZXMgKDwxMjAwcHgpLlxuICAgKiBAdHlwZSB7eyBjb2xzOiAnYXV0bycgfCBudW1iZXIgfVxuICAgKi9cbiAgQElucHV0KCkgbGc/OiBOdW1iZXJPZkNvbHVtbnM7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMvb2Zmc2V0L29yZGVyIG9uIFgtTGFyZ2UgZGV2aWNlcyAoPDE0MDBweCkuXG4gICAqIEB0eXBlIHt7IGNvbHM6ICdhdXRvJyB8IG51bWJlciB9XG4gICAqL1xuICBASW5wdXQoKSB4bD86IE51bWJlck9mQ29sdW1ucztcbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgY29sdW1ucy9vZmZzZXQvb3JkZXIgb24gWFgtTGFyZ2UgZGV2aWNlcyAo4omlMTQwMHB4KS5cbiAgICogQHR5cGUge3sgY29sczogJ2F1dG8nIHwgbnVtYmVyIH1cbiAgICovXG4gIEBJbnB1dCgpIHh4bD86IE51bWJlck9mQ29sdW1ucztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG5cbiAgICBjb25zdCBjb2xzID0gdGhpcy54cztcblxuICAgIGNvbnN0IGNsYXNzZXM6IGFueSA9IHtcbiAgICAgIHJvdzogdHJ1ZSxcbiAgICAgIFtgcm93LWNvbHMtJHtjb2xzfWBdOiAhIWNvbHMsXG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKEJyZWFrcG9pbnRJbmZpeCkuZm9yRWFjaChicmVha3BvaW50ID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHZhbHVlOiBhbnkgPSB0aGlzW2JyZWFrcG9pbnRdO1xuICAgICAgaWYgKCh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgY29uc3QgaW5maXg6IHN0cmluZyA9IGJyZWFrcG9pbnQgPT09ICd4cycgPyAnJyA6IGJyZWFrcG9pbnQ7XG4gICAgICAgIGNsYXNzZXNbYHJvdy1jb2xzLSR7aW5maXh9LSR7dmFsdWV9YF0gPSAhIXZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cbn1cbiJdfQ==