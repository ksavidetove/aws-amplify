import { Component, Input, ViewEncapsulation, Injector, ElementRef } from '@angular/core';

import { AmplifyService, AuthState } from '../../../providers';
import { AuthenticatorComponentCore } from './authenticator.component.core';

const template = `
<div class="amplify-authenticator amplify-authenticator-ionic ">

  <div>
    <amplify-auth-sign-in-ionic [authState]="authState"></amplify-auth-sign-in-ionic>
  </div>
  <div>
    <amplify-auth-sign-up-ionic
      *ngIf="!shouldHide('SignUp')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-sign-up-ionic>
  </div>
  <div>
    <amplify-auth-confirm-sign-up-ionic
      *ngIf="!shouldHide('ConfirmSignUp')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-confirm-sign-up-ionic>
  </div>
  <div>
    <amplify-auth-confirm-sign-in-ionic
      *ngIf="!shouldHide('ConfirmSignIn')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-confirm-sign-in-ionic>
  </div>
  <div>
    <amplify-auth-forgot-password-ionic
      *ngIf="!shouldHide('ForgotPassword')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-forgot-password-ionic>
  </div>
  <div>
    <amplify-auth-greetings-ionic
      *ngIf="!shouldHide('Greetings') && authState.state === 'signedIn'"
      [authState]="authState"
    ></amplify-auth-greetings-ionic>
  </div>
  <div>
    <amplify-auth-require-new-password-ionic
      *ngIf="!shouldHide('RequireNewPassword')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-require-new-password-ionic>
  </div>
`

@Component({
  selector: 'amplify-authenticator-ionic',
  template: template
})
export class AuthenticatorIonicComponent extends AuthenticatorComponentCore {

  amplifyService: AmplifyService;

  constructor(amplifyService: AmplifyService) {
    super(amplifyService);
    
  }
}
