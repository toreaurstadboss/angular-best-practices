import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from 'app/components/loading-spinner.component';

@NgModule({
  imports: [ CommonModule, RouterModule, FormsModule],
  declarations: [ LoadingSpinnerComponent  ],
  exports: [ LoadingSpinnerComponent, CommonModule ],
  providers: []
})
export class SharedModule {

}
