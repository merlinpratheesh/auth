
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { of, merge, fromEvent, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

export interface usrinfoDetails {
  profilename: string;
  photourl: string;
  email_saved: string;
  gender:boolean;
  areasOfInterest: string;
  skills: string;
}
export interface userProfile {
  userAuthenObj: firebase.User,//Receive User obj after login success
}
export interface projectControls {
  subsectionkeysControl?: FormControl;//1-Keys come from db and user sub-sec selection will load a doc from demo or public proj
  testcaseInfoControl?: FormControl; //Displays the selected Testcase details
  createTestcaseControl?: FormControl;//User enters a test case name
  publicprojectControl?: FormControl;//1-User selects a public project    
  PrivateprojectControl?: FormControl;//1-User selects own public project
  firstMainSecControl?: FormControl
  editMainsectionGroup?: FormGroup;// user selects a Main section key
  visibilityMainsectionGroup?: FormGroup,
  editSubsectionGroup?: FormGroup;  // user selects a Sub section key

  addProfileDetails?: FormGroup
}
export interface projectFlags
{    
    newuserCheck?: boolean;//show add or New Testcase based on number of testcases in subsection
    showPaymentpage?:boolean;//for expired user-remove it
    firstTestcaseEdit?:boolean;
    showEditTcButton?:boolean;
    homeNewProject?:boolean;
    homeDeleteProject?:boolean;
    homeCurrentProject?:boolean;
    editModifyProject?:boolean;
    editAddMainsec?:boolean;
    editDeleteMainsec?:boolean;
    editVisibility?:boolean;//visibility button
    editAddSubSec?:boolean;
    editDeleteSubsec?:boolean;
    editAddProject?:boolean;
    editDeleteProject?:boolean;
    editUpdateProject?:boolean;
    
    newuserProfileDetails?:boolean;
}

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

  constructor(public auth: AngularFireAuth, private db: AngularFirestore) { }

  async createnewprofileDetails(uid:string, newprojectinfo: any) : Promise<void>{
    await this.db.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.db.firestore.doc('Profile/' + uid).set(newprojectinfo,{merge: true}),
      ]);
      return promise;
    });
  }
}
