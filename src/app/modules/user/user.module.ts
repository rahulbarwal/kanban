import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { GoogleSignInDirective } from './directives/google-sign-in.directive';
import { UserRoutingModule } from './user-routing.module';
import { SignOutDirective } from './directives/sign-out.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailLoginComponent } from './components/email-login/email-login.component';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    LoginPageComponent,
    GoogleSignInDirective,
    SignOutDirective,
    EmailLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule,
  ],
  providers: [AuthGuard]
})
export class UserModule { }
