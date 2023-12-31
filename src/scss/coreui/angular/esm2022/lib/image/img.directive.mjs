import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ImgDirective {
    constructor() {
        /**
         * Set the horizontal aligment.
         * @type {'' | 'start' | 'end' | 'center'}
         */
        this.align = '';
        /**
         * Make image responsive.
         * @type boolean
         */
        this.fluid = false;
        /**
         * Make image rounded.
         * @type boolean
         */
        this.rounded = false;
        /**
         * Give an image a rounded 1px border appearance.
         * @type boolean
         */
        this.thumbnail = false;
        /**
         * Color for image placeholder.
         */
        this.placeholderColor = 'transparent';
    }
    get getStyles() {
        return { backgroundColor: this.placeholderColor };
    }
    get hostClasses() {
        const align = this.align;
        return {
            [`float-${align}`]: align === 'start' || align === 'end',
            'd-block': align === 'center',
            'mx-auto': align === 'center',
            'img-fluid': this.fluid,
            'rounded': this.rounded,
            'img-thumbnail': this.thumbnail
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ImgDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: ImgDirective, isStandalone: true, selector: "[cImg]", inputs: { align: "align", fluid: ["fluid", "fluid", booleanAttribute], rounded: ["rounded", "rounded", booleanAttribute], thumbnail: ["thumbnail", "thumbnail", booleanAttribute], placeholderColor: "placeholderColor" }, host: { properties: { "style": "this.getStyles", "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ImgDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cImg]',
                    standalone: true
                }]
        }], propDecorators: { align: [{
                type: Input
            }], fluid: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], rounded: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], thumbnail: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], placeholderColor: [{
                type: Input
            }], getStyles: [{
                type: HostBinding,
                args: ['style']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvaW1hZ2UvaW1nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWhGLE1BQU0sT0FBTyxZQUFZO0lBSnpCO1FBTUU7OztXQUdHO1FBQ00sVUFBSyxHQUFvQyxFQUFFLENBQUM7UUFFckQ7OztXQUdHO1FBQ3FDLFVBQUssR0FBcUIsS0FBSyxDQUFDO1FBRXhFOzs7V0FHRztRQUNxQyxZQUFPLEdBQXFCLEtBQUssQ0FBQztRQUUxRTs7O1dBR0c7UUFDcUMsY0FBUyxHQUFxQixLQUFLLENBQUM7UUFFNUU7O1dBRUc7UUFDTSxxQkFBZ0IsR0FBRyxhQUFhLENBQUM7S0FtQjNDO0lBakJDLElBQ0ksU0FBUztRQUNYLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELElBQ0ksV0FBVztRQUNiLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsT0FBTztZQUNMLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLEtBQUs7WUFDeEQsU0FBUyxFQUFFLEtBQUssS0FBSyxRQUFRO1lBQzdCLFNBQVMsRUFBRSxLQUFLLEtBQUssUUFBUTtZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUztTQUNoQyxDQUFDO0lBQ0osQ0FBQzsrR0EvQ1UsWUFBWTttR0FBWixZQUFZLDhGQVlILGdCQUFnQixtQ0FNaEIsZ0JBQWdCLHlDQU1oQixnQkFBZ0I7OzRGQXhCekIsWUFBWTtrQkFKeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQU9VLEtBQUs7c0JBQWIsS0FBSztnQkFNa0MsS0FBSztzQkFBNUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFNRSxPQUFPO3NCQUE5QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQU1FLFNBQVM7c0JBQWhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBSzdCLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFHRixTQUFTO3NCQURaLFdBQVc7dUJBQUMsT0FBTztnQkFNaEIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib29sZWFuQXR0cmlidXRlLCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY0ltZ10nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIEltZ0RpcmVjdGl2ZSB7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaG9yaXpvbnRhbCBhbGlnbWVudC5cbiAgICogQHR5cGUgeycnIHwgJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcid9XG4gICAqL1xuICBASW5wdXQoKSBhbGlnbjogJycgfCAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyA9ICcnO1xuXG4gIC8qKlxuICAgKiBNYWtlIGltYWdlIHJlc3BvbnNpdmUuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBmbHVpZDogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBNYWtlIGltYWdlIHJvdW5kZWQuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByb3VuZGVkOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEdpdmUgYW4gaW1hZ2UgYSByb3VuZGVkIDFweCBib3JkZXIgYXBwZWFyYW5jZS5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHRodW1ibmFpbDogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb2xvciBmb3IgaW1hZ2UgcGxhY2Vob2xkZXIuXG4gICAqL1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlJylcbiAgZ2V0IGdldFN0eWxlcygpOiBhbnkge1xuICAgIHJldHVybiB7IGJhY2tncm91bmRDb2xvcjogdGhpcy5wbGFjZWhvbGRlckNvbG9yIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgY29uc3QgYWxpZ24gPSB0aGlzLmFsaWduO1xuICAgIHJldHVybiB7XG4gICAgICBbYGZsb2F0LSR7YWxpZ259YF06IGFsaWduID09PSAnc3RhcnQnIHx8IGFsaWduID09PSAnZW5kJyxcbiAgICAgICdkLWJsb2NrJzogYWxpZ24gPT09ICdjZW50ZXInLFxuICAgICAgJ214LWF1dG8nOiBhbGlnbiA9PT0gJ2NlbnRlcicsXG4gICAgICAnaW1nLWZsdWlkJzogdGhpcy5mbHVpZCxcbiAgICAgICdyb3VuZGVkJzogdGhpcy5yb3VuZGVkLFxuICAgICAgJ2ltZy10aHVtYm5haWwnOiB0aGlzLnRodW1ibmFpbFxuICAgIH07XG4gIH1cbn1cbiJdfQ==