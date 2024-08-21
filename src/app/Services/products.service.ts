import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsList: Iproduct[];

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'Odense 8-Seater Top Dining Table',
        price: 21500,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Engineered Wood',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        quantity: 1,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',

        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Material: 'Metal',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Material: 'Upholstered Seating',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'Wood',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'MDF',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Material: 'wood',
        details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo fugit tenetur soluta enim maxime amet labore ex! Repellat, itaque facere. Possimus necessitatibus expedita distinctio? Totam, velit nobis. Quam, dignissimos nobis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quisquam, dolores voluptate corporis dolore laboriosam repellat voluptatibus quo aliquam inventore, doloremque nisi libero, distinctio corrupti itaque quia ipsa provident. Magni.'
      },
    ];
   }
   getAllProducts(){
    return this.productsList;
   }
   performFilter(filtervalue: string): Iproduct[] {
    filtervalue = filtervalue.toLowerCase();
    return this.productsList.filter((prd: Iproduct) =>
      prd.name.toLowerCase().includes(filtervalue)
    );
  }

  getPrdById(prdid:number):Iproduct|undefined{
    return this.productsList.find(prd=>prd.id==prdid);

  }
}
