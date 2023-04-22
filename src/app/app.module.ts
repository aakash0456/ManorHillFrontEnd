import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from './material.module';
import { FormPageComponent } from './form-page/form-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { AppLoaderComponent } from './app-loader/app-loader.component';

@NgModule({
  declarations: [AppComponent, FormPageComponent, AlertBoxComponent, AppLoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialExampleModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
