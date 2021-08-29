import { TestBed } from '@angular/core/testing';

import { Board.DbService } from './board.db.service';

describe('Board.DbService', () => {
  let service: Board.DbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Board.DbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
