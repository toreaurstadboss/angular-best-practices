import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { appRoutes } from "./routes";
import { AppComponent } from "./app.component";
import { UserRepositoryService } from "./services/user-repository.services";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { CatalogModule } from "./catalog/catalog.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CatalogModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [UserRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
