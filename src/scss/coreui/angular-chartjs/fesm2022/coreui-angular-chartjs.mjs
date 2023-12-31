import * as i0 from '@angular/core';
import { EventEmitter, numberAttribute, booleanAttribute, Component, ChangeDetectionStrategy, Input, HostBinding, Output, ViewChild, NgModule } from '@angular/core';
import merge from 'lodash-es/merge';
import { Chart, registerables } from 'chart.js';
import { customTooltips } from '@coreui/chartjs';

Chart.register(...registerables);
let nextId = 0;
class ChartjsComponent {
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
                        external: customTooltips
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

class ChartjsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ChartjsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: ChartjsModule, imports: [ChartjsComponent], exports: [ChartjsComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ChartjsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ChartjsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ChartjsComponent
                    ],
                    exports: [
                        ChartjsComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of coreui-angular-chartjs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartjsComponent, ChartjsModule };
//# sourceMappingURL=coreui-angular-chartjs.mjs.map
