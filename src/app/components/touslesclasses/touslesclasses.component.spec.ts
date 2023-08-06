import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesclassesComponent } from './touslesclasses.component';

describe('TouslesclassesComponent', () => {
  let component: TouslesclassesComponent;
  let fixture: ComponentFixture<TouslesclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
