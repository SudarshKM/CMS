import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ComponentsAlertsComponent,
    ComponentsAccordionComponent,
    ComponentsBadgesComponent,
    ComponentsBreadcrumbsComponent,
    ComponentsButtonsComponent,
    ComponentsCardsComponent,
    ComponentsCarouselComponent,
    ComponentsListGroupComponent,
    ComponentsModalComponent,
    ComponentsTabsComponent,
    TablesGeneralComponent,
    TablesDataComponent,
    UsersProfileComponent,
    LoginComponent,
    ComponentsPropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
