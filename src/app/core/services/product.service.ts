import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../../shared/models/product.model';
import { API_CONFIGS } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client: HttpClient) { }

  findAll = (): Observable<product[]> => this.client.get<product[]>(`${API_CONFIGS.baseUrl}/products`);

  findById = (id: number): Observable<product> => this.client.get<product>(`${API_CONFIGS.baseUrl}/products/${id}`);

  save = (product: product): Observable<product> => this.client.post<product>(`${API_CONFIGS.baseUrl}/products`, product);

  update = (product: product): Observable<product> => this.client.put<product>(`${API_CONFIGS.baseUrl}/products`, product);

  delete = (id: number): Observable<void> => this.client.delete<void>(`${API_CONFIGS.baseUrl}/${id}`);
  
}
