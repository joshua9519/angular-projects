import { ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classyName %> } from './<%= name %>.component';

describe('<%= classyName %>', () => {
  let component: <%= classyName %>;
  let fixture: ComponentFixture<<%= classyName %>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ <%= classyName %> ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= classyName %>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
