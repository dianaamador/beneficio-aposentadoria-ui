import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { BeneficioListComponent } from './beneficio-list/beneficio-list.component';

import { HttpClientModule } from '@angular/common/http';
import { BeneficioService } from './service/beneficio.service';
import { BeneficioDetailComponent } from './beneficio-detail/beneficio-detail.component';

import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: BeneficioListComponent },
  { path: 'beneficio-detail', component: BeneficioDetailComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BeneficioListComponent,
    BeneficioDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [ RouterModule ],
  providers: [BeneficioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
