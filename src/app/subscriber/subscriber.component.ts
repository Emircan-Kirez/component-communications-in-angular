import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-subscriber',
  imports: [],
  templateUrl: './subscriber.component.html',
  styleUrl: './subscriber.component.scss'
})
export class SubscriberComponent {
  protected data!: string;

  constructor(private readonly dataService: DataService) { 
    this.dataService.data$.subscribe({
      next: data => this.data = data
    })
  }
  
}
