import { Directive, HostListener } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { Auth, signInWithPopup } from '@angular/fire/auth';

@Directive({
  selector: '[kanbanGoogleSignIn]'
})
export class GoogleSignInDirective {

  @HostListener('click')
  onclick() {
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  constructor(public auth: Auth) { }

}
