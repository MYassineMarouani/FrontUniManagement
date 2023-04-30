import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantnavbarComponent } from './enseignantnavbar.component';

describe('EnseignantnavbarComponent', () => {
  let component: EnseignantnavbarComponent;
  let fixture: ComponentFixture<EnseignantnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
