import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpArticleService } from './http-article.service';
import { Article } from '../interfaces/article';
import { a1 } from 'src/test/data';

const url = '/api/articles';

describe('HttpArticleService', () => {
  let http: HttpTestingController;
  let service: HttpArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpArticleService);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  it('should add an article', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);

    service.addArticle(a1);

    const req2 = http.expectOne(url);
    expect(req2.request.method).toEqual('POST');
    req2.flush({});

    const req3 = http.expectOne(url);
    expect(req3.request.method).toEqual('GET');
    req3.flush([]);

    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    service.remove(new Set([a1]));
    const req2 = http.expectOne(url);
    expect(req2.request.method).toEqual('DELETE');
    req2.flush({});

    const req3 = http.expectOne(url);
    expect(req3.request.method).toEqual('GET');
    req3.flush([]);
    expect(service).toBeTruthy();
  });

  it('should not refresh', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 500, statusText: 'plante' });
    expect(service).toBeTruthy();
  });

  it('should add in error', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);

    service.addArticle(a1);

    const req2 = http.expectOne(url);
    expect(req2.request.method).toEqual('POST');
    req2.flush('', { status: 500, statusText: 'plante' });

    expect(service).toBeTruthy();
  });

  it('should remove in error', () => {
    const req = http.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    service.remove(new Set([a1]));
    const req2 = http.expectOne(url);
    expect(req2.request.method).toEqual('DELETE');
    req2.flush('', { status: 500, statusText: 'plante' });
    expect(service).toBeTruthy();
  });
});
