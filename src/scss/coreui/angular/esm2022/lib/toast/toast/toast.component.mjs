import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../toaster/toaster.service";
export class ToastComponent {
    constructor(hostElement, renderer, toasterService, changeDetectorRef) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.toasterService = toasterService;
        this.changeDetectorRef = changeDetectorRef;
        /**
         * Auto hide the toast.
         * @type boolean
         */
        this.autohide = true;
        /**
         * Sets the color context of the component to one of CoreUI’s themed colors.
         * @type Colors
         */
        this.color = '';
        /**
         * Delay hiding the toast (ms).
         * @type number
         */
        this.delay = 5000;
        /**
         * Apply fade transition to the toast.
         * @type boolean
         */
        this.fade = true;
        this._visible = false;
        /**
         * Event emitted on visibility change. [docs]
         * @type boolean
         */
        this.visibleChange = new EventEmitter();
        /**
         * Event emitted on timer tick. [docs]
         * @type number
         */
        this.timer = new EventEmitter();
    }
    /**
     * Toggle the visibility of component.
     * @type boolean
     */
    set visible(value) {
        const newValue = coerceBooleanProperty(value);
        if (this._visible !== newValue) {
            this._visible = newValue;
            newValue ? this.setTimer() : this.clearTimer();
            this.visibleChange.emit(newValue);
            this.changeDetectorRef.markForCheck();
        }
    }
    get visible() {
        return this._visible;
    }
    get clock() {
        return this._clock;
    }
    set clock(value) {
        this._clock = value;
        this.timer.emit(this._clock);
        this.changeDetectorRef.markForCheck();
    }
    get animationDisabled() {
        return !this.fade;
    }
    get animateType() {
        return this.visible ? 'show' : 'hide';
    }
    onMouseOver() {
        this.clearTimer();
    }
    onMouseOut() {
        this.setTimer();
    }
    get hostClasses() {
        return {
            toast: true,
            show: true,
            [`bg-${this.color}`]: !!this.color,
            'border-0': !!this.color
        };
    }
    ngOnInit() {
        if (this.visible) {
            this.toasterService.setState({
                toast: this,
                show: this.visible,
                placement: this.placement
            });
            this.clearTimer();
            this.setTimer();
        }
    }
    ngOnDestroy() {
        this.clearTimer();
    }
    setTimer() {
        this.clearTimer();
        if (this.autohide && this.visible) {
            this.timerId = this.delay > 0 ? setTimeout(() => this.onClose(), this.delay) : null;
            this.setClock();
        }
    }
    clearTimer() {
        this.clearClock();
        clearTimeout(this.timerId);
        this.timerId = null;
    }
    onClose() {
        this.clearTimer();
        this.toasterService.setState({
            toast: this,
            show: false,
            placement: this.placement
        });
    }
    setClock() {
        this.clearClock();
        this.clock = 0;
        this.clockId = setInterval(() => {
            this.clock += 1;
            this.changeDetectorRef.markForCheck();
        }, 1000);
        this.clockTimerId = setTimeout(() => {
            this.clearClock();
        }, this.delay);
    }
    clearClock() {
        clearTimeout(this.clockTimerId);
        clearInterval(this.clockId);
        this.clockId = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.ToasterService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ToastComponent, isStandalone: true, selector: "c-toast", inputs: { autohide: "autohide", color: "color", delay: "delay", fade: "fade", visible: "visible", index: "index" }, outputs: { visibleChange: "visibleChange", timer: "timer" }, host: { listeners: { "mouseover": "onMouseOver()", "mouseout": "onMouseOut()" }, properties: { "@.disabled": "this.animationDisabled", "@fadeInOut": "this.animateType", "class": "this.hostClasses" } }, exportAs: ["cToast"], ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block;overflow:hidden}\n"], animations: [
            trigger('fadeInOut', [
                state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
                state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
                state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
                transition('show => hide', [
                    animate('{{ time }} {{ easing }}')
                ], {
                    params: { time: '300ms', easing: 'ease-out' }
                }),
                transition('hide => show', [animate('{{ time }} {{ easing }}')], {
                    params: { time: '300ms', easing: 'ease-in' }
                }),
                transition('show => void', [animate('{{ time }} {{ easing }}')], {
                    params: { time: '300ms', easing: 'ease-out' }
                }),
                transition('void => show', [animate('{{ time }} {{ easing }}')], {
                    params: { time: '300ms', easing: 'ease-in' }
                })
            ])
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-toast', template: '<ng-content></ng-content>', exportAs: 'cToast', standalone: true, animations: [
                        trigger('fadeInOut', [
                            state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
                            state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
                            state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
                            transition('show => hide', [
                                animate('{{ time }} {{ easing }}')
                            ], {
                                params: { time: '300ms', easing: 'ease-out' }
                            }),
                            transition('hide => show', [animate('{{ time }} {{ easing }}')], {
                                params: { time: '300ms', easing: 'ease-in' }
                            }),
                            transition('show => void', [animate('{{ time }} {{ easing }}')], {
                                params: { time: '300ms', easing: 'ease-out' }
                            }),
                            transition('void => show', [animate('{{ time }} {{ easing }}')], {
                                params: { time: '300ms', easing: 'ease-in' }
                            })
                        ])
                    ], styles: [":host{display:block;overflow:hidden}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.ToasterService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { autohide: [{
                type: Input
            }], color: [{
                type: Input
            }], delay: [{
                type: Input
            }], fade: [{
                type: Input
            }], visible: [{
                type: Input
            }], index: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], timer: [{
                type: Output
            }], animationDisabled: [{
                type: HostBinding,
                args: ['@.disabled']
            }], animateType: [{
                type: HostBinding,
                args: ['@fadeInOut']
            }], onMouseOver: [{
                type: HostListener,
                args: ['mouseover']
            }], onMouseOut: [{
                type: HostListener,
                args: ['mouseout']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi90b2FzdC90b2FzdC90b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFvQzVFLE1BQU0sT0FBTyxjQUFjO0lBT3pCLFlBQ1MsV0FBdUIsRUFDdkIsUUFBbUIsRUFDbkIsY0FBOEIsRUFDOUIsaUJBQW9DO1FBSHBDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFHN0M7OztXQUdHO1FBQ00sYUFBUSxHQUFHLElBQUksQ0FBQztRQUV6Qjs7O1dBR0c7UUFDTSxVQUFLLEdBQVksRUFBRSxDQUFDO1FBRTdCOzs7V0FHRztRQUNNLFVBQUssR0FBRyxJQUFJLENBQUM7UUFFdEI7OztXQUdHO1FBQ00sU0FBSSxHQUFHLElBQUksQ0FBQztRQXFCYixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBT3pCOzs7V0FHRztRQUNPLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUV0RDs7O1dBR0c7UUFDTyxVQUFLLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUE5RHhELENBQUM7SUEwQko7OztPQUdHO0lBQ0gsSUFDSSxPQUFP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LEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7NkJBQzlDLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEVBQUU7Z0NBQy9ELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRTs2QkFDN0MsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO3NMQW9CUSxRQUFRO3NCQUFoQixLQUFLO2dCQU1HLEtBQUs7c0JBQWIsS0FBSztnQkFNRyxLQUFLO3NCQUFiLEtBQUs7Z0JBTUcsSUFBSTtzQkFBWixLQUFLO2dCQU9GLE9BQU87c0JBRFYsS0FBSztnQkFvQkcsS0FBSztzQkFBYixLQUFLO2dCQU1JLGFBQWE7c0JBQXRCLE1BQU07Z0JBTUcsS0FBSztzQkFBZCxNQUFNO2dCQW1CSCxpQkFBaUI7c0JBRHBCLFdBQVc7dUJBQUMsWUFBWTtnQkFNckIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLFlBQVk7Z0JBS0UsV0FBVztzQkFBckMsWUFBWTt1QkFBQyxXQUFXO2dCQUlDLFVBQVU7c0JBQW5DLFlBQVk7dUJBQUMsVUFBVTtnQkFLcEIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuLi8uLi9jb3JldWkudHlwZXMnO1xuaW1wb3J0IHsgVG9hc3RlclNlcnZpY2UgfSBmcm9tICcuLi90b2FzdGVyL3RvYXN0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUVG9hc3RlclBsYWNlbWVudCB9IGZyb20gJy4uL3RvYXN0ZXIvdG9hc3Rlci5jb21wb25lbnQnO1xuXG50eXBlIEFuaW1hdGVUeXBlID0gKCdoaWRlJyB8ICdzaG93Jyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtdG9hc3QnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi90b2FzdC5jb21wb25lbnQuc2NzcyddLFxuICBleHBvcnRBczogJ2NUb2FzdCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgICBzdGF0ZSgnc2hvdycsIHN0eWxlKHsgb3BhY2l0eTogMSwgaGVpZ2h0OiAnKicsIHBhZGRpbmc6ICcqJywgYm9yZGVyOiAnKicsIG1hcmdpbjogJyonIH0pKSxcbiAgICAgIHN0YXRlKCdoaWRlJywgc3R5bGUoeyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAsIHBhZGRpbmc6IDAsIGJvcmRlcjogMCwgbWFyZ2luOiAwIH0pKSxcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoeyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAsIHBhZGRpbmc6IDAsIGJvcmRlcjogMCwgbWFyZ2luOiAwIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Nob3cgPT4gaGlkZScsIFtcbiAgICAgICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nKVxuICAgICAgXSwge1xuICAgICAgICBwYXJhbXM6IHsgdGltZTogJzMwMG1zJywgZWFzaW5nOiAnZWFzZS1vdXQnIH1cbiAgICAgIH0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZSA9PiBzaG93JywgW2FuaW1hdGUoJ3t7IHRpbWUgfX0ge3sgZWFzaW5nIH19JyldLCB7XG4gICAgICAgIHBhcmFtczogeyB0aW1lOiAnMzAwbXMnLCBlYXNpbmc6ICdlYXNlLWluJyB9XG4gICAgICB9KSxcbiAgICAgIHRyYW5zaXRpb24oJ3Nob3cgPT4gdm9pZCcsIFthbmltYXRlKCd7eyB0aW1lIH19IHt7IGVhc2luZyB9fScpXSwge1xuICAgICAgICBwYXJhbXM6IHsgdGltZTogJzMwMG1zJywgZWFzaW5nOiAnZWFzZS1vdXQnIH1cbiAgICAgIH0pLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBzaG93JywgW2FuaW1hdGUoJ3t7IHRpbWUgfX0ge3sgZWFzaW5nIH19JyldLCB7XG4gICAgICAgIHBhcmFtczogeyB0aW1lOiAnMzAwbXMnLCBlYXNpbmc6ICdlYXNlLWluJyB9XG4gICAgICB9KVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Zpc2libGU6IEJvb2xlYW5JbnB1dDtcblxuICBwdWJsaWMgZHluYW1pYyE6IGJvb2xlYW47XG4gIHB1YmxpYyBwbGFjZW1lbnQhOiBUVG9hc3RlclBsYWNlbWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIHRvYXN0ZXJTZXJ2aWNlOiBUb2FzdGVyU2VydmljZSxcbiAgICBwdWJsaWMgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICAvKipcbiAgICogQXV0byBoaWRlIHRoZSB0b2FzdC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgYXV0b2hpZGUgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjb2xvciBjb250ZXh0IG9mIHRoZSBjb21wb25lbnQgdG8gb25lIG9mIENvcmVVSeKAmXMgdGhlbWVkIGNvbG9ycy5cbiAgICogQHR5cGUgQ29sb3JzXG4gICAqL1xuICBASW5wdXQoKSBjb2xvcj86IENvbG9ycyA9ICcnO1xuXG4gIC8qKlxuICAgKiBEZWxheSBoaWRpbmcgdGhlIHRvYXN0IChtcykuXG4gICAqIEB0eXBlIG51bWJlclxuICAgKi9cbiAgQElucHV0KCkgZGVsYXkgPSA1MDAwO1xuXG4gIC8qKlxuICAgKiBBcHBseSBmYWRlIHRyYW5zaXRpb24gdG8gdGhlIHRvYXN0LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBmYWRlID0gdHJ1ZTtcblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIGNvbXBvbmVudC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3Zpc2libGUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl92aXNpYmxlID0gbmV3VmFsdWU7XG4gICAgICBuZXdWYWx1ZSA/IHRoaXMuc2V0VGltZXIoKSA6IHRoaXMuY2xlYXJUaW1lcigpO1xuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2libGUgPSBmYWxzZTtcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgQElucHV0KCkgaW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgb24gdmlzaWJpbGl0eSBjaGFuZ2UuIFtkb2NzXVxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCBvbiB0aW1lciB0aWNrLiBbZG9jc11cbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBAT3V0cHV0KCkgdGltZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgdGltZXJJZDogYW55O1xuICBwcml2YXRlIGNsb2NrSWQ6IGFueTtcbiAgcHJpdmF0ZSBjbG9ja1RpbWVySWQ6IGFueTtcblxuICBwcml2YXRlIF9jbG9jayE6IG51bWJlcjtcblxuICBnZXQgY2xvY2soKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvY2s7XG4gIH1cblxuICBzZXQgY2xvY2sodmFsdWUpIHtcbiAgICB0aGlzLl9jbG9jayA9IHZhbHVlO1xuICAgIHRoaXMudGltZXIuZW1pdCh0aGlzLl9jbG9jayk7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnQC5kaXNhYmxlZCcpXG4gIGdldCBhbmltYXRpb25EaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZmFkZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnQGZhZGVJbk91dCcpXG4gIGdldCBhbmltYXRlVHlwZSgpOiBBbmltYXRlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZSA/ICdzaG93JyA6ICdoaWRlJztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicpIG9uTW91c2VPdmVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VvdXQnKSBvbk1vdXNlT3V0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9hc3Q6IHRydWUsXG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgW2BiZy0ke3RoaXMuY29sb3J9YF06ICEhdGhpcy5jb2xvcixcbiAgICAgICdib3JkZXItMCc6ICEhdGhpcy5jb2xvclxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnNldFN0YXRlKHtcbiAgICAgICAgdG9hc3Q6IHRoaXMsXG4gICAgICAgIHNob3c6IHRoaXMudmlzaWJsZSxcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICAgIHRoaXMuc2V0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgfVxuXG4gIHNldFRpbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIGlmICh0aGlzLmF1dG9oaWRlICYmIHRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy50aW1lcklkID0gdGhpcy5kZWxheSA+IDAgPyBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25DbG9zZSgpLCB0aGlzLmRlbGF5KSA6IG51bGw7XG4gICAgICB0aGlzLnNldENsb2NrKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJUaW1lcigpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2xvY2soKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklkKTtcbiAgICB0aGlzLnRpbWVySWQgPSBudWxsO1xuICB9XG5cbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyVGltZXIoKTtcbiAgICB0aGlzLnRvYXN0ZXJTZXJ2aWNlLnNldFN0YXRlKHtcbiAgICAgIHRvYXN0OiB0aGlzLFxuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50XG4gICAgfSk7XG4gIH1cblxuICBzZXRDbG9jaygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2xvY2soKTtcbiAgICB0aGlzLmNsb2NrID0gMDtcbiAgICB0aGlzLmNsb2NrSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb2NrICs9IDE7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDEwMDApO1xuICAgIHRoaXMuY2xvY2tUaW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyQ2xvY2soKTtcbiAgICB9LCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIGNsZWFyQ2xvY2soKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvY2tUaW1lcklkKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2xvY2tJZCk7XG4gICAgdGhpcy5jbG9ja0lkID0gbnVsbDtcbiAgfVxufVxuIl19