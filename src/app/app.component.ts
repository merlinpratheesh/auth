import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebaseui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth';

  constructor(public afAuth: AngularFireAuth,) {
console.log(afAuth);
console.log('auth',auth);
console.log('AngularFireAuth',AngularFireAuth);


  }
}
