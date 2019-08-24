import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { appRoutes } from "./routes";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";
import { LoadingComponent } from "./components/loading-spinner.component";
import { UserRepositoryService } from "./services/user-repository.services";
import { AccountMenuComponent } from "./account-menu.component";
import { CatalogRepositoryService } from "./catalog/catalog-repository.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingComponent,
    AccountMenuComponent
  ],
  providers: [UserRepositoryService, CatalogRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
