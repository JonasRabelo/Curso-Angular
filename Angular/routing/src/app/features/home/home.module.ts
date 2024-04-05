import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component'; // Certifique-se de que o caminho está correto
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
