import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponnent } from './component/login/login.component';
import { AdminComponnent } from './component/admin/admin.component';
import { DashboardComponnent } from './component/dashboard/dashboard.component';
import { OrderComponnent } from './component/order/order.component';
import { ProfileComponnent } from './component/profile/profile.component';
import { CategoriesComponnent } from './component/categories/categories.component';
import { CartComponnent } from './component/cart/cart.component';
import { EventComponnent } from './component/e_vent/event.component';
import { AccountComponnent } from './component/account/account.component';
import { ContactComponnent } from './component/contact/contact.component';
import { RegisterComponnent } from './component/register/register.component';
import { MailComponnent } from './component/mail/mail.component';
import { AddAccountComponnent } from './component/add/account/account.component';
import { AddCategorybouquetComponnent } from './component/add/categorybouquet/categorybouquet.component';
import { AddBouquetComponnent } from './component/add/bouquet/bouquet.component';
import { AddEvent1Componnent } from './component/add/event1/event1.component';
import { AddEvent2Componnent } from './component/add/event2/event2component';
import { AddRoleComponnent } from './component/add/role/role.component';
import { EditAccountComponnent } from './component/edit/account/account.component';
import { EditCategorybouquetComponnent } from './component/edit/categorybouquet/categorybouquet.component';
import { EditBouquetComponnent } from './component/edit/bouquet/bouquet.component';
import { EditEvent1Componnent } from './component/edit/event1/event1.component';
import { EditEvent2Componnent } from './component/edit/event2/event2component';
import { EditRoleComponnent } from './component/edit/role/role.component';
import { BouquetComponnent } from './component/bouquet/bouquet.component';




const routes: Routes = [
  // {path: '', component: LoginComponnent},
  {path: 'login', component: LoginComponnent},
  {path:'register',component: RegisterComponnent },

  {
    path: 'admin', component: AdminComponnent, children:[
      // {path: '', component: DashboardComponnent},
      {path: 'dashboard', component: DashboardComponnent},
      {path: 'bouquet', component: BouquetComponnent},
      {path:'order',component: OrderComponnent },
      {path:'profile',component: ProfileComponnent },
      {path:'categories',component: CategoriesComponnent },
      {path:'cart',component: CartComponnent },
      {path:'event',component: EventComponnent },
      {path:'account',component: AccountComponnent },
      {path:'contact',component: ContactComponnent },
      {path:'mail',component: MailComponnent },
      {path:'add/account',component: AddAccountComponnent },
      {path:'add/categorybouquet',component: AddCategorybouquetComponnent },
      {path:'add/bouquet',component: AddBouquetComponnent },
      {path:'add/event1',component: AddEvent1Componnent },
      {path:'add/event2',component: AddEvent2Componnent },
      {path:'add/role',component: AddRoleComponnent },

      {path:'edit/account',component: EditAccountComponnent },
      {path:'edit/categorybouquet',component:  EditCategorybouquetComponnent },
      {path:'edit/bouquet',component: EditBouquetComponnent },
      {path:'edit/event1',component: EditEvent1Componnent },
      {path:'edit/event2',component: EditEvent2Componnent },
      {path:'edit/role',component: EditRoleComponnent },

  ]},

   {
    path: '', component: AdminComponnent, children:[
      {path: '', component: DashboardComponnent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
