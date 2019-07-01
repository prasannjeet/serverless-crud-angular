import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get('/server');
  }

  getOneBike(id: string) {
    return this.http.get('/server/' + id);
  }

  saveOneProduct(product) {
    let body = JSON.stringify(product);
    return this.http.post('/server', body, httpOptions);
  }

  deleteOneProduct(id: string) {
    return this.http.delete('/server/' + id);
  }

}
