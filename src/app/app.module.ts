import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { firebase, firebaseui, FirebaseUIModule } from "firebaseui-angular";
import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInOptions: [
    {
      // Google provider must be enabled in Firebase Console to support one-tap
      // sign-up.
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // Required to enable ID token credentials for this provider.
      // This can be obtained from the Credentials page of the Google APIs
      // console. Use the same OAuth client ID used for the Google provider
      // configured with GCIP or Firebase Auth.
      clientId:
        "1075525420003-393vor4371dr05rlou9890vf8hv8m7p4.apps.googleusercontent.com"
    }
  ],
 tosUrl: '<verifytesttool.firebaseapp.com>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('<verifytesttool.firebaseapp.com>');
        },
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
