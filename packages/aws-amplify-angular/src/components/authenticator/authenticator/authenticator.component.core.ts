import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AmplifyService, AuthState } from '../../../providers';

const template = `

  <div class="amplify-authenticator">

    <amplify-auth-sign-in-core
      *ngIf="!shouldHide('SignIn')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-sign-in-core>

    <amplify-auth-sign-up-core
      *ngIf="!shouldHide('SignUp')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-sign-up-core>

    <amplify-auth-confirm-sign-up-core
      *ngIf="!shouldHide('ConfirmSignUp')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-confirm-sign-up-core>

    <amplify-auth-confirm-sign-in-core
      *ngIf="!shouldHide('ConfirmSignIn')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-confirm-sign-in-core>

    <amplify-auth-forgot-password-core
      *ngIf="!shouldHide('ForgotPassword')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-forgot-password-core>

    <amplify-auth-greetings-core
    *ngIf="!shouldHide('Greetings')"
    [authState]="authState"
    ></amplify-auth-greetings-core>

     <amplify-auth-require-new-password-core
      *ngIf="!shouldHide('RequireNewPassword')"
      [authState]="authState"
      [hide]="hide"
    ></amplify-auth-require-new-password-core>
  </div>
`;


@Component({
  selector: 'amplify-authenticator-core',
  template
})
export class AuthenticatorComponentCore {
  authState: AuthState = {
    state: 'loading',
    user: null
  };

  amplifyService: AmplifyService;

  constructor(amplifyService: AmplifyService) {
    this.amplifyService = amplifyService;
    this.subscribe();
  }

  @Input()
  hide: string[] = [];

  @Input()
  set data(data: any) {
    this.hide = data.hide ? data.hide : this.hide;
  }

  subscribe() {
    this.amplifyService.authStateChange$
      .subscribe(state => {
        this.authState = state;
      });
  }

  shouldHide(comp) {
    return this.hide.filter(item => item === comp)
      .length > 0;
  }
}
