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

  showBtn: boolean;

  constructor(private service: ProductService) {
    this.products = [];
    this.product = new product();
    this.sub = new Subscription();
    this.showBtn = false;
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

  update = (product: product): Subscription => this.service.update(product).subscribe({
    next: () => this.findAll(),
    error: (err) => console.error(err)
  })



  delete = (id: number): Subscription => this.service.delete(id).subscribe({
    next: () => this.findAll(),
    error: (err) => console.error(err)
  })

  updateActual = (product: product):void => {
    this.product = product;
    this.showBtn = true;
  }

  clearSub = (): void => this.sub.unsubscribe();

}
