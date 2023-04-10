import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OneWayBindComponent } from './one-way-bind/one-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';

const routes: Routes = [
  { path: 'one-way-bind', component: OneWayBindComponent },
  { path: 'event-bind', component: EventBindComponent },
  { path: 'two-way-bind', component: TwoWayBindComponent }
]

@NgModule({
  declarations: [
    OneWayBindComponent,
    EventBindComponent,
    TwoWayBindComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class BindExamplesModule { }
