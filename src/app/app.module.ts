import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { appRoutes } from "./routes";
import { AppComponent } from "./app.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";
import { UserRepositoryService } from "./services/user-repository.services";
import { CatalogRepositoryService } from "./catalog/catalog-repository.service";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent
  ],
  providers: [UserRepositoryService, CatalogRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
