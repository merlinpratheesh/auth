import {Component} from '@angular/core';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BehaviorSubject, Subscription, Observable, of } from 'rxjs';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, switchMap, startWith, withLatestFrom } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseuiAngularLibraryService, FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';
import { UserdataService,usrinfoDetails ,projectControls,projectFlags, userProfile } from './userdata.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})


export class AppComponent {
  myprojectFlags: projectFlags = {
    showPaymentpage: false,
    newuserCheck: false,
    firstTestcaseEdit: false,
    newuserProfileDetails: true
  
  };
  myusrinfoDetails: usrinfoDetails = {
    profilename: '',
    photourl: '',
    email_saved: '',
    gender: false,
    areasOfInterest: '',
    skills: ''
  };
  myuserProfile: userProfile = {
    userAuthenObj: null,//Receive User obj after login success

  };
  myprojectControls: projectControls = {
    subsectionkeysControl: new FormControl(null, Validators.required),
    testcaseInfoControl: new FormControl(),
    createTestcaseControl: new FormControl(),
    publicprojectControl: new FormControl(null, Validators.required),
    PrivateprojectControl: new FormControl(null, Validators.required),
    firstMainSecControl: new FormControl(null, Validators.required),
    editMainsectionGroup: this.fb.group({
      editMainsectionControl: [{ value: '' }, Validators.required]
    }),
    visibilityMainsectionGroup: this.fb.group({
      editVisibilityControl: [{ value: false, disabled: false }, Validators.required]
    }),
    editSubsectionGroup: this.fb.group({
      editSubsectionControl: [{ value: '' }, Validators.required]
    }),
    addProfileDetails: this.fb.group({
      profilenameControl: [{ value: '' }, Validators.required],
      photourlControl: [{ value: '' }, Validators.required],
      email_savedControl: [{ value: '' }, Validators.required],
      genderControl: [{ value: true }, Validators.required],
      areasOfInterestControl: [{ value: '' }, Validators.required],
      skillsControl: [{ value: '' }, Validators.required]
    }),
  };
  myprofileDetails: Observable<usrinfoDetails> = new BehaviorSubject(undefined);

  constructor(private _bottomSheet: MatBottomSheet,
    public developmentservice: UserdataService,    public fb: FormBuilder

    ) {}

    UpdateUserProfileFlag() {
      this.myprofileDetails = of(undefined);
      this.myprojectFlags.newuserProfileDetails = true;
      this.myprojectControls.addProfileDetails.reset();
      this.myprojectControls.addProfileDetails.enable();
    }
    CreateUserProfile() {
      this.myprojectFlags.newuserProfileDetails = true;
    }
    UpdateUserProfile() {
      this.developmentservice.createnewprofileDetails(this.myuserProfile.userAuthenObj.uid, this.myprojectControls.addProfileDetails.value).then(success => {
        this.myprojectFlags.newuserProfileDetails = false;
      });
    }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}