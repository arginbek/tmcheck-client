import { TestBed, async, inject } from '@angular/core/testing';

import { MakeappointmentGuard } from './makeappointment.guard';

describe('MakeappointmentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeappointmentGuard]
    });
  });

  it('should ...', inject([MakeappointmentGuard], (guard: MakeappointmentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
