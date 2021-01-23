
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {DemoMaterialModule} from './material-module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { firebase, firebaseui, FirebaseUIModule } from "firebaseui-angular";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      clientId:"1075525420003-393vor4371dr05rlou9890vf8hv8m7p4.apps.googleusercontent.com",  
    }
  ],
 tosUrl: '<verifytesttool.firebaseapp.com>',
        privacyPolicyUrl: function() {
          window.location.assign('<verifytesttool.firebaseapp.com>');
        },
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
  
}
@NgModule({
  declarations: [
    AppComponent
 
  ],
  imports: [
    BrowserModule,DemoMaterialModule,
    AppRoutingModule,FormsModule,MatBottomSheetModule,BrowserAnimationsModule,ReactiveFormsModule,
    BrowserAnimationsModule ,MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
