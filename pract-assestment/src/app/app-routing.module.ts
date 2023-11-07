import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//create lazy loading from student module
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
