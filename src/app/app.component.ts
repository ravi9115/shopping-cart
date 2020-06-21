import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'veri5-assignment';
  public cartItems = [];
  public cartItemsCount = 0;
  public shoppingItems = [
    {
      "id":1,
      "name": "item1",
      "price": 175,
      "discount": 5,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    },
    {
      "id":2,
      "name": "item2",
      "price": 190,
      "discount": 7,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    },
    {
      "id":3,
      "name": "item3",
      "price": 213,
      "discount": 20,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    },
    {
      "id":4,
      "name": "item4",
      "price": 217,
      "discount": 18,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    },
    {
      "id":5,
      "name": "item5",
      "price": 319,
      "discount": 31,
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.cartItems = this.shoppingItems.map(item => {
      return {id: item.id, count: 0}
    })
  }

  public itemAdded($event) {
    let itemIndex = this.cartItems.findIndex(item => item.id == $event);
    this.cartItems[itemIndex].count += 1;
    this.cartItemsCount +=1;
  }
}
