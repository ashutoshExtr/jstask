import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name: string = 'iPhone 15';
  // price: number = 999;
  // color: string = 'grey';

  addToCart: number = 0;

  //using object
  product = {
    name: 'Pixel 6A',
    price: 799,
    color: 'white',
    discount: 8.8,
  }

  getdiscount(){
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  name = "John Snow";

  onNameChange(event: any){
    // this.name = 'Mark';
    //console.log(event.target.value);
    //this.name = event.target.value;
  }

  incrementValue(){
    this.addToCart++;
  }

  decrementValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
    
  }
}
