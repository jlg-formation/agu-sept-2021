import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles!: Article[];

  constructor() {
    this.load();
  }

  addArticle(a: Article) {
    this.articles.push(a);
    this.save();
  }

  load() {
    const str = localStorage.getItem('articles');
    if (!str) {
      this.articles = [
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
      return;
    }
    this.articles = JSON.parse(str);
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
