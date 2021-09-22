import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public f = new FormGroup({
    name: new FormControl('tutu', [Validators.required]),
    price: new FormControl(2.3, [Validators.required]),
    qty: new FormControl(12, [Validators.required]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  public ngOnInit(): void {}

  public submit() {
    console.log('submit');
    this.articleService.addArticle(this.f.value as Article);
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
