import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAnimalPage } from './info-animal.page';

describe('InfoAnimalPage', () => {
  let component: InfoAnimalPage;
  let fixture: ComponentFixture<InfoAnimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAnimalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
