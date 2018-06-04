import { NgModule, Inject } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { Ng2BootstrapModule } from 'ngx-bootstrap';// i18n support

import { AppComponent } from './app.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';
import {TasksService} from "./shared/tasks.service";
import { AddTaskComponent } from './components/add-task/add-task.component';



@NgModule({
    declarations: [
        AppComponent,
        AllTasksComponent,
        HomeComponent,
        AddTaskComponent
        
    ],
  imports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        TransferHttpCacheModule,
        BrowserTransferStateModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule.withServerTransition({
          appId: 'my-app-id' // make sure this matches with your Server NgModule
        }),
        //Ng2BootstrapModule.forRoot(),// You could also split this up if you don't want the Entire Module imported
        AppRoutingModule
    ],
    providers: [TasksService],
    bootstrap: [AppComponent]
})
export class AppModuleShared {
}
