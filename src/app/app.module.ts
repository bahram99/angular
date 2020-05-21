import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {capitalizepipe} from './pipe/capitalpipe';
import {completpipe} from './pipe/complet';
import {searchpipe} from './pipe/search';
import { ServerComponent } from './server/server.component';
import { OddevenComponent } from './oddeven/oddeven.component';
import { TaskeditComponent } from './taskedit/taskedit.component';


@NgModule({
  declarations: [AppComponent ,capitalizepipe,completpipe,searchpipe, ServerComponent, OddevenComponent, TaskeditComponent ],
  imports: [BrowserModule, AppRoutingModule,FormsModule ,ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
