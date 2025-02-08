import { Component } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-publisher',
  imports: [],
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.scss'
})
export class PublisherComponent {

  constructor(private readonly dataService: DataService) { }

  clicked() {
    this.dataService.setData('Button is clicked');
  }
}
