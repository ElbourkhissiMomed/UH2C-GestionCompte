import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { HtmlAttributesDirective } from '../shared/html-attr.directive';
import { toCamelCase } from './icon.utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../icon-set";
export class IconComponent {
    set viewBox(viewBox) {
        this._viewBox = viewBox;
    }
    get viewBox() {
        return this._viewBox ?? this.scale;
    }
    get innerHtml() {
        const code = Array.isArray(this.code) ? this.code[1] || this.code[0] : this.code ?? '';
        // todo proper sanitize
        // const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, code);
        return this.sanitizer.bypassSecurityTrustHtml((this.titleCode + code) ?? '');
    }
    constructor(renderer, elementRef, sanitizer, iconSet) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.iconSet = iconSet;
        this.attributes = { role: 'img' };
        this.size = '';
        this.use = '';
        this.customClasses = '';
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.classList.forEach((item) => {
            this.renderer.addClass(this.svgElementRef.nativeElement, item);
        });
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        const svgElement = this.svgElementRef.nativeElement;
        this.renderer.insertBefore(parentElement, svgElement, this.elementRef.nativeElement);
        this.renderer.removeChild(parentElement, this.elementRef.nativeElement);
    }
    get titleCode() {
        return this.title ? `<title>${this.title}</title>` : '';
    }
    get code() {
        if (this.content) {
            return this.content;
        }
        if (this.iconSet && this.name) {
            return this.iconSet.getIcon(this.name);
        }
        if (this.name && !this.iconSet?.icons[this.name]) {
            console.warn(`c-icon component: icon name '${this.name}' does not exist for IconSet service. ` +
                `To use icon by 'name' prop you need to add it to IconSet service. \n`, this.name);
        }
        return undefined;
    }
    get scale() {
        return Array.isArray(this.code) && this.code.length > 1 ? `0 0 ${this.code[0]}` : '0 0 64 64';
    }
    get computedSize() {
        const addCustom = !this.size && (this.width || this.height);
        return this.size === 'custom' || addCustom ? 'custom-size' : this.size;
    }
    get computedClasses() {
        const classes = {
            icon: true,
            [`icon-${this.computedSize}`]: !!this.computedSize
        };
        return !!this.customClasses ? this.customClasses : classes;
    }
    toCamelCase(str) {
        return toCamelCase(str);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.DomSanitizer }, { token: i2.IconSetService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: IconComponent, isStandalone: true, selector: "c-icon", inputs: { attributes: "attributes", content: "content", size: "size", title: "title", use: "use", customClasses: "customClasses", width: "width", height: "height", name: ["name", "name", (value) => value && value.includes('-') ? toCamelCase(value) : value], viewBox: "viewBox" }, viewQueries: [{ propertyName: "svgElementRef", first: true, predicate: ["svgElement"], descendants: true, read: ElementRef }], ngImport: i0, template: "<svg *ngIf=\"(!use) && (!!code)\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [attr.viewBox]=\"viewBox\"\n     [innerHtml]=\"innerHtml\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n     #svgElement\n>\n</svg>\n\n<svg *ngIf=\"use\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n>\n  <use [attr.href]=\"use\"></use>\n</svg>\n", styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-icon', standalone: true, imports: [NgClass, NgIf, HtmlAttributesDirective], template: "<svg *ngIf=\"(!use) && (!!code)\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [attr.viewBox]=\"viewBox\"\n     [innerHtml]=\"innerHtml\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n     #svgElement\n>\n</svg>\n\n<svg *ngIf=\"use\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n>\n  <use [attr.href]=\"use\"></use>\n</svg>\n", styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: i2.IconSetService }]; }, propDecorators: { attributes: [{
                type: Input
            }], content: [{
                type: Input
            }], size: [{
                type: Input
            }], title: [{
                type: Input
            }], use: [{
                type: Input
            }], customClasses: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], name: [{
                type: Input,
                args: [{ transform: (value) => value && value.includes('-') ? toCamelCase(value) : value }]
            }], viewBox: [{
                type: Input
            }], svgElementRef: [{
                type: ViewChild,
                args: ['svgElement', { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktaWNvbnMtYW5ndWxhci9zcmMvbGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktaWNvbnMtYW5ndWxhci9zcmMvbGliL2ljb24vaWNvbi5jb21wb25lbnQuc3ZnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVMzQyxNQUFNLE9BQU8sYUFBYTtJQWF4QixJQUNJLE9BQU8sQ0FBQyxPQUFlO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBTUQsSUFBSSxTQUFTO1FBQ1gsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkYsdUJBQXVCO1FBQ3ZCLHlFQUF5RTtRQUN6RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMs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ZCxLQUFLO2dCQUU4RixJQUFJO3NCQUF2RyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBRzlGLE9BQU87c0JBRFYsS0FBSztnQkFXeUMsYUFBYTtzQkFBM0QsU0FBUzt1QkFBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcywgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBIdG1sQXR0cmlidXRlc0RpcmVjdGl2ZSB9IGZyb20gJy4uL3NoYXJlZC9odG1sLWF0dHIuZGlyZWN0aXZlJztcbmltcG9ydCB7IEljb25TZXRTZXJ2aWNlIH0gZnJvbSAnLi4vaWNvbi1zZXQnO1xuaW1wb3J0IHsgSWNvblNpemUsIElJY29uIH0gZnJvbSAnLi9pY29uLmludGVyZmFjZSc7XG5pbXBvcnQgeyB0b0NhbWVsQ2FzZSB9IGZyb20gJy4vaWNvbi51dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5zdmcnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBOZ0lmLCBIdG1sQXR0cmlidXRlc0RpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIElJY29uLCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSBhdHRyaWJ1dGVzOiBhbnkgPSB7IHJvbGU6ICdpbWcnIH07XG4gIEBJbnB1dCgpIGNvbnRlbnQ/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IGFueVtdO1xuICBASW5wdXQoKSBzaXplOiBJY29uU2l6ZSA9ICcnO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgdXNlID0gJyc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBba2xhc3M6IHN0cmluZ106IGFueSB9ID0gJyc7XG4gIEBJbnB1dCgpIHdpZHRoPzogc3RyaW5nO1xuICBASW5wdXQoKSBoZWlnaHQ/OiBzdHJpbmc7XG5cbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodmFsdWU6IHN0cmluZykgPT4gdmFsdWUgJiYgdmFsdWUuaW5jbHVkZXMoJy0nKSA/IHRvQ2FtZWxDYXNlKHZhbHVlKSA6IHZhbHVlIH0pIG5hbWUhOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IHZpZXdCb3godmlld0JveDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmlld0JveCA9IHZpZXdCb3g7XG4gIH1cblxuICBnZXQgdmlld0JveCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl92aWV3Qm94ID8/IHRoaXMuc2NhbGU7XG4gIH1cblxuICBwcml2YXRlIF92aWV3Qm94ITogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ3N2Z0VsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgc3ZnRWxlbWVudFJlZiE6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IGlubmVySHRtbCgpOiBTYWZlSHRtbCB7XG4gICAgY29uc3QgY29kZSA9IEFycmF5LmlzQXJyYXkodGhpcy5jb2RlKSA/IHRoaXMuY29kZVsxXSB8fCB0aGlzLmNvZGVbMF0gOiB0aGlzLmNvZGUgPz8gJyc7XG4gICAgLy8gdG9kbyBwcm9wZXIgc2FuaXRpemVcbiAgICAvLyBjb25zdCBzYW5pdGl6ZWQgPSB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgY29kZSk7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKCh0aGlzLnRpdGxlQ29kZSArIGNvZGUpID8/ICcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGljb25TZXQ6IEljb25TZXRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc3ZnRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBpdGVtKTtcbiAgICB9KTtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gdGhpcy5zdmdFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUocGFyZW50RWxlbWVudCwgc3ZnRWxlbWVudCwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQocGFyZW50RWxlbWVudCwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0IHRpdGxlQ29kZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRpdGxlID8gYDx0aXRsZT4ke3RoaXMudGl0bGV9PC90aXRsZT5gIDogJyc7XG4gIH1cblxuICBnZXQgY29kZSgpOiBzdHJpbmcgfCBzdHJpbmdbXSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGVudDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaWNvblNldCAmJiB0aGlzLm5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25TZXQuZ2V0SWNvbih0aGlzLm5hbWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uYW1lICYmICF0aGlzLmljb25TZXQ/Lmljb25zW3RoaXMubmFtZV0pIHtcbiAgICAgIGNvbnNvbGUud2FybihgYy1pY29uIGNvbXBvbmVudDogaWNvbiBuYW1lICcke3RoaXMubmFtZX0nIGRvZXMgbm90IGV4aXN0IGZvciBJY29uU2V0IHNlcnZpY2UuIGAgK1xuICAgICAgICBgVG8gdXNlIGljb24gYnkgJ25hbWUnIHByb3AgeW91IG5lZWQgdG8gYWRkIGl0IHRvIEljb25TZXQgc2VydmljZS4gXFxuYCxcbiAgICAgICAgdGhpcy5uYW1lXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IHNjYWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5jb2RlKSAmJiB0aGlzLmNvZGUubGVuZ3RoID4gMSA/IGAwIDAgJHt0aGlzLmNvZGVbMF19YCA6ICcwIDAgNjQgNjQnO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkU2l6ZSgpOiBFeGNsdWRlPEljb25TaXplLCAnY3VzdG9tJz4gfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGFkZEN1c3RvbSA9ICF0aGlzLnNpemUgJiYgKHRoaXMud2lkdGggfHwgdGhpcy5oZWlnaHQpO1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdjdXN0b20nIHx8IGFkZEN1c3RvbSA/ICdjdXN0b20tc2l6ZScgOiB0aGlzLnNpemU7XG4gIH1cblxuICBnZXQgY29tcHV0ZWRDbGFzc2VzKCk6IGFueSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIGljb246IHRydWUsXG4gICAgICBbYGljb24tJHt0aGlzLmNvbXB1dGVkU2l6ZX1gXTogISF0aGlzLmNvbXB1dGVkU2l6ZVxuICAgIH07XG4gICAgcmV0dXJuICEhdGhpcy5jdXN0b21DbGFzc2VzID8gdGhpcy5jdXN0b21DbGFzc2VzIDogY2xhc3NlcztcbiAgfVxuXG4gIHRvQ2FtZWxDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdG9DYW1lbENhc2Uoc3RyKTtcbiAgfVxufVxuIiwiPHN2ZyAqbmdJZj1cIighdXNlKSAmJiAoISFjb2RlKVwiXG4gICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICBbYXR0ci53aWR0aF09XCJ3aWR0aFwiXG4gICAgIFthdHRyLmhlaWdodF09XCJoZWlnaHQgfHwgd2lkdGhcIlxuICAgICBbYXR0ci52aWV3Qm94XT1cInZpZXdCb3hcIlxuICAgICBbaW5uZXJIdG1sXT1cImlubmVySHRtbFwiXG4gICAgIFtuZ0NsYXNzXT1cImNvbXB1dGVkQ2xhc3Nlc1wiXG4gICAgIFtjSHRtbEF0dHJdPVwiYXR0cmlidXRlc1wiXG4gICAgIHJvbGU9XCJpbWdcIlxuICAgICBwb2ludGVyLWV2ZW50cz1cIm5vbmVcIlxuICAgICAjc3ZnRWxlbWVudFxuPlxuPC9zdmc+XG5cbjxzdmcgKm5nSWY9XCJ1c2VcIlxuICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgW2F0dHIud2lkdGhdPVwid2lkdGhcIlxuICAgICBbYXR0ci5oZWlnaHRdPVwiaGVpZ2h0IHx8IHdpZHRoXCJcbiAgICAgW25nQ2xhc3NdPVwiY29tcHV0ZWRDbGFzc2VzXCJcbiAgICAgW2NIdG1sQXR0cl09XCJhdHRyaWJ1dGVzXCJcbiAgICAgcm9sZT1cImltZ1wiXG4gICAgIHBvaW50ZXItZXZlbnRzPVwibm9uZVwiXG4+XG4gIDx1c2UgW2F0dHIuaHJlZl09XCJ1c2VcIj48L3VzZT5cbjwvc3ZnPlxuIl19