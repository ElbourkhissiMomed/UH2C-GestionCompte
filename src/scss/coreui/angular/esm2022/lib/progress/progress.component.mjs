import { booleanAttribute, Component, HostBinding, Input, numberAttribute } from '@angular/core';
import * as i0 from "@angular/core";
export class ProgressComponent {
    constructor() {
        /**
         * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
         * @type number
         */
        this.height = 0;
        /**
         * Displays thin progress.
         * @type boolean
         */
        this.thin = false;
        /**
         * Change the default color to white.
         * @type boolean
         */
        this.white = false;
    }
    get hostClasses() {
        return {
            progress: true,
            'progress-thin': this.thin,
            'progress-white': this.white
        };
    }
    get hostStyle() {
        return !!this.height ? `${this.height}px` : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "16.2.10", type: ProgressComponent, isStandalone: true, selector: "c-progress", inputs: { height: ["height", "height", numberAttribute], thin: ["thin", "thin", booleanAttribute], white: ["white", "white", booleanAttribute] }, host: { properties: { "class": "this.hostClasses", "style.height": "this.hostStyle" } }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-progress',
                    template: '<ng-content></ng-content>',
                    standalone: true
                }]
        }], propDecorators: { height: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], thin: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], white: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], hostClasses: [{
                type: HostBinding,
                args: ['class']
            }], hostStyle: [{
                type: HostBinding,
                args: ['style.height']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPakcsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQU9FOzs7V0FHRztRQUNvQyxXQUFNLEdBQW9CLENBQUMsQ0FBQztRQUVuRTs7O1dBR0c7UUFDcUMsU0FBSSxHQUFxQixLQUFLLENBQUM7UUFFdkU7OztXQUdHO1FBQ3FDLFVBQUssR0FBcUIsS0FBSyxDQUFDO0tBZXpFO0lBYkMsSUFDSSxXQUFXO1FBQ2IsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJO1lBQ2QsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQzFCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFDSSxTQUFTO1FBQ1gsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRCxDQUFDOytHQWhDVSxpQkFBaUI7bUdBQWpCLGlCQUFpQixxRkFNUixlQUFlLDBCQU1mLGdCQUFnQiw2QkFNaEIsZ0JBQWdCLHNIQXJCMUIsMkJBQTJCOzs0RkFHMUIsaUJBQWlCO2tCQUw3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBT3dDLE1BQU07c0JBQTVDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQU1HLElBQUk7c0JBQTNDLEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBTUUsS0FBSztzQkFBNUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFHbEMsV0FBVztzQkFEZCxXQUFXO3VCQUFDLE9BQU87Z0JBVWhCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vbGVhbkF0dHJpYnV0ZSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIG51bWJlckF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjLXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGhlaWdodCBvZiB0aGUgY29tcG9uZW50LiBJZiB5b3Ugc2V0IHRoYXQgdmFsdWUgdGhlIGlubmVyIGA8Q1Byb2dyZXNzQmFyPmAgd2lsbCBhdXRvbWF0aWNhbGx5IHJlc2l6ZSBhY2NvcmRpbmdseS5cbiAgICogQHR5cGUgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoaW4gcHJvZ3Jlc3MuXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSB0aGluOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0aGUgZGVmYXVsdCBjb2xvciB0byB3aGl0ZS5cbiAgICogQHR5cGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHdoaXRlOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBob3N0Q2xhc3NlcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9ncmVzczogdHJ1ZSxcbiAgICAgICdwcm9ncmVzcy10aGluJzogdGhpcy50aGluLFxuICAgICAgJ3Byb2dyZXNzLXdoaXRlJzogdGhpcy53aGl0ZVxuICAgIH07XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXG4gIGdldCBob3N0U3R5bGUoKTogYW55IHtcbiAgICByZXR1cm4gISF0aGlzLmhlaWdodCA/IGAke3RoaXMuaGVpZ2h0fXB4YCA6ICcnO1xuICB9XG59XG4iXX0=