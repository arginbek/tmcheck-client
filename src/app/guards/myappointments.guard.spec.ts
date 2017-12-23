import { TestBed, async, inject } from '@angular/core/testing';

import { MyappointmentsGuard } from './myappointments.guard';

describe('MyappointmentsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyappointmentsGuard]
    });
  });

  it('should ...', inject([MyappointmentsGuard], (guard: MyappointmentsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
