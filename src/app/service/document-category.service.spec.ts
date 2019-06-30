import { TestBed } from '@angular/core/testing';

import { DocumentCategoryService } from './document-category.service';

describe('DocumentCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentCategoryService = TestBed.get(DocumentCategoryService);
    expect(service).toBeTruthy();
  });
});
