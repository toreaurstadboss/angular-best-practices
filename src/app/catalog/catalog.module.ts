import { NgModule } from '@angular/core';
import { CatalogRepositoryService } from './catalog-repository.service';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FilterClassesService } from './filter-classes.service';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [ SharedModule, RouterModule ],
  declarations: [ CatalogComponent, OrderByPipe  ],
  exports: [   ],
  providers: [ CatalogRepositoryService, FilterClassesService ]
})
export class CatalogModule {

}
