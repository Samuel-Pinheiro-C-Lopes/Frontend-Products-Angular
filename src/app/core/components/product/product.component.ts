import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { product } from '../../../shared/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  products: product[];
  product: product;
  sub: Subscription;

  constructor(private service: ProductService) {
    this.products = [];
    this.product = new product();
    this.sub = new Subscription();
  }

  ngOnInit() {
    this.sub.add(this.findAll());
  }

  findAll = (): Subscription => this.service.findAll().subscribe({
    next: (products) => this.products = products,
    error: (err) => console.error(err)
  });

  save = (product: product): Subscription => this.service.save(product).subscribe({
    next: () => this.findAll(),
    error: (err) => console.error(err)
  });

  clearSub = (): void => this.sub.unsubscribe();

}
