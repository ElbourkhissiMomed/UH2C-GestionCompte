import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class RoundedDirective {
    constructor() {
        /**
         * Set border radius variant and radius size
         * @type Rounded
         */
        this.rounded = true;
    }
    get hostClasses() {
        if (typeof this.rounded === 'boolean') {
            return { rounded: true };
        }
        if (typeof this.rounded === 'number' || typeof this.rounded === 'string') {
            return {
                [`rounded-${this.rounded}`]: true
            };
        }
        if (typeof this.rounded === 'object') {
            const roundedObj = {
                top: undefined,
                end: undefined,
                bottom: undefined,
                start: undefined,
                circle: undefined,
                pill: undefined,
                size: undefined,
                ...this.rounded,
            };
            // @ts-ignore
            const keys = Object.keys(roundedObj).filter(key => roundedObj[key] !== undefined);
            const classes = {};
            keys.forEach(key => {
                // @ts-ignore
                const val = roundedObj[key];
                if (typeof val === 'boolean') {
                    // @ts-ignore
                    classes[`rounded-${key}`] = val;
                }
                else {
                    // @ts-ignore
                    classes[`rounded-${val}`] = true;
                }
            });
            // console.log('rounded keys', keys, classes);
            return Object.entries(classes).length === 0 ? { rounded: false } : classes;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: RoundedDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.10", type: RoundedDirective, isStandalone: true, selector: "[cRounded]", inputs: { rounded: ["cRounded", "rounded"] }, host: { properties: { "class": "this.hostClasses" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: RoundedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cRounded]',
                    standalone: true
                }]
        }], propDecorators: { rounded: [{
                type: Input,
                args: ['cRounded']
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmRlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL3V0aWxpdGllcy9yb3VuZGVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzlELE1BQU0sT0FBTyxnQkFBZ0I7SUFKN0I7UUFNRTs7O1dBR0c7UUFDZ0IsWUFBTyxHQUFZLElBQUksQ0FBQztLQTBDNUM7SUF4Q0MsSUFDSSxXQUFXO1FBRWIsSUFBSyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFHO1lBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRztZQUMxRSxPQUFPO2dCQUNMLENBQUMsV0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJO2FBQ2xDLENBQUM7U0FDSDtRQUNELElBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRztZQUN0QyxNQUFNLFVBQVUsR0FBRztnQkFDakIsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixNQUFNLEVBQUUsU0FBUztnQkFDakIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNoQixDQUFDO1lBQ0YsYUFBYTtZQUNiLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBRSxDQUFDO1lBQ25GLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixhQUFhO2dCQUNiLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxTQUFTLEVBQUU7b0JBQzVCLGFBQWE7b0JBQ2IsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ2pDO3FCQUFNO29CQUNMLGFBQWE7b0JBQ2IsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ2xDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCw4Q0FBOEM7WUFDOUMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDMUU7SUFDSCxDQUFDOytHQS9DVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQjs7NEZBQWhCLGdCQUFnQjtrQkFKNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQU9vQixPQUFPO3NCQUF6QixLQUFLO3VCQUFDLFVBQVU7Z0JBR2IsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91bmRlZCwgUm91bmRlZFNpemUgfSBmcm9tICcuL3JvdW5kZWQudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjUm91bmRlZF0nLFxuICBzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFJvdW5kZWREaXJlY3RpdmUge1xuXG4gIC8qKlxuICAgKiBTZXQgYm9yZGVyIHJhZGl1cyB2YXJpYW50IGFuZCByYWRpdXMgc2l6ZVxuICAgKiBAdHlwZSBSb3VuZGVkXG4gICAqL1xuICBASW5wdXQoJ2NSb3VuZGVkJykgcm91bmRlZDogUm91bmRlZCA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuXG4gICAgaWYgKCB0eXBlb2YgdGhpcy5yb3VuZGVkID09PSAnYm9vbGVhbicgKSB7XG4gICAgICByZXR1cm4geyByb3VuZGVkOiB0cnVlIH07XG4gICAgfVxuICAgIGlmICggdHlwZW9mIHRoaXMucm91bmRlZCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXMucm91bmRlZCA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBbYHJvdW5kZWQtJHt0aGlzLnJvdW5kZWR9YF06IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICggdHlwZW9mIHRoaXMucm91bmRlZCA9PT0gJ29iamVjdCcgKSB7XG4gICAgICBjb25zdCByb3VuZGVkT2JqID0ge1xuICAgICAgICB0b3A6IHVuZGVmaW5lZCxcbiAgICAgICAgZW5kOiB1bmRlZmluZWQsXG4gICAgICAgIGJvdHRvbTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydDogdW5kZWZpbmVkLFxuICAgICAgICBjaXJjbGU6IHVuZGVmaW5lZCxcbiAgICAgICAgcGlsbDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplOiB1bmRlZmluZWQsXG4gICAgICAgIC4uLnRoaXMucm91bmRlZCxcbiAgICAgIH07XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm91bmRlZE9iaikuZmlsdGVyKGtleSA9PiByb3VuZGVkT2JqW2tleV0gIT09IHVuZGVmaW5lZCApO1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHt9O1xuICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgdmFsID0gcm91bmRlZE9ialtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNsYXNzZXNbYHJvdW5kZWQtJHtrZXl9YF0gPSB2YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNsYXNzZXNbYHJvdW5kZWQtJHt2YWx9YF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyb3VuZGVkIGtleXMnLCBrZXlzLCBjbGFzc2VzKTtcbiAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhjbGFzc2VzKS5sZW5ndGggPT09IDAgPyB7cm91bmRlZDogZmFsc2V9IDogY2xhc3NlcztcbiAgICB9XG4gIH1cbn1cbiJdfQ==