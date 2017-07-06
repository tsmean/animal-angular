import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Animal } from './animal';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AnimalDashboardListStore {

  private dashboardList = new BehaviorSubject([]);

  constructor() { }


  /**
   * Adds a resourceId to the list. If no position is provided, appends it to the end.
   */
  add (resourceId: string, index?: number): void {
    const currentValue = this.dashboardList.getValue(); // todo: check immutability
    if (index !== undefined) {
      if (index <= currentValue.length) {
        currentValue.splice(index, 0, resourceId);
        this.dashboardList.next(currentValue);
      } else {
        throw new Error('Index of bounds. Cannot add animal.');
      }
    } else {
      currentValue.push(resourceId);
      this.dashboardList.next(currentValue);
    }
  }

  set(newList: string[]): void {
    this.dashboardList.next(newList);
  }

  removeById (resourceId: string): void {
    const currentValue = this.dashboardList.getValue();
    this.dashboardList.next(currentValue.filter(id => id !== resourceId));
  }

  removeByIndex (index: number): void {
    const currentValue = this.dashboardList.getValue();
    currentValue.splice(index, 1);
    this.dashboardList.next(currentValue);
  }


  get(): Observable<string[]> {
    return this.dashboardList;
  }

  updateByIndex (index: number, newResourceId: string): void {
    const currentValue = this.dashboardList.getValue();
    if (index <= currentValue.length) {
      currentValue[index] = newResourceId;
      this.dashboardList.next(currentValue);
    } else {
      throw new Error('Index of bounds. Cannot update animal.');
    }
  }

  updateById (id: string, newResourceId: string): void {
    const currentValue = this.dashboardList.getValue();
    const newValue = currentValue.map(x => x === id ? newResourceId : x);
    this.dashboardList.next(newValue);
  }


}
