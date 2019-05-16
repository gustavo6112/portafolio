import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes = [
  {path:'inicio',component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id',component:ItemComponent},//poniendo un parametro por el item
  {path:'search/:valor',component:SearchComponent},//poniendo un parametro por el item
  {path:'**',pathMatch:'full',redirectTo:'inicio'}
];

@NgModule({
  //modificando el hash para que lea githup
  imports: [RouterModule.forRoot(app_routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
