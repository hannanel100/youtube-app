import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAreaComponent } from './user-area/user-area.component';



const routes: Routes = [
  { path: 'userArea', component: UserAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
