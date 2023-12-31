import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AccordionService {
    constructor() {
        this.items = [];
        this.alwaysOpen = false;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    toggleItem(item) {
        item.visible = !item.visible;
        this.closeOtherItems(item);
    }
    closeOtherItems(openItem) {
        if (!this.alwaysOpen) {
            this.items.forEach((item) => {
                if (item !== openItem) {
                    item.visible = false;
                }
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: AccordionService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JldWktYW5ndWxhci9zcmMvbGliL2FjY29yZGlvbi9hY2NvcmRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCO1FBSEEsVUFBSyxHQUE2QixFQUFFLENBQUM7UUFDckMsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUVILENBQUM7SUFFakIsT0FBTyxDQUFDLElBQTRCO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBNEI7UUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUE0QjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlLENBQUMsUUFBZ0M7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUE0QixFQUFFLEVBQUU7Z0JBQ2xELElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7aUJBQ3RCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7K0dBL0JVLGdCQUFnQjttSEFBaEIsZ0JBQWdCOzs0RkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblNlcnZpY2Uge1xuXG4gIGl0ZW1zOiBBY2NvcmRpb25JdGVtQ29tcG9uZW50W10gPSBbXTtcbiAgYWx3YXlzT3BlbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYWRkSXRlbShpdGVtOiBBY2NvcmRpb25JdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtOiBBY2NvcmRpb25JdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUl0ZW0oaXRlbTogQWNjb3JkaW9uSXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIGl0ZW0udmlzaWJsZSA9ICFpdGVtLnZpc2libGU7XG4gICAgdGhpcy5jbG9zZU90aGVySXRlbXMoaXRlbSk7XG4gIH1cblxuICBjbG9zZU90aGVySXRlbXMob3Blbkl0ZW06IEFjY29yZGlvbkl0ZW1Db21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWx3YXlzT3Blbikge1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtOiBBY2NvcmRpb25JdGVtQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmIChpdGVtICE9PSBvcGVuSXRlbSkge1xuICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==