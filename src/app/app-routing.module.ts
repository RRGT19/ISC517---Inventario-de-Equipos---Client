import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {PageNotFoundComponent} from "./shared/pages/page-not-found/page-not-found.component";
import {AdminLayoutComponent} from "./core/layouts/admin-layout/admin-layout.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {AuthGuard} from "./modules/auth/guards/auth.guard";
import {ClientListComponent} from "./modules/client/pages/client-list/client-list.component";
import {FamilyListComponent} from "./modules/family/pages/family-list/family-list.component";
import {SubfamilyListComponent} from "./modules/subfamily/pages/subfamily-list/subfamily-list.component";
import {EquipmentListComponent} from "./modules/equipment/pages/equipment-list/equipment-list.component";
import {UserListComponent} from "./modules/user/pages/user-list/user-list.component";
import {RentalListComponent} from "./modules/rental/pages/rental-list/rental-list.component";
import {RentalPendingListComponent} from "./modules/rental/pages/rental-pending-list/rental-pending-list.component";


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  {
    path: 'auth/login',
    component: LoginComponent
  },

  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard], // Checking to see if you are logged in.
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'client-list', component: ClientListComponent},
      {path: 'family-list', component: FamilyListComponent},
      {path: 'subfamily-list', component: SubfamilyListComponent},
      {path: 'equipment-list', component: EquipmentListComponent},
      {path: 'user-list', component: UserListComponent},
      {path: 'rental-list', component: RentalListComponent},
      {path: 'rental-pending-list', component: RentalPendingListComponent},
    ]
  },

  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
