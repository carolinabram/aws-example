import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/pages/login/login.component';
import { DashboardComponent } from './views/pages/dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';

// External
import { GoogleApiModule, NG_GAPI_CONFIG } from "ng-gapi";
import { gapiClientConfig } from "./settings/google_api_config";
// import { MsalModule, MsalService } from '@azure/msal-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  entryComponents:[
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
