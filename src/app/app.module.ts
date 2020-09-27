import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SearchComponent } from './search/search.component';
import { RegistersComponent } from './registers/registers.component';
import { CodeforinterviewComponent } from './codeforinterview/codeforinterview.component';

import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllUsersComponent,
    SearchComponent,
    RegistersComponent,
    CodeforinterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
