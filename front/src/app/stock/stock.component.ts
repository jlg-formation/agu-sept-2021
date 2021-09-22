import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
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

  ngOnInit(): void {}
}
