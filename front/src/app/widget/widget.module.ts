import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from './autofocus.directive';
import { EllipsisPipe } from './ellipsis.pipe';
import { ArticleTableComponent } from './article-table/article-table.component';

@NgModule({
  declarations: [AutofocusDirective, EllipsisPipe, ArticleTableComponent],
  imports: [CommonModule],
  exports: [AutofocusDirective, EllipsisPipe, ArticleTableComponent],
})
export class WidgetModule {}
