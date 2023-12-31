import { ContentChild, Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { PageLinkDirective } from '../page-link/page-link.directive';
import * as i0 from "@angular/core";
export class PageItemDirective {
    get ariaCurrent() {
        return this.active ? 'page' : null;
    }
    get hostClasses() {
        return {
            'page-item': true,
            disabled: this.disabled,
            active: this.active,
        };
    }
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngAfterContentInit() {
        this.setAttributes();
    }
    ngOnChanges(changes) {
        if (changes['disabled']) {
            this.setAttributes();
        }
    }
    setAttributes() {
        if (!this.pageLinkElementRef) {
            return;
        }
        const pageLinkElement = this.pageLinkElementRef.nativeElement;
        if (this.disabled) {
            this.renderer.setAttribute(pageLinkElement, 'aria-disabled', 'true');
            this.renderer.setAttribute(pageLinkElement, 'tabindex', '-1');
        }
        else {
            this.renderer.removeAttribute(pageLinkElement, 'aria-disabled');
            this.renderer.removeAttribute(pageLinkElement, 'tabindex');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PageItemDirective, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: PageItemDirective, isStandalone: true, selector: "[cPageItem]", inputs: { active: "active", disabled: "disabled" }, host: { properties: { "attr.aria-current": "this.ariaCurrent", "class": "this.hostClasses" } }, queries: [{ propertyName: "pageLinkElementRef", first: true, predicate: PageLinkDirective, descendants: true, read: ElementRef }], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: PageItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cPageItem]',
                    standalone: true
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; }, propDecorators: { active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaCurrent: [{
                type: HostBinding,
                args: ['attr.aria-current']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], pageLinkElementRef: [{
                type: ContentChild,
                args: [PageLinkDirective, { read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvcGFnaW5hdGlvbi9wYWdlLWl0ZW0vcGFnZS1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFNckUsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QixJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPO1lBQ0wsV0FBVyxFQUFFLElBQUk7WUFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUlELFlBQ1UsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUN6QixDQUFDO0lBRUwsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixPQUFNO1NBQ1A7UUFDRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBRTlELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOytHQXhEVSxpQkFBaUI7bUdBQWpCLGlCQUFpQiwyUUEyQmQsaUJBQWlCLDJCQUFVLFVBQVU7OzRGQTNCeEMsaUJBQWlCO2tCQUo3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7Z0dBT1UsTUFBTTtzQkFBZCxLQUFLO2dCQUtHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0YsV0FBVztzQkFEZCxXQUFXO3VCQUFDLG1CQUFtQjtnQkFNNUIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBU21DLGtCQUFrQjtzQkFBeEUsWUFBWTt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb250ZW50Q2hpbGQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnZUxpbmtEaXJlY3RpdmUgfSBmcm9tICcuLi9wYWdlLWxpbmsvcGFnZS1saW5rLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjUGFnZUl0ZW1dJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgYWN0aXZlIHN0YXRlIGZvciB0aGUgY29tcG9uZW50LlxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmU/OiBib29sZWFuO1xuICAvKipcbiAgICogVG9nZ2xlIHRoZSBkaXNhYmxlZCBzdGF0ZSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWN1cnJlbnQnKVxuICBnZXQgYXJpYUN1cnJlbnQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlID8gJ3BhZ2UnIDogbnVsbDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgaG9zdENsYXNzZXMoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3BhZ2UtaXRlbSc6IHRydWUsXG4gICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgIGFjdGl2ZTogdGhpcy5hY3RpdmUsXG4gICAgfTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoUGFnZUxpbmtEaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwYWdlTGlua0VsZW1lbnRSZWYhOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlc1snZGlzYWJsZWQnXSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXR0cmlidXRlcygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGFnZUxpbmtFbGVtZW50UmVmKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgcGFnZUxpbmtFbGVtZW50ID0gdGhpcy5wYWdlTGlua0VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShwYWdlTGlua0VsZW1lbnQsICdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHBhZ2VMaW5rRWxlbWVudCwgJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHBhZ2VMaW5rRWxlbWVudCwgJ2FyaWEtZGlzYWJsZWQnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHBhZ2VMaW5rRWxlbWVudCwgJ3RhYmluZGV4Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=