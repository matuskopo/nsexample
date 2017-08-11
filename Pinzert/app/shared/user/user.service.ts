import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
// import { AngularFireAuth } from 'angularfire2/auth';

import { User } from "./user";

@Injectable()
export class UserService {

  // constructor(private afAuth: AngularFireAuth) {

  // }

  register(user: User) {
    alert("About to register: " + user.email);
    // this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
    //   // Handle Errors here.
    //   // var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(error);
    // });
  }
}