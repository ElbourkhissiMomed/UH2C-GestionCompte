import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class SidebarNavTitleComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnInit() {
        const nativeElement = this.el.nativeElement;
        const name = this.renderer.createText(this.item.name);
        if (this.item.class) {
            const classes = this.item.class;
            this.renderer.addClass(nativeElement, classes);
        }
        if (this.item.wrapper) {
            const wrapper = this.renderer.createElement(this.item.wrapper.element);
            this.addAttribs(this.item.wrapper.attributes, wrapper);
            this.renderer.appendChild(wrapper, name);
            this.renderer.appendChild(nativeElement, wrapper);
        }
        else {
            this.renderer.appendChild(nativeElement, name);
        }
    }
    addAttribs(attribs, element) {
        if (attribs) {
            for (const attr in attribs) {
                if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                    this.setStyle(attribs[attr], element);
                }
                else if (attr === 'class') {
                    this.addClass(attribs[attr], element);
                }
                else {
                    this.setAttrib(attr, attribs[attr], element);
                }
            }
        }
    }
    setStyle(styles, el) {
        for (const style in styles) {
            if (style) {
                this.renderer.setStyle(el, style, styles[style]);
            }
        }
    }
    addClass(classes, el) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(el, element);
        });
    }
    setAttrib(key, value, el) {
        this.renderer.setAttribute(el, key, value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavTitleComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: SidebarNavTitleComponent, isStandalone: true, selector: "c-sidebar-nav-title", inputs: { item: "item" }, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: SidebarNavTitleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-sidebar-nav-title',
                    template: '',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { item: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYtdGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9zaWRlYmFyL3NpZGViYXItbmF2L3NpZGViYXItbmF2LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7O0FBTzlFLE1BQU0sT0FBTyx3QkFBd0I7SUFHbkMsWUFDVSxFQUFjLEVBQ2QsUUFBbUI7UUFEbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDMUIsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLGFBQWEsR0FBZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDekQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RCxJQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFHO1lBQ3JCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUc7WUFDdkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVPLFVBQVUsQ0FBQyxPQUE4QixFQUFFLE9BQVk7UUFDN0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUc7b0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QztxQkFBTSxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QztxQkFBTTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQzlDO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFTyxRQUFRLENBQUMsTUFBNkIsRUFBRSxFQUFPO1FBQ3JELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzFCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEQ7U0FDRjtJQUNILENBQUM7SUFFTyxRQUFRLENBQUMsT0FBK0IsRUFBRSxFQUFPO1FBQ3ZELE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0UsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLEVBQU87UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUUsQ0FBQztJQUM5QyxDQUFDOytHQTFEVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qix5R0FIekIsRUFBRTs7NEZBR0Qsd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxFQUFFO29CQUNaLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjt5SEFFVSxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1zaWRlYmFyLW5hdi10aXRsZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2VGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpdGVtOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KHRoaXMuaXRlbS5uYW1lKTtcblxuICAgIGlmICggdGhpcy5pdGVtLmNsYXNzICkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuaXRlbS5jbGFzcztcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MobmF0aXZlRWxlbWVudCwgY2xhc3Nlcyk7XG4gICAgfVxuXG4gICAgaWYgKCB0aGlzLml0ZW0ud3JhcHBlciApIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodGhpcy5pdGVtLndyYXBwZXIuZWxlbWVudCk7XG4gICAgICB0aGlzLmFkZEF0dHJpYnModGhpcy5pdGVtLndyYXBwZXIuYXR0cmlidXRlcywgd3JhcHBlcik7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHdyYXBwZXIsIG5hbWUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCB3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChuYXRpdmVFbGVtZW50LCBuYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEF0dHJpYnMoYXR0cmliczogeyBbeDogc3RyaW5nXTogYW55OyB9LCBlbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoYXR0cmlicykge1xuICAgICAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJpYnMpIHtcbiAgICAgICAgaWYgKGF0dHIgPT09ICdzdHlsZScgJiYgdHlwZW9mKGF0dHJpYnNbYXR0cl0pID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICB0aGlzLnNldFN0eWxlKGF0dHJpYnNbYXR0cl0sIGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICB0aGlzLmFkZENsYXNzKGF0dHJpYnNbYXR0cl0sIGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmliKGF0dHIsIGF0dHJpYnNbYXR0cl0sIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHlsZShzdHlsZXM6IHsgW3g6IHN0cmluZ106IGFueTsgfSwgZWw6IGFueSk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gc3R5bGVzKSB7XG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgc3R5bGUsIHN0eWxlc1tzdHlsZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoY2xhc3Nlczogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgZWw6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzQXJyYXkgPSAoQXJyYXkuaXNBcnJheShjbGFzc2VzKSA/IGNsYXNzZXMgOiBjbGFzc2VzLnNwbGl0KCcgJykpO1xuICAgIGNsYXNzQXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiBlbGVtZW50Lmxlbmd0aCA+IDApLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBlbGVtZW50ICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEF0dHJpYihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCBrZXksIHZhbHVlICk7XG4gIH1cbn1cbiJdfQ==