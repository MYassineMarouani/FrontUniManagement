import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposercoursComponent } from './deposercours.component';

describe('DeposercoursComponent', () => {
  let component: DeposercoursComponent;
  let fixture: ComponentFixture<DeposercoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeposercoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposercoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
