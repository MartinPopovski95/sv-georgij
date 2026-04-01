import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { adminPostResolver } from './admin-post-resolver';

describe('adminPostResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => adminPostResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
