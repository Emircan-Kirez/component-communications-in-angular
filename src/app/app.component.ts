import { Component } from '@angular/core';
import { InputComponent } from "./input/input.component";
import { OutputComponent } from "./output/output.component";
import { SubscriberComponent } from "./subscriber/subscriber.component";
import { PublisherComponent } from "./publisher/publisher.component";

@Component({
  selector: 'app-root',
  imports: [InputComponent, OutputComponent, SubscriberComponent, PublisherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputValue: string = 'Button is not clicked yet';

  outputEvent(data: string) {
    this.inputValue = data;
  }
}
