import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part10bComponent } from './part10b.component';

describe('Part10bComponent', () => {
  let component: Part10bComponent;
  let fixture: ComponentFixture<Part10bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part10bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Part10bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
