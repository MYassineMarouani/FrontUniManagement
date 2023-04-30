import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantdashboardComponent } from './enseignantdashboard.component';

describe('EnseignantdashboardComponent', () => {
  let component: EnseignantdashboardComponent;
  let fixture: ComponentFixture<EnseignantdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
