import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part9bComponent } from './part9b.component';

describe('Part9bComponent', () => {
  let component: Part9bComponent;
  let fixture: ComponentFixture<Part9bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part9bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part9bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
