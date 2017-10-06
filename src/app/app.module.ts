import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AnimalModule} from './animal/index';

import { ResourceModule } from '@tsmean/resource';

import {NotifyModule} from 'notify-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { SpacerComponent } from './spacer/spacer.component';


@NgModule({
  declarations: [
    AppComponent,
    SpacerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ResourceModule.forRoot('http://demo.tsmean.com:4242/api/v1'),
    NotifyModule.forRoot(),
    AnimalModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
