import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisienotesComponent } from './saisienotes.component';

describe('SaisienotesComponent', () => {
  let component: SaisienotesComponent;
  let fixture: ComponentFixture<SaisienotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisienotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisienotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
