import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { useAnimation } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { collapseAnimation, collapseHorizontalAnimation, expandAnimation, expandHorizontalAnimation } from './collapse.animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
// todo
// tslint:disable-next-line:no-conflicting-lifecycle
export class CollapseDirective {
    /**
     * @ignore
     */
    set animate(value) {
        this._animate = value;
    }
    get animate() {
        return this._animate;
    }
    /**
     * Set horizontal collapsing to transition the width instead of height.
     */
    set horizontal(value) {
        this._horizontal = coerceBooleanProperty(value);
    }
    get horizontal() {
        return this._horizontal;
    }
    /**
     * Toggle the visibility of collapsible element.
     */
    set visible(value) {
        this._visible = coerceBooleanProperty(value);
    }
    get visible() {
        return this._visible;
    }
    /**
     * Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
     */
    set navbar(value) {
        this._navbar = coerceBooleanProperty(value);
    }
    ;
    get navbar() {
        return this._navbar;
    }
    constructor(hostElement, renderer, animationBuilder) {
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.animationBuilder = animationBuilder;
        this._animate = true;
        this._horizontal = false;
        this._visible = false;
        this._navbar = false;
        /**
         * @ignore
         */
        this.duration = '350ms';
        /**
         * @ignore
         */
        this.transition = 'ease';
        /**
         * Event emitted on visibility change. [docs]
         * @type string
         */
        this.collapseChange = new EventEmitter();
        this.collapsing = false;
        this.host = this.hostElement.nativeElement;
        this.renderer.setStyle(this.host, 'display', 'none');
    }
    get hostClasses() {
        return {
            'navbar-collapse': this.navbar,
            'collapse-horizontal': this.horizontal
        };
    }
    ngAfterViewInit() {
        if (this.visible) {
            this.toggle();
        }
    }
    ngOnDestroy() {
        this.destroyPlayer();
    }
    ngOnChanges(changes) {
        if (changes['visible']) {
            if (!changes['visible'].firstChange || !changes['visible'].currentValue) {
                this.toggle(changes['visible'].currentValue);
            }
        }
    }
    ngDoCheck() {
        if (this._visible !== this.visible) {
            this.toggle();
        }
    }
    toggle(visible = this.visible) {
        this.createPlayer(visible);
        this.player?.play();
    }
    destroyPlayer() {
        this.player?.destroy();
    }
    createPlayer(visible = this.visible) {
        if (this.player?.hasStarted()) {
            this.destroyPlayer();
        }
        if (visible) {
            this.renderer.removeStyle(this.host, 'display');
        }
        const duration = this.animate ? this.duration : '0ms';
        const expand = this.horizontal ? expandHorizontalAnimation : expandAnimation;
        const collapse = this.horizontal ? collapseHorizontalAnimation : collapseAnimation;
        const dimension = this.horizontal ? 'width' : 'height';
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        const animationFactory = this.animationBuilder.build(useAnimation(visible ? expand : collapse, { params: { time: duration, easing: this.transition } }));
        this.player = animationFactory.create(this.host);
        this.renderer.setStyle(this.host, dimension, visible ? 0 : `${this.host.getBoundingClientRect()[dimension]}px`);
        !visible && this.host.offsetHeight;
        this.player.onStart(() => {
            this.setMaxSize();
            this.renderer.removeClass(this.host, 'collapse');
            this.renderer.addClass(this.host, 'collapsing');
            this.renderer.removeClass(this.host, 'show');
            this.collapsing = true;
            if (visible) {
                // @ts-ignore
                this.renderer.setStyle(this.host, dimension, `${this.host[scrollSize]}px`);
            }
            else {
                this.renderer.setStyle(this.host, dimension, '');
            }
            this.collapseChange.emit(visible ? 'opening' : 'collapsing');
        });
        this.player.onDone(() => {
            this.visible = visible;
            this.collapsing = false;
            this.renderer.removeClass(this.host, 'collapsing');
            this.renderer.addClass(this.host, 'collapse');
            if (visible) {
                this.renderer.addClass(this.host, 'show');
                this.renderer.setStyle(this.host, dimension, '');
            }
            else {
                this.renderer.removeClass(this.host, 'show');
            }
            this.collapseChange.emit(visible ? 'open' : 'collapsed');
        });
    }
    setMaxSize() {
        // setTimeout(() => {
        if (this.horizontal) {
            this.scrollWidth = this.host.scrollWidth;
            this.scrollWidth > 0 && this.renderer.setStyle(this.host, 'maxWidth', `${this.scrollWidth}px`);
            // } else {
            // this.scrollHeight = this.host.scrollHeight;
            // this.scrollHeight > 0 && this.renderer.setStyle(this.host, 'maxHeight', `${this.scrollHeight}px`);
        }
        // });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CollapseDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.AnimationBuilder }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: CollapseDirective, isStandalone: true, selector: "[cCollapse]", inputs: { animate: "animate", horizontal: "horizontal", visible: "visible", navbar: "navbar", duration: "duration", transition: "transition" }, outputs: { collapseChange: "collapseChange" }, host: { properties: { "class": "this.hostClasses" } }, exportAs: ["cCollapse"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: CollapseDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cCollapse]',
                    exportAs: 'cCollapse',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.AnimationBuilder }]; }, propDecorators: { animate: [{
                type: Input
            }], horizontal: [{
                type: Input
            }], visible: [{
                type: Input
            }], navbar: [{
                type: Input
            }], duration: [{
                type: Input
            }], transition: [{
                type: Input
            }], collapseChange: [{
                type: Output
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9jb2xsYXBzZS9jb2xsYXBzZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFHVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFHTCxNQUFNLEVBR1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFxQyxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RixPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUUsT0FBTyxFQUNMLGlCQUFpQixFQUNqQiwyQkFBMkIsRUFDM0IsZUFBZSxFQUNmLHlCQUF5QixFQUMxQixNQUFNLHVCQUF1QixDQUFDOzs7QUFFL0IsT0FBTztBQUNQLG9EQUFvRDtBQU1wRCxNQUFNLE9BQU8saUJBQWlCO0lBTTVCOztPQUVHO0lBQ0gsSUFDSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFJRDs7T0FFRztJQUNILElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFJRDs7T0FFRztJQUNILElBQ0ksT0FBTyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUks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QkFEYixLQUFLO2dCQWVGLE9BQU87c0JBRFYsS0FBSztnQkFlRixNQUFNO3NCQURULEtBQUs7Z0JBY0csUUFBUTtzQkFBaEIsS0FBSztnQkFJRyxVQUFVO3NCQUFsQixLQUFLO2dCQUtJLGNBQWM7c0JBQXZCLE1BQU07Z0JBa0JILFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uQnVpbGRlciwgQW5pbWF0aW9uUGxheWVyLCB1c2VBbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5pbXBvcnQge1xuICBjb2xsYXBzZUFuaW1hdGlvbixcbiAgY29sbGFwc2VIb3Jpem9udGFsQW5pbWF0aW9uLFxuICBleHBhbmRBbmltYXRpb24sXG4gIGV4cGFuZEhvcml6b250YWxBbmltYXRpb25cbn0gZnJvbSAnLi9jb2xsYXBzZS5hbmltYXRpb25zJztcblxuLy8gdG9kb1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbmZsaWN0aW5nLWxpZmVjeWNsZVxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NDb2xsYXBzZV0nLFxuICBleHBvcnRBczogJ2NDb2xsYXBzZScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgRG9DaGVjaywgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2hvcml6b250YWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX25hdmJhcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlzaWJsZTogQm9vbGVhbklucHV0O1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgYW5pbWF0ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FuaW1hdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBhbmltYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfYW5pbWF0ZSA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFNldCBob3Jpem9udGFsIGNvbGxhcHNpbmcgdG8gdHJhbnNpdGlvbiB0aGUgd2lkdGggaW5zdGVhZCBvZiBoZWlnaHQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgaG9yaXpvbnRhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hvcml6b250YWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGhvcml6b250YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hvcml6b250YWw7XG4gIH1cblxuICBwcml2YXRlIF9ob3Jpem9udGFsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiBjb2xsYXBzaWJsZSBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHZpc2libGUodmFsdWUpIHtcbiAgICB0aGlzLl92aXNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaWJsZSA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBZGQgYG5hdmJhcmAgcHJvcCBmb3IgZ3JvdXBpbmcgYW5kIGhpZGluZyBuYXZiYXIgY29udGVudHMgYnkgYSBwYXJlbnQgYnJlYWtwb2ludC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuYXZiYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9uYXZiYXIgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9O1xuXG4gIGdldCBuYXZiYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmJhcjtcbiAgfVxuXG4gIHByaXZhdGUgX25hdmJhciA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBASW5wdXQoKSBkdXJhdGlvbiA9ICczNTBtcyc7XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBASW5wdXQoKSB0cmFuc2l0aW9uID0gJ2Vhc2UnO1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCBvbiB2aXNpYmlsaXR5IGNoYW5nZS4gW2RvY3NdXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKi9cbiAgQE91dHB1dCgpIGNvbGxhcHNlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcHJpdmF0ZSBwbGF5ZXIhOiBBbmltYXRpb25QbGF5ZXI7XG4gIHByaXZhdGUgcmVhZG9ubHkgaG9zdDogSFRNTEVsZW1lbnQ7XG4gIC8vIHByaXZhdGUgc2Nyb2xsSGVpZ2h0ITogbnVtYmVyO1xuICBwcml2YXRlIHNjcm9sbFdpZHRoITogbnVtYmVyO1xuICBwcml2YXRlIGNvbGxhcHNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGFuaW1hdGlvbkJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXJcbiAgKSB7XG4gICAgdGhpcy5ob3N0ID0gdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0LCAnZGlzcGxheScsICdub25lJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICduYXZiYXItY29sbGFwc2UnOiB0aGlzLm5hdmJhcixcbiAgICAgICdjb2xsYXBzZS1ob3Jpem9udGFsJzogdGhpcy5ob3Jpem9udGFsXG4gICAgfTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveVBsYXllcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWyd2aXNpYmxlJ10pIHtcbiAgICAgIGlmICghY2hhbmdlc1sndmlzaWJsZSddLmZpcnN0Q2hhbmdlIHx8ICFjaGFuZ2VzWyd2aXNpYmxlJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKGNoYW5nZXNbJ3Zpc2libGUnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdmlzaWJsZSAhPT0gdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSh2aXNpYmxlID0gdGhpcy52aXNpYmxlKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVQbGF5ZXIodmlzaWJsZSk7XG4gICAgdGhpcy5wbGF5ZXI/LnBsYXkoKTtcbiAgfVxuXG4gIGRlc3Ryb3lQbGF5ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5wbGF5ZXI/LmRlc3Ryb3koKTtcbiAgfVxuXG4gIGNyZWF0ZVBsYXllcih2aXNpYmxlOiBib29sZWFuID0gdGhpcy52aXNpYmxlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxheWVyPy5oYXNTdGFydGVkKCkpIHtcbiAgICAgIHRoaXMuZGVzdHJveVBsYXllcigpO1xuICAgIH1cblxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaG9zdCwgJ2Rpc3BsYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYW5pbWF0ZSA/IHRoaXMuZHVyYXRpb24gOiAnMG1zJztcblxuICAgIGNvbnN0IGV4cGFuZCA9IHRoaXMuaG9yaXpvbnRhbCA/IGV4cGFuZEhvcml6b250YWxBbmltYXRpb24gOiBleHBhbmRBbmltYXRpb247XG4gICAgY29uc3QgY29sbGFwc2UgPSB0aGlzLmhvcml6b250YWwgPyBjb2xsYXBzZUhvcml6b250YWxBbmltYXRpb24gOiBjb2xsYXBzZUFuaW1hdGlvbjtcblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuaG9yaXpvbnRhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBgc2Nyb2xsJHtjYXBpdGFsaXplZERpbWVuc2lvbn1gO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uRmFjdG9yeSA9IHRoaXMuYW5pbWF0aW9uQnVpbGRlci5idWlsZChcbiAgICAgIHVzZUFuaW1hdGlvbih2aXNpYmxlID8gZXhwYW5kIDogY29sbGFwc2UsIHsgcGFyYW1zOiB7IHRpbWU6IGR1cmF0aW9uLCBlYXNpbmc6IHRoaXMudHJhbnNpdGlvbiB9IH0pXG4gICAgKTtcblxuICAgIHRoaXMucGxheWVyID0gYW5pbWF0aW9uRmFjdG9yeS5jcmVhdGUodGhpcy5ob3N0KTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0LCBkaW1lbnNpb24sIHZpc2libGUgPyAwIDogYCR7dGhpcy5ob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgKTtcblxuICAgICF2aXNpYmxlICYmIHRoaXMuaG9zdC5vZmZzZXRIZWlnaHQ7XG5cbiAgICB0aGlzLnBsYXllci5vblN0YXJ0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0TWF4U2l6ZSgpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3QsICdjb2xsYXBzZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QsICdjb2xsYXBzaW5nJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdCwgJ3Nob3cnKTtcbiAgICAgIHRoaXMuY29sbGFwc2luZyA9IHRydWU7XG4gICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5ob3N0LCBkaW1lbnNpb24sIGAke3RoaXMuaG9zdFtzY3JvbGxTaXplXX1weGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3QsIGRpbWVuc2lvbiwgJycpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb2xsYXBzZUNoYW5nZS5lbWl0KHZpc2libGUgPyAnb3BlbmluZycgOiAnY29sbGFwc2luZycpO1xuICAgIH0pO1xuICAgIHRoaXMucGxheWVyLm9uRG9uZSgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5jb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdCwgJ2NvbGxhcHNpbmcnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0LCAnY29sbGFwc2UnKTtcbiAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0LCAnc2hvdycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaG9zdCwgZGltZW5zaW9uLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdCwgJ3Nob3cnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29sbGFwc2VDaGFuZ2UuZW1pdCh2aXNpYmxlID8gJ29wZW4nIDogJ2NvbGxhcHNlZCcpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWF4U2l6ZSgpIHtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAodGhpcy5ob3Jpem9udGFsKSB7XG4gICAgICB0aGlzLnNjcm9sbFdpZHRoID0gdGhpcy5ob3N0LnNjcm9sbFdpZHRoO1xuICAgICAgdGhpcy5zY3JvbGxXaWR0aCA+IDAgJiYgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3QsICdtYXhXaWR0aCcsIGAke3RoaXMuc2Nyb2xsV2lkdGh9cHhgKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnNjcm9sbEhlaWdodCA9IHRoaXMuaG9zdC5zY3JvbGxIZWlnaHQ7XG4gICAgICAvLyB0aGlzLnNjcm9sbEhlaWdodCA+IDAgJiYgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmhvc3QsICdtYXhIZWlnaHQnLCBgJHt0aGlzLnNjcm9sbEhlaWdodH1weGApO1xuICAgIH1cbiAgICAvLyB9KTtcbiAgfVxufVxuIl19