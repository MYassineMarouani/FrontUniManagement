import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslescoursComponent } from './touslescours.component';

describe('TouslescoursComponent', () => {
  let component: TouslescoursComponent;
  let fixture: ComponentFixture<TouslescoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslescoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslescoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
