import { TestBed } from '@angular/core/testing';

import { MenuAndCartService } from './menu-and-cart.service';

describe('MenuAndCartService', () => {
  let service: MenuAndCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuAndCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
