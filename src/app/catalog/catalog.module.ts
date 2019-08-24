import { NgModule } from '@angular/core';
import { CatalogRepositoryService } from './catalog-repository.service';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FilterClassesService } from './filter-classes.service';

@NgModule({
  imports: [ SharedModule, RouterModule ],
  declarations: [ CatalogComponent   ],
  exports: [   ],
  providers: [ CatalogRepositoryService, FilterClassesService ]
})
export class CatalogModule {

}
