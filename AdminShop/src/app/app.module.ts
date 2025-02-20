import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BaseURLService } from './service/baseurl.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BouquetSerice } from './service/bouquet.service';
import { CategoryService } from './service/cateogry.service';
import { AddBouquetComponnent } from './component/add/bouquet/bouquet.component';
import { ImageBouquetService } from './service/imageBouquet.service';

//PRIME IMPORT
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponnent,
    AdminComponnent,
    DashboardComponnent,
    OrderComponnent,
    ProfileComponnent,
    CategoriesComponnent,
    CartComponnent,
    EventComponnent,
    AccountComponnent,
    ContactComponnent,
    RegisterComponnent,
    MailComponnent,
    BouquetComponnent,

    //ADD
    AddAccountComponnent,
    AddCategorybouquetComponnent,
    AddBouquetComponnent,
    AddEvent1Componnent,
    AddEvent2Componnent,
    AddRoleComponnent,

    //EDIT
    EditAccountComponnent,
    EditCategorybouquetComponnent,
    EditBouquetComponnent,
    EditEvent1Componnent,
    EditEvent2Componnent,
    EditRoleComponnent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //PRIME
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    FileUploadModule,
  ],
  providers: [
    BaseURLService,
    BouquetSerice,
    CategoryService,
    ImageBouquetService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
