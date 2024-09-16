export class Card {
  picture: string;
  name: string;
  pricing: number;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;

  constructor(
    picture: string,
    name: string,
    pricing: number,
    rating: number,
    votes: number,
    popular: boolean,
    available: boolean
  ) {
    this.picture = picture;
    this.name = name;
    this.pricing = pricing;
    this.rating = rating;
    this.votes = votes;
    this.popular = popular;
    this.available = available;
  }
}
