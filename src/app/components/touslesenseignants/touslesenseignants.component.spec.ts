import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesenseignantsComponent } from './touslesenseignants.component';

describe('TouslesenseignantsComponent', () => {
  let component: TouslesenseignantsComponent;
  let fixture: ComponentFixture<TouslesenseignantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesenseignantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesenseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
