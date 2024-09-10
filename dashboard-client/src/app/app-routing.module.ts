import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentsAlertsComponent } from './components-alerts/components-alerts.component';
import { ComponentsAccordionComponent } from './components-accordion/components-accordion.component';
import { ComponentsBadgesComponent } from './components-badges/components-badges.component';
import { ComponentsBreadcrumbsComponent } from './components-breadcrumbs/components-breadcrumbs.component';
import { ComponentsButtonsComponent } from './components-buttons/components-buttons.component';
import { ComponentsCardsComponent } from './components-cards/components-cards.component';
import { ComponentsCarouselComponent } from './components-carousel/components-carousel.component';
import { ComponentsListGroupComponent } from './components-list-group/components-list-group.component';
import { ComponentsModalComponent } from './components-modal/components-modal.component';
import { ComponentsTabsComponent } from './components-tabs/components-tabs.component';
import { TablesGeneralComponent } from './tables-general/tables-general.component';
import { TablesDataComponent } from './tables-data/tables-data.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { LoginComponent } from './login/login.component';
import { ComponentsPropertiesComponent } from './components-properties/components-properties.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  //sidebar - components
  {path:'components-alerts' , component:ComponentsAlertsComponent},
  {path:'components-accordion' ,component:ComponentsAccordionComponent},
  {path:'components-badges' ,component:ComponentsBadgesComponent},
  {path:'components-breadcrumbs' , component:ComponentsBreadcrumbsComponent},
  {path:'components-buttons' , component:ComponentsButtonsComponent},
  {path:'components-cards', component:ComponentsCardsComponent},
  {path:'components-carousel' , component:ComponentsCarouselComponent},
  {path:'components-list-group' , component:ComponentsListGroupComponent},
  {path:'components-modal',component:ComponentsModalComponent},
  {path:'components-tabs' ,component:ComponentsTabsComponent},
  {path:'components-properties' ,component:ComponentsPropertiesComponent},

  //sibebar-table
  {path:'tables-general' , component:TablesGeneralComponent},
  {path:'tables-data' ,component:TablesDataComponent},

  //user-profile
  {path:'users-profile' , component:UsersProfileComponent},

    //login
    {path:'login' , component:LoginComponent},
  {path:'**' , component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
