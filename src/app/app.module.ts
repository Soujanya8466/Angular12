import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdddataComponent } from './adddata/adddata.component';
import {MatButtonModule,MatTableModule,MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AdditeamComponent } from './additeam/additeam.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  { path: '', redirectTo: 'iteamdata', pathMatch: 'full' },

  { path: 'iteamdata', component: AdddataComponent },
  { path: 'additeam', component: AdditeamComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdddataComponent,
    AdditeamComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatIconModule
   // DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
