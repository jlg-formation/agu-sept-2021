import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(protected http: HttpClient) {
    super();
    console.log('http service');
    this.refresh();
  }

  refresh() {
    this.http
      .get<Article[]>('http://localhost:3000/api/articles')
      .pipe
      // map((articles) => {
      //   articles.forEach((a) => (a.name = a.name.toUpperCase()));
      //   return articles;
      // })
      ()
      .subscribe({
        next: (articles) => {
          console.log('articles: ', articles);
          this.articles = articles;
          this.save();
        },
        complete: () => {
          console.log('complete');
        },
        error: (err) => {
          console.log('err: ', err);
        },
      });
  }
}
