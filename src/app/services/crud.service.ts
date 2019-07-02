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

  public serverURL = 'https://id3qhiohec.execute-api.us-east-1.amazonaws.com/dev/products';
  public proxyURL = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.proxyURL + this.serverURL);
  }

  getOneBike(id: string) {
    return this.http.get(this.proxyURL + this.serverURL + '/' + id);
  }

  saveOneProduct(product) {
    const body = JSON.stringify(product);
    return this.http.post(this.proxyURL + this.serverURL, body, httpOptions);
  }

  deleteOneProduct(id: string) {
    return this.http.delete(this.proxyURL + this.serverURL + '/' + id);
  }

}
