import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesabsencesComponent } from './touslesabsences.component';

describe('TouslesabsencesComponent', () => {
  let component: TouslesabsencesComponent;
  let fixture: ComponentFixture<TouslesabsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesabsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesabsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
