import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitionConfirmComponent } from './recognition-confirm.component';

describe('RecognitionConfirmComponent', () => {
  let component: RecognitionConfirmComponent;
  let fixture: ComponentFixture<RecognitionConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecognitionConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognitionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
