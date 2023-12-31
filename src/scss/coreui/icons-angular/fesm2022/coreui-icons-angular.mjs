import * as i0 from '@angular/core';
import { Injectable, NgModule, Optional, SkipSelf, Directive, Input, HostBinding, ElementRef, Component, ViewChild } from '@angular/core';
import * as i1 from '@angular/platform-browser';
import { NgClass, NgIf } from '@angular/common';

function toCamelCase(str) {
    return str.replace(/([-_][a-z0-9])/ig, ($1) => {
        return $1.toUpperCase().replace('-', '');
    });
}

class IconSetService {
    constructor() {
        this._iconNames = {};
        this._icons = {};
    }
    get iconNames() {
        return this._iconNames;
    }
    ;
    get icons() {
        return this._icons;
    }
    set icons(iconSet) {
        for (const iconsKey in iconSet) {
            this._iconNames[iconsKey] = iconsKey;
        }
        this._icons = iconSet;
    }
    getIcon(name) {
        const icon = this.icons[name];
        if (!icon) {
            console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
        }
        return this.icons[name];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconSetService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconSetService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconSetService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class IconSetModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreUI IconSetModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: IconSetModule,
            providers: [
                { provide: IconSetService }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconSetModule, deps: [{ token: IconSetModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: IconSetModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconSetModule, providers: [IconSetService] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconSetModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [IconSetService]
                }]
        }], ctorParameters: function () { return [{ type: IconSetModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });

class IconDirective {
    set viewBox(viewBox) {
        this._viewBox = viewBox;
    }
    get viewBox() {
        return this._viewBox ?? this.scale;
    }
    get hostClasses() {
        const classes = {
            icon: true,
            [`icon-${this.computedSize}`]: !!this.computedSize
        };
        return this.customClasses ?? classes;
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
        this.size = '';
        this.xmlns = 'http://www.w3.org/2000/svg';
        this.pointerEvents = 'none';
        this.role = 'img';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.DomSanitizer }, { token: IconSetService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "16.2.10", type: IconDirective, isStandalone: true, selector: "svg[cIcon]", inputs: { content: ["cIcon", "content"], size: "size", title: "title", customClasses: "customClasses", width: "width", height: "height", name: ["name", "name", (value) => value && value.includes('-') ? toCamelCase(value) : value], viewBox: "viewBox", xmlns: "xmlns", pointerEvents: ["pointer-events", "pointerEvents"], role: "role" }, host: { properties: { "attr.viewBox": "this.viewBox", "attr.xmlns": "this.xmlns", "attr.pointer-events": "this.pointerEvents", "attr.role": "this.role", "class": "this.hostClasses", "innerHtml": "this.innerHtml" } }, exportAs: ["cIcon"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'svg[cIcon]',
                    exportAs: 'cIcon',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: IconSetService }]; }, propDecorators: { content: [{
                type: Input,
                args: ['cIcon']
            }], size: [{
                type: Input
            }], title: [{
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
                type: HostBinding,
                args: ['attr.viewBox']
            }, {
                type: Input
            }], xmlns: [{
                type: HostBinding,
                args: ['attr.xmlns']
            }, {
                type: Input
            }], pointerEvents: [{
                type: HostBinding,
                args: ['attr.pointer-events']
            }, {
                type: Input,
                args: ['pointer-events']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }, {
                type: Input
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], innerHtml: [{
                type: HostBinding,
                args: ['innerHtml']
            }] } });

class HtmlAttributesDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    ngOnInit() {
        const attribs = this.cHtmlAttr;
        for (const attr in attribs) {
            if (attr === 'style' && typeof (attribs[attr]) === 'object') {
                this.setStyle(attribs[attr]);
            }
            else if (attr === 'class') {
                this.addClass(attribs[attr]);
            }
            else {
                this.setAttrib(attr, attribs[attr]);
            }
        }
    }
    setStyle(styles) {
        for (const style in styles) {
            if (style) {
                this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
            }
        }
    }
    addClass(classes) {
        const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
        classArray.filter((element) => element.length > 0).forEach(element => {
            this.renderer.addClass(this.el.nativeElement, element);
        });
    }
    setAttrib(key, value) {
        value !== null ?
            this.renderer.setAttribute(this.el.nativeElement, key, value) :
            this.renderer.removeAttribute(this.el.nativeElement, key);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HtmlAttributesDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: HtmlAttributesDirective, isStandalone: true, selector: "[cHtmlAttr]", inputs: { cHtmlAttr: "cHtmlAttr" }, exportAs: ["cHtmlAttr"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: HtmlAttributesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cHtmlAttr]',
                    exportAs: 'cHtmlAttr',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { cHtmlAttr: [{
                type: Input
            }] } });

class IconComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i1.DomSanitizer }, { token: IconSetService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: IconComponent, isStandalone: true, selector: "c-icon", inputs: { attributes: "attributes", content: "content", size: "size", title: "title", use: "use", customClasses: "customClasses", width: "width", height: "height", name: ["name", "name", (value) => value && value.includes('-') ? toCamelCase(value) : value], viewBox: "viewBox" }, viewQueries: [{ propertyName: "svgElementRef", first: true, predicate: ["svgElement"], descendants: true, read: ElementRef }], ngImport: i0, template: "<svg *ngIf=\"(!use) && (!!code)\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [attr.viewBox]=\"viewBox\"\n     [innerHtml]=\"innerHtml\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n     #svgElement\n>\n</svg>\n\n<svg *ngIf=\"use\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n>\n  <use [attr.href]=\"use\"></use>\n</svg>\n", styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: HtmlAttributesDirective, selector: "[cHtmlAttr]", inputs: ["cHtmlAttr"], exportAs: ["cHtmlAttr"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'c-icon', standalone: true, imports: [NgClass, NgIf, HtmlAttributesDirective], template: "<svg *ngIf=\"(!use) && (!!code)\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [attr.viewBox]=\"viewBox\"\n     [innerHtml]=\"innerHtml\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n     #svgElement\n>\n</svg>\n\n<svg *ngIf=\"use\"\n     xmlns=\"http://www.w3.org/2000/svg\"\n     [attr.width]=\"width\"\n     [attr.height]=\"height || width\"\n     [ngClass]=\"computedClasses\"\n     [cHtmlAttr]=\"attributes\"\n     role=\"img\"\n     pointer-events=\"none\"\n>\n  <use [attr.href]=\"use\"></use>\n</svg>\n", styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.DomSanitizer }, { type: IconSetService }]; }, propDecorators: { attributes: [{
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

class IconModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: IconModule, imports: [IconComponent,
            IconDirective], exports: [IconComponent,
            IconDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IconModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        IconComponent,
                        IconDirective
                    ],
                    exports: [
                        IconComponent,
                        IconDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of @coreui/icons-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IconComponent, IconDirective, IconModule, IconSetModule, IconSetService };
//# sourceMappingURL=coreui-icons-angular.mjs.map
