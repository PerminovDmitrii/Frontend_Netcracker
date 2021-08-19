import { Injectable } from '@angular/core';
import { DropDownMenuItem } from './models/catalog';

interface ById {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  trackByFn<T extends ById>(index: number, elem: T): number {
    return elem.id;
  }
}
