import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>(this.readArticles());

  constructor() {
    this.articles$.subscribe({
      next: (articles) => {
        localStorage.setItem('articles', JSON.stringify(articles));
      },
    });
  }

  addArticle(a: Article) {
    this.articles$.value.push(a);
    this.articles$.next(this.articles$.value);
  }

  readArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str);
  }

  remove(selectedArticles: Set<Article>) {
    const articles = this.articles$.value.filter(
      (a) => !selectedArticles.has(a)
    );
    this.articles$.next(articles);
  }
}
