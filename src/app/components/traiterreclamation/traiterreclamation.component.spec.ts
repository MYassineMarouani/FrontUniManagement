import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterreclamationComponent } from './traiterreclamation.component';

describe('TraiterreclamationComponent', () => {
  let component: TraiterreclamationComponent;
  let fixture: ComponentFixture<TraiterreclamationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiterreclamationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterreclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
