import { TestBed } from '@angular/core/testing';

import { ArticleDetailService } from './article-detail.service';

describe('ArticleDetailService', () => {
  let service: ArticleDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
