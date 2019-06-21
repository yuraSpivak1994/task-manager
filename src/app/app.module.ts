import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './shared/services/users.service';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { AuthService } from './shared/auth.service';
import { SystemService } from './shared/services/system.servise';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [UsersService, AuthService, SystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
