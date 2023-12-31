import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ListenersService {
    constructor(renderer) {
        this.renderer = renderer;
        this.listeners = new Map();
    }
    setListeners({ hostElement, trigger, callbackOn, callbackOff, callbackToggle }) {
        const host = hostElement.nativeElement;
        const triggers = Array.isArray(trigger) ? trigger : trigger?.split(' ') ?? [];
        if (triggers?.includes('click')) {
            typeof callbackToggle === 'function' && this.listeners.set('click', this.renderer.listen(host, 'click', callbackToggle));
        }
        if (triggers?.includes('focus')) {
            typeof callbackOn === 'function' && this.listeners.set('focus', this.renderer.listen(host, 'focus', callbackOn));
        }
        if (triggers?.includes('click') || triggers?.includes('focus')) {
            typeof callbackOff === 'function' && this.listeners.set('blur', this.renderer.listen(host, 'blur', callbackOff));
        }
        if (triggers?.includes('hover')) {
            typeof callbackOn === 'function' && this.listeners.set('mouseenter', this.renderer.listen(host, 'mouseenter', callbackOn));
            typeof callbackOff === 'function' && this.listeners.set('mouseleave', this.renderer.listen(host, 'mouseleave', callbackOff));
        }
    }
    clearListeners() {
        this.listeners.forEach((unListen, key) => {
            unListen();
        });
        this.listeners.forEach((unListen, key) => {
            // @ts-ignore
            this.listeners.set(key, null);
        });
        this.listeners.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ListenersService, deps: [{ token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ListenersService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ListenersService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGVuZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3NlcnZpY2VzL2xpc3RlbmVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7O0FBWWxFLE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0IsWUFDVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSHJCLGNBQVMsR0FBNEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUlwRCxDQUFDO0lBRUosWUFBWSxDQUFDLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBb0I7UUFDOUYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlFLElBQUksUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMvQixPQUFPLGNBQWMsS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ3hELE9BQU8sRUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUNwRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxVQUFVLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUNwRCxPQUFPLEVBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FDaEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUQsT0FBTyxXQUFXLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUNyRCxNQUFNLEVBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FDaEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sVUFBVSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDcEQsWUFBWSxFQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQ3JELENBQUM7WUFDRixPQUFPLFdBQVcsS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQ3JELFlBQVksRUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUN0RCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3ZDLFFBQVEsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN2QyxhQUFhO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOytHQW5EVSxnQkFBZ0I7bUhBQWhCLGdCQUFnQjs7NEZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJpZ2dlcnMgfSBmcm9tICcuLi9jb3JldWkudHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMaXN0ZW5lcnNDb25maWcge1xuICBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgdHJpZ2dlcj86IFRyaWdnZXJzIHwgVHJpZ2dlcnNbXSxcbiAgY2FsbGJhY2tPbj86ICgpID0+IHZvaWQsXG4gIGNhbGxiYWNrT2ZmPzogKCkgPT4gdm9pZCxcbiAgY2FsbGJhY2tUb2dnbGU/OiAoKSA9PiB2b2lkLFxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdGVuZXJzU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IE1hcDxzdHJpbmcsICgpID0+IHZvaWQ+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgc2V0TGlzdGVuZXJzKHsgaG9zdEVsZW1lbnQsIHRyaWdnZXIsIGNhbGxiYWNrT24sIGNhbGxiYWNrT2ZmLCBjYWxsYmFja1RvZ2dsZSB9OiBJTGlzdGVuZXJzQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgaG9zdCA9IGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdHJpZ2dlcnMgPSBBcnJheS5pc0FycmF5KHRyaWdnZXIpID8gdHJpZ2dlciA6IHRyaWdnZXI/LnNwbGl0KCcgJykgPz8gW107XG5cbiAgICBpZiAodHJpZ2dlcnM/LmluY2x1ZGVzKCdjbGljaycpKSB7XG4gICAgICB0eXBlb2YgY2FsbGJhY2tUb2dnbGUgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5saXN0ZW5lcnMuc2V0KFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbihob3N0LCAnY2xpY2snLCBjYWxsYmFja1RvZ2dsZSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0cmlnZ2Vycz8uaW5jbHVkZXMoJ2ZvY3VzJykpIHtcbiAgICAgIHR5cGVvZiBjYWxsYmFja09uID09PSAnZnVuY3Rpb24nICYmIHRoaXMubGlzdGVuZXJzLnNldChcbiAgICAgICAgJ2ZvY3VzJyxcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oaG9zdCwgJ2ZvY3VzJywgY2FsbGJhY2tPbilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0cmlnZ2Vycz8uaW5jbHVkZXMoJ2NsaWNrJykgfHwgdHJpZ2dlcnM/LmluY2x1ZGVzKCdmb2N1cycpKSB7XG4gICAgICB0eXBlb2YgY2FsbGJhY2tPZmYgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5saXN0ZW5lcnMuc2V0KFxuICAgICAgICAnYmx1cicsXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGhvc3QsICdibHVyJywgY2FsbGJhY2tPZmYpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodHJpZ2dlcnM/LmluY2x1ZGVzKCdob3ZlcicpKSB7XG4gICAgICB0eXBlb2YgY2FsbGJhY2tPbiA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmxpc3RlbmVycy5zZXQoXG4gICAgICAgICdtb3VzZWVudGVyJyxcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oaG9zdCwgJ21vdXNlZW50ZXInLCBjYWxsYmFja09uKVxuICAgICAgKTtcbiAgICAgIHR5cGVvZiBjYWxsYmFja09mZiA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmxpc3RlbmVycy5zZXQoXG4gICAgICAgICdtb3VzZWxlYXZlJyxcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oaG9zdCwgJ21vdXNlbGVhdmUnLCBjYWxsYmFja09mZilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgodW5MaXN0ZW4sIGtleSkgPT4ge1xuICAgICAgdW5MaXN0ZW4oKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKCh1bkxpc3Rlbiwga2V5KSA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLmxpc3RlbmVycy5zZXQoa2V5LCBudWxsKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlbmVycy5jbGVhcigpO1xuICB9XG59XG4iXX0=