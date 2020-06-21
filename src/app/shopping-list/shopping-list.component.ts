import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() public items: [];
  @Output() public itemAdded: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(itemId) {
    this.itemAdded.emit(itemId);
  }
}
