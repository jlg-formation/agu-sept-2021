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
      this.articles = [];
      return;
    }
    this.articles = JSON.parse(str);
  }

  remove(selectedArticles: Set<Article>) {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
  }

  save() {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }
}
