import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  p: product | undefined;

  constructor(private sproduct: ProductService) {
    sproduct.findById(1).subscribe({
      next: (p) => this.p = p,
      error: (err) => console.error(err),
      complete: () => console.info("completed")
    })
  }
}
