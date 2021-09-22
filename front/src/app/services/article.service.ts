import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    {
      name: 'Tournevis',
      price: 2.99,
      qty: 120,
    },
    {
      name: 'Marteau',
      price: 7.2,
      qty: 10,
    },
    {
      name: 'Perceuse',
      price: 52.1,
      qty: 6,
    },
    {
      name: 'Pelle',
      price: 7.8,
      qty: 23,
    },
  ];

  constructor() {}

  addArticle(a: Article) {
    this.articles.push(a);
  }
}
