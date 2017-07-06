import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateAnimalComponent} from './create-animal/create-animal.component';
import {DeleteAnimalComponent} from './delete-animal/delete-animal.component';
import {DisplayAnimalComponent} from './display-animal/display-animal.component';
import {DisplayAnimalListComponent} from './display-animal-list/display-animal-list.component';
import {AnimalService} from './animal.service';
import {AnimalWrapperComponent} from './animal-wrapper/animal-wrapper.component';
import {FormsModule} from '@angular/forms';

import {
  MdInputModule, MdButtonModule, MdCardModule, MdToolbarModule, MdMenuModule,
  MdIconModule
} from '@angular/material';
import {AnimalDashboardListStore} from './animal-dashboard-list.store';
import {AnimalStoreService} from './animal.store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule
  ],
  declarations: [
    CreateAnimalComponent,
    DeleteAnimalComponent,
    DisplayAnimalComponent,
    DisplayAnimalListComponent,
    AnimalWrapperComponent,

  ],
  exports: [
    CreateAnimalComponent,
    DeleteAnimalComponent,
    DisplayAnimalListComponent,
    DisplayAnimalComponent,
    AnimalWrapperComponent
  ]
})
export class AnimalModule {

  static forRoot() {
    return {
      ngModule: AnimalModule,
      providers: [
        AnimalDashboardListStore,
        AnimalStoreService,
        AnimalService
      ]
    };
  }

}
