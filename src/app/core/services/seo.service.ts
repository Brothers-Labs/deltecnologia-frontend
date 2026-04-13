import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { COMPANY_INFO } from '../constants/company.constants';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updatePage(config: { title: string; description: string }): void {
    const fullTitle = `${config.title} | ${COMPANY_INFO.shortName}`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
  }
}
