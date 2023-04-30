import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationetudiantComponent } from './creationetudiant.component';

describe('CreationetudiantComponent', () => {
  let component: CreationetudiantComponent;
  let fixture: ComponentFixture<CreationetudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationetudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
