import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BorderDirective {
    constructor() {
        /**
         * Add or remove an element’s borders
         * @type Border
         */
        this.border = true;
    }
    get hostClasses() {
        if (typeof this.border === 'boolean') {
            return { border: true };
        }
        if (typeof this.border === 'number' || typeof this.border === 'string') {
            return {
                border: true,
                [`border-${this.border}`]: true
            };
        }
        if (typeof this.border === 'object') {
            const borderObj = { top: undefined, end: undefined, bottom: undefined, start: undefined, color: undefined, ...this.border };
            // @ts-ignore
            const keys = Object.keys(borderObj).filter(key => borderObj[key] !== undefined);
            const classes = {};
            keys.forEach(key => {
                // @ts-ignore
                const val = borderObj[key];
                if (typeof val === 'boolean') {
                    // @ts-ignore
                    classes[`border-${key}`] = true;
                }
                else if (typeof val === 'number' || typeof val === 'string') {
                    // @ts-ignore
                    classes[`border-${key}-${val}`] = true;
                }
                else if (typeof val === 'object') {
                    if ('color' in val) {
                        // @ts-ignore
                        classes[`border-${key}-${val.color}`] = true;
                    }
                    if ('width' in val) {
                        // @ts-ignore
                        classes[`border-${key}-${val.width}`] = true;
                    }
                }
            });
            return Object.entries(classes).length === 0 ? { border: false } : classes;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BorderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: BorderDirective, isStandalone: true, selector: "[cBorder]", inputs: { border: ["cBorder", "border"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: BorderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cBorder]',
                    standalone: true
                }]
        }], propDecorators: { border: [{
                type: Input,
                args: ['cBorder']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1hbmd1bGFyL3NyYy9saWIvdXRpbGl0aWVzL2JvcmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU85RCxNQUFNLE9BQU8sZUFBZTtJQUo1QjtRQUtFOzs7V0FHRztRQUNlLFdBQU0sR0FBVyxJQUFJLENBQUM7S0EwQ3pDO0lBeENDLElBQ0ksV0FBVztRQUViLElBQUssT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRztZQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUc7WUFDeEUsT0FBTztnQkFDTCxNQUFNLEVBQUUsSUFBSTtnQkFDWixDQUFDLFVBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSTthQUNoQyxDQUFDO1NBQ0g7UUFDRCxJQUFLLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUc7WUFDckMsTUFBTSxTQUFTLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUgsYUFBYTtZQUNiLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixhQUFhO2dCQUNiLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSyxPQUFPLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQzdCLGFBQWE7b0JBQ2IsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ2pDO3FCQUFNLElBQUssT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRztvQkFDL0QsYUFBYTtvQkFDYixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ3hDO3FCQUFNLElBQUssT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFHO29CQUNwQyxJQUFJLE9BQU8sSUFBSSxHQUFHLEVBQUU7d0JBQ2xCLGFBQWE7d0JBQ2IsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztxQkFDOUM7b0JBQ0QsSUFBSSxPQUFPLElBQUksR0FBRyxFQUFFO3dCQUNsQixhQUFhO3dCQUNiLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7cUJBQzlDO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUN6RTtJQUNILENBQUM7K0dBOUNVLGVBQWU7bUdBQWYsZUFBZTs7NEZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQU1tQixNQUFNO3NCQUF2QixLQUFLO3VCQUFDLFNBQVM7Z0JBR1osV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9yZGVyLCBCb3JkZXJDb2xvciwgSUJvcmRlckVsZW1lbnQsIEJvcmRlcldpZHRoIH0gZnJvbSAnLi9ib3JkZXIudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjQm9yZGVyXScsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQm9yZGVyRGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIEFkZCBvciByZW1vdmUgYW4gZWxlbWVudOKAmXMgYm9yZGVyc1xuICAgKiBAdHlwZSBCb3JkZXJcbiAgICovXG4gIEBJbnB1dCgnY0JvcmRlcicpIGJvcmRlcjogQm9yZGVyID0gdHJ1ZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzc2VzKCk6IGFueSB7XG5cbiAgICBpZiAoIHR5cGVvZiB0aGlzLmJvcmRlciA9PT0gJ2Jvb2xlYW4nICkge1xuICAgICAgcmV0dXJuIHsgYm9yZGVyOiB0cnVlIH07XG4gICAgfVxuICAgIGlmICggdHlwZW9mIHRoaXMuYm9yZGVyID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpcy5ib3JkZXIgPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9yZGVyOiB0cnVlLFxuICAgICAgICBbYGJvcmRlci0ke3RoaXMuYm9yZGVyfWBdOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoIHR5cGVvZiB0aGlzLmJvcmRlciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICBjb25zdCBib3JkZXJPYmogPSB7IHRvcDogdW5kZWZpbmVkLCBlbmQ6IHVuZGVmaW5lZCwgYm90dG9tOiB1bmRlZmluZWQsIHN0YXJ0OiB1bmRlZmluZWQsIGNvbG9yOiB1bmRlZmluZWQsIC4uLnRoaXMuYm9yZGVyIH07XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYm9yZGVyT2JqKS5maWx0ZXIoa2V5ID0+IGJvcmRlck9ialtrZXldICE9PSB1bmRlZmluZWQpO1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHt9O1xuICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgdmFsID0gYm9yZGVyT2JqW2tleV07XG4gICAgICAgIGlmICggdHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNsYXNzZXNbYGJvcmRlci0ke2tleX1gXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiB2YWwgPT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBjbGFzc2VzW2Bib3JkZXItJHtrZXl9LSR7dmFsfWBdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgaWYgKCdjb2xvcicgaW4gdmFsKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc2VzW2Bib3JkZXItJHtrZXl9LSR7dmFsLmNvbG9yfWBdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCd3aWR0aCcgaW4gdmFsKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc2VzW2Bib3JkZXItJHtrZXl9LSR7dmFsLndpZHRofWBdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNsYXNzZXMpLmxlbmd0aCA9PT0gMCA/IHtib3JkZXI6IGZhbHNlfSA6IGNsYXNzZXM7XG4gICAgfVxuICB9XG59XG4iXX0=