import { Directive, HostBinding, Input } from '@angular/core';
import { BreakpointInfix } from '../coreui.types';
import * as i0 from "@angular/core";
export class GutterDirective {
    constructor() {
        /**
         * Define padding between columns to space and align content responsively in the Bootstrap grid system.
         */
        this.gutter = {};
    }
    get hostClasses() {
        let gutterClass;
        if (typeof this.gutter === 'number') {
            gutterClass = GutterDirective.getGutterClasses({ g: this.gutter });
            return gutterClass;
        }
        {
            // @ts-ignore
            const { g, gx, gy } = { ...this.gutter };
            gutterClass = GutterDirective.getGutterClasses({ g, gx, gy });
        }
        Object.keys(BreakpointInfix).forEach(key => {
            // @ts-ignore
            const gutter = this.gutter[key] ? { ...this.gutter[key] } : undefined;
            if (gutter) {
                const classes = GutterDirective.getGutterClasses(gutter, key);
                gutterClass = { ...gutterClass, ...classes };
            }
        });
        return gutterClass;
    }
    static getGutterClasses(gutter, breakpoint) {
        const { g, gx, gy } = { ...gutter };
        const infix = breakpoint ? `-${breakpoint}` : '';
        return {
            [`g${infix}-${g}`]: typeof g === 'number',
            [`gx${infix}-${gx}`]: typeof gx === 'number',
            [`gy${infix}-${gy}`]: typeof gy === 'number'
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: GutterDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: GutterDirective, isStandalone: true, selector: "[gutter]", inputs: { gutter: "gutter" }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: GutterDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[gutter]',
                    standalone: true
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { gutter: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3V0dGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvZ3JpZC9ndXR0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBUWxELE1BQU0sT0FBTyxlQUFlO0lBTTFCO1FBTEE7O1dBRUc7UUFDTSxXQUFNLEdBQWtELEVBQUUsQ0FBQztJQUVwRCxDQUFDO0lBRWpCLElBQ0ksV0FBVztRQUViLElBQUksV0FBZ0IsQ0FBQztRQUVyQixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDbkMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUNuRSxPQUFPLFdBQVcsQ0FBQztTQUNwQjtRQUVEO1lBQ0UsYUFBYTtZQUNiLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMvRDtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3pDLGFBQWE7WUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDdEUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDOUQsV0FBVyxHQUFHLEVBQUUsR0FBRyxXQUFXLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQzthQUM5QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFxQixFQUFFLFVBQW1CO1FBQ3hFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNwQyxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNqRCxPQUFPO1lBQ0wsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLFFBQVE7WUFDekMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLFFBQVE7WUFDNUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLFFBQVE7U0FDN0MsQ0FBQztJQUNKLENBQUM7K0dBM0NVLGVBQWU7bUdBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFMM0IsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxVQUFVO29CQUNwQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7MEVBS1UsTUFBTTtzQkFBZCxLQUFLO2dCQUtGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnJlYWtwb2ludEluZml4IH0gZnJvbSAnLi4vY29yZXVpLnR5cGVzJztcbmltcG9ydCB7IEd1dHRlckJyZWFrcG9pbnRzLCBHdXR0ZXJzLCBJR3V0dGVyLCBJR3V0dGVyT2JqZWN0IH0gZnJvbSAnLi9ndXR0ZXIudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tndXR0ZXJdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBHdXR0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBJR3V0dGVyIHtcbiAgLyoqXG4gICAqIERlZmluZSBwYWRkaW5nIGJldHdlZW4gY29sdW1ucyB0byBzcGFjZSBhbmQgYWxpZ24gY29udGVudCByZXNwb25zaXZlbHkgaW4gdGhlIEJvb3RzdHJhcCBncmlkIHN5c3RlbS5cbiAgICovXG4gIEBJbnB1dCgpIGd1dHRlcjogKElHdXR0ZXJPYmplY3QgfCBHdXR0ZXJCcmVha3BvaW50cyB8IEd1dHRlcnMpID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG5cbiAgICBsZXQgZ3V0dGVyQ2xhc3M6IGFueTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5ndXR0ZXIgPT09ICdudW1iZXInKSB7XG4gICAgICBndXR0ZXJDbGFzcyA9IEd1dHRlckRpcmVjdGl2ZS5nZXRHdXR0ZXJDbGFzc2VzKHsgZzogdGhpcy5ndXR0ZXIgfSk7XG4gICAgICByZXR1cm4gZ3V0dGVyQ2xhc3M7XG4gICAgfVxuXG4gICAge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgeyBnLCBneCwgZ3kgfSA9IHsgLi4udGhpcy5ndXR0ZXIgfTtcbiAgICAgIGd1dHRlckNsYXNzID0gR3V0dGVyRGlyZWN0aXZlLmdldEd1dHRlckNsYXNzZXMoeyBnLCBneCwgZ3kgfSk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoQnJlYWtwb2ludEluZml4KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBndXR0ZXIgPSB0aGlzLmd1dHRlcltrZXldID8geyAuLi50aGlzLmd1dHRlcltrZXldIH0gOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoZ3V0dGVyKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBHdXR0ZXJEaXJlY3RpdmUuZ2V0R3V0dGVyQ2xhc3NlcyhndXR0ZXIsIGtleSk7XG4gICAgICAgIGd1dHRlckNsYXNzID0geyAuLi5ndXR0ZXJDbGFzcywgLi4uY2xhc3NlcyB9O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBndXR0ZXJDbGFzcztcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldEd1dHRlckNsYXNzZXMoZ3V0dGVyOiBJR3V0dGVyT2JqZWN0LCBicmVha3BvaW50Pzogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCB7IGcsIGd4LCBneSB9ID0geyAuLi5ndXR0ZXIgfTtcbiAgICBjb25zdCBpbmZpeCA9IGJyZWFrcG9pbnQgPyBgLSR7YnJlYWtwb2ludH1gIDogJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtgZyR7aW5maXh9LSR7Z31gXTogdHlwZW9mIGcgPT09ICdudW1iZXInLFxuICAgICAgW2BneCR7aW5maXh9LSR7Z3h9YF06IHR5cGVvZiBneCA9PT0gJ251bWJlcicsXG4gICAgICBbYGd5JHtpbmZpeH0tJHtneX1gXTogdHlwZW9mIGd5ID09PSAnbnVtYmVyJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==