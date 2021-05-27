import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part10aComponent } from './part10a.component';

describe('Part10aComponent', () => {
  let component: Part10aComponent;
  let fixture: ComponentFixture<Part10aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part10aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part10aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
