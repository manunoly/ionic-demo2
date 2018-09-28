import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPage } from './auto.page';

describe('AutoPage', () => {
  let component: AutoPage;
  let fixture: ComponentFixture<AutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
