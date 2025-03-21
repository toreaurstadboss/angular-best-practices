import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserRepositoryService } from "../services/user-repository.services";

@Component({
  styleUrls: ["./register.css"],
  templateUrl: "./register.component.html"
})
export class RegisterComponent {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  saving = false;

  constructor(
    private router: Router,
    private dataRepository: UserRepositoryService
  ) {}

  ngOnInit() {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", Validators.required);
    this.password = new FormControl("", Validators.required);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  registerUser(user) {
    this.saving = true;
    this.saveAndRedirect(user);
  }

  cancel() {
    this.router.navigate(["/"]);
  }

  private saveAndRedirect(user: any) {
    this.dataRepository
      .saveUser(user)
      .subscribe(
        null,
        () => (this.saving = false),
        () => this.router.navigate(["/catalog"])
      );
  }
}
