import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutoPage } from './auto.page';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {
    path: '',
    component: AutoPage
  },
  {
    path: ':id',
    component: DetallesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AutoPage, DetallesComponent]
})
export class AutoPageModule {}
