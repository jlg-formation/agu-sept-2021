import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';
import { map } from 'rxjs/operators';

const url = '/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(protected http: HttpClient) {
    super();
    console.log('http service');
    this.refresh();
  }

  addArticle(a: Article) {
    super.addArticle(a);
    this.http.post<void>(url, a).subscribe({
      next: () => {
        console.log('success');
        this.refresh();
      },
      complete: () => {
        console.log('complete');
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }

  refresh() {
    this.http
      .get<Article[]>(url)
      .pipe
      // map((articles) => {
      //   articles.forEach((a) => (a.name = a.name.toUpperCase()));
      //   return articles;
      // })
      ()
      .subscribe({
        next: (articles) => {
          console.log('articles: ', articles);
          this.articles$.next(articles);
        },
        complete: () => {
          console.log('complete');
        },
        error: (err) => {
          console.log('err: ', err);
        },
      });
  }

  remove(selectedArticles: Set<Article>) {
    super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    this.http
      .delete<void>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ids),
      })
      .subscribe({
        next: () => {
          console.log('success');
          this.refresh();
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
