import {Component, Input} from '@angular/core';

@Component({
  selector: 'spacer',
  template: `<div [style.height]="height + 'px'"></div>`
})
export class SpacerComponent {

  @Input()
  height: number;

}
