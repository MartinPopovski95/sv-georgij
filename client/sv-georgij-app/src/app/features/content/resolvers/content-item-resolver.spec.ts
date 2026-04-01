import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { contentItemResolver } from './content-item-resolver';

describe('contentItemResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => contentItemResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
