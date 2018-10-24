import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Item} from "../../model/Item";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractItemsService {

  constructor() { }

  abstract getItems():Observable<Item[]>;

}

