import { RouterModule, Routes } from '@angular/router';

// import files
import { MainViewComponent } from './pages/main-view/main-view.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: MainViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
