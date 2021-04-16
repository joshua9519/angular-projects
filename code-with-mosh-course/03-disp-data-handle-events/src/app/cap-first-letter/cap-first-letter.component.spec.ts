import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapFirstLetterComponent } from './cap-first-letter.component';

describe('CapFirstLetterComponent', () => {
  let component: CapFirstLetterComponent;
  let fixture: ComponentFixture<CapFirstLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapFirstLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapFirstLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
