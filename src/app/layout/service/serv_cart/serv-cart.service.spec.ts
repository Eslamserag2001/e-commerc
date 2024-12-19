import { TestBed } from '@angular/core/testing';

import { ServCartService } from './serv-cart.service';

describe('ServCartService', () => {
  let service: ServCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
