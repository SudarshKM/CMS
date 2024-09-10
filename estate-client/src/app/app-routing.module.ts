import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AgentsComponent } from './agents/agents.component';
import { ContactComponent } from './contact/contact.component';
import { PropertiesComponent } from './properties/properties.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:'services' , component:ServicesComponent},
  {path:'agents' , component:AgentsComponent},
  {path:'contact' , component:ContactComponent},
  {path:'properties' , component:PropertiesComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:PageNotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
