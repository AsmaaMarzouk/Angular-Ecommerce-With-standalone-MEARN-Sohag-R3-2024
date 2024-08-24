import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsWithApiService {

  url:string=`${environment.baseURL}/Products`
  constructor(private httpclient: HttpClient) {}

  // getall
  getAllProducts(): Observable<Iproduct[]> {
    // return this.httpclient.get<Iproduct[]>('http://localhost:3000/Products');
    return this.httpclient.get<Iproduct[]>(this.url);
  }

  // by id //url param
  getProductByID(PrdID: string): Observable<Iproduct> {
    // return this.httpclient.get<Iproduct>(
    //   `http://localhost:3000/Products/${PrdID}`
    // );
    return this.httpclient.get<Iproduct>(
      `${this.url}/${PrdID}`
    );
  }

  // query string

  searchProductsMaterial(mat:string): Observable<Iproduct[]> {
    // return this.httpclient.get<Iproduct[]>(`http://localhost:3000/Products?Material=${mat}`)
    return this.httpclient.get<Iproduct[]>(`${this.url}?Material=${mat}`)
  }
}
