import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";

@NgModule({
  imports: [
  ReactiveFormsModule,
  FormsModule,
  SharedModule,
  RouterModule.forChild([
    { path: 'register', component: RegisterComponent },
    { path: 'sign-in', component: SignInComponent },
  ])
  ],
  declarations: [
    RegisterComponent, SignInComponent
  ],
  exports: [],
  providers: []
})
export class UsersModule {


};
