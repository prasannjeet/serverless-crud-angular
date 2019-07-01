import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../services/crud.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-iface',
  templateUrl: './iface.component.html',
  styleUrls: ['./iface.component.scss']
})
export class IfaceComponent implements OnInit {

  public products;
  public init;
  initForm: FormGroup;
  deleteForm: FormGroup;
  newProductName: string;
  newProductPrice: string;
  validMessage: string;
  validMessageDelete: string;
  productID: string;

  constructor(private crudService: CrudService) {
  }

  ngOnInit() {
    this.init = true;
    this.initForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
    this.deleteForm = new FormGroup({
      id: new FormControl('', Validators.required)
    });
    this.newProductName = '';
    this.newProductPrice = '';
  }

  submitInitForm() {
    if (this.initForm.valid) {
      this.validMessage = 'Your product has been added. Thank you!';
      this.crudService.saveOneProduct(this.initForm.value).subscribe(
        data => {
          this.initForm.reset();
          this.validMessage = '';
          return true;
        }, error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }
  }


  submitDeleteForm() {
    if (this.deleteForm.valid) {
      this.validMessageDelete = 'Your product has been deleted. Thank you!';
      this.productID = this.deleteForm.get('id').value.trim();
      this.crudService.deleteOneProduct(this.productID).subscribe(
        data => {
          this.deleteForm.reset();
          this.validMessageDelete = '';
          return true;
        }, error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessageDelete = 'Please fill out the form before submitting!';
    }
  }


  getProducts() {
    this.init = false;
    this.crudService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      error1 => console.error(error1),
      () => console.log('products loaded')
    );
  }

  clickGetProducts() {
    this.getProducts();
  }

}
