import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairereclamationComponent } from './fairereclamation.component';

describe('FairereclamationComponent', () => {
  let component: FairereclamationComponent;
  let fixture: ComponentFixture<FairereclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairereclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
