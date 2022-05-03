import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestConfirmComponent } from './guest-confirm.component';

describe('GuestConfirmComponent', () => {
  let component: GuestConfirmComponent;
  let fixture: ComponentFixture<GuestConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
