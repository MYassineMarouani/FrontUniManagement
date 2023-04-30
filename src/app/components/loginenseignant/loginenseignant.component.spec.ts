import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginenseignantComponent } from './loginenseignant.component';

describe('LoginenseignantComponent', () => {
  let component: LoginenseignantComponent;
  let fixture: ComponentFixture<LoginenseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginenseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
