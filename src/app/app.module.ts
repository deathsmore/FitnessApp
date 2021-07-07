import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Store } from 'store';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

// routes
export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    AuthModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
  var firebaseConfig = {
    apiKey: "AIzaSyD29yVVsOgDwFX7r6f9o68TdV52tIZIceQ",
    authDomain: "fitness-app-4e966.firebaseapp.com",
    databaseURL: "https://fitness-app-4e966-default-rtdb.firebaseio.com",
    projectId: "fitness-app-4e966",
    storageBucket: "fitness-app-4e966.appspot.com",
    messagingSenderId: "881440686858",
    appId: "1:881440686858:web:2ff835ab007273da1bb0f3"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
*/