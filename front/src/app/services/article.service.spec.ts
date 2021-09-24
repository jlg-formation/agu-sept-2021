import { TestBed } from '@angular/core/testing';
import { a1 } from 'src/test/data';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created with empty localstorage', () => {
    localStorage.clear();
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });

  it('should be created with not empty localstorage', () => {
    localStorage.clear();
    localStorage.setItem('articles', JSON.stringify([a1]));
    service = TestBed.inject(ArticleService);
    expect(service).toBeTruthy();
  });
  it('should remove', () => {
    localStorage.clear();
    localStorage.setItem('articles', JSON.stringify([a1]));
    service = TestBed.inject(ArticleService);
    service.remove(new Set([a1]));
    expect(service).toBeTruthy();
  });
});
