import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminLayoutComponent} from './core/layouts/admin-layout/admin-layout.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {LoginComponent} from './modules/auth/pages/login/login.component';
import {PageNotFoundComponent} from './shared/pages/page-not-found/page-not-found.component';
import {ToastNoAnimationModule} from "ngx-toastr";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {ContentTypeInterceptor} from "./core/interceptors/content-type.interceptor";
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import { ClientListComponent } from './modules/client/pages/client-list/client-list.component';
import {NgxMaskModule} from "ngx-mask";
import {NgbDatepickerModule, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import { ModalClientCreateNewComponent } from './modules/client/pages/client-list/modals/modal-client-create-new/modal-client-create-new.component';
import { FamilyListComponent } from './modules/family/pages/family-list/family-list.component';
import { ModalFamilyCreateNewComponent } from './modules/family/pages/family-list/modals/modal-family-create-new/modal-family-create-new.component';
import { ModalSubfamilyCreateNewComponent } from './modules/subfamily/pages/subfamily-list/modals/modal-subfamily-create-new/modal-subfamily-create-new.component';
import { SubfamilyListComponent } from './modules/subfamily/pages/subfamily-list/subfamily-list.component';
import { EquipmentListComponent } from './modules/equipment/pages/equipment-list/equipment-list.component';
import { ModalEquipmentCreateNewComponent } from './modules/equipment/pages/equipment-list/modals/modal-equipment-create-new/modal-equipment-create-new.component';
import { ModalUserCreateNewComponent } from './modules/user/pages/user-list/modals/modal-user-create-new/modal-user-create-new.component';
import { UserListComponent } from './modules/user/pages/user-list/user-list.component';
import { RentalListComponent } from './modules/rental/pages/rental-list/rental-list.component';
import { ModalRentalCreateNewComponent } from './modules/rental/pages/rental-list/modals/modal-rental-create-new/modal-rental-create-new.component';
import { ModalRentalDeliverComponent } from './modules/rental/pages/rental-list/modals/modal-rental-deliver/modal-rental-deliver.component';
import { RentalPendingListComponent } from './modules/rental/pages/rental-pending-list/rental-pending-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    ClientListComponent,
    ModalClientCreateNewComponent,
    FamilyListComponent,
    ModalFamilyCreateNewComponent,
    ModalSubfamilyCreateNewComponent,
    SubfamilyListComponent,
    EquipmentListComponent,
    ModalEquipmentCreateNewComponent,
    ModalUserCreateNewComponent,
    UserListComponent,
    RentalListComponent,
    ModalRentalCreateNewComponent,
    ModalRentalDeliverComponent,
    RentalPendingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot({
      timeOut: 4000,
      closeButton: true
    }),
    NgxMaskModule.forRoot(),
    NgbModalModule,
    NgbDatepickerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalClientCreateNewComponent,
    ModalFamilyCreateNewComponent,
    ModalSubfamilyCreateNewComponent,
    ModalEquipmentCreateNewComponent,
    ModalUserCreateNewComponent,
    ModalRentalCreateNewComponent,
    ModalRentalDeliverComponent
  ]
})
export class AppModule {
}
