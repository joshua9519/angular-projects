import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part9aComponent } from './part9a.component';

describe('Part9aComponent', () => {
  let component: Part9aComponent;
  let fixture: ComponentFixture<Part9aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part9aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part9aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
