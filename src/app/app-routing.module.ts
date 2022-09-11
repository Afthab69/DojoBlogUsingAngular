import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyformComponent } from './bodyform/bodyform.component';
import { BodyhomeComponent } from './bodyhome/bodyhome.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: BodyhomeComponent },
  { path: 'add', component: BodyformComponent },
  { path: 'edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
