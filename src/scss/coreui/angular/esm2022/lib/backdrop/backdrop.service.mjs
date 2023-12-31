import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class BackdropService {
    constructor(document, rendererFactory) {
        this.document = document;
        this.rendererFactory = rendererFactory;
        this.backdropClick = new Subject();
        this.backdropClick$ = this.backdropClick.asObservable();
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    get scrollbarWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = this.document.documentElement.clientWidth;
        const scrollbarWidth = Math.abs((window?.innerWidth ?? documentWidth) - documentWidth);
        return `${scrollbarWidth}px`;
    }
    setBackdrop(type = 'modal') {
        const backdropElement = this.renderer.createElement('div');
        this.renderer.addClass(backdropElement, `${type}-backdrop`);
        this.renderer.addClass(backdropElement, 'fade');
        this.renderer.appendChild(this.document.body, backdropElement);
        this.unListen = this.renderer.listen(backdropElement, 'click', (e) => {
            this.onClickHandler();
        });
        setTimeout(() => {
            this.renderer.addClass(backdropElement, 'show');
        });
        return backdropElement;
    }
    clearBackdrop(backdrop) {
        if (backdrop) {
            this.unListen();
            this.renderer.removeClass(backdrop, 'show');
            setTimeout(() => {
                this.renderer.removeChild(this.document.body, backdrop);
                backdrop = undefined;
            }, 300);
        }
        return backdrop;
    }
    onClickHandler() {
        this.backdropClick.next(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BackdropService, deps: [{ token: DOCUMENT }, { token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BackdropService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BackdropService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.RendererFactory2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3Auc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvYmFja2Ryb3AvYmFja2Ryb3Auc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQzRCLFFBQWtCLEVBQ3BDLGVBQWlDO1FBRGYsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFSbkMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQy9DLG1CQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQVNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsaUZBQWlGO1FBQ2pGLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztRQUNoRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsSUFBSSxhQUFhLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUN2RixPQUFPLEdBQUcsY0FBYyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFlLE9BQU87UUFDaEMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFRLEVBQUU7WUFDekUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxhQUFhLENBQUMsUUFBYTtRQUN6QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDeEQsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzsrR0FsRFUsZUFBZSxrQkFTaEIsUUFBUTttSEFUUCxlQUFlLGNBRmQsTUFBTTs7NEZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQVVJLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tkcm9wU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBiYWNrZHJvcENsaWNrID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgYmFja2Ryb3BDbGljayQgPSB0aGlzLmJhY2tkcm9wQ2xpY2suYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcml2YXRlIHVuTGlzdGVuITogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MlxuICApIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgZ2V0IHNjcm9sbGJhcldpZHRoKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IE1hdGguYWJzKCh3aW5kb3c/LmlubmVyV2lkdGggPz8gZG9jdW1lbnRXaWR0aCkgLSBkb2N1bWVudFdpZHRoKTtcbiAgICByZXR1cm4gYCR7c2Nyb2xsYmFyV2lkdGh9cHhgO1xuICB9XG5cbiAgc2V0QmFja2Ryb3AodHlwZTogc3RyaW5nID0gJ21vZGFsJyk6IGFueSB7XG4gICAgY29uc3QgYmFja2Ryb3BFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJhY2tkcm9wRWxlbWVudCwgYCR7dHlwZX0tYmFja2Ryb3BgKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGJhY2tkcm9wRWxlbWVudCwgJ2ZhZGUnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuYm9keSwgYmFja2Ryb3BFbGVtZW50KTtcbiAgICB0aGlzLnVuTGlzdGVuID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oYmFja2Ryb3BFbGVtZW50LCAnY2xpY2snLCAoZSk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5vbkNsaWNrSGFuZGxlcigpO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhiYWNrZHJvcEVsZW1lbnQsICdzaG93Jyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJhY2tkcm9wRWxlbWVudDtcbiAgfVxuXG4gIGNsZWFyQmFja2Ryb3AoYmFja2Ryb3A6IGFueSk6IGFueSB7XG4gICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICB0aGlzLnVuTGlzdGVuKCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGJhY2tkcm9wLCAnc2hvdycpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5kb2N1bWVudC5ib2R5LCBiYWNrZHJvcCk7XG4gICAgICAgIGJhY2tkcm9wID0gdW5kZWZpbmVkO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gICAgcmV0dXJuIGJhY2tkcm9wO1xuICB9XG5cbiAgb25DbGlja0hhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5iYWNrZHJvcENsaWNrLm5leHQodHJ1ZSk7XG4gIH1cbn1cbiJdfQ==