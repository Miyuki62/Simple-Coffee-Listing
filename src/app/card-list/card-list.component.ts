import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card } from '../models/card';
import coffeeData from '../../assets/data/data.json';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  mycards: Card[] = [];

  ngOnInit(): void {
    console.log(coffeeData);
    this.mycards = coffeeData.map(
      (data: any) =>
        new Card(
          data.picture,
          data.name,
          data.rating,
          data.pricing,
          data.votes,
          data.available,
          data.popular
        )
    );
  }
}
