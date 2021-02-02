import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultComponent } from './components/result/result.component';
import {DashComponent} from './components/dash/dash.component';

const routes: Routes = [
  { path :  'register' ,  component : RegisterComponent},
  { path :  'result' ,  component : ResultComponent},
  { path :  'quiz' ,  component : QuizComponent},
  { path :  'dash' ,  component : DashComponent},
  { path :  '' ,  redirectTo : '/register' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
