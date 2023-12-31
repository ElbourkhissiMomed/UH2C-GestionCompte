import { booleanAttribute, Component, HostBinding, Input, numberAttribute } from '@angular/core';
import * as i0 from "@angular/core";
export class ProgressBarComponent {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        /**
         * Use to animate the stripes right to left via CSS3 animations.
         * @type boolean
         */
        this.animated = false;
        // TODO: check if this is necessary.
        this.precision = 0;
        /**
         * The percent to progress the ProgressBar.
         * @type number
         */
        this.value = 0;
        /**
         * Set default html role attribute.
         * @type string
         */
        this.role = 'progressbar';
        this.state = {
            percent: 0,
            min: 0,
            max: 100
        };
    }
    get min() {
        return this.state.min;
    }
    set min(value) {
        this.state.min = isNaN(value) ? 0 : value;
    }
    get max() {
        return this.state.max;
    }
    set max(value) {
        this.state.max = isNaN(value) || value <= 0 || value === this.min ? 100 : value;
    }
    get hostClasses() {
        return {
            'progress-bar': true,
            'progress-bar-animated': this.animated,
            [`progress-bar-${this.variant}`]: !!this.variant,
            [`bg-${this.color}`]: !!this.color
        };
    }
    ngOnInit() {
        this.setValues();
    }
    setPercent() {
        this.state.percent = +((this.value / (this.max - this.min)) * 100).toFixed(this.precision);
    }
    setValues() {
        this.setPercent();
        const host = this.hostElement.nativeElement;
        this.renderer.setStyle(host, 'width', `${this.state.percent}%`);
        this.renderer.setAttribute(host, 'aria-valuenow', String(this.value));
        this.renderer.setAttribute(host, 'aria-valuemin', String(this.min));
        this.renderer.setAttribute(host, 'aria-valuemax', String(this.max));
    }
    ngOnChanges(changes) {
        this.setValues();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressBarComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: ProgressBarComponent, isStandalone: true, selector: "c-progress-bar", inputs: { animated: ["animated", "animated", booleanAttribute], color: "color", precision: ["precision", "precision", numberAttribute], value: ["value", "value", numberAttribute], variant: "variant", role: "role", min: "min", max: "max" }, host: { properties: { "attr.role": "this.role", "class": "this.hostClasses" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-progress-bar',
                    template: '<ng-content></ng-content>',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { animated: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], color: [{
                type: Input
            }], precision: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], value: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], variant: [{
                type: Input
            }], role: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.role']
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcHJvZ3Jlc3MvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFFVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLGVBQWUsRUFLaEIsTUFBTSxlQUFlLENBQUM7O0FBUXZCLE1BQU0sT0FBTyxvQkFBb0I7SUF1Qy9CLFlBQ1UsUUFBbUIsRUFDbkIsV0FBdUI7UUFEdkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQXZDakM7OztXQUdHO1FBQ3FDLGFBQVEsR0FBcUIsS0FBSyxDQUFDO1FBTzNFLG9DQUFvQztRQUNHLGNBQVMsR0FBb0IsQ0FBQyxDQUFDO1FBQ3RFOzs7V0FHRztRQUNvQyxVQUFLLEdBQW9CLENBQUMsQ0FBQztRQVFsRTs7O1dBR0c7UUFFdUIsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUN2QyxVQUFLLEdBQUc7WUFDZCxPQUFPLEVBQUUsQ0FBQztZQUNWLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDO0lBS0UsQ0FBQztJQUVMLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ0ksR0FBRyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lB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YnV0ZSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIG51bWJlckF0dHJpYnV0ZSxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJy4uL2NvcmV1aS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogVXNlIHRvIGFuaW1hdGUgdGhlIHN0cmlwZXMgcmlnaHQgdG8gbGVmdCB2aWEgQ1NTMyBhbmltYXRpb25zLlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYW5pbWF0ZWQ6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgY29sb3IgY29udGV4dCBvZiB0aGUgY29tcG9uZW50IHRvIG9uZSBvZiBDb3JlVUnigJlzIHRoZW1lZCBjb2xvcnMuXG4gICAqIEB2YWx1ZXMgJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ3N1Y2Nlc3MnLCAnZGFuZ2VyJywgJ3dhcm5pbmcnLCAnaW5mbycsICdkYXJrJywgJ2xpZ2h0J1xuICAgKi9cbiAgQElucHV0KCkgY29sb3I/OiBDb2xvcnM7XG4gIC8vIFRPRE86IGNoZWNrIGlmIHRoaXMgaXMgbmVjZXNzYXJ5LlxuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBwcmVjaXNpb246IHN0cmluZyB8IG51bWJlciA9IDA7XG4gIC8qKlxuICAgKiBUaGUgcGVyY2VudCB0byBwcm9ncmVzcyB0aGUgUHJvZ3Jlc3NCYXIuXG4gICAqIEB0eXBlIG51bWJlclxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgdmFsdWU6IHN0cmluZyB8IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJvZ3Jlc3MgYmFyIHZhcmlhbnQgdG8gb3B0aW9uYWwgc3RyaXBlZC5cbiAgICogQHZhbHVlcyAnc3RyaXBlZCdcbiAgICovXG4gIEBJbnB1dCgpIHZhcmlhbnQ/OiAnc3RyaXBlZCc7XG5cbiAgLyoqXG4gICAqIFNldCBkZWZhdWx0IGh0bWwgcm9sZSBhdHRyaWJ1dGUuXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnJvbGUnKSByb2xlID0gJ3Byb2dyZXNzYmFyJztcbiAgcHJpdmF0ZSBzdGF0ZSA9IHtcbiAgICBwZXJjZW50OiAwLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkgeyB9XG5cbiAgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1pbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtaW4odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdGUubWluID0gaXNOYU4odmFsdWUpID8gMCA6IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLm1heDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtYXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc3RhdGUubWF4ID0gaXNOYU4odmFsdWUpIHx8IHZhbHVlIDw9IDAgfHwgdmFsdWUgPT09IHRoaXMubWluID8gMTAwIDogdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdwcm9ncmVzcy1iYXInOiB0cnVlLFxuICAgICAgJ3Byb2dyZXNzLWJhci1hbmltYXRlZCc6IHRoaXMuYW5pbWF0ZWQsXG4gICAgICBbYHByb2dyZXNzLWJhci0ke3RoaXMudmFyaWFudH1gXTogISF0aGlzLnZhcmlhbnQsXG4gICAgICBbYGJnLSR7dGhpcy5jb2xvcn1gXTogISF0aGlzLmNvbG9yXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gIH1cblxuICBzZXRQZXJjZW50KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUucGVyY2VudCA9ICsoKDxudW1iZXI+dGhpcy52YWx1ZSAvICh0aGlzLm1heCAtIHRoaXMubWluKSkgKiAxMDApLnRvRml4ZWQoPG51bWJlcj50aGlzLnByZWNpc2lvbik7XG4gIH1cblxuICBzZXRWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRQZXJjZW50KCk7XG4gICAgY29uc3QgaG9zdDogSFRNTEVsZW1lbnQgPSB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShob3N0LCAnd2lkdGgnLCBgJHt0aGlzLnN0YXRlLnBlcmNlbnR9JWApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGhvc3QsICdhcmlhLXZhbHVlbm93JywgU3RyaW5nKHRoaXMudmFsdWUpKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShob3N0LCAnYXJpYS12YWx1ZW1pbicsIFN0cmluZyh0aGlzLm1pbikpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGhvc3QsICdhcmlhLXZhbHVlbWF4JywgU3RyaW5nKHRoaXMubWF4KSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gIH1cbn1cbiJdfQ==