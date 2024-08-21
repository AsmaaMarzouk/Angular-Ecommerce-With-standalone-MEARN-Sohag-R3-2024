import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss',
})
export class ProductsDetailsComponent implements OnInit {
  // get value of parameter from url
  productID: number = 0;
  currentProduct:Iproduct|undefined=undefined;
  constructor(
    private activatedroute: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // convert string to number => Number , parseInt ,+
    this.productID =
      Number(this.activatedroute.snapshot.paramMap.get('ProductID')) || 0;
    //  console.log(this.productID);

    let foundPrd=this.productservice.getPrdById(this.productID);
    // console.log(this.currentProduct);

    if(foundPrd){
      this.currentProduct=foundPrd;
    }
    else{
      alert("Product not found");
      // this.router.navigate(['**'])
      this.router.navigate(['/Products'])
    }


  }
}
