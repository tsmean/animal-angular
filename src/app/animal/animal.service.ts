import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Animal } from './animal';


import { ResourceService } from '@tsmean/resource/resource.service';
import {Http} from '@angular/http';

@Injectable()
export class AnimalService {

  constructor(
      private resourceService: ResourceService
  ) { }

  private get resourceName (): string {
    return 'animals';
  }

  getAnimals(): Observable<Animal[]> {
    return this.resourceService.getResources(this.resourceName);
  }

  createAnimal(animal: Animal): Observable<Animal> {
    const animalObs = this.resourceService.createResource(animal, this.resourceName);
    return animalObs;
  }

  deleteAnimal(animalId: string): Observable<Animal> {
    return this.resourceService.deleteResource(animalId, this.resourceName);
  }

  updateAnimal(animal: Animal): Observable<Animal> {
    return this.resourceService.updateResource(animal, this.resourceName);
  }

}
