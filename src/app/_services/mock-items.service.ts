import { Injectable } from '@angular/core';
import { AbstractItemsService } from './abstract.service';
import { Observable, observable } from 'rxjs';
import {Item} from "../../model/Item";

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService{
  items: Item[];
  constructor() { 
    super();
    this.items=[
      new Item("comprar carne"),
      new Item("comprar verdura"),
      new Item("comprar carbón")
    ]
  }

  getItems():Observable<Item[]>{
    return new Observable((observable)=>{
      observable.next(this.items);
      observable.complete();
    });
  }

  addItem(item:Item) :Observable<Item[]>{
    return new Observable((observable)=>{
    this.items.push(item); 
    observable.next(this.items);
    observable.complete();
    });
  }

  remove(item:Item) :Observable<Item[]>{
    return new Observable((observable)=>{
    this.items = this.items.filter(it=> it !== item);
    observable.next(this.items);
    observable.complete();
    });
  }

}
