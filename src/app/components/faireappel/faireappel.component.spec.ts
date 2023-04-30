import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaireappelComponent } from './faireappel.component';

describe('FaireappelComponent', () => {
  let component: FaireappelComponent;
  let fixture: ComponentFixture<FaireappelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaireappelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaireappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
