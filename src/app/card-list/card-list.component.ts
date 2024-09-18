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

  allproducts() {
    const soldOutCards = document.getElementsByClassName('soldout');
    const All_Products_button = document.getElementById('All_Products_button');
    const Available_Now_button = document.getElementById(
      'Available_Now_button'
    );

    Array.from(soldOutCards).forEach((card: Element) => {
      (card as HTMLElement).style.display = 'block';
    });

    if (All_Products_button) {
      All_Products_button.style.backgroundColor = '#6f757c';
    }

    if (Available_Now_button) {
      Available_Now_button.style.backgroundColor = 'transparent';
    }
  }
  available() {
    const soldOutCards = document.getElementsByClassName('soldout');
    const All_Products_button = document.getElementById('All_Products_button');
    const Available_Now_button = document.getElementById(
      'Available_Now_button'
    );

    Array.from(soldOutCards).forEach((card: Element) => {
      (card as HTMLElement).style.display = 'none';
    });

    if (All_Products_button) {
      All_Products_button.style.backgroundColor = 'transparent';
    }

    if (Available_Now_button) {
      Available_Now_button.style.backgroundColor = '#6f757c';
    }
  }

  ngOnInit(): void {
    this.mycards = coffeeData.map(
      (data: any) =>
        new Card(
          data.image,
          data.name,
          data.price,
          data.rating,
          data.votes,
          data.popular,
          data.available
        )
    );
  }
}
