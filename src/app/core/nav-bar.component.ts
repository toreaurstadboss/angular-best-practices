import { Component } from "@angular/core";

import { UserRepositoryService } from "../services/user-repository.services";

@Component({
  selector: "wb-nav-bar",
  styleUrls: [`nav-bar.component.css`],
  templateUrl: "./nav-bar.component.html"
})
export class NavBarComponent {
  constructor(private dataRepository: UserRepositoryService) {}

  get currentUser() {
    return this.dataRepository.currentUser;
  }

  handleSignOut() {
    this.dataRepository.currentUser = null;
  }
}
