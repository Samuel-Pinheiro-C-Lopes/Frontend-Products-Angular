import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    ProductService
  ],
  exports: [
    ProductComponent
  ]
})
export class CoreModule { }
