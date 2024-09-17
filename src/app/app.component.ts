import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { Card } from './models/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, CardListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  mycard!: Card;
  ngOnInit(): void {}
}
