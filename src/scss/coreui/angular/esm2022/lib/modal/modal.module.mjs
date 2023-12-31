import { NgModule } from '@angular/core';
import { ModalBodyComponent } from './modal-body/modal-body.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ModalToggleDirective } from './modal-dismiss/modal-toggle.directive';
import { ModalFooterComponent } from './modal-footer/modal-footer.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { ModalTitleDirective } from './modal-title/modal-title.directive';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import * as i0 from "@angular/core";
export class ModalModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: ModalModule, imports: [ModalBodyComponent,
            ModalComponent,
            ModalContentComponent,
            ModalDialogComponent,
            ModalFooterComponent,
            ModalHeaderComponent,
            ModalTitleDirective,
            ModalToggleDirective], exports: [ModalBodyComponent,
            ModalComponent,
            ModalContentComponent,
            ModalDialogComponent,
            ModalFooterComponent,
            ModalHeaderComponent,
            ModalTitleDirective,
            ModalToggleDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalModule, providers: [ModalService], imports: [ModalComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ModalModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        ModalBodyComponent,
                        ModalComponent,
                        ModalContentComponent,
                        ModalDialogComponent,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalTitleDirective,
                        ModalToggleDirective
                    ],
                    imports: [
                        ModalBodyComponent,
                        ModalComponent,
                        ModalContentComponent,
                        ModalDialogComponent,
                        ModalFooterComponent,
                        ModalHeaderComponent,
                        ModalTitleDirective,
                        ModalToggleDirective
                    ],
                    providers: [ModalService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZXVpLWFuZ3VsYXIvc3JjL2xpYi9tb2RhbC9tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQXlCL0MsTUFBTSxPQUFPLFdBQVc7K0dBQVgsV0FBVztnSEFBWCxXQUFXLFlBWHBCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixvQkFBb0IsYUFqQnBCLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixvQkFBb0I7Z0hBY1gsV0FBVyxhQUZYLENBQUMsWUFBWSxDQUFDLFlBUnZCLGNBQWM7OzRGQVVMLFdBQVc7a0JBdkJ2QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kYWxCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC1ib2R5L21vZGFsLWJvZHkuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGVudC9tb2RhbC1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLWRpc21pc3MvbW9kYWwtdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNb2RhbEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtZm9vdGVyL21vZGFsLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsVGl0bGVEaXJlY3RpdmUgfSBmcm9tICcuL21vZGFsLXRpdGxlL21vZGFsLXRpdGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtcbiAgICBNb2RhbEJvZHlDb21wb25lbnQsXG4gICAgTW9kYWxDb21wb25lbnQsXG4gICAgTW9kYWxDb250ZW50Q29tcG9uZW50LFxuICAgIE1vZGFsRGlhbG9nQ29tcG9uZW50LFxuICAgIE1vZGFsRm9vdGVyQ29tcG9uZW50LFxuICAgIE1vZGFsSGVhZGVyQ29tcG9uZW50LFxuICAgIE1vZGFsVGl0bGVEaXJlY3RpdmUsXG4gICAgTW9kYWxUb2dnbGVEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE1vZGFsQm9keUNvbXBvbmVudCxcbiAgICBNb2RhbENvbXBvbmVudCxcbiAgICBNb2RhbENvbnRlbnRDb21wb25lbnQsXG4gICAgTW9kYWxEaWFsb2dDb21wb25lbnQsXG4gICAgTW9kYWxGb290ZXJDb21wb25lbnQsXG4gICAgTW9kYWxIZWFkZXJDb21wb25lbnQsXG4gICAgTW9kYWxUaXRsZURpcmVjdGl2ZSxcbiAgICBNb2RhbFRvZ2dsZURpcmVjdGl2ZVxuICBdLFxuICBwcm92aWRlcnM6IFtNb2RhbFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsTW9kdWxlIHt9XG4iXX0=