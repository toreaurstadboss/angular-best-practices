import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { UserRepositoryService } from '../services/user-repository.services';
import { NavBarComponent } from './nav-bar.component';
import { AccountMenuComponent } from './account-menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, RouterModule, FormsModule],
  declarations: [ NavBarComponent, AccountMenuComponent ],
  exports: [NavBarComponent, AccountMenuComponent],
  providers: []
})
export class CoreModule {

}
