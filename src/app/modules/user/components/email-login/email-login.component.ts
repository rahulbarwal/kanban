import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kanban-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {

  form: FormGroup;
  type: 'login' | 'signup' | 'reset' = 'signup';
  loading = false;
  serverMessage: string;

  constructor(private auth: Auth, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', []]
    });
  }

  changeType(val: 'login' | 'signup' | 'reset') {
    this.type = val;
  }

  get isLogin() {
    return this.type === 'login';
  }
  get isSignup() {
    return this.type === 'signup';
  }
  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }
  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password?.value === this.passwordConfirm?.value;
    }
  }

  async onSubmit() {
    this.loading = true;
    const email = this.email?.value;
    const password = this.password?.value;
    const passwordConfirm = this.passwordConfirm?.value;
    try {
      if (this.isLogin) {
        await signInWithEmailAndPassword(this.auth, email, password);
      } else if (this.isSignup) {
        await createUserWithEmailAndPassword(this.auth, email, password);
      } else if (this.isPasswordReset) {
        await sendPasswordResetEmail(this.auth, email);
        this.serverMessage = 'Check your email.'
      }

    } catch (error) {

    }
  }
}
