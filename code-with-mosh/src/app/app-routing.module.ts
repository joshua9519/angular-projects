import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { Part4Component } from './part4/part4.component';
import { Part5Component } from './part5/part5.component';
import { Part6Component } from './part6/part6.component';
import { Part7Component } from './part7/part7.component';
import { Part8Component } from './part8/part8.component';
import { Part9aComponent } from './part9a/part9a.component';
import { Part9bComponent } from './part9b/part9b.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'part1', component: Part1Component },
  { path: 'part2', component: Part2Component },
  { path: 'part3', component: Part3Component },
  { path: 'part4', component: Part4Component },
  { path: 'part5', component: Part5Component },
  { path: 'part6', component: Part6Component },
  { path: 'part7', component: Part7Component },
  { path: 'part8', component: Part8Component },
  { path: 'part9a', component: Part9aComponent},
  { path: 'part9b', component: Part9bComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
