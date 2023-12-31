import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class IntersectionService {
    constructor() {
        this.intersecting = new BehaviorSubject(false);
        this.intersecting$ = this.intersecting.asObservable();
        this.defaultObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };
    }
    createIntersectionObserver(hostElement, observerOptions = this.defaultObserverOptions) {
        const options = { ...this.defaultObserverOptions, ...observerOptions };
        this.hostElement = hostElement;
        const handleIntersect = (entries, observer) => {
            entries.forEach((entry) => {
                this.intersecting.next(entry.isIntersecting);
            });
        };
        this.intersectionObserver = new IntersectionObserver(handleIntersect, options);
        this.intersectionObserver.observe(hostElement.nativeElement);
    }
    ngOnDestroy() {
        this.intersectionObserver?.unobserve(this.hostElement?.nativeElement);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IntersectionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IntersectionService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: IntersectionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NlcnZpY2VzL2ludGVyc2VjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTdkMsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QjtRQUVRLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDM0Qsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBS3pDLDJCQUFzQixHQUE4QjtZQUMxRCxJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxHQUFHO1NBQ2YsQ0FBQztJQVpjLENBQUM7SUFjakIsMEJBQTBCLENBQUMsV0FBd0MsRUFBRSxlQUFlLEdBQUcsSUFBSSxDQUFDLHNCQUFzQjtRQUVoSCxNQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsZUFBZSxFQUFFLENBQUM7UUFFdkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFjLEVBQUUsUUFBYSxFQUFFLEVBQUU7WUFDeEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQzsrR0FsQ1UsbUJBQW1CO21IQUFuQixtQkFBbUI7OzRGQUFuQixtQkFBbUI7a0JBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQge1xuICByb290PzogRWxlbWVudCB8IG51bGw7XG4gIHJvb3RNYXJnaW4/OiBzdHJpbmc7XG4gIHRocmVzaG9sZD86IG51bWJlciB8IG51bWJlcltdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwcml2YXRlIGludGVyc2VjdGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBpbnRlcnNlY3RpbmckID0gdGhpcy5pbnRlcnNlY3RpbmcuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBpbnRlcnNlY3Rpb25PYnNlcnZlciE6IEludGVyc2VjdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIGhvc3RFbGVtZW50ITogeyBuYXRpdmVFbGVtZW50OiBFbGVtZW50OyB9O1xuXG4gIHByaXZhdGUgZGVmYXVsdE9ic2VydmVyT3B0aW9uczogSUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IHtcbiAgICByb290OiBudWxsLFxuICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgIHRocmVzaG9sZDogMC4yXG4gIH07XG5cbiAgY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaG9zdEVsZW1lbnQ6IHsgbmF0aXZlRWxlbWVudDogRWxlbWVudDsgfSwgb2JzZXJ2ZXJPcHRpb25zID0gdGhpcy5kZWZhdWx0T2JzZXJ2ZXJPcHRpb25zKSB7XG5cbiAgICBjb25zdCBvcHRpb25zID0geyAuLi50aGlzLmRlZmF1bHRPYnNlcnZlck9wdGlvbnMsIC4uLm9ic2VydmVyT3B0aW9ucyB9O1xuXG4gICAgdGhpcy5ob3N0RWxlbWVudCA9IGhvc3RFbGVtZW50O1xuXG4gICAgY29uc3QgaGFuZGxlSW50ZXJzZWN0ID0gKGVudHJpZXM6IGFueVtdLCBvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5pbnRlcnNlY3RpbmcubmV4dChlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVJbnRlcnNlY3QsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXI/LnVub2JzZXJ2ZSh0aGlzLmhvc3RFbGVtZW50Py5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuIl19