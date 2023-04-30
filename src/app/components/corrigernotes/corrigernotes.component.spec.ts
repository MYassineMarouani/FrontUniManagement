import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrigernotesComponent } from './corrigernotes.component';

describe('CorrigernotesComponent', () => {
  let component: CorrigernotesComponent;
  let fixture: ComponentFixture<CorrigernotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrigernotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrigernotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
