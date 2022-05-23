import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlacementComponent } from './display-placement.component';

describe('DisplayPlacementComponent', () => {
  let component: DisplayPlacementComponent;
  let fixture: ComponentFixture<DisplayPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPlacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
