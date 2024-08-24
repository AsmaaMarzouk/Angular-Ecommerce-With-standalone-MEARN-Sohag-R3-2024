import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { ProductsWithApiService } from '../../Services/products-with-api.service';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss',
})
export class ProductsDetailsComponent implements OnInit {
  // get value of parameter from url
  productID: number = 0;
  currentProduct: Iproduct | undefined = undefined;

  // Day5
  allIdsList: number[] = [];
  currentIndex: number = 0;


  // Day6

  productsAfterSearch: Iproduct[] = [];
  // ########################
  constructor(
    private activatedroute: ActivatedRoute,
    private productservice: ProductsService,
    private router: Router,
    private location: Location,
    private productServiceWithapi: ProductsWithApiService
  ) {}
  ngOnInit(): void {
    // convert string to number => Number , parseInt ,+
    // this.productID =
    //   Number(this.activatedroute.snapshot.paramMap.get('ProductID')) || 0;
    // //  console.log(this.productID);

    // let foundPrd=this.productservice.getPrdById(this.productID);
    // // console.log(this.currentProduct);

    // if(foundPrd){
    //   this.currentProduct=foundPrd;
    // }
    // else{
    //   alert("Product not found");
    //   // this.router.navigate(['**'])
    //   this.router.navigate(['/Products'])
    // }
    // id => object of product

    // Day5
    // this.activatedroute.paramMap.subscribe((x) => {
    //   this.productID = Number(x.get('ProductID')) || 0;
    //   let foundPrd = this.productservice.getPrdById(this.productID);
    //   if (foundPrd) {
    //     this.currentProduct = foundPrd;
    //   } else {
    //     this.router.navigate(['**']);
    //   }
    // });

    // Day6
    this.activatedroute.paramMap.subscribe((x) => {
      this.productID = Number(x.get('ProductID')) || 0;

      this.productServiceWithapi
        .getProductByID(this.productID.toString())
        .subscribe({
          next: (prd) => {
            this.currentProduct = prd;
          },
          error: (err) => {
            console.log(err);
          },
        });
    });

    // ##############################################
    this.allIdsList = this.productservice.getAllPrdIDs();
    // console.log(this.allIdsList);//[1,5,15,25]
  }

  // Day5
  prevFunc() {
    this.currentIndex = this.allIdsList.indexOf(this.productID);
    // console.log(this.currentIndex);//1
    // this.allIdsList[--this.currentIndex] =>  this.allIdsList[--1]
    // this.allIdsList[--this.currentIndex] =>  this.allIdsList[0] => 1
    this.router.navigate(['/PrdDetails', this.allIdsList[--this.currentIndex]]);
  }
  nextFunc() {
    this.currentIndex = this.allIdsList.indexOf(this.productID);
    // console.log(this.currentIndex);//1
    // this.allIdsList[--this.currentIndex] =>  this.allIdsList[++1]
    // this.allIdsList[--this.currentIndex] =>  this.allIdsList[2] =>15

    this.router.navigate(['/PrdDetails', this.allIdsList[++this.currentIndex]]);
  }

  goBack() {
    // this.router.navigate(['/Products'])
    // history object
    this.location.back();
  }

  // Day6
  searchWithMat(material: string) {
    this.productServiceWithapi.searchProductsMaterial(material).subscribe({
      next: (products) => {
        // console.log(products);
        this.productsAfterSearch=products;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  // ################################
}
