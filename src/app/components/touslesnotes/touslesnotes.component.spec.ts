import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesnotesComponent } from './touslesnotes.component';

describe('TouslesnotesComponent', () => {
  let component: TouslesnotesComponent;
  let fixture: ComponentFixture<TouslesnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
