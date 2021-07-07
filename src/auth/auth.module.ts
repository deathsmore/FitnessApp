import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//third-party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//Shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES : Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule'},
            { path: 'register', loadChildren: './register/register.module#RegisterModule'}
        ]
    }
]


export const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyD29yVVsOgDwFX7r6f9o68TdV52tIZIceQ",
    authDomain: "fitness-app-4e966.firebaseapp.com",
    databaseURL: "https://fitness-app-4e966-default-rtdb.firebaseio.com",
    projectId: "fitness-app-4e966",
    storageBucket: "fitness-app-4e966.appspot.com",
    messagingSenderId: "881440686858",
    //appId: "1:881440686858:web:2ff835ab007273da1bb0f3"
  };
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseAppConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {

}