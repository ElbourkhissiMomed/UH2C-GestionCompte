import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class IconSetService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1pY29ucy1hbmd1bGFyL3NyYy9saWIvaWNvbi1zZXQvaWNvbi1zZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVMzQyxNQUFNLE9BQU8sY0FBYztJQUV6QjtRQUtRLGVBQVUsR0FBOEIsRUFBRSxDQUFDO1FBVzNDLFdBQU0sR0FBYSxFQUFFLENBQUM7SUFoQmYsQ0FBQztJQUVoQixJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFBQSxDQUFDO0lBR0YsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPO1FBQ2YsS0FBSyxNQUFNLFFBQVEsSUFBSSxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBR00sT0FBTyxDQUFDLElBQVk7UUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxtQ0FBbUMsQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7K0dBMUJVLGNBQWM7bUhBQWQsY0FBYyxjQUZiLE1BQU07OzRGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElJY29uU2V0IHtcbiAgW2ljb25OYW1lOiBzdHJpbmddOiBzdHJpbmdbXTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSWNvblNldFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgZ2V0IGljb25OYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbk5hbWVzO1xuICB9O1xuICBwcml2YXRlIF9pY29uTmFtZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBnZXQgaWNvbnMoKTogSUljb25TZXQge1xuICAgIHJldHVybiB0aGlzLl9pY29ucztcbiAgfVxuICBzZXQgaWNvbnMoaWNvblNldCkge1xuICAgIGZvciAoY29uc3QgaWNvbnNLZXkgaW4gaWNvblNldCkge1xuICAgICAgdGhpcy5faWNvbk5hbWVzW2ljb25zS2V5XSA9IGljb25zS2V5O1xuICAgIH1cbiAgICB0aGlzLl9pY29ucyA9IGljb25TZXQ7XG4gIH1cbiAgcHJpdmF0ZSBfaWNvbnM6IElJY29uU2V0ID0ge307XG5cbiAgcHVibGljIGdldEljb24obmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGljb24gPSB0aGlzLmljb25zW25hbWVdO1xuICAgIGlmICghaWNvbikge1xuICAgICAgY29uc29sZS53YXJuKGBDb3JlVUkgV0FSTjogSWNvbiAke25hbWV9IGlzIG5vdCByZWdpc3RlcmVkIGluIEljb25TZXJ2aWNlYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmljb25zW25hbWVdO1xuICB9XG59XG4iXX0=