import { Directive, HostListener } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { Auth, signInWithPopup } from '@angular/fire/auth';
@Directive({
  selector: '[kanbanSignOut]'
})
export class SignOutDirective {

  @HostListener('click')
  onclick() {
    this.auth.signOut();
  }

  constructor(public auth: Auth) { }
}
