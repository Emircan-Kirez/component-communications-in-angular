import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  // @Output is used to send data from child to parent component
  @Output('output') outputValue = new EventEmitter<string>();

  click(): void {
    this.outputValue.emit('Button Clicked!');
  }
}
