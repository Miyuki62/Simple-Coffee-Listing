export class Card {
  image: string;
  name: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;

  constructor(
    image: string,
    name: string,
    price: string,
    rating: number,
    votes: number,
    popular: boolean,
    available: boolean
  ) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.votes = votes;
    this.popular = popular;
    this.available = available;
  }
}
