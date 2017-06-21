import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui/listview/angular";

import { CarDetailEditComponent } from "./car-detail-edit/car-detail-edit.component";
import { ImageAddRemoveComponent } from "./car-detail-edit/image-add-remove/image-add-remove.component";
import { ListSelectorModalViewComponent } from "./car-detail-edit/list-selector/list-selector-modal-view.component";
import { ListSelectorComponent } from "./car-detail-edit/list-selector/list-selector.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarListComponent } from "./car-list.component";
import { CarsRoutingModule } from "./cars-routing.module";
import { CarService } from "./shared/car.service";

@NgModule({
    imports: [
        CarsRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CarListComponent,
        CarDetailComponent,
        CarDetailEditComponent,
        ListSelectorComponent,
        ListSelectorModalViewComponent,
        ImageAddRemoveComponent
    ],
    entryComponents: [
        ListSelectorModalViewComponent
    ],
    providers: [
        CarService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CarsModule { }
