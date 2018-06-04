import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { AllTasksComponent } from "./components/all-tasks/all-tasks.component";
import { HomeComponent } from "./components/home/home.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'all',
    component: AllTasksComponent
  },
  {
    path: 'add',
    component: AddTaskComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash:false})
  ]
})
export class AppRoutingModule {

  constructor() {
  }
}
