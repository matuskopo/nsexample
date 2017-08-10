import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import { UserService } from "./shared/user/user.service";
import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

@Component({
  selector: "my-app",
  // providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class AppComponent {
  user: User;
  isLoggingIn = true;

  // constructor(private userService: UserService, public afAuth: AngularFireAuth) {
  constructor(afAuth: AngularFireAuth) {
    this.user = new User();

    // afAuth.auth.onAuthStateChanged(function(user) {
    //   if (user) {
    //     // User is signed in.
    //     var displayName = user.displayName;
    //     var email = user.email;
    //     var emailVerified = user.emailVerified;
    //     var photoURL = user.photoURL;
    //     var isAnonymous = user.isAnonymous;
    //     var uid = user.uid;
    //     var providerData = user.providerData;
        
    //     console.log('logged in');
    //   } else {
    //     // User is signed out.
    //     console.log('NOT logged in');
    //   }
    // });
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    // TODO: Define
  }
  
  signUp() {
    // this.userService.register(this.user);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}