import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { MatCheckboxModule  } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ObserversModule } from '@angular/cdk/observers';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    AccountsummaryComponent,
    AddPlanComponent,
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    ObserversModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
