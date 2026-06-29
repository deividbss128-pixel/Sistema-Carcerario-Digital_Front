import { TestBed } from '@angular/core/testing';

import { Condenacao } from './condenacao';

describe('Condenacao', () => {
  let service: Condenacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Condenacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
