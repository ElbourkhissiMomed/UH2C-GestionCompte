import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, numberAttribute, Output, ViewChild } from '@angular/core';
import merge from 'lodash-es/merge';
import { Chart, registerables } from 'chart.js';
import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs';
import * as i0 from "@angular/core";
Chart.register(...registerables);
let nextId = 0;
export class ChartjsComponent {
    get hostClasses() {
        return {
            'chart-wrapper': this.wrapper
        };
    }
    constructor(elementRef, ngZone, renderer, changeDetectorRef) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.customTooltips = true;
        this.id = `c-chartjs-${nextId++}`;
        this.plugins = [];
        this.redraw = false;
        this.type = 'bar';
        this.wrapper = true;
        this.getDatasetAtEvent = new EventEmitter();
        this.getElementAtEvent = new EventEmitter();
        this.getElementsAtEvent = new EventEmitter();
        this.chartRef = new EventEmitter();
    }
    ngAfterViewInit() {
        this.chartRender();
    }
    ngOnChanges(changes) {
        if (changes['data'] && !changes['data'].firstChange) {
            this.chartUpdate();
        }
    }
    ngOnDestroy() {
        this.chartDestroy();
    }
    handleClick($event) {
        if (!this.chart) {
            return;
        }
        const datasetAtEvent = this.chart.getElementsAtEventForMode($event, 'dataset', { intersect: true }, false);
        this.getDatasetAtEvent.emit(datasetAtEvent);
        const elementAtEvent = this.chart.getElementsAtEventForMode($event, 'nearest', { intersect: true }, false);
        this.getElementAtEvent.emit(elementAtEvent);
        const elementsAtEvent = this.chart.getElementsAtEventForMode($event, 'index', { intersect: true }, false);
        this.getElementsAtEvent.emit(elementsAtEvent);
    }
    chartDestroy() {
        this.chart?.destroy();
        this.chartRef.emit(undefined);
    }
    chartRender() {
        if (!this.canvasElement) {
            return;
        }
        const ctx = this.canvasElement.nativeElement.getContext('2d');
        this.ngZone.runOutsideAngular(() => {
            const config = this.chartConfig();
            if (config) {
                setTimeout(() => {
                    this.chart = new Chart(ctx, config);
                    this.renderer.setStyle(this.canvasElement.nativeElement, 'display', 'block');
                    this.changeDetectorRef.markForCheck();
                    this.chartRef.emit(this.chart);
                });
            }
        });
    }
    chartUpdate() {
        if (!this.chart) {
            return;
        }
        if (this.redraw) {
            this.chartDestroy();
            setTimeout(() => {
                this.chartRender();
            });
            return;
        }
        const config = this.chartConfig();
        if (this.options) {
            Object.assign(this.chart.options ?? {}, config.options ?? {});
        }
        if (!this.chart.config.data) {
            this.chart.config.data = { ...config.data };
            this.chartUpdateOutsideAngular();
        }
        if (this.chart) {
            Object.assign(this.chart.config.options ?? {}, config.options ?? {});
            Object.assign(this.chart.config.plugins ?? [], config.plugins ?? []);
            Object.assign(this.chart.config.data, config.data);
        }
        this.chartUpdateOutsideAngular();
    }
    chartUpdateOutsideAngular() {
        setTimeout(() => {
            this.ngZone.runOutsideAngular(() => {
                this.chart?.update();
                this.changeDetectorRef.markForCheck();
            });
        });
    }
    chartToBase64Image() {
        return this.chart?.toBase64Image();
    }
    chartDataConfig() {
        return {
            labels: this.data?.labels ?? [],
            datasets: this.data?.datasets ?? []
        };
    }
    chartOptions() {
        return this.options;
    }
    chartConfig() {
        this.chartCustomTooltips();
        return {
            data: this.chartDataConfig(),
            options: this.chartOptions(),
            plugins: this.plugins,
            type: this.type
        };
    }
    chartCustomTooltips() {
        if (this.customTooltips) {
            const options = this.options;
            // @ts-ignore
            const plugins = this.options?.plugins;
            // @ts-ignore
            const tooltip = this.options?.plugins?.tooltip;
            this.options = merge({
                ...options,
                plugins: {
                    ...plugins,
                    tooltip: {
                        ...tooltip,
                        enabled: false,
                        mode: 'index',
                        position: 'nearest',
                        external: cuiCustomTooltips
                    }
                }
            });
        }
    }
    ;
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ChartjsComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: ChartjsComponent, isStandalone: true, selector: "c-chart", inputs: { customTooltips: "customTooltips", data: "data", height: ["height", "height", (value) => numberAttribute(value, undefined)], id: "id", options: "options", plugins: "plugins", redraw: ["redraw", "redraw", booleanAttribute], type: "type", width: ["width", "width", (value) => numberAttribute(value, undefined)], wrapper: "wrapper" }, outputs: { getDatasetAtEvent: "getDatasetAtEvent", getElementAtEvent: "getElementAtEvent", getElementsAtEvent: "getElementsAtEvent", chartRef: "chartRef" }, host: { properties: { "style.height.px": "this.height", "style.width.px": "this.width", "class": "this.hostClasses" } }, viewQueries: [{ propertyName: "canvasElement", first: true, predicate: ["canvasElement"], descendants: true }], exportAs: ["cChart"], usesOnChanges: true, ngImport: i0, template: "<canvas\n  #canvasElement\n  (click)=\"handleClick($event)\"\n  [height]=\"height\"\n  [id]=\"id\"\n  [width]=\"width\"\n  role=\"img\"\n  style=\"display: none;\"\n>\n  <ng-content></ng-content>\n</canvas>\n", styles: [":host.chart-wrapper{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ChartjsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-chart', exportAs: 'cChart', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<canvas\n  #canvasElement\n  (click)=\"handleClick($event)\"\n  [height]=\"height\"\n  [id]=\"id\"\n  [width]=\"width\"\n  role=\"img\"\n  style=\"display: none;\"\n>\n  <ng-content></ng-content>\n</canvas>\n", styles: [":host.chart-wrapper{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { customTooltips: [{
                type: Input
            }], data: [{
                type: Input
            }], height: [{
                type: HostBinding,
                args: ['style.height.px']
            }, {
                type: Input,
                args: [{ transform: (value) => numberAttribute(value, undefined) }]
            }], id: [{
                type: Input
            }], options: [{
                type: Input
            }], plugins: [{
                type: Input
            }], redraw: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], type: [{
                type: Input
            }], width: [{
                type: HostBinding,
                args: ['style.width.px']
            }, {
                type: Input,
                args: [{ transform: (value) => numberAttribute(value, undefined) }]
            }], wrapper: [{
                type: Input
            }], getDatasetAtEvent: [{
                type: Output
            }], getElementAtEvent: [{
                type: Output
            }], getElementsAtEvent: [{
                type: Output
            }], chartRef: [{
                type: Output
            }], canvasElement: [{
                type: ViewChild,
                args: ['canvasElement']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRqcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci1jaGFydGpzL3NyYy9saWIvY2hhcnRqcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci1jaGFydGpzL3NyYy9saWIvY2hhcnRqcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsZ0JBQWdCLEVBQ2hCLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBRUwsZUFBZSxFQUdmLE1BQU0sRUFHTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLE1BQU0saUJBQWlCLENBQUM7QUFFcEMsT0FBTyxFQUFFLEtBQUssRUFBbUQsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxjQUFjLElBQUksaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFdEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0FBRWpDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQVVmLE1BQU0sT0FBTyxnQkFBZ0I7SUErQjNCLElBQ0ksV0FBVztRQUNiLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUNVLFVBQXNCLEVBQ3RCLE1BQWMsRUFDZCxRQUFtQixFQUNuQixpQkFBb0M7UUFIcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBeENyQyxtQkFBYyxHQUFHLElBQUksQ0FBQztRQU10QixPQUFFLEdBQUcsYUFBYSxN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O3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUU3QixJQUFJO3NCQUFaLEtBQUs7Z0JBRytFLEtBQUs7c0JBRHpGLFdBQVc7dUJBQUMsZ0JBQWdCOztzQkFDNUIsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUU7Z0JBRTFFLE9BQU87c0JBQWYsS0FBSztnQkFFYSxpQkFBaUI7c0JBQW5DLE1BQU07Z0JBQ1ksaUJBQWlCO3NCQUFuQyxNQUFNO2dCQUNZLGtCQUFrQjtzQkFBcEMsTUFBTTtnQkFFWSxRQUFRO3NCQUExQixNQUFNO2dCQUVxQixhQUFhO3NCQUF4QyxTQUFTO3VCQUFDLGVBQWU7Z0JBS3RCLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIG51bWJlckF0dHJpYnV0ZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gtZXMvbWVyZ2UnO1xuXG5pbXBvcnQgeyBDaGFydCwgQ2hhcnRDb25maWd1cmF0aW9uLCBDaGFydFR5cGUsIERlZmF1bHREYXRhUG9pbnQsIHJlZ2lzdGVyYWJsZXMgfSBmcm9tICdjaGFydC5qcyc7XG5pbXBvcnQgeyBjdXN0b21Ub29sdGlwcyBhcyBjdWlDdXN0b21Ub29sdGlwcyB9IGZyb20gJ0Bjb3JldWkvY2hhcnRqcyc7XG5cbkNoYXJ0LnJlZ2lzdGVyKC4uLnJlZ2lzdGVyYWJsZXMpO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFydGpzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnRqcy5jb21wb25lbnQuc2NzcyddLFxuICBleHBvcnRBczogJ2NDaGFydCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0anNDb21wb25lbnQ8VFR5cGUgZXh0ZW5kcyBDaGFydFR5cGUgPSBDaGFydFR5cGUsIFREYXRhID0gRGVmYXVsdERhdGFQb2ludDxUVHlwZT4sIFRMYWJlbCA9IHVua25vd24+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGN1c3RvbVRvb2x0aXBzID0gdHJ1ZTtcbiAgQElucHV0KCkgZGF0YT86IENoYXJ0Q29uZmlndXJhdGlvbjxUVHlwZSwgVERhdGEsIFRMYWJlbD5bJ2RhdGEnXTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpID0+IG51bWJlckF0dHJpYnV0ZSh2YWx1ZSwgdW5kZWZpbmVkKSB9KSBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgQElucHV0KCkgaWQgPSBgYy1jaGFydGpzLSR7bmV4dElkKyt9YDtcbiAgQElucHV0KCkgb3B0aW9ucz86IENoYXJ0Q29uZmlndXJhdGlvbjxUVHlwZSwgVERhdGEsIFRMYWJlbD5bJ29wdGlvbnMnXTtcbiAgQElucHV0KCkgcGx1Z2luczogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPlsncGx1Z2lucyddID0gW107XG5cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHJlZHJhdzogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHR5cGU6IENoYXJ0Q29uZmlndXJhdGlvbjxUVHlwZSwgVERhdGEsIFRMYWJlbD5bJ3R5cGUnXSA9ICdiYXInIGFzIFRUeXBlO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBASW5wdXQoeyB0cmFuc2Zvcm06ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSA9PiBudW1iZXJBdHRyaWJ1dGUodmFsdWUsIHVuZGVmaW5lZCkgfSkgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgQElucHV0KCkgd3JhcHBlciA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGdldERhdGFzZXRBdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBnZXRFbGVtZW50QXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZ2V0RWxlbWVudHNBdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYXJ0UmVmID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnY2FudmFzRWxlbWVudCcpIGNhbnZhc0VsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIGNoYXJ0ITogQ2hhcnQ8VFR5cGUsIFREYXRhLCBUTGFiZWw+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdjaGFydC13cmFwcGVyJzogdGhpcy53cmFwcGVyXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhcnRSZW5kZXIoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snZGF0YSddICYmICFjaGFuZ2VzWydkYXRhJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2hhcnRVcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYXJ0RGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUNsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGFzZXRBdEV2ZW50ID0gdGhpcy5jaGFydC5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKCRldmVudCwgJ2RhdGFzZXQnLCB7IGludGVyc2VjdDogdHJ1ZSB9LCBmYWxzZSk7XG4gICAgdGhpcy5nZXREYXRhc2V0QXRFdmVudC5lbWl0KGRhdGFzZXRBdEV2ZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnRBdEV2ZW50ID0gdGhpcy5jaGFydC5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKCRldmVudCwgJ25lYXJlc3QnLCB7IGludGVyc2VjdDogdHJ1ZSB9LCBmYWxzZSk7XG4gICAgdGhpcy5nZXRFbGVtZW50QXRFdmVudC5lbWl0KGVsZW1lbnRBdEV2ZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnRzQXRFdmVudCA9IHRoaXMuY2hhcnQuZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZSgkZXZlbnQsICdpbmRleCcsIHsgaW50ZXJzZWN0OiB0cnVlIH0sIGZhbHNlKTtcbiAgICB0aGlzLmdldEVsZW1lbnRzQXRFdmVudC5lbWl0KGVsZW1lbnRzQXRFdmVudCk7XG4gIH1cblxuICBwdWJsaWMgY2hhcnREZXN0cm95KCkge1xuICAgIHRoaXMuY2hhcnQ/LmRlc3Ryb3koKTtcbiAgICB0aGlzLmNoYXJ0UmVmLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFydFJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuY2FudmFzRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gdGhpcy5jYW52YXNFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY2hhcnRDb25maWcoKTtcbiAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIGNvbmZpZyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNhbnZhc0VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIHRoaXMuY2hhcnRSZWYuZW1pdCh0aGlzLmNoYXJ0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGFydFVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuY2hhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZWRyYXcpIHtcbiAgICAgIHRoaXMuY2hhcnREZXN0cm95KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFydFJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jaGFydENvbmZpZygpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNoYXJ0Lm9wdGlvbnMgPz8ge30sIGNvbmZpZy5vcHRpb25zID8/IHt9KTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY2hhcnQuY29uZmlnLmRhdGEpIHtcbiAgICAgIHRoaXMuY2hhcnQuY29uZmlnLmRhdGEgPSB7IC4uLmNvbmZpZy5kYXRhIH07XG4gICAgICB0aGlzLmNoYXJ0VXBkYXRlT3V0c2lkZUFuZ3VsYXIoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNoYXJ0LmNvbmZpZy5vcHRpb25zID8/IHt9LCBjb25maWcub3B0aW9ucyA/PyB7fSk7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuY2hhcnQuY29uZmlnLnBsdWdpbnMgPz8gW10sIGNvbmZpZy5wbHVnaW5zID8/IFtdKTtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jaGFydC5jb25maWcuZGF0YSwgY29uZmlnLmRhdGEpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnRVcGRhdGVPdXRzaWRlQW5ndWxhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFydFVwZGF0ZU91dHNpZGVBbmd1bGFyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYXJ0Py51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNoYXJ0VG9CYXNlNjRJbWFnZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmNoYXJ0Py50b0Jhc2U2NEltYWdlKCk7XG4gIH1cblxuICBwcml2YXRlIGNoYXJ0RGF0YUNvbmZpZygpOiBDaGFydENvbmZpZ3VyYXRpb248VFR5cGUsIFREYXRhLCBUTGFiZWw+WydkYXRhJ10ge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbHM6IHRoaXMuZGF0YT8ubGFiZWxzID8/IFtdLFxuICAgICAgZGF0YXNldHM6IHRoaXMuZGF0YT8uZGF0YXNldHMgPz8gW11cbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFydE9wdGlvbnMoKTogQ2hhcnRDb25maWd1cmF0aW9uPFRUeXBlLCBURGF0YSwgVExhYmVsPlsnb3B0aW9ucyddIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFydENvbmZpZygpOiBDaGFydENvbmZpZ3VyYXRpb248VFR5cGUsIFREYXRhLCBUTGFiZWw+IHtcbiAgICB0aGlzLmNoYXJ0Q3VzdG9tVG9vbHRpcHMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogdGhpcy5jaGFydERhdGFDb25maWcoKSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY2hhcnRPcHRpb25zKCksXG4gICAgICBwbHVnaW5zOiB0aGlzLnBsdWdpbnMsXG4gICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFydEN1c3RvbVRvb2x0aXBzKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbVRvb2x0aXBzKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgcGx1Z2lucyA9IHRoaXMub3B0aW9ucz8ucGx1Z2lucztcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLm9wdGlvbnM/LnBsdWdpbnM/LnRvb2x0aXA7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAuLi5wbHVnaW5zLFxuICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgIC4uLnRvb2x0aXAsXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1vZGU6ICdpbmRleCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ25lYXJlc3QnLFxuICAgICAgICAgICAgZXh0ZXJuYWw6IGN1aUN1c3RvbVRvb2x0aXBzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iLCI8Y2FudmFzXG4gICNjYW52YXNFbGVtZW50XG4gIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcbiAgW2hlaWdodF09XCJoZWlnaHRcIlxuICBbaWRdPVwiaWRcIlxuICBbd2lkdGhdPVwid2lkdGhcIlxuICByb2xlPVwiaW1nXCJcbiAgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvY2FudmFzPlxuIl19